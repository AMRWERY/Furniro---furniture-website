<template>
    <div>
        <div class="pb-[69px]">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p class="font-poppins font-700 text-[20px] sm:text-[24px] md:text-[32px] text-[#333333] text-center">
                    Our Products</p>

                <div class="grid grid-cols-2 gap-4 mt-4 sm:mt-6 md:mt-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">
                    <div class="relative z-50 overflow-hidden bg-gray-100 rounded-lg group" v-for="product in products"
                        :key="product">
                        <!-- Product Image -->
                        <div class="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto relative">
                            <div class="absolute top-0 right-0 flex flex-col p-3">
                                <div v-if="product.discount"
                                    class="bg-[#e97171] shadow text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 justify-center flex items-center text-xs sm:text-sm md:text-base font-poppins font-500">
                                    -{{ product.discount }}%
                                </div>
                                <div v-if="product.isNew"
                                    class="bg-[#2ec1ac] shadow text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 justify-center flex items-center text-xs sm:text-sm md:text-base font-poppins font-500">
                                    {{ product.isNew }}
                                </div>
                            </div>
                            <img :src="product.img" alt="product" class="object-fill w-full h-full" />
                        </div>

                        <div class="flex flex-col flex-1 p-4">
                            <div class="flex-1 space-y-2">
                                <h5 class="text-sm  font-poppins font-600 text-[#3A3A3A] sm:text-2xl line-clamp-2">{{
                                    product.title
                                    }}
                                </h5>
                                <p class=" font-poppins font-500 text-base text-[#898989]">{{ product.subtitle }}</p>
                                <div class="flex items-center gap-2">
                                    <p class="text-sm font-poppins font-600 text-[#3A3A3A] sm:text-2xl">${{
                                        product.discountedPrice
                                        }}
                                    </p>
                                    <span
                                        class="line-through text-sm font-poppins font-400 text-[#B0B0B0] sm:text-lg mt-0 md:mt-0.5"
                                        v-if="product.originalPrice">${{ product.originalPrice }}</span>
                                </div>
                            </div>
                        </div>

                        <div
                            class="absolute bottom-0 left-0 right-0 h-0 overflow-hidden transition-all duration-300 bg-black/30 group-hover:h-full">
                            <div
                                class="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center h-full p-4">
                                <router-link to="" role="button"
                                    class="flex items-center justify-center font-poppins font-600 text-[#B88E2F] transition-all duration-200 bg-white text-sm md:text-base w-[100px] h-[30px] sm:w-[150px] sm:h-[35px] md:w-[202px] md:h-[48px]">
                                    Add to Cart
                                </router-link>
                                <div class="flex space-x-4 text-white justify-betwen">
                                    <router-link to="" role="button"
                                        class="mt-4 flex items-center justify-center space-s-0.5 font-poppins font-600">
                                        <iconify-icon icon="material-symbols:share"
                                            class="w-[10px] h-[11px] sm:w-[12px] sm:h-[13px] md:w-[17px] md:h-[18px] inline-block"></iconify-icon>
                                        <span class="text-sm sm:text-base md:text-lg ms-1">Share</span>
                                    </router-link>
                                    <router-link to="" role="button"
                                        class="mt-4 flex items-center justify-center space-s-0.5 font-poppins font-600">
                                        <iconify-icon icon="material-symbols:compare-arrows-rounded"
                                            class="w-[10px] h-[11px] sm:w-[12px] sm:h-[13px md:w-[17px] md:h-[18px] inline-block"></iconify-icon>
                                        <span class="text-sm sm:text-base md:text-lg ms-1">Compare</span>
                                    </router-link>
                                    <router-link to="" role="button"
                                        class="mt-4 flex items-center justify-center space-s-0.5 font-poppins font-600">
                                        <iconify-icon icon="mdi:cards-heart-outline"
                                            class="w-[10px] h-[11px] sm:w-[12px] sm:h-[13px md:w-[17px] md:h-[18px] inline-block"></iconify-icon>
                                        <span class="text-sm sm:text-base md:text-lg ms-1">Like</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-8">
                    <router-link to="" role="button"
                        class="px-16 py-3 border border-[#B88E2F] text-[#B88E2F] duration-200 font-semibold text-base">
                        Show More
                    </router-link>
                </div>
            </div>
        </div>





        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p>hello</p>
        </div>
    </div>
</template>

<script setup>
const products = ref([
    { title: 'Syltherine', subtitle: 'Stylish cafe chair', originalPrice: '3.500.000', discountedPrice: '2.500.000', discount: '30', img: 'https://justfields.com/storage/projects/7M5rV059/Syltherine.png' },
    { title: 'Leviosa', subtitle: 'Stylish cafe chair', discountedPrice: '2.500.000', img: 'https://justfields.com/storage/projects/7M5rV059/leviosa.png' },
    { title: 'Lolito', subtitle: 'Luxury big Safa', originalPrice: '14.000.000', discountedPrice: '7.000.000', discount: '50', img: 'https://justfields.com/storage/projects/7M5rV059/lolito.png' },
    { title: 'Respira', subtitle: 'Outdoor bar table and stool', discountedPrice: '5000.000', img: 'https://justfields.com/storage/projects/7M5rV059/respira.png', isNew: 'New' },
])
</script>

<style scoped>
.group:hover .overlay-container {
    transform: translateY(0);
}

.overlay-container {
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
}
</style>