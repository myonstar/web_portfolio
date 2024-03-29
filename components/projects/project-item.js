// 프로젝트 목록 페이지에있는 각각의 프로젝트 아이템 컴포넌트를 구성
//현재 구버전 Image (나중에 최신버전으로 바꾸기)
import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {

    const title = data.properties.Name.title[0].plain_text
    // title에서 프로제트 번호 추출하기
    const projectNumber = Number(title.split('.')[0])
    // "/projectList/project"와 프로제트 번호를 합쳐서 리다이렉션 주소 만들기 (ex. projects+숫자) - 폴더 및 파일 주소 / 구성방식 변경에 따른 코드 수정이 필요할 수 있음
    const projectLink = "/projectList/project"+projectNumber
    //const github = data.properties.Github.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');
        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;
    }
    return (     
        <div className="project-card">
            {/* <Link href={projectLink}> */}
            {/* Link의 href에 Router.push처럼 쿼리스트링을 넘길 수 있는 것으로 보임 */}
            <Link href={{
                pathname: '/projectInfo',
                query : { name : projectNumber}
            }}>
                <Image
                    className="rounded-t-xl"
                    src={`/project_logo_${projectNumber}.webp`}
                    alt="cover image Not Found"
                    width="100%"
                    height="60%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
                <div className="p-4 flex flex-col">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <h3 className="mt-4 text-xl">{description}</h3>
                    {/* <a href={github}>깃허브 링크</a> */}
                    <p className="my-4 text-xl">
                        작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                    </p>
                    <div className="flex items-start mt-2">
                        {tags.map((aTag) => (
                            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                        ))}

                    </div>
                </div>
            </Link>
        </div>
    );
}