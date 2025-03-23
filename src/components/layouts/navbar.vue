<template>
    <div>
        <nav class="flex bg-white h-[50xpx] md:h-[100px] relative">
            <!-- Top Row: Logo on left and icons on right -->
            <div class="container flex items-center justify-between px-4 sm:px-10 md:px-[54px]">
                <!-- Logo -->
                <router-link to="/" class="flex jsutify-center items-center space-s-0.5">
                    <img src="@/assets/main-logo.svg" class="md:w-[50px] md:h-8 w-8 h-6" alt="main-logo">
                    <p class="font-bold md:text-[34px] font-montserrat sm:text-[25px]">Furniro</p>
                </router-link>

                <div
                    class="justify-center hidden text-gray-900 space-s-6 font-500 lg:flex font-poppins hover:text-gray-700">
                    <router-link to=""
                        class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                        <p class="relative z-10">Home</p>
                        <span
                            class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </router-link>
                    <router-link to=""
                        class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                        <p class="relative z-10">Shop</p>
                        <span
                            class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </router-link>
                    <router-link to=""
                        class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                        <p class="relative z-10">About</p>
                        <span
                            class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </router-link>
                    <router-link to=""
                        class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                        <p class="relative z-10">Contact</p>
                        <span
                            class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </router-link>
                </div>

                <!-- Icons Group: visible on all screens (you can hide the burger on small screens if not needed) -->
                <div class="flex items-center space-s-1 md:space-s-4">
                    <router-link to="" class="p-1 rounded-full bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:user"
                            class="sm:text-[20px] md:text-[25px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="p-1 rounded-full bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:search"
                            class="sm:text-[20px] md:text-[25px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="p-1 rounded-full bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:heart"
                            class="sm:text-[20px] md:text-[25px]"></iconify-icon>
                    </router-link>
                    <router-link to="" class="p-1 rounded-full bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:shopping-bag"
                            class="sm:text-[20px] md:text-[25px]"></iconify-icon>
                    </router-link>
                    <button @click="toggleSidebar" class="p-1 rounded-full bg-gray-50 hover:bg-gray-100 lg:hidden">
                        <iconify-icon icon="tabler:menu-deep" class="sm:text-[20px] md:text-[25px]"></iconify-icon>
                    </button>
                </div>
            </div>

            <transition name="slide">
                <div v-if="sidebarOpen" class="fixed z-50 bg-white shadow-lg" :class="sidebarClasses"
                    @click.self="toggleSidebar">
                    <button @click="toggleSidebar" class="absolute p-2 top-2 right-2">
                        <iconify-icon icon="mdi:close"
                            class="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[28px] md:h-[28px]"></iconify-icon>
                    </button>
                    <ul class="flex flex-col p-4 space-y-4">
                        <li>
                            <router-link to="" @click.native="toggleSidebar"
                                class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                                <p class="relative z-10">Home</p>
                                <span
                                    class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar"
                                class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                                <p class="relative z-10">Shop</p>
                                <span
                                    class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar"
                                class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                                <p class="relative z-10">About</p>
                                <span
                                    class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar"
                                class="relative inline-block pb-1 text-base transition-colors duration-300 group hover:text-blue-600">
                                <p class="relative z-10">Contact</p>
                                <span
                                    class="absolute bottom-0 left-0 h-0.5 bg-current w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav>
    </div>
</template>

<script setup>
const sidebarOpen = ref(false);

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
});

const sidebarPosition = computed(() => {
    return windowWidth.value >= 768 ? "right" : "bottom";
});

const sidebarClasses = computed(() => {
    if (sidebarPosition.value === "right") {
        return "top-0 right-0 h-full w-64";
    } else {
        return "left-0 bottom-0 w-full h-64";
    }
});

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}

@media (max-width: 767px) {
    .slide-enter-from {
        transform: translateY(100%);
    }

    .slide-leave-to {
        transform: translateY(100%);
    }
}
</style>