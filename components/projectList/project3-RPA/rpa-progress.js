// 프로젝트 3번 "롯데정밀화학 RPA 구축 프로젝트"의 '개발 과정' 클릭 시의 컴포넌트를 구성 (리팩토링 필요)
import Image from "next/image";

export default function RPAProgress() {
    // 파일 이름에 랜덤값을 붙이고 이미지 캐시로 인해 갱신이 되지않는 문제 해결
    const imgSource_pdf_text = `/pdf-text.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_rpa_ocr = `/rpa-ocr.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_ocr_result = `/ocr-result.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_rpa_security = `/rpa-security.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_vbs_logo = `/vbs-logo.webp?${(Math.random() * 7).toString(7)}`
    const imgSource_vb_sample = `/vb-sample.webp?${(Math.random() * 7).toString(7)}`

    return (
        <div>
            {/* 개발 상세 전체 div 틀 */}
            <div>
                {/* OCR 활용 사례 설명 영역 */}
                <h1 className="text-xl mb-5">◎ 개발 주요 포인트 : 스캔된 이미지에서 텍스트 추출을 위해 이미지 인식기능을 사용</h1>
                <div className="flex">
                    {/* 고객사의 PDF(이미지) -> Text 추출 요청사항 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 문제 상황 -</h1>
                        <div>
                            <Image
                                src={imgSource_pdf_text}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base mt-3">메일로 도착한 PDF파일에서 텍스트를 추출해야했으나 이미지로 되어있어 간편한 텍스트 추출이 불가</p>
                    </div>
                    {/* OCR 활용 설명 */}
                    <div className="w-1/4 mx-auto">
                        <h1 className="text-xl text-center mb-1">- 해결 방안 -</h1>
                        <div>
                            <Image
                                src={imgSource_rpa_ocr}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base my-3">RPA 솔루션이 제공하는 OCR(광학 문자 인식) 기능을 사용하여 이미지에 있는 텍스트를 추출</p>
                        <p className="text-base text-blue-500 dark:text-blue-300">자동화 봇이 O와 0, I와 l, 1 등 비슷한 문자들을 잘못 읽어내지 않도록 예외사항을 처리하며
                            정확도를 개선했습니다.</p>
                    </div>
                    {/* OCR 활용 결과 설명 */}
                    <div className="w-1/4 ml-auto">
                        <h1 className="text-xl text-center mb-1">- 결과 -</h1>
                        <div>
                            <Image
                                src={imgSource_ocr_result}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                        </div>
                        <p className="text-base my-3">봇이 추출된 수많은 텍스트 데이터들을 정리 후 전자문서에 기입하여 결과물을 담당자에게 전송</p>
                        <p className="text-base text-blue-500 dark:text-blue-300">오래 걸리는 작업을 봇이 새벽에 처리 후 결과물을 직원들이 출근 직후 바로 활용하여 업무 효율성이
                            향상되었습니다.</p>
                    </div>
                </div>
                {/* 구분선 작성 */}
                <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-500"></hr>
                {/* VBScript 활용 사례 설명 영역 */}
                <h1 className="text-xl my-5">◎ 개발 주요 포인트 : VBScript를 활용하여 보안프로그램으로 인한 제한 상황 극복</h1>
                <div className="flex">
                    {/* 보안 프로그램으로 인한 문제 상황 설명 */}
                    <div className="w-1/4 mr-auto">
                        <h1 className="text-xl text-center mb-1">- 문제 상황 -</h1>
                        <div>
                            <Image
                                src={imgSource_rpa_security}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                            <p className="text-base my-3">Bot이 파일을 편집해야했으나, 이를 고객사의 사내 보안프로그램이 불법행위로 감지하여 파일의 Read & Write를 금지하는 상황 발생</p>
                        </div>
                    </div>
                    {/* VBScript 요구 설명 */}
                    <div className="w-1/4 mx-auto">
                        <h1 className="text-xl text-center mb-1">- 해결 방안 -</h1>
                        <div>
                            <Image
                                src={imgSource_vbs_logo}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                            <p className="text-base my-3">고객사는 Visual Basic의 문법을 대부분 차용한 VBScript라는 언어를 사용하여 스크립트를 작성 및 프로젝트 진행 요청</p>
                            <p className="text-base text-blue-500 dark:text-blue-300">지금은 거의 사용되지 않는 생소한 언어였으나,
                                프로젝트 완수를 위해 개인 시간을 할애하며 사용법을 습득했습니다.</p>
                        </div>
                    </div>
                    {/* VBScript 활용 결과 설명 */}
                    <div className="w-1/4 ml-auto">
                        <h1 className="text-xl text-center mb-1">- 결과 -</h1>
                        <div>
                            <Image
                                src={imgSource_vb_sample}
                                alt="Image Not Found"
                                width={640}
                                height={480}
                                quality={100} />
                            <p className="text-base my-3">시스템을 직접 조작할 수 있는 권한으로 인한 위험성이 있으나, 고객사가 활용을 요청했고
                                보안프로그램보다 높은 권한을 바탕으로 예외상황 해결</p>
                            <p className="text-base text-blue-500 dark:text-blue-300">사람이 직접 엑셀 파일을 반복적으로 편집하는 과정을 코드로 직접 재현하였으며,
                                사람이 수행했을 때보다 엑셀 작업의 처리 속도가 향상되었습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}