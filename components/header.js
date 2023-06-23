import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle-button';
// 모달을 사용하기 위한 useState Import
import { useState } from 'react';
import AboutMe from '@/pages/about-me';

export default function Header() {
    // 모달 버튼 클릭 유무 상태를 저장하는 state 생성
    const [showModal, setShowModal] = useState(false)

    // About Me 클릭 시 모달 클릭 유무를 설정하는 state 함수
    const clickModal = () => setShowModal(!showModal)
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            {/* 헤더 이름 설정 */}
                            <span className="ml-3 text-xl">새로운 도전과 목표를 추구하는 개발자입니다.</span>
                        </div>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <div className="mr-5 hover:text-gray-900">메인 홈</div>
                        </Link>
                        <Link href="/projects">
                            <div className="mr-5 hover:text-gray-900">프로젝트</div>
                        </Link>
                        <Link href="/about-rpa">
                        <div className="mr-5 hover:text-gray-900">About RPA</div>
                        </Link>
                        {/* 클릭 시 모달 창 */}
                        <button onClick={clickModal} size={60} className="mr-5 hover:text-gray-900 text-slate-500 dark:text-slate-400 dark:hover:text-gray-900">
                            About Me
                        </button>
                        {/* state가 true면 만들어놓은 모달 컴포넌트를 화면에 띄운다. */}
                        {/* FeedSearchModal로 state함수를 props로 전달한다. => 모달 내에서 모달을 나갈 수 있어야 하기 때문 */}
                        {showModal && <AboutMe clickModal={clickModal} />}
                    </nav>
                    {/* 다크모드 작업 */}
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </header>
        </>
    );
}