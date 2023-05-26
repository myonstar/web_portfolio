// RPA 소개 페이지

import Carousel from "@/components/carousel";
import Layout from "@/components/layout";
import Head from "next/head";

export default function aboutRPA() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>RPA가 무엇인가요?</title>
                    <meta name="description" content="RPA 소개" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="flex flex-col min-h-screen mx-20 my-10">
                    <Carousel></Carousel>
                </div>

            </div>
        </Layout>
    );
}