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
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">저는 컴퓨터소프트웨어공학과를 전공했으며,
                첫 회사에서 RPA업무를 성실히 수행였습니다. 이제는 웹 개발 분야에서의 성장을 꿈꾸며, 이 웹 포트폴리오를 통해 더 나은 개발자로 성장하는 모습을 보여드리고자 합니다.</p>
                
                {/* <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-gray-900">
                    제가 수행한 프로젝트들을 확인하고자 하신다면<br/>아래의 버튼을 클릭해주세요.
                </h2> */}
                {/* 프로젝트 열람 버튼 */}
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="btn-project">수행한 프로젝트 보기</button>
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