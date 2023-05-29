// 현재 프로젝트 2번 "풍산 RPA 구축 프로젝트" 페이지 구성

export default function project2() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div className="border-solid border-2 border-indigo-600 p-5">
                {/* 프로젝트 명 */}
                <div>
                    <h1 className="text-3xl inline">프로젝트 명 : 풍산 RPA 구축 프로젝트 </h1>
                    <p className="text-xl text-slate-800 inline">( RPA 개발 )</p>
                    <br></br>
                    <h2 className="text-3xl">프로젝트 목표 : 풍산홀딩스에서 단순업무 자동화 시스템 구축</h2>
                    <br></br>
                    {/* 주요 개발사항 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 주요 개발사항</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- ERP소프트웨어 'SAP'에 접근하여</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- 웹 사이트에 있는 목표 데이터를</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1">- </p>
                    </div>
                    {/* 개발 환경 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 개발 환경</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">RPA솔루션</p>
                    </div>
                    {/* 프로젝트 설명 */}
                    <div>
                        <p className="text-2xl text-slate-800 my-3">◎ 프로젝트 설명</p>
                        <p className="text-2xl text-slate-800 ml-6 my-1 inline">- HTML</p>
                    </div>
                </div>

            </div>
        </div>

    );
}