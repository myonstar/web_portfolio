// 프로젝트 1번 "웹 포트폴리오 제작"의 '기술 스택' 클릭 시의 컴포넌트를 구성
import Image from "next/image";

export default function PortfolioSkill() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_react_logo = `/react-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_component_sample = `/component-sample.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_nextjs_logo = `/nextjs-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_frontend = `/frontend.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_tailwindcss_logo = `/tailwindcss-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_tailwindcss_sample = `/tailwindcss-sample.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_tailwindcss_rating = `/tailwindcss-rating.webp?${(Math.random() * 7).toString(7)}`

    return (
        <div>
            {/* 기술 스택 설명 전체 div 틀 */}
            <div>
                {/* React 관련 설명*/}
                <h1 className="text-xl mb-5">◎ 컴포넌트를 기반으로 UI를 구성해주는 React의 강력한 이점들을 깨닫다</h1>
                <div className="flex">
                    <div className="w-1/2 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_react_logo}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                                <p className="text-base my-3">최근 유행한다는 Next.js를 사용하여 웹 포트폴리오를 만들어보자는 목표를 정했고 Next.js는 React기반의 오픈 소스 프레임워크이기 때문에
                                    우선 React를 독학하며 기반 지식을 쌓기로 했습니다.
                                </p>
                            </div>
                            <div className="w-1/2 ml-3">
                                <p className="text-base ml-2">전공 지식과 JavaScript에 대한 경험이 있어서 학습에 지장은 없었지만, React의 첫 인상은 웹 개발을 추구하는 방식이
                                    기존과 다르다는 점이었습니다.
                                </p>
                                <p className="text-base ml-2 mt-2 text-blue-500 dark:text-blue-300">
                                    하지만 React를 파고들수록 컴포넌트를 기반으로 UI를 구성하는 React가 가진 강점인 재사용성과 유지보수의 용이성, 단방향 데이터 흐름 지향성을 체감할 수 있었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 컴포넌트의 이점 추가 설명 */}
                    <div className="w-1/3 mr-auto">
                        <div>
                            <Image
                                src={imgSource_component_sample}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">React로 직접 웹 사이트를 구축하면서 사용할 컴포넌트들을 미리 만들어놓고 필요한 페이지마다 해당 컴포넌트들을 사용함으로써
                            코드의 중복을 상당히 줄일 수 있었습니다. 또한, 수정이 필요할 때는 해당 컴포넌트만 수정하면 되어서 유지보수가 훨씬 용이하다는 점도 깨달았습니다.
                        </p>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* Next.js 관련 설명*/}
                <h1 className="text-xl mb-5">◎ React 프레임워크인 Next.js로 프론트엔드 개발</h1>
                <div className="flex">
                    <div className="w-1/2 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_nextjs_logo}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2 ml-3">
                                <p className="text-base ml-2">React는 현재 높은 점유율을 가진 프론트엔드 라이브러리지만 학습을 하며 React 자체만으로 개발을 할 때 여러 한계점들을
                                    알게 되었습니다. 따라서 개발자로써 조금 더 도약하고자 Next.js를 활용하여 프론트엔드 개발을 수행하기로 결정했습니다.
                                </p>
                            </div>
                        </div>
                        <p className="text-base mt-2 text-blue-500 dark:text-blue-300">처음에는 Next.js가 React보다 더 좋다라는 의견들을 보고 단순하게 따라해보려 했지만,
                            프로젝트를 수행하며 Next.js가 왜 필요한지 진지하게 생각했습니다. 그리고 더 나은 SSR 지원, 파일 기반 라우팅, 자동 코드 분할 등 React가 가진 한계를 
                            극복하기 위해 Next.js가 탄생되었다는 사실을 깨달을 수 있었습니다.
                        </p>
                    </div>
                    <div className="w-1/3 mr-auto">
                        <div>
                            <Image
                                src={imgSource_frontend}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">React와 Next.js를 공부하고 활용하며 CSR과 SSR의 개념과 그 차이,
                            그리고 SSR이 중요한 이유인 SEO 등 프론트엔드 웹 개발자로서 알아야하는 중요한 개념들을 습득할 수 있었습니다.
                        </p>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* Tailwind CSS 관련 설명*/}
                <h1 className="text-xl mb-5">◎ Tailwind CSS로 쉽고 빠르게 웹 디자인 결과물 생성</h1>
                <div className="flex">
                    <div className="w-1/2 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_tailwindcss_logo}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2 ml-3">
                                <p className="text-base ml-2">웹 디자인을 위해 CSS관련 정보들을 수집하던 중 'Tailwind CSS'라는 CSS 프레임워크를 알게 되었고
                                    공식 문서에 'HTML을 벗어나지 않고도 최신 웹사이트를 빠르게 구축할 수 있습니다'라는 문장을 보고 흥미가 생겨 Tailwind CSS를 사용해 웹 디자인을 해보았습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Tailwind CSS의 좋았던 사용 소감 설명 */}
                    <div className="w-2/5 mr-auto">
                        <div>
                            <Image
                                src={imgSource_tailwindcss_sample}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">Tailwind CSS는 사전에 정의된 유틸리티 클래스들을 사용하여 HTML에 적용할 수 있으며, 필요에 따라 사용자가 원하는 스타일로
                            정의된 클래스를 커스터마이징이 가능한 방식이었습니다.
                        </p>
                        <p className="text-base mt-2 text-blue-500 dark:text-blue-300">
                            직접 사용해보니, 스타일의 네이밍을 필요가 걱정도 없고 CSS파일도 따로 생성하지 않으면서 손쉽게 요소들의 스타일을 지정하고
                            변경할 수 있어서 디자인 작업이 편리했습니다.
                        </p>
                    </div>
                </div>
                {/* Tailwind CSS의 아쉬운 점 관련 설명*/}
                <div className="flex mt-5">
                    <div className="w-2/3 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_tailwindcss_rating}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2 ml-3">
                                <p className="text-base ml-2">Tailwind CSS는 장점만 있는것은 아니었습니다. 쉽고 빠르게 스타일을 적용할 수 있었지만, 클래스를 추가하는 특성상
                                    코드가 복잡해지고 가독성이 떨어져서 향후 유지보수의 난이도가 높을 것으로 생각되었습니다. 또한, Tailwind CSS만의 방식을 따라야 했기
                                    때문에 초기에는 학습 곡선이 조금 높았습니다.
                                </p>
                                <p className="text-base ml-2 mt-3 text-blue-500 dark:text-blue-300">
                                    하지만 그만큼 장점도 막강했기 때문에 향후 CSS를 Tailwind CSS에 의존하지 않는다면 프로젝트에 따라 장단점을 고려하여 적절히 활용할 수 있는
                                    충분히 메리트있는 프레임워크라고 생각합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}