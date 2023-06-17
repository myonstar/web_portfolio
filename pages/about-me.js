import { useState } from "react";
import Image from "next/image";

export default function AboutMe(props) {
    // 전달받은 state 함수
    const { clickModal } = props

    return (
        <>
            {/* 뒷배경을 클릭하면 모달을 닫아야 해야하므로 뒷 배경 onClick에 state함수를 넣은 div 생성 */}
            <div className="modal-box" onClick={clickModal}>
                {/* 모달을 닫는 state함수가 아래로 전파되는 것을 막아주며, 실제 모달을 표시하는 div 생성 */}
                {/* <div className="modal" onClick={(e) => e.stopPropagation()}> */}
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="flex px-2 py-3 bg-white dark:bg-slate-800 border-dashed border-2 rounded-lg border-slate-800 dark:border-slate-200">
                        {/* 프로필 영역 div */}
                        <div className="w-1/4 min-w-fit mr-3">
                            <p className="flex text-3xl mx-3 my-3 justify-center">프로필</p>
                            <Image className="m-auto"
                                src="/kkb.webp"
                                alt="Image Not Found"
                                width={200}
                                height={100}
                                quality={100} />
                            <p className="text-2xl mx-3 my-3 mt-5">성명 : 김경빈</p>
                            <p className="text-2xl mx-3 my-3">연락처 : 010-7554-4013</p>
                            <p className="text-2xl mx-3 my-3">E-mail : pinkbin95@naver.com</p>
                        </div>
                        <div className="w-3/4 max-w-full ml-3">
                            <p className="flex text-3xl mx-3 my-3 mt-5 justify-center">주요 이력</p>
                            <div className="inline float-left">
                                <p className="text-2xl mx-3 my-3">2011.03 ~ 2014.02</p>
                                <p className="text-2xl mx-3 my-3">2014.03 ~ 2020.02</p>
                                <p className="text-2xl mx-3 my-3">2019.11</p>
                                <p className="text-2xl mx-3 my-3">2020.05 ~ 2022.02</p>
                            </div>
                            <div className="inline float-right">
                                <p className="text-2xl mx-3 my-3">화곡고등학교 재학 및 졸업</p>
                                <p className="text-2xl mx-3 my-3">동양미래대학교 재학 및 컴퓨터소프트웨어공학과 졸업</p>
                                <p className="text-2xl mx-3 my-3">대학 내 창의적 SW경진대회 우수상 수상 (Project 조이어트)</p>
                                <p className="text-2xl mx-3 my-3">이테크시스템 근무</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}