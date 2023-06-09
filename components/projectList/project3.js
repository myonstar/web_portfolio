// 현재 프로젝트 3번 "이테크시스템 RPA 구축 프로젝트" 페이지 구성
import Image from "next/image";

export default function project3() {
    return (
        <div>
            <div className="flex">
                {/* 프로젝트 상세정보 전체 div 틀 */}
                <div className="p-5 w-3/4">
                    {/* 프로젝트 명 */}
                    <div>
                        <h1 className="text-3xl inline">프로젝트 명 : 이테크시스템 RPA 구축 프로젝트 </h1>
                        <p className="text-xl text-slate-800 inline">( RPA 개발 )</p>
                        <br></br>
                        <h2 className="text-3xl my-3">프로젝트 목표 : 재직하는 회사의 사내 단순업무 자동화 시스템 구축</h2>
                        <br></br>
                    </div>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ RPA의 주요 기능 목표</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 인사팀이 수행하는 사내 임직원의 근태관리 자동화</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 엑셀로 정리된 거래처 및 회사들의 신용 정보 매일 갱신</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 사내 ERP에 저장된 세무/회계 내역 데이터 정리 후 담당자에게 전송</p>
                    </div>
                    {/* 개발 환경 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 개발 환경</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">- RPA솔루션 중 하나인 Automation Anywhere 사용</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">▶ 구축된 사내 FTP를 통해 각 부서에서 처리 요청한 파일들을 업로드하면 소프트웨어 봇이 인식하여 작업을 해주는
                        방식으로 진행했습니다. 매일 400명이 넘는 임직원들의 근태관리를 하는 인사팀, 월마다 수천 곳의 회사들의 신용정보를 엑셀로 관리하는 법무팀 등
                        단순하지만 매일 꾸준한 작업이 필요하여 이유로 방치된 업무, 월말에 몰리는 과도한 처리량으로 업무 시간이 길어져 야근을 유발하는 업무를 일부 자동화하여 
                        재직하는 사원들의 부담을 줄이는 것을 목표로 하였습니다. 
                        </p>
                    </div>
                </div>
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 w-1/4">
                    {/* 더존 erp 관련 작업 설명 */}
                    <div>
                        <Image
                            src="/duzon-erp.webp"
                            alt="Image Not Found"
                            width={640}
                            height={280}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">완성된 자동화 봇은 사내 ERP에 있는 데이터를 다운로드 하여 유의미한 결과물로 만들거나, 요청받은 파일의 데이터를
                        ERP에 입력하는 작업을 수행합니다.</p>
                    </div>
                    {/* FTP와 RPA 설명 */}
                    <div>
                        <Image
                            src="/ftp-rpa.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">각 부서별 지정된 FTP내의 폴더내의 처리 요청 파일을 자동화 봇이 감지하여 작업 후 사내 메일로 결과물을 발송해주도록 개발했습니다.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}