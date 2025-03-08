<template>
    <div>
        <nav class="px-4 py-[29px] sm:px-10 md:px-[54px] bg-white h-[100px] relative">
            <!-- Top Row: Logo on left and icons on right -->
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <router-link to="/" class="flex jsutify-center items-center space-s-0.5">
                    <img src="@/assets/main-logo.svg" class="w-[50px] h-8 " alt="main-logo">
                    <p class="font-bold text-[34px] font-montserrat">Furniro</p>
                </router-link>

                <div
                    class="justify-center hidden text-gray-900 space-s-6 font-500 lg:flex font-poppins hover:text-gray-700">
                    <router-link to="" class="text-base">Home</router-link>
                    <router-link to="" class="text-base">Shop</router-link>
                    <router-link to="" class="text-base">About</router-link>
                    <router-link to="" class="text-base">Contact</router-link>
                </div>

                <!-- Icons Group: visible on all screens (you can hide the burger on small screens if not needed) -->
                <div class="flex items-center space-s-4">
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:user" width="28" height="28"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:search" width="28" height="28"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:heart" width="28" height="28"></iconify-icon>
                    </router-link>
                    <router-link to="" class="bg-gray-50 hover:bg-gray-100">
                        <iconify-icon icon="heroicons-outline:shopping-bag" width="28" height="28"></iconify-icon>
                    </router-link>
                    <button @click="toggleSidebar" class="p-2 lg:hidden">
                        <iconify-icon icon="tabler:menu-deep" width="28" height="28"></iconify-icon>
                    </button>
                </div>

            </div>

            <transition name="slide">
                <div v-if="sidebarOpen" class="fixed z-50 bg-white shadow-lg" :class="sidebarClasses"
                    @click.self="toggleSidebar">
                    <button @click="toggleSidebar" class="absolute p-2 top-2 right-2">
                        <iconify-icon icon="mdi:close" width="24" height="24"></iconify-icon>
                    </button>
                    <ul class="flex flex-col p-4 space-y-4">
                        <li>
                            <router-link to="" @click.native="toggleSidebar" class="text-base">Home</router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar" class="text-base">Shop</router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar" class="text-base">About</router-link>
                        </li>
                        <li>
                            <router-link to="" @click.native="toggleSidebar" class="text-base">Contact</router-link>
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