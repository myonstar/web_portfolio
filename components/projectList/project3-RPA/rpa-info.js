// 프로젝트 3번 "롯데정밀화학 RPA 구축 프로젝트"의 '프로젝트 개요' 클릭 시의 컴포넌트를 구성

export default function RPAInfo() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div>
                {/* 프로젝트 명 */}
                <div>
                    <h1 className="text-2xl inline">◎ 프로젝트 명 : 롯데정밀화학 RPA 구축 프로젝트 </h1>
                    <p className="text-xl inline">( RPA 개발 )</p>
                    <br></br>
                    <h2 className="text-2xl my-3">◎ 프로젝트 목표 : 롯데정밀화학 단순업무 자동화 시스템 구축</h2>
                    <h2 className="text-xl text-slate-400 dark:text-slate-300 ml-2 my-3">※ 2021-10-18 ~ 2022-02-25 (롯데정밀화학 파견업무)</h2>
                    <br></br>
                </div>
                {/* 주요 개발사항 */}
                <div>
                    <p className="text-2xl my-3">◎ RPA의 주요 기능 목표</p>
                    <p className="text-2xl ml-6 my-1">- 외부 프로그램에서 데이터를 수집하고 전자문서 자동 완성</p>
                    <p className="text-2xl ml-6 my-1">- 이미지 OCR(광학 문자 인식)을 사용하여 PDF 문서에 있는 텍스트 추출 및 데이터화</p>
                    <p className="text-2xl ml-6 my-1">- VBScript를 사용하여 보안프로그램으로 인한 예외상황 극복</p>
                    <br></br>
                </div>
                {/* 개발 환경 */}
                <div>
                    <p className="text-2xl my-3">◎ 개발 환경</p>
                    <p className="text-xl ml-6 my-1 inline">- RPA솔루션 중 하나인 Automation Anywhere 사용</p>
                    <p className="text-xl ml-6 my-1">- Visual Basic기반의 스크립트 언어 VBScript 사용</p>
                    <br></br>
                </div>
                {/* 프로젝트 설명 */}
                <div>
                    <p className="text-2xl my-3">◎ 프로젝트 요약</p>
                    <p className="text-xl my-1 inline">▶ 고객사측은 팩스, 스캔된 이미지들로 이루어진 PDF파일에서 데이터를 추출하여 결과물을 만들기를
                        원하였습니다. 이를 위해 OCR을 사용하여 자동화 봇이 전자문서 이미지내의 텍스트를 인식하고 추출하여 결과물을 만들어내도록 개발하였습니다.
                        프로젝트 진행 중 사내 보안프로그램이 인해 자동화 봇의 행동을 차단하는 이슈가 발생했고, 이를 해결하기위해 고객사측에서 VBScript를 사용한 스크립트를 사용하여
                        해결하기를 요청하였습니다. 저는 직접 VBScript로 사람이 반복적으로 수행하는 엑셀 작업을 재현하는 스크립트들을 코딩하였고,
                        자동화 봇이 필요 시 해당 스크립트를 실행하는 방식으로 이슈를 해결하였습니다.</p>
                </div>
            </div>
        </div>

    );
}