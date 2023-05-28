// 프로젝트 상세정보를 보여줄 페이지
import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from 'next/router'
// 프로젝트 갯수 만큼 import -> 차후 개선 필요
import Project1 from "@/components/projectList/project1";
import Project2 from "@/components/projectList/project2";

let i = 0;

export default function projectInfo(props) {
    // const router = useRouter()
    // if(i=0) {
    //     const ActiveProjectInfo = Project1
    // } else {
    //     const ActiveProjectInfo = Project2
    // }
    const ActiveProjectInfo = Project1
    console.log("Halo")
    // console.log(router)
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
                    <ActiveProjectInfo />
                </div>
            </Layout>
        </>
    );
}