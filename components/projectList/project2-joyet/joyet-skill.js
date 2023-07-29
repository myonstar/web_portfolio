// 프로젝트 2번 "졸업작품 Joyet"의 '기술 스택' 클릭 시의 컴포넌트를 구성
import Image from "next/image";

export default function JoyetSkill() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_html_css = `/html&css.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_bootstrap_logo = `/bootstrap-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_js_logo = `/js-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_jsp_logo = `/jsp-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_java_logo = `/java-logo.webp?${(Math.random() * 7).toString(7)}`
    
    return (
        <div>
            {/* 기술 스택 설명 전체 div 틀 */}
            <div>
                {/* HTML & CSS 관련 설명 */}
                <h1 className="text-xl mb-5">◎ HTML & CSS로 웹 페이지의 뼈대 구축 및 스타일 적용</h1>
                <div className="flex">
                    <div className="w-1/2 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_html_css}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base ml-6 my-3">HTML태그들을 사용하여 웹 페이지의 뼈대를 구축하고, 각 요소들을 배치하여 사용자가 정보를 쉽게 찾을 수 있도록 했고
                                    CSS로 웹 페이지의 텍스트 스타일, 배경색, 여백 등을 조정하였습니다.
                                </p>
                                <p className="text-base ml-6 my-3">웹 개발의 기초적인 언어지만 웹 페이지의 품질과 가독성을 높이기 위해 최대한 이해하고 활용하기 위해 노력했습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bootstrap 추가 설명 */}
                    <div className="w-1/4 mr-auto">
                        <div>
                            <Image
                                src={imgSource_bootstrap_logo}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">추가로, Bootstrap 프론트엔드 프레임워크를 사용하여 모바일 화면에서도 웹 페이지를 반응형 웹으로 구축하여 모바일 화면에서도
                            원활하게 표시할 수 있도록 조치하였습니다.</p>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* JavaScript 관련 설명 */}
                <h1 className="text-xl mb-5">◎ JavaScript로 웹 페이지의 동적인 기능과 상호작용을 구현</h1>
                <div className="flex">
                    <div className="w-2/3 mr-auto">
                        <div className="flex">
                            <div className="w-1/2 mr-auto">
                                <Image
                                    src={imgSource_js_logo}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div>
                                <p className="text-base ml-6 my-3">Javascript를 사용하여 페이지 이동을 제어하고, 메인 페이지의 영양소 그래프를 표시하거나, 달력을 생성하는 등
                                    웹 페이지의 동적인 기능들을 구현했습니다.
                                </p>
                                <p className="text-base ml-6 my-3">HTML과 CSS만 사용해서 만들어진 웹 페이지는 멈춰있는 웹 문서 수준에 지나지 않지만,
                                    Javascript를 잘 사용하면 웹 페이지가 움직이고, 웹 페이지를 이용하는 사용자들에게 재미있고 흥미로운 경험을 줄 수 있다는 사실을 알게 되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* Jsp와 Java 관련 설명 */}
                <h1 className="text-xl mb-5">◎ JSP를 활용하여 서버에서 오는 데이터를 처리하고 요청을 전송하는 기능 개발</h1>
                <div className="flex">
                    <div className="w-2/3 mr-auto">
                        <div className="flex">
                            <div className="w-1/4">
                                <Image
                                    src={imgSource_jsp_logo}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-2/3">
                                <p className="text-base ml-6 my-3">HTML, CSS, Javascript로 웹 페이지를 구성했지만, 무엇보다도 다른 팀원들이 구축한 서버, DB와 웹 페이지가
                                    서로 상호작용하는 것이 가장 중요했습니다. 이를 위해 HTML문서에 Java 코드를 삽입하여 웹 애플리케이션의 동작을 제어하고 데이터를 처리할 수 있게 해주는
                                    JSP를 활용하였습니다.
                                </p>
                                <p className="text-base ml-6 my-3">JSP의 스크립틀릿 태그 안에 서버와 통신하는 Java 코드를 작성하여 서버에서 받아온 데이터를 현재 페이지에서 활용할 수 있도록
                                    했습니다. 또한 JSP의 내장 객체를 활용하여 사용자의 로그인 세션을 유지하거나, 이전 페이지에서 선택한 요소들의 값을 전달받아 활용하는 등 웹 페이지가
                                    다른 팀원이 구축한 서버와 통신하도록 하여 좀 더 동적으로 구축할 수 있었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bootstrap 추가 설명 */}
                    <div className="w-1/4 mr-auto">
                        <div>
                            <Image
                                src={imgSource_java_logo}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">저는 C보다 Java가 더 익숙하여 PHP대신 JSP를 활용하여 서버, DB와 상호작용하는 웹 페이지를 구축하였고,
                            Java 활용 능력을 더욱 향상시킬 수 있었습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}