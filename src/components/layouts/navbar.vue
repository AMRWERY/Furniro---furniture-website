<template>
    <div>
        <nav class="px-[54px] py-[29px] bg-white h-[100px]">
            <!-- Top Row: Logo on left and icons on right -->
            <div class="flex items-center justify-between ">
                <!-- Logo -->
                <router-link to="/" class="flex jsutify-center items-center space-s-0.5">
                    <img src="@/assets/main-logo.svg" class="w-[50px] h-8 " alt="main-logo">
                    <p class="font-bold text-[34px] font-montserrat">Furniro</p>
                </router-link>

                <div
                    class="justify-center hidden text-gray-900 space-s-6 font-500 md:flex font-poppins hover:text-gray-700">
                    <router-link to="" class="text-base">Home</router-link>
                    <router-link to="" class="text-base">Shop</router-link>
                    <router-link to="" class="text-base">About</router-link>
                    <router-link to="" class="text-base">Contact</router-link>
                </div>

                <!-- Icons Group: visible on all screens (you can hide the burger on small screens if not needed) -->
                <div class="flex items-center space-s-2.5">
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
            <div
                class="mt-2.5 flex justify-center text-gray-900 space-s-6 font-500 font-poppins hover:text-gray-700 md:hidden">
                <router-link to="" class="text-base">Home</router-link>
                <router-link to="" class="text-base">Shop</router-link>
                <router-link to="" class="text-base">About</router-link>
                <router-link to="" class="text-base">Contact</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>