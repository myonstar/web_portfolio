// 프로젝트 2번 "졸업작품 Joyet"의 '개발 상세' 클릭 시의 컴포넌트를 구성 (리팩토링 필요)
import Image from "next/image";

export default function JoyetProgress() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_joyet_login = `/joyet-login.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_main = `/joyet-main.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_diet = `/joyet-diet.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_goal = `/joyet-goal.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_request = `/joyet-request.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_protocol = `/joyet-protocol.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_joyet_arg = `/joyet-arg.webp?${(Math.random() * 7).toString(7)}`

    return (
        <div>
            {/* 개발 상세 전체 div 틀 */}
            <div>
                {/* 웹 관련 주요 기능 설명 시작 */}
                <h1 className="text-xl mb-5">◎ 프로젝트에서 저는 웹 사이트 개발을 담당했습니다.</h1>
                <div className="flex">
                    {/* 로그인 기능 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 회원관리 기능 -</h1>
                        <div>
                            <Image
                                src={imgSource_joyet_login}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">서버, DB와 연동되어 회원가입 시 입력한 이메일로 온 인증번호를 입력하여 가입 후 회원 로그인, 아이디/비밀번호 찾기 및 회원 탈퇴가 가능한
                            회원관리 기능을 개발하였습니다.</p>
                    </div>
                    {/* 메인 페이지 설명 */}
                    <div className="w-1/2 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 조이어트 메인 페이지 -</h1>
                        {/* Flex를 넣어 이미지 - 설명이 가로로 나열되게 배치 */}
                        <div className="flex">
                            <div className="w-1/2">
                                <Image
                                    src={imgSource_joyet_main}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base ml-3 my-3">다른 팀원이 구축한 서버 및 DB에서 로그인한 회원의 여러가지 데이터를 받아와 표시해줄 메인 페이지를 개발하였습니다.</p>
                                <p className="text-base ml-3 my-3">메인 페이지에는 회원의 다이어트 목표, 식단(영양소 섭취량) 및 운동 수행 정보가 표시되도록 UI 배치 및 디자인을 수행했습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex my-3">
                    {/* 식단 달력 페이지 설명 */}
                    <div className="w-1/2 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 식단 표시 페이지 -</h1>
                        {/* Flex를 넣어 이미지 - 설명이 가로로 나열되게 배치 */}
                        <div className="flex">
                            <div className="w-1/2">
                                <Image
                                    src={imgSource_joyet_diet}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base ml-3 my-3">달력 형식의 페이지에는 회원이 먹었던 식단을 입력하면 칼로리 및 식단 정보를 표시하도록 디자인했습니다.</p>
                                <p className="text-base ml-3 my-3">또 영양적으로 부족한 부분이 있으면 그것을 채우는 식단을 추천하고 입력된 칼로리 양에 따른 운동을 추천하도록 개발하였습니다.</p>
                            </div>
                        </div>
                    </div>
                    {/* 목표 설정/관리 페이지 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 목표 설정 기능 -</h1>
                        <div>
                            <Image
                                src={imgSource_joyet_goal}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">웹 사이트를 이용하는 회원이 직접 목표 체중과 기간을 설정하여 동기부여를 가질 수 있도록 목표 설정 기능을 개발하였습니다.</p>
                    </div>
                </div>
                {/* 웹 관련 주요 기능 설명 끝 */}
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* 프로토콜 관련 설명 시작 */}
                <h1 className="text-xl my-5">◎ 웹 페이지는 UI에 표시될 데이터를 다른 팀원이 구축한 서버, DB와 통신하여 가지고 오도록 개발하였습니다.</h1>
                <div className="flex">
                    {/* 프로토콜 약속의 필요성 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 프로토콜 약속의 필요성 -</h1>
                        <div>
                            <Image
                                src={imgSource_joyet_request}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">웹 사이트 로드 시 사용할 데이터를 서버에 요청할 때, 서버쪽에서 정확히 어떤 데이터를 전달해야하는지 결정이 힘든 문제가 발생했습니다.</p>
                        <p className="text-base text-blue-500 dark:text-blue-300 mt-3">페이지 로드 시 마다 DB에 저장되어있는 모든 데이터를 웹으로 전송하는 것은 상당히 비효율적이기 때문에
                            사전에 인자들을 약속하고 서버에 특정 인자를 보내면 해당 인자에 맞는 데이터만 전달해주도록 처리하여 이 문제를 해결했습니다.</p>
                    </div>
                    {/* 바이트 배열 설명 */}
                    <div className="w-2/3 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 바이트 배열 통신 코드 -</h1>
                        <div className="flex">
                            <div className="w-1/2">
                                <Image
                                    src={imgSource_joyet_protocol}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base ml-3 my-3"> 팀원들과 회의를 통해 도움을 받아, 서버와 통신할 때 바이트 배열 형태로 요청을 전송하거나 데이터를 받는 코드를 설계했습니다.
                                </p>
                                <p className="text-base text-blue-500 dark:text-blue-300 ml-3 mt-3">
                                    바이트 배열을 사용한 이유는 크게 두가지 입니다. 첫번째는 데이터를 바이트 배열로 변환하여 전송하면 데이터 크기를 최소화하고 네트워크 상에서 효율적으로
                                    전송할 수 있으며, 두번째는 이진 형태로 데이터를 저장하므로 서버 측에서 문자열, 숫자, 이미지 등 다양한 데이터 유형을 처리하기에 적합했기 때문입니다.
                                </p>
                            </div>
                        </div>
                        {/* 프로토콜 인자 설명 */}
                        <h1 className="text-xl text-center mb-1">- 프로토콜 인자 -</h1>
                        <div className="flex">
                            <div className="w-1/2">
                                <Image
                                    src={imgSource_joyet_arg}
                                    alt="Image Not Found"
                                    width={640}
                                    height={480}
                                    quality={100} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base ml-3 my-3">인자와 데이터 문자열을 구분하기 위해 '§'문자를 사용하기로 결정했고, '인자번호+§'를 서버에 전송하면 서버는 인자번호에
                                    해당하는 데이터를 전송하거나, 특정 동작을 수행합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 프로토콜 관련 설명 끝 */}
            </div>
        </div>
    );
}