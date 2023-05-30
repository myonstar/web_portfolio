// RPA 소개 페이지

import Layout from "@/components/layout";
import Head from "next/head";
import RPASwiper from "@/components/rpa-swiper";

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
            
                <div className="mx-20 my-10">
                    <RPASwiper></RPASwiper>
                </div>

            </div>
        </Layout>
    );
}