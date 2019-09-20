<template>
  <main class="app-root-wrapper">
    <device-view :class="deviceClass" />
    <div v-if="updateExists" class="fixed z-20 inset-0 full-width my-5">
      <p class="py-3 w-4/5 text-center bg-gray-800 rounded text-white text-sm flex justify-center align-center mx-auto">
        New version of Diesel is available
        <button id="refresh-button" class="uppercase ml-1 font-bold text-blue-500" @click="refreshApp">
          <i class="fa fa-refresh" />Update
        </button>
      </p>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import {
  isIOS,
  isAndroid,
  isSafari,
  isMobileOnly,
} from 'mobile-device-detect';

const getAppVersion = () => {
  const url = `/package.json?c=${Date.now()}`;
  const headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  };

  return fetch(url, { headers }).then(response => response.json());
};

export default {
  name: 'App',
  components: {
    DeviceView: () => {
      // if (isMobileOnly) {
        return import('./views/Home.vue');
      // }
      // return import('@/views/error.vue');
    },
  },
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },
  computed: {
    deviceClass() {
      let classStr = ' ';
      classStr += isMobileOnly ? ' mobile-wrapper ' : ' desktop-wrapper';
      classStr += isSafari ? ' safari ' : '';
      classStr += isIOS ? ' ios' : '';
      classStr += isAndroid ? ' android' : '';
      classStr += this.$route.name !== 'Dashboard.Article.Detail' ? ' ios-safe-padding-top' : '';
      return classStr;
    },
  },
  mounted() {
    const handleScreenFocus = () => {
      if (isIOS && document.visibilityState === 'visible') {
        const currentVersion = global.localStorage.getItem('appVersion');

        getAppVersion()
          .then((data) => {
            if (data.version !== currentVersion) {
              global.localStorage.setItem('appVersion', data.version);
              this.showRefreshUI({});
            }
          });
      }
    };

    document.addEventListener('visibilitychange', handleScreenFocus);
    // ---
    // Custom code to let user update the app
    // when a new service worker is available
    // ---
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });

    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        // Here the actual reload of the page occurs
        window.location.reload(true);
      });
    }

    // this.$cordova.on('deviceready', () => {
    //   this.updateBiometricStatus();
    //   this.cordovaInit();
    //   this.setUpFirebase();
    //   this.checkRootedDevice();
    //   this.checkSSLPinning();
    // });
  },
  methods: {
    hideMessage() {
      this.showMessage = false;
    },
    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      window.location.reload(true);
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) return;
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage('skipWaiting');
    },
    cordovaInit() {
      if (window.universalLinks) {
        window.universalLinks.subscribe('universalLinkEvent', (eventData) => {
          // eslint-disable-next-line
          alert(`Did launch application from the link: ${JSON.stringify(eventData)}`);
        });
      }

      if (cordova.plugins.SecureStorage) {
        window.plugins.secureStorage = new cordova.plugins.SecureStorage(
          (() => {
            console.log('ohiKeychainStorage successfully initialized'); // eslint-disable-line
          }),
          ((error) => {
            console.log(`Error in initalizing ohiKeychainStorage ${error}`); // eslint-disable-line
          }),
          'ohiKeychainStorage',
        );
      }

      this.biometricLogin();
    },
    checkSSLPinning() {
      const server = 'https://ohi.genpact.com';
      const fingerprint = '9A 38 7E 25 5F C6 8C 0C 0F 24 EF 99 FA 6F E2 E9 22 EA F5 13 D5 E5 85 FE F2 A1 68 FD 92 24 00 5D';

      function successCallback(message) {   /* eslint-disable-line */
      // Message is always: CONNECTION_SECURE.
      // Now do something with the trusted server.
      }

      function errorCallback(message) {
        function alertDismissed() {
          cordova.plugins.exit();
        }

        if (navigator.notification) {
          navigator.notification.alert(
            message,
            alertDismissed, // callback
            'Security Error', // title
            'Close', // buttonName
          );
        } else cordova.plugins.exit();

        if (message === 'CONNECTION_NOT_SECURE') {
        // There is likely a man in the middle attack going on, be careful!
        } else if (message.indexOf('CONNECTION_FAILED') > -1) {
        // There was no connection (yet). Internet may be down. Try again (a few times) after a little timeout.
        }
      }

      if (window.plugins && window.plugins.sslCertificateChecker) {
        window.plugins.sslCertificateChecker.check(
          successCallback,
          errorCallback,
          server,
          fingerprint,
        );
      }
    },
  },
};

</script>

<style src="@/styles/tailwind.css" />
<style src="@fortawesome/fontawesome-free/css/all.css" />
