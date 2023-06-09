// 현재 프로젝트 2번 "풍산 RPA 구축 프로젝트" 페이지 구성
import Image from "next/image";

export default function project2() {
    return (
        <div>
            <div className="flex">
                {/* 프로젝트 상세정보 전체 div 틀 */}
                <div className="p-5 w-3/4">
                    {/* 프로젝트 명 */}
                    <div>
                        <h1 className="text-3xl inline">프로젝트 명 : 풍산 RPA 구축 프로젝트 </h1>
                        <p className="text-xl text-slate-800 inline">( RPA 개발 )</p>
                        <br></br>
                        <h2 className="text-3xl my-3">프로젝트 목표 : 풍산홀딩스에서 단순업무 자동화 시스템 구축</h2>
                        <br></br>
                    </div>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ RPA의 주요 기능 목표</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 소프트웨어 봇이 ERP소프트웨어 'SAP'에 접근하여 목표 데이터 입출력</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 특정 웹 사이트에 있는 데이터를 소프트웨어 봇이 크롤링 하기</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 전자메일(Outlook)의 Excel,PDF 첨부파일을 받고 유효 데이터 정리</p>
                    </div>
                    {/* 개발 환경 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 개발 환경</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">- RPA솔루션 중 하나인 Automation Anywhere 사용</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 프로젝트 상세</p>
                        <p className="text-xl text-slate-800 ml-6 my-1 inline">▶ 고객사측은 사원들이 출근 후 전날의 데이터로 업무를 수행할 수 있도록 희망했습니다.
                            개발된 자동화 봇들은 스케줄링을 통해 매일 야간에 스스로 ERP, 웹 사이트, 파일 등에 접근하여 필요한 데이터를 추출 및 정제하여 결과물을 생성 후
                            임직원에게 메일로 전송합니다. 이후 임직원들은 출근하자마자 봇이 작업해놓은 결과물을 최종 확인 및 즉시 당일 업무에 활용할 수 있었고 업무 효율이 상승되었습니다.</p>
                    </div>
                </div>
                {/* 이미지 설명 전체 div 틀 */}
                <div className="p-5 w-1/4">
                    {/* 대표 기능 설명 */}
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
                    {/* 스케줄링 설명 */}
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