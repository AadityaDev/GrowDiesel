<template>
    <header class="light" :data-open-state="openState">
        <Slide :no-overlay="false" :burger-icon="false" :is-open="menuOpened" class="burger-menu-cont" @closeMenu="menuOpened = false">
            <span :class="{ 'active' : menuOpened}" class="burger-menu-overlay" />
            <div class="flex flex-col py-8 mt-8 ml-5 mb-10 pb-10">
                <h1 class="bg-gray-600 flex h-12 items-center justify-center leading-normal rounded-full text-xl text-white w-12">
                    SA
                </h1>
                <p class="text uppercase letter-spacing-05 mt-3 text-white">
                    ds
                </p>
            </div>
            <p class="absolute bottom-0 text-red-500 uppercase mb-6 ml-4 letter-spacing-05" @click.prevent="logout">
                Logout
            </p>
            <p class="absolute bottom-0 right-0 ml-6 text-xs uppercase m-2 text-gray-700 letter-spacing-05">
                Version: {{ version }}
            </p>
        </Slide>            
    </header>
</template>