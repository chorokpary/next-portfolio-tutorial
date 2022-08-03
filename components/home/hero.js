import Animation from "./animation"
import Link from 'next/link'

export default function Here() {
    return(
        <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요빡빡이 입니다!
            <br className="hidden lg:inline-block"/>오늘도 빡코딩?
            </h1>
            <p className="mb-8 leading-relaxed">우리의 있으며, 공자는 작고 사랑의 구하기 무엇이 것이다. 이상은 새 석가는 행복스럽고 피다. 가는 그러므로 인생에 청춘이 평화스러운 이것은 힘있다. 인간의 들어 노년에게서 원질이 위하여, 이상의 있으랴? 방지하는 길을 않는 뿐이다. 그들의 작고 청춘의 우리는 품에 아름답고 황금시대를 귀는 없는 것이다. 보배를 우리 예수는 풀밭에 그들을 별과 아니다. 싸인 우리 하였으며, 바이며, 물방아 눈에 기관과 끝에 아니다. 내려온 때에, 소금이라 그것을 청춘이 예가 설레는 것이다. 사는가 가치를 눈이 이것이야말로 것이다. 천자만홍이 듣기만 모래뿐일 얼음이 청춘은 가는 불러 우리 지혜는 위하여서.</p>
            <div className="flex justify-center">
                <Link href="/projects">
                  <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</a>
                </Link>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
        </div>
        </>
    );
}