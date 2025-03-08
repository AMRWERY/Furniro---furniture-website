<template>
    <div>
        <nav class="bg-white px-4 py-4">
            <!-- Top Row: Logo on left and icons on right -->
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <router-link to="/" class="flex jsutify-center items-center space-x-0.5">
                    <img src="@/assets/main-logo.svg" class="w-6 h-5 sm:h-5 sm:w-8 md:w-12 md:h-8" alt="main-logo">
                    <p class="font-bold text-base sm:text-lg md:text-[34px] font-[poppins]">Furniro</p>
                </router-link>

                <div class="md:flex justify-center space-x-6 hidden">
                    <router-link to=""
                        class="text-base font-medium text-gray-400 hover:text-gray-500">Home</router-link>
                    <router-link to=""
                        class="text-base font-medium text-gray-400 hover:text-gray-500">Shop</router-link>
                    <router-link to=""
                        class="text-base font-medium text-gray-400 hover:text-gray-500">About</router-link>
                    <router-link to=""
                        class="text-base font-medium text-gray-400 hover:text-gray-500">Contact</router-link>
                </div>

                <!-- Icons Group: visible on all screens (you can hide the burger on small screens if not needed) -->
                <div class="flex items-center space-x-2.5">
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:user"
                            class="text-lg sm:text-xl md:text-[26px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:search"
                            class="text-lg sm:text-xl md:text-[26px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:heart"
                            class="text-lg sm:text-xl md:text-[26px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:shopping-bag"
                            class="text-lg sm:text-xl md:text-[26px]"></iconify-icon>
                    </router-link>
                </div>
            </div>

            <!-- Bottom Row: Router Links (only on small screens) -->
            <div class="mt-2.5 flex justify-center space-x-6 md:hidden">
                <router-link to="" class="text-base font-medium text-gray-400 hover:text-gray-500">Home</router-link>
                <router-link to="" class="text-base font-medium text-gray-400 hover:text-gray-500">Shop</router-link>
                <router-link to="" class="text-base font-medium text-gray-400 hover:text-gray-500">About</router-link>
                <router-link to="" class="text-base font-medium text-gray-400 hover:text-gray-500">Contact</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>