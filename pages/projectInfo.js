// 프로젝트 상세정보를 보여줄 페이지
import Layout from "@/components/layout";
import Head from "next/head";
// useRouter 사용을 위해 Import
import { useRouter } from "next/router";
// 프로젝트 갯수 만큼 import -> 차후 개선 필요
import Project1 from "@/components/projectList/project1";
import Project2 from "@/components/projectList/project2";
import Project3 from "@/components/projectList/project3";
import ProjectNotFound from "@/components/projectList/project-not-found";


export default function projectInfo() {
    // 프로젝트 페이저 선택 변수 초기화
    let i = 0;
    // Router에서 queryString 데이터 얻어오기
    const router = useRouter()
    i = Number(router.query.name);
    // ActiveProjectInfo 변수에 조건문 결과에 따라 동적으로 표시할 컴포넌트 할당
    let ActiveProjectInfo;
    if (i === 1) {
        // 지정된 프로젝트 : 웹 포트폴리오 제작기
        ActiveProjectInfo = Project1
    } else if (i === 2) {
        // 지정된 프로젝트 : 조이어트 프로젝트
        ActiveProjectInfo = Project2
    } else if (i === 3) {
        // 지정된 프로젝트 : 롯데 정밀화학 프로젝트
        ActiveProjectInfo = Project3
    } else {
        // 잘못된 접근일시 표시할 컴포넌트
        ActiveProjectInfo = ProjectNotFound
    }
    return (
        <>
            <Layout>
                <Head>
                    <title>프로젝트 상세정보</title>
                    <meta name="description" content="프로젝트 상세정보 확인" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <ActiveProjectInfo></ActiveProjectInfo>
                </div>
            </Layout>
        </>
    );
}