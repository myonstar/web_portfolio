// 현재 프로젝트 상세정보가 구현되지 않은 페이지 구성

export default function projectNotFound() {
    return (
        <div>
            {/* 프로젝트 상세정보 전체 div 틀 */}
            <div className="border-solid border-2 border-indigo-600 p-5">
                {/* 프로젝트 명 */}
                <div>
                    <h1 className="text-3xl inline">아직 상세 정보가 작성되지 않은 페이지입니다...</h1>
                </div>
            </div>
        </div>
    );
}