// 프로젝트 1번 "웹 포트폴리오 제작"의 '개발 상세' 클릭 시의 컴포넌트를 구성 (리팩토링 필요)
import Image from "next/image";

export default function PortfolioProgress() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_notion_api = `/notion-api.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_project_thumbnail = `/project-thumbnail.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_project_introduce = `/project-introduce.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_profile_modal = `/profile-modal.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_add_contents = `/add-contents.webp?${(Math.random() * 7).toString(7)}`

    return (
        <div>
            {/* 개발 상세 전체 div 틀 */}
            <div>
                {/* 프로젝트 수행 내역 컨텐츠 설명 */}
                <h1 className="text-xl mb-5">◎ 프로젝트 수행 내역을 보여주는 컨텐츠 구현</h1>
                <div className="flex">
                    {/* 노션 API로 프로젝트 목록 가져오기 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 프로젝트 불러오기 -</h1>
                        <div>
                            <Image
                                src={imgSource_notion_api}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">API를 활용하여 노션에 입력해놓은 프로젝트 목록을 웹 포트폴리오에 로드</p>
                        <p className="text-base text-blue-500 dark:text-blue-300 mt-3">노션에서 프로젝트 목록을 간략하게 관리하고 웹 포트폴리오로 프로젝트를 상세히 설명하는 방식을
                            생각 후 구현해보기로 했습니다.</p>
                    </div>
                    {/* 프로젝트 썸네일 설명 */}
                    <div className="w-1/4 mx-auto">
                        <h1 className="text-xl text-center mb-1">- 로드된 썸네일 활용 -</h1>
                        <div>
                            <Image
                                src={imgSource_project_thumbnail}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">로드된 프로젝트의 썸네일을 클릭하면 각각 프로젝트의 상세 소개 페이지로 이동하도록 구현</p>
                        <p className="text-base text-blue-500 dark:text-blue-300 mt-3">각 썸네일마다 Key를 부여하고 Router와 QueryString을 활용하여 썸네일의
                            Key값을 받아와 클릭한 썸네일에 해당하는 프로젝트 소개 페이지를 로딩하도록 했습니다.</p>
                    </div>
                    {/* 프로젝트 소개 구현 설명 */}
                    <div className="w-1/3 ml-auto">
                        <h1 className="text-xl text-center mb-1">- 프로젝트 상세 소개 -</h1>
                        <div>
                            <Image
                                src={imgSource_project_introduce}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">좌측의 Nav 영역에서 각각의 항목들을 클릭하여 클릭한 항목에 맞는 내용이 동적으로 출력되는 프로젝트 상세 소개 페이지를 구현</p>
                        <p className="text-base text-blue-500 dark:text-blue-300 mt-3">프로젝트 개요, 기술 스택 등 항목에 알맞은 내용을 담은 컴포넌트를 만들어놓고 State를 활용하여
                            Nav 영역에 위치한 각 항목을 클릭 시 해당하는 컴포넌트만 다시 렌더링 하도록 하여 새로고침 없이 프로젝트를 상세히 소개하는 페이지를 구현하였습니다.</p>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* 차후 개선된 부분들 설명 */}
                <h1 className="text-xl mb-5">◎ 더 나은 웹 포트폴리오를 위한 개선 작업 수행</h1>
                <div className="flex">
                    {/* 모달 창을 활용한 프로필 설명 */}
                    <div className="w-1/3 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 1. 'About Me' 추가 -</h1>
                        <div>
                            <Image
                                src={imgSource_profile_modal}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">웹 포트폴리오인데 정작 제 자신을 소개하는 항목이 없다는 것을 깨달았습니다.
                            페이지 상단 헤더에 'About Me'섹션을 추가하고 클릭 시 사진과 연락처, 그리고 주요 이력을 담은 간단한 프로필이 모달 창 형식으로 나타나고 외부 영역 클릭 시
                            창이 닫히도록 구현했습니다.</p>
                    </div>
                    {/* 프로젝트 소개 페이지의 Nav바 추가 및 내용 개선 설명 */}
                    <div className="w-1/3 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 2. 나의 발자취를 더욱 상세히 -</h1>
                        <div>
                            <Image
                                src={imgSource_add_contents}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">프로젝트 소개 페이지를 완성했는데 내용이 많이 부족한 느낌이 들었습니다. 프로젝트 소개 페이지 좌측에 Navigation Bar를 추가하고 
                        세부 항목들을 나누고 각각 항목들에 이미지도 첨부하고 더욱  내용을들 추가해 제가 수행했던 
                        프로젝트들을 더욱 상세히 소개하는 페이지로 개선을 수행하였습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}