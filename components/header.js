import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle-button';

export default function Header() {
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
                        <span className="ml-3 text-xl">미완성에서 완성을 향해 성장할 개발자입니다.</span>
                    </div>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                        <div className="mr-5 hover:text-gray-900">메인 홈</div>
                        </Link>
                        <Link href="/projects">
                        <div className="mr-5 hover:text-gray-900">프로젝트</div>
                        </Link>
                        <Link href="/about-rpa">
                        <div className="mr-5 hover:text-gray-900">About RPA</div>
                        </Link>
                        <Link href="https://www.naver.com">
                        <div className="mr-5 hover:text-gray-900">Contact me</div>
                        </Link>
                    </nav>
                    {/* 다크모드 작업 */}
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </header>
        </>
    );
}