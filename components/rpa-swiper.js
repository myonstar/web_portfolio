import Image from "next/image";
// Swiper Import 수행
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// 필요 CSS import 수행
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function RPASwiper() {
    // Autoplay : 자동 슬라이드, Navigation : 화살표 이동, Pagination : 페이지 표시 - SwiperCore.use로 해당 기능 사용 선언
    SwiperCore.use([Autoplay])
    SwiperCore.use([Navigation])
    SwiperCore.use([Pagination])
    return (
        <div>
            <Swiper
                slidesPerView={1}
                // 자동 슬라이드 시 사용
                autoplay={{
                    delay: 5000
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {/* flex justify-center를 넣어줌으로써 슬라이드 가운데 정렬 수행 */}
                <SwiperSlide><div className="flex justify-center">
                    <Image
                        src="/RPA_01.webp"
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center">
                    <Image
                        src="/RPA_02.webp"
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center">
                    <Image
                        src="/RPA_03.webp"
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center">
                    <Image
                        src="/RPA_04.webp"
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
}