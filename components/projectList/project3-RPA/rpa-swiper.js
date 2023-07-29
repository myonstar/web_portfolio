// 프로젝트 3번 "롯데정밀화학 RPA 구축 프로젝트"의 'About RPA' 클릭 시의 컴포넌트를 구성
// 해당 컴포넌트는 이미지를 슬라이드하여 보여주는 Swiper 방식

import Image from "next/image";
// Swiper Import 수행
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// 필요 CSS import 수행
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function RPASwiper() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_01 = `/RPA_01.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_02 = `/RPA_02.webp?${(Math.random() * 7).toString(7)}`
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
                        src={imgSource_01}
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center">
                    <Image
                        src={imgSource_02}
                        alt="Image Not Found"
                        width={1280}
                        height={720}
                        quality={100} />
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
}