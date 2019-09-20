<template>
	<section class="dashboard-root-container">
	<transition name="fade">
		<Header
			v-if="$route.meta.showHeader"
			:show-back="$route.meta.showBack || false"
			@hideNavScroll="hideNavScrollFunc"
      />
	</transition>
	<body p-24 flex flex-wrap items-center justify-center>
		<!-- Display Container (not part of component) START -->
		<div class="m-0 mx-auto p-12 sm:p-18 lg:p-36 bg-gray-200">
			<!-- Carousel Body -->
			<div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style="min-height: 19rem;">
				<div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style="min-height: 19rem;">
					<img class="absolute inset-0 w-full h-full object-cover object-center" src="../assets/renewable.jpg" alt="">
					<div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
					<div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
					</div>
				</div>
				<div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
					<div class="p-6 md:pr-12 md:pl-8 md:py-6">
						<p class="text-gray-600 text-center">
							<span class="text-gray-900">
								{{ company.name }}
							</span>
							{{ company.opportunity.title }}
						</p>
						<!-- <span class="flex mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900 text-center">
							{{ company.opportunity.address }}
						</span> -->
						<span class="flex items-baseline mt-6 text-gray-600 text-center">
						{{ company.opportunity.subtitle | lowercase }}
						</span>
					</div>
					<svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon points="50,0 100,0 50,100 0,100" />
					</svg>
				</div>
			</div>
		</div>
		<!--  -->
		<div class="m-0 mx-auto p-12 sm:p-18 lg:p-36 bg-gray-200">
			<!-- Carousel Body -->
			<div class="relative rounded-lg block md:flex text-center items-center bg-gray-100 shadow-xl p-12">
				<p class="text-gray-600">
				<span class="text-indigo-600"> {{ company.opportunity.title }} </span>
				<br>
				<span class="mt-3"> {{ company.opportunity.description.firspara }} </span>
				<!-- <span class="mt-3"> {{ company.opportunity.description.secondpara }} </span>
				<span class="mt-3"> {{ company.opportunity.description.lastpara }} </span> -->
				</p>
			</div>
		</div>
		<!-- second para -->
		<div class="m-0 mx-auto p-12 sm:p-18 lg:p-36 bg-gray-200">
			<div class="relative rounded-lg block md:flex text-left items-center bg-gray-100 shadow-xl p-12">
				<p class="text-green-600">
				<span> {{ company.opportunity.description.secondpara }} </span>
				</p>
			</div>
		</div>
		<!-- third para -->
		<div class="m-0 mx-auto p-12 sm:p-18 lg:p-36 bg-gray-200">
			<div class="relative rounded-lg block md:flex text-left items-center bg-gray-100 shadow-xl p-12">
				<p class="text-gray-600">
				<span> {{ company.opportunity.description.lastpara }} </span>
				</p>
			</div>
		</div>

		<!-- sessions -->
		<div class="flex flex-wrap items-center justify-center text-green-400 font-semibold text-xl"> 
			{{ company.opportunity.sessiont }} 
		</div>
		<div class="p-4 flex flex-wrap items-center justify-center">	
			<div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
				<svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
					<rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
					<rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
				</svg>
			<div class="relative text-white px-6 pb-6 mt-6">
				<span class="block opacity-75 mb-1">
					{{ company.opportunity.sessions[0].head }}
				</span>
				<div class="flex justify-between">
					<span class="block font-semibold text-xl">
						{{ company.opportunity.sessions[0].title }}
					</span>
				</div>
				<span class="block opacity-75 mb-1">
					{{ company.opportunity.sessions[0].description }}
				</span>
				<br>
				<br>
			</div>
			</div>
			<div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
			<svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
				<rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
				<rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
			</svg>
			<div class="relative text-white px-6 pb-6 mt-6">
				<span class="block opacity-75 -mb-1">
					{{ company.opportunity.sessions[1].head }}
				</span>
				<div class="flex justify-between">
					<span class="block font-semibold text-xl">
						{{ company.opportunity.sessions[1].title }}
					</span>
				</div>
				<span class="block opacity-75 mb-1">
					{{ company.opportunity.sessions[1].description }}
				</span>
			</div>
			</div>
			<div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
			<svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
				<rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
				<rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
			</svg>
			<div class="relative text-white px-6 pb-6 mt-6">
				<span class="block opacity-75 -mb-1">
					{{ company.opportunity.sessions[2].head }}
				</span>
				<div class="flex justify-between">
					<span class="block font-semibold text-xl">
						{{ company.opportunity.sessions[2].title }}
					</span>
				</div>
				<span class="block opacity-75 mb-1">
					{{ company.opportunity.sessions[2].description }}
				</span>
				<br>
			</div>
			</div>
		</div>

		<!-- summit attend -->
		<div class="flex flex-wrap items-center justify-center text-green-400 font-semibold text-xl"> 
			{{ company.opportunity.summitAttend.title }} 
		</div>
		<div class="p-4 flex flex-wrap items-center justify-center">
			<ul>
				<li>
					{{ company.opportunity.summitAttend.keypoints[0] }}
				</li>
				<li>
					{{ company.opportunity.summitAttend.keypoints[1] }}
				</li>
				<li>
					{{ company.opportunity.summitAttend.keypoints[2] }}
				</li>
				<li>
					{{ company.opportunity.summitAttend.keypoints[3] }}
				</li>
				<li>
					{{ company.opportunity.summitAttend.keypoints[4] }}
				</li>
				<li>
					{{ company.opportunity.summitAttend.keypoints[5] }}
				</li>
			</ul>
			<!-- <ul v-for="(item,index) > -->
				<!-- <li v-for="(item,index) in company.opportunity.summitAttend.keypoints" v-bind:key="index">
					{{item}}
					<br>
				</li> -->
			<!-- </ul> -->
		</div>

	</body>
	<footer></footer>
	</section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import company from '@/assets/company.json';
// import company from '@/assets/json/company.json';
import company from '../assets/json/company.json';

export default {
  name: 'home',
  components: {
    Header: () => import('@/components/header.vue'),
  },
  mounted() {
  },
  data() {
	return {
		company,
	};
  },
  methods: {
	hideNavScrollFunc(e) {
      this.hideNavScroll = e;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/common/_variables.scss';

.dashboard-root-container {
  background: $pale-white;
  padding: 0 0 48px 0;
  min-height: 100vh;
  // padding-top: constant(safe-area-inset-top);
  // padding-top: env(safe-area-inset-top);
}

.gradient {
    // background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%);
    background: linear-gradient(150deg,#281483 15%,#281483 70%,#281483 94%);

}

</style>