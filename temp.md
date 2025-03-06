<div class="px-4 min-[520px]:px-12 lg:px-20 xl:px-40 overflow-x-hidden py-15 h-max min-h-screen flex flex-col justify-around bg-[#121212]">
    <div class="partners-slider relative">
        <!-- Title Section -->
        <h2 class="text-center text-white text-3xl mb-10">Our Partners</h2>

        <!-- Slider Container -->
        <div class="swiper-container partners-swiper">
            <div class="swiper-wrapper">
                <!-- Media Partner - Indiatimes -->
                <div class="swiper-slide flex justify-center">
                    <div class="flex group h-[200px] w-[200px] overflow-hidden group rounded-[50%]">
                        <div class="bg-black rounded-[50%] h-[200px] w-[200px] items-center">
                            <div class="h-[200px] w-[200px] bg-transparent">
                                <img src="/images/partners/indiatimes.png" alt="Indiatimes" class="object-contain w-full h-full aspect-video">
                            </div>
                            <div class="z-10 translate-x-full -translate-y-[200%] toHide transition-transform duration-500 ease-in-out group h-[200px] w-[200px] rounded-[50%] group-hover:translate-x-[0] group-hover:translate-y-[-100%] bg-tedred"></div>
                        </div>
                        <div class="relative left-[-50%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-max z-[1000] group-hover:inline-block hidden text-center text-white">Media Partner - Indiatimes</div>
                    </div>
                </div>

                <!-- Event Partner - Nirvair Events -->
                <div class="swiper-slide flex justify-center">
                    <div class="flex group h-[200px] w-[200px] overflow-hidden group rounded-[50%]">
                        <div class="bg-black rounded-[50%] h-[200px] w-[200px] items-center">
                            <div class="h-[200px] w-[200px] bg-transparent">
                                <img src="/images/partners/nirvair.png" alt="Nirvair Events" class="object-contain w-full h-full aspect-video">
                            </div>
                            <div class="z-10 translate-x-full -translate-y-[200%] toHide transition-transform duration-500 ease-in-out group h-[200px] w-[200px] rounded-[50%] group-hover:translate-x-[0] group-hover:translate-y-[-100%] bg-tedred"></div>
                        </div>
                        <div class="relative left-[-50%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-max z-[1000] group-hover:inline-block hidden text-center text-white">Event Partner - Nirvair Events</div>
                    </div>
                </div>

                <!-- Merchandising Partner - NatureFab -->
                <div class="swiper-slide flex justify-center">
                    <div class="flex group h-[200px] w-[200px] overflow-hidden group rounded-[50%]">
                        <div class="bg-black rounded-[50%] h-[200px] w-[200px] items-center">
                            <div class="h-[200px] w-[200px] bg-transparent">
                                <img src="/images/partners/naturefab.png" alt="NatureFab" class="object-contain w-full h-full aspect-video">
                            </div>
                            <div class="z-10 translate-x-full -translate-y-[200%] toHide transition-transform duration-500 ease-in-out group h-[200px] w-[200px] rounded-[50%] group-hover:translate-x-[0] group-hover:translate-y-[-100%] bg-tedred"></div>
                        </div>
                        <div class="relative left-[-50%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-max z-[1000] group-hover:inline-block hidden text-center text-white">Merchandising Partner - NatureFab</div>
                    </div>
                </div>

                <!-- PR Partner - Feevin Media -->
                <div class="swiper-slide flex justify-center">
                    <div class="flex group h-[200px] w-[200px] overflow-hidden group rounded-[50%]">
                        <div class="bg-black rounded-[50%] h-[200px] w-[200px] items-center">
                            <div class="h-[200px] w-[200px] bg-transparent">
                                <img src="/images/partners/feevin.png" alt="Feevin Media" class="object-contain w-full h-full aspect-video">
                            </div>
                            <div class="z-10 translate-x-full -translate-y-[200%] toHide transition-transform duration-500 ease-in-out group h-[200px] w-[200px] rounded-[50%] group-hover:translate-x-[0] group-hover:translate-y-[-100%] bg-tedred"></div>
                        </div>
                        <div class="relative left-[-50%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-max z-[1000] group-hover:inline-block hidden text-center text-white">PR Partner - Feevin Media</div>
                    </div>
                </div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            
            <!-- Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</div>

<!-- Add this to your CSS -->
<style>
.partners-slider {
    padding: 20px 0;
}

.swiper-container {
    width: 100%;
    padding: 20px 0;
}

@media (min-width: 768px) {
    .swiper-container {
        width: 80%;
        margin: 0 auto;
    }
}

.swiper-button-next,
.swiper-button-prev {
    color: #ffffff;
}

.swiper-pagination-bullet {
    background: #ffffff;
}

.swiper-pagination-bullet-active {
    background: #eb0028;
}
</style>

<!-- Add this JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.partners-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
});
</script>
