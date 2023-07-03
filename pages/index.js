// 웹 포트폴리오 메인 페이지

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      {/* 웹 포트폴리오 헤더 */}
      <Head>
        {/* 포트폴리오 이름 */}
        <title>새로운 도전과 목표를 추구하는 개발자입니다.</title>
        <meta name="description" content="웹 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 웹 포트폴리오 메인 페이지 구성 */}
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero></Hero>
        </div>
      </section>
    </Layout>
  )
}
