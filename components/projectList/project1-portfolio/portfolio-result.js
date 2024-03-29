// 프로젝트 1번 "웹 포트폴리오 제작"의 '프로젝트 결과' 클릭 시의 컴포넌트를 구성

export default function PortfolioResult() {
    return (
        <div>
            {/* 프로젝트 결과 전체 div 틀 */}
            <div>
                {/* 프로젝트 수행 결과 작성 */}
                <div>
                    <h1 className="text-2xl mb-3">◎ 프로젝트 결과</h1>
                    <p className="text-xl ml-6 my-1">▶ 나만의 웹 포트폴리오 제작 : 아직 부족한 부분도 있지만 혼자서 웹 포트폴리오 사이트를 성공적으로 구축했습니다. 
                        기존에는 PPT로 만들어진 포트폴리오를 이력서에 첨부했지만 내용이 빈약하고 어필할만한 포인트가 없었던 것 같습니다. 
                        하지만 제 발자취를 남길 수 있는 웹 포트폴리오를 직접 만들어보면서 웹 개발자로서의 지식과 개발 능력을 키울수 있었고 더불어 자신감도 상승하는 좋은 결과를 낼 수 
                        있었습니다.</p>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* 주요 개발사항 */}
                <div>
                    <p className="text-2xl my-3">◎ 프로젝트 수행 후 얻은 것</p>
                    <p className="text-xl my-1">1. 프론트엔드 개발 능력 향상</p>
                    <p className="text-xl ml-6 my-1">▶ 프로젝트를 수행하면서 React를 공부하고 React에서 파생된 프레임워크인 Next.js까지 활용해보며 프론트엔드 기술 스택과 
                        웹 개발의 중요한 개념 지식까지 습득할 수 있었습니다. 이 프로젝트를 하며 얻은 경험은 웹 개발자로의 성장의 밑바탕이되고 향후 신입 프론트엔드 개발자로 취업해도 
                        빠르게 적응하여 회사에 기여할 수 있게 해주는 원동력이 될 것이라 생각합니다.
                    </p>
                    <p className="text-xl my-1">2. 꾸준히 성장할 수 있는 동기부여</p>
                    <p className="text-xl ml-6 my-1">▶ 지금 되돌아보면, 그동안 수행한 프로젝트들은 한번 완성하면 수정해야 할 부분이 남아있어도 사후 관리를 하지않아 프로젝트의 가치가 하락하고
                        개발자로서의 발전 기회도 놓치게 되었다고 생각합니다. 하지만 이 웹 포트폴리오는 지금은 부족해 보일수도 있지만 향후에도 수행한 프로젝트들을 추가할수 있고 새로운 컨텐츠도 
                        구상하여 추가하는 등 꾸준히 관리하며 퀄리티를 더욱 끌어올리고 저의 웹 개발 역량을 계속 성장시킬 수 있는 좋은 계기가 될 것 같습니다. 
                    </p>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* 프로젝트 소감 */}
                <div>
                    <p className="text-2xl my-3">◎ 프로젝트 소감</p>
                    <p className="text-xl ml-6 my-1">▶ 웹 개발자로 다시 시작하기 위해 이곳저곳 이력서를 넣었지만 번번히 탈락하면서 공백기가 1년이 넘고 뭔가 이루어놓은 것이 없는 저가
                        채용할만한 메리트가 없는 지원자라는 사실이 와닿았습니다. 이런 상황을 극복하기 위해 제 자신을 어필할 수 있는 웹 포트폴리오를 만들어 보기로 했습니다. 이전 회사에서 웹 개발과 
                        거의 접점이 없어서 어떻게 시작해야할지 막막했지만 컴퓨터소프트웨어공학과를 전공한 덕분에 빠르게 다시 웹 개발을 위한 지식을 습득하고 프로젝트를 수행할 수 있었습니다. 
                        프로젝트 진행도가 생각보다 진척이 되지않아 초조해지기도 했지만. 포기하지 않고 제 자신을 어필할 수 있는 결과물을 만들어 낼 수 있었고 웹 개발자로 다시 시작할수 있는 
                        발판을 다졌다고 생각합니다.
                    </p>
                    <br></br>
                </div>
            </div>
        </div>
    );
}