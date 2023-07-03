// 현재 프로젝트 3번 "롯데정밀화학 RPA 구축 프로젝트" 페이지 구성
import RPAInfo from "./rpa-info";
import RPASwiper from "./rpa-swiper";
import { useState } from 'react';

export default function Project3() {
    // 버튼 클릭에 따라 각기 다른 렌더링을 위한 State 생성
    const [showComponent, setShowComponent] = useState("info")
    return (
        <div>
            <div className="flex">
                {/* 상단 경계선 생성 및 해당 프로젝트의 Nav바 위치 */}
                <div className="sticky top-0 w-1/6 h-fit">
                    {/* 프로젝트 개요 버튼 */}
                    <div>
                        <button className="btn-nav" onClick={()=>setShowComponent("info")}>
                            프로젝트 개요
                        </button>
                        <button className="btn-nav mt-8" onClick={()=>setShowComponent("process")}>
                            개발 과정
                        </button>
                        <button className="btn-nav mt-8" onClick={()=>setShowComponent("rpa")}>
                            About RPA
                        </button>
                        <button className="btn-nav mt-8" onClick={()=>setShowComponent("result")}>
                            프로젝트 결과
                        </button>
                    </div>
                </div>
                {/* 버튼 클릭에 따라 렌더링하는 컴포넌트가 위치 */}
                <div className="pl-5 w-5/6 max-w-7xl">
                    { showComponent === "info" && <RPAInfo></RPAInfo> }
                    { showComponent === "rpa" && 
                    <div>
                        <RPASwiper></RPASwiper>
                    </div>}
                </div>
            </div>
        </div>
    );
}