// 현재 프로젝트 3번 "롯데정밀화학 RPA 구축 프로젝트" 페이지 구성
import Image from "next/image";

export default function project4() {
    return (
        <div>
            <div>
                {/* 프로젝트 상세정보 전체 div 틀 */}
                <div className="p-5">
                    {/* 프로젝트 명 */}
                    <div>
                        <h1 className="text-3xl inline">프로젝트 명 : 롯데정밀화학 RPA 구축 프로젝트 </h1>
                        <p className="text-xl inline">( RPA 개발 )</p>
                        <br></br>
                        <h2 className="text-3xl my-3">프로젝트 목표 : 롯데정밀화학 단순업무 자동화 시스템 구축</h2>
                        <br></br>
                    </div>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl my-3">◎ RPA의 주요 기능 목표</p>
                        <p className="text-2xl ml-6 my-1">- 여러 외부 프로그램의 데이터를 수집하고 전자문서 자동 완성</p>
                        <p className="text-2xl ml-6 my-1">- 이미지 OCR(광학 문자 인식)을 사용하여 PDF 문서에 있는 텍스트 추출 및 데이터화</p>
                        <p className="text-2xl ml-6 my-1">- VBScript를 사용하여 보안프로그램으로 인한 예외상황 극복</p>
                    </div>
                    {/* 개발 환경 */}
                    <div>
                        <p className="text-2xl my-3">◎ 개발 환경</p>
                        <p className="text-xl ml-6 my-1 inline">- RPA솔루션 중 하나인 Automation Anywhere 사용</p>
                        <p className="text-xl ml-6 my-1">- Visual Basic기반의 스크립트 언어 VBScript 사용</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl ml-6 my-1 inline">▶ 고객사측은 팩스, 스캔된 이미지들로 이루어진 PDF파일에서 데이터를 추출하여 결과물을 만들기를
                            원하였습니다. 이를 위해 OCR을 사용하여 자동화 봇이 전자문서의 이미지안의 텍스트를 인식하고 추출하여 결과물을 만들어내도록 개발하였습니다.
                            프로젝트 진행 중 사내 보안프로그램이 인해 자동화 봇의 행동을 차단하는 이슈가 발생했고, 이를 해결하기위해 고객사측에서 VBScript를 사용한 스크립트를 사용하여
                            해결하기를 요청하였습니다. 저는 직접 VBScript로 엑셀 작업이나 파일 입출력을 직접 컨트롤하는 스크립트들을 코딩하였고,
                            자동화 봇이 필요 시 스크립트를 실행하는 방식으로 이슈를 해결하였습니다.</p>
                    </div>
                </div>
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 flex">
                    {/* OCR 설명 */}
                    <div className="m-3">
                        <Image
                            src="/rpa-ocr.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                        <p className="text-base my-3">RPA 솔루션이 제공하는 OCR 기능을 사용하면 이미지에 있는 텍스트를 자동화 봇이 추출하고 유의미하게 사용할 수
                            있었고 자동화 봇이 O와 0, I와 l, 1 등 비슷한 문자들을 잘못 읽어내지 않도록 수많은 예외사항을 잡아가며 텍스트 추출을 안정화 시켰습니다.</p>
                    </div>
                    {/* VBScript 설명 */}
                    <div className="m-3">
                        <Image
                            src="/vb-sample.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                        <p className="text-base my-3">Visual Basic 문법을 대부분 차용한 VBScript는 시스템을 직접 컨트롤 할 수도 있어서 그 위험성으로 인해
                            거의 사용되지 않는 당시 처음 접해보는 언어였지만, 프로젝트 완수를 위해 개인 시간을 할애하며 사용법을 익혔고 시행착오를 거치며 프로젝트 완수를 위한
                            스크립트들을 만들어 내었습니다.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}