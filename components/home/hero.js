// 메인 페이지를 구성하는 Hero 요소

import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요, 저는 김경빈입니다.
                </h1>
                <p className="text-xl mb-8 leading-relaxed">저는 컴퓨터소프트웨어공학과를 전공했으며, 첫 회사로 RPA업무를 수행하였고 웹 개발자로써 성장하기 위해 이 웹 사이트를 만들게 되었습니다.</p>
                
                <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                    제가 수행한 프로젝트들을 보시려면
                </h1>
                {/* 프로젝트 열람 버튼 */}
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="btn-project">프로젝트 보기</button>
                    </Link>
                </div>
            </div>
            {/* 메인 페이지 우측 애니메이션 */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation></Animation>
            </div>
        </>
    );
}