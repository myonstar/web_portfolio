// 프로젝트 2번 "졸업작품 Joyet" 페이지를 구성
import JoyetInfo from './joyet-info';
import JoyetProgress from './joyet-progress';
import JoyetSkill from './joyet-skill';
import JoyetResult from './joyet-result';
import { useState } from 'react';

export default function Project2() {
    // 버튼 클릭에 따라 각기 다른 렌더링을 위한 State 생성
    const [showComponent, setShowComponent] = useState("info")
    return (
        <div>
            <div className="flex">
                {/* 해당 프로젝트의 Nav바 위치 */}
                <div className="sticky top-0 w-1/6 h-fit">
                    {/* 프로젝트 개요 버튼 */}
                    <div>
                        <button className="btn-nav" onClick={() => setShowComponent("info")}>
                            프로젝트 개요
                        </button>
                        <button className="btn-nav mt-8" onClick={() => setShowComponent("process")}>
                            개발 상세
                        </button>
                        <button className="btn-nav mt-8" onClick={() => setShowComponent("skill")}>
                            기술 스택
                        </button>
                        <button className="btn-nav mt-8" onClick={() => setShowComponent("result")}>
                            프로젝트 결과
                        </button>
                    </div>
                </div>
                {/* 버튼 클릭에 따라 렌더링하는 컴포넌트가 위치 */}
                <div className="pl-5 w-5/6 max-w-7xl">
                    {/* '프로젝트 개요' 클릭 시 렌더링할 컴포넌트 */}
                    {showComponent === "info" && <JoyetInfo></JoyetInfo>}
                    {/* '개발 상세' 클릭 시 렌더링할 컴포넌트 */}
                    {showComponent === "process" && <JoyetProgress></JoyetProgress>}
                    {/* '기술 스택' 클릭 시 렌더링할 컴포넌트 */}
                    {showComponent === "skill" && <JoyetSkill></JoyetSkill>}
                    {/* '프로젝트 결과' 클릭 시 렌더링할 컴포넌트 */}
                    {showComponent === "result" && <JoyetResult></JoyetResult>}
                </div>
            </div>
        </div>

    );
}