import Portfolio from "@/constants/models/Portfolio";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { HireMe2 } from "@/components/HireMe2";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

interface PersonaPortfolioPageProps {
    portfolio: Portfolio;
}

const PersonaPortfolioPage = ({ portfolio }: PersonaPortfolioPageProps) => {
    return (
        <>
            <Head>
                <title>{`${portfolio.firstName} ${portfolio.lastName} | Portfolio`}</title>
                <meta name="description" content={portfolio.about} />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text={`${portfolio.firstName} ${portfolio.lastName}`}
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />

                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                BIOGRAPHY
                            </h2>
                            <p className="font-medium">{portfolio.about}</p>
                        </div>
                        
                        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
                            <img
                                src={portfolio.imgUrl}
                                alt={`${portfolio.firstName} ${portfolio.lastName}`}
                                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    {portfolio.experiences.length}+
                                </span>
                                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Years of Experience
                                </h3>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    {portfolio.skills.length}
                                </span>
                                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Skills
                                </h3>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    {portfolio.blogs.length}
                                </span>
                                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projects
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <HireMe2 />
                </Layout>
            </main>
        </>
    );
};

export default PersonaPortfolioPage; 