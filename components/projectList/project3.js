// 현재 프로젝트 3번 "이테크시스템 RPA 구축 프로젝트" 페이지 구성
import Image from "next/image";

export default function project2() {
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
                        <p className="text-2xl text-slate-800 ml-6 my-1">- </p>
                    </div>
                    {/* 개발 환경 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 개발 환경</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">RPA솔루션 중 하나인 Automation Anywhere 사용</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">▶ 방치된 단순한 업무와 과도한 반복적인 업무로 업무 시간이 길어져 간헐적으로
                         야근을 하는 직원들의 부담을 줄이는 것을 목표로 하였습니다.</p>
                    </div>
                </div>
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 w-1/4">
                    {/* 스케줄링 설명 */}
                    <div>
                        <Image
                            src="/sap.webp"
                            alt="Image Not Found"
                            width={450}
                            height={280}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">개발된 자동화 봇의 대표적 기능은 스스로 SAP에 접속 후 재료선적/출하, 거래처 내역, 방산정보 등 민감한 데이터를 가공하여 엑셀에 정리 후 담당자에게 전송하는 기능입니다.</p>
                    </div>
                    <div>
                        <Image
                            src="/bot-schedule.webp"
                            alt="Image Not Found"
                            width={640}
                            height={480}
                            quality={100} />
                    </div>
                    <div>
                        <p className="text-base text-slate-800 my-3">봇 스케줄링을 통해 연중무휴 지정된 시간에 약속된 결과물을 제공하므로 안정적으로 업무 프로세스가 유지됩니다.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}