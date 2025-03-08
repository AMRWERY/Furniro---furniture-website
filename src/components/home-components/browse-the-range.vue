<template>
    <div>
        <div class="px-4 mt-[56.74px] mb-[56px] mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="text-center">
                <p class="font-700 font-poppins text-[20px] sm:text-[24px] md:text-[32px] text-[#333333]">Browse The
                    Range</p>
                <span class="text-[#666666] text-sm sm:text-base md:text-xl font-400 font-poppins">Lorem ipsum dolor sit
                    amet,
                    consectetur adipiscing elit.</span>

                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[30px] sm:mt-[44px] md:mt-[62.29px] gap-x-6 gap-y-10 xl:gap-x-8">
                    <div v-for="card in cards" :key="card.id" class="relative group">
                        <img :src="card.imageSrc"
                            class="aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75 md:w-[381px] md:h-[480px] mx-auto w-[300px] h-[400px] max-w-max" />
                        <div class="flex justify-center">
                            <div>
                                <h3
                                    class="md:text-2xl font-poppins font-600 text-[#333333] text-center text-base sm:text-lg mt-1 sm:mt-2 md:mt-[30px]">
                                    <router-link to="">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ card.name }}
                                    </router-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards = [
    {
        id: 1,
        name: 'Dining',
        imageSrc: 'https://justfields.com/storage/projects/7M5rV059/dining.png',
    },
    {
        id: 2,
        name: 'Living',
        imageSrc: 'https://justfields.com/storage/projects/7M5rV059/living-room.png',
    },
    {
        id: 3,
        name: 'Bedroom',
        imageSrc: 'https://justfields.com/storage/projects/7M5rV059/bedroom.png',
    },
]
</script>