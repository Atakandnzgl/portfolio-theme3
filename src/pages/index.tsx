import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/atakan2.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { useRef } from "react";
import proj1 from "../../public/images/projects/clay-theme.png";
import { GithubIcon } from "@/components/Icons";
import { motion, useMotionValue } from "framer-motion";
import type { StaticImageData } from "next/image";

const FramerImage = motion(Image);
const MotionListItem = motion<HTMLLIElement>("li");

const MovingImg = ({ title, img, link }: { title: string; img: string | StaticImageData; link: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLElement | null>(null);
  function handleMouse(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (imgRef.current instanceof HTMLElement) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  }
  function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (imgRef.current instanceof HTMLElement) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{ x: x, y: y }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
        />
      </Link>
    </>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github, tools, date }: any) => {
  return (
    <article className="rounded-2xl border border-neutral-700 bg-neutral-900 p-8 max-w-2xl w-full mx-auto shadow-md overflow-hidden xs:rounded-xl">
      <div className="flex items-center gap-4 group">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <span className="block h-1 w-8 bg-neutral-600 transition-all duration-300 group-hover:w-32 group-hover:bg-blue-400"></span>
      </div>
      <span className="inline-block mt-4 px-3 py-1 rounded bg-neutral-800 text-blue-300 text-sm font-medium">{type}</span>
      <span className="inline-block mt-2 px-3 py-1 rounded bg-neutral-800 text-blue-300 text-sm font-medium ml-2">{tools}</span>
      <p className="mt-6 text-lg text-neutral-300">{summary}</p>
      <div className="mt-8 flex gap-4">
        <Link href={link} className="text-blue-400 hover:underline flex items-center gap-1" aria-label="Project link">
          <GithubIcon /> Visit Project
        </Link>
        <Link href={github} className="text-blue-400 hover:underline flex items-center gap-1" aria-label="Github link">
          <GithubIcon /> View Code
        </Link>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools, date, github }: any) => {
  return (
    <article className="rounded-2xl border border-neutral-700 bg-neutral-900 p-8 max-w-2xl w-full mx-auto shadow-md overflow-hidden xs:rounded-lg">
      <div className="flex items-center gap-4 group">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <span className="block h-1 w-8 bg-neutral-600 transition-all duration-300 group-hover:w-32 group-hover:bg-blue-400"></span>
      </div>
      <span className="inline-block mt-4 px-3 py-1 rounded bg-neutral-800 text-blue-300 text-sm font-medium">{type}</span>
      <span className="inline-block mt-2 px-3 py-1 rounded bg-neutral-800 text-blue-300 text-sm font-medium ml-2">{tools}</span>
      <p className="mt-6 text-lg text-neutral-300">Açıklama buraya gelecek.</p>
      <div className="mt-8 flex gap-4">
        <Link href={link} className="text-blue-400 hover:underline flex items-center gap-1" aria-label="Project link">
          <GithubIcon /> Visit Project
        </Link>
        <Link href={github} className="text-blue-400 hover:underline flex items-center gap-1" aria-label="Github link">
          <GithubIcon /> View Code
        </Link>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Next Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <TransitionEffect />
      <article className={`flex flex-col min-h-screen items-center text-dark dark:text-light sm:items-start`}>
        {/* Home Section */}
        <section id="home" className="w-full min-h-screen flex items-center justify-center">
          <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
            <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
              <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              </div>
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Hey, I'm Atakan"
                  className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                  <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                    I create engaging web experiences.
                  </h2>
                </div>
                <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                  I'm a front-end web developer at Stellar Innovations, passionate about creating dynamic and user-friendly web experiences. With a keen eye for design and a robust understanding of front-end and back-end technologies.
                </p>
                <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                  <Link
                    href="#about"
                    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base`}
                  >
                    Get To Know Me
                  </Link>
                  <Link
                    href="#projects"
                    className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:border-light hover:bg-dark hover:text-light dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base`}
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </section>
        {/* About Section */}
        <section id="about" className="w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark">
          <Layout className="pt-16">
            <AnimatedText
              text="Let Passion Lead Your Purpose 🔥"
              className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">BIOGRAPHY</h2>
                <p className="font-medium ">
                  I'm Atakan, a dedicated web developer at Stellar Innovations, where I specialize in creating dynamic and user-centric web experiences. With over a decade of experience in the industry, I have honed my skills in both front-end and back-end technologies, allowing me to deliver responsive and high-performance websites and applications.
                </p>
              </div>
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
                <Image
                  src={profilePic}
                  alt="Profile"
                  className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                  width={340}
                  height={340}
                />
              </div>
            </div>
            <HireMe />
            <Skills />
            <Experience />
          </Layout>
        </section>
        {/* Projects Section */}
        <section id="projects" className="w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark">
          <Layout className="pt-16">
            <AnimatedText
              text="Projects"
              className="mb-8 !text-5xl !leading-tight lg:!text-4xl sm:mb-6 sm:!text-3xl xs:!text-2xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeaturedProject
                type="Featured Project"
                title="Clay Theme"
                summary="A modern and responsive theme for WordPress"
                img={proj1}
                link="https://claytheme.com"
                github="https://github.com/claytheme"
                tools="WordPress, PHP, CSS"
                date="2023"
              />
              <Project
                title="Project 2"
                type="Project Type"
                img={proj1}
                link="https://project2.com"
                tools="Tools used"
                date="2023"
                github="https://github.com/project2"
              />
              <Project
                title="Project 3"
                type="Project Type"
                img={proj1}
                link="https://project3.com"
                tools="Tools used"
                date="2023"
                github="https://github.com/project3"
              />
            </div>
          </Layout>
        </section>
        {/* Contact Section */}
        <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark">
          <Layout className="pt-16">
            <AnimatedText
              text="Begin Today, I'm One Message Away 👋"
              className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
              <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
              <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
                <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">What's Next?</h2>
                <div className="w-full"></div>
                <p className="">My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to message me about any relevant project updates.</p>
              </div>
              <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
                <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
                  <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                    <form name="contact-form" method="POST">
                      <input type="hidden" name="form-name" value="contact-form" />
                      <p className="hidden">
                        <label>Name<input name="bot-field" /></label>
                      </p>
                      <div className="col-span-1 p-2">
                        <label className="block text-sm font-medium text-dark dark:text-light">
                          Your Name:
                          <input type="text" name="name" required autoComplete="name" className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light" />
                        </label>
                      </div>
                      <div className="col-span-1 p-2">
                        <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                          Your Email:
                          <input type="email" name="email" required autoComplete="off" className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light" />
                        </label>
                      </div>
                      <div className="col-span-1 p-2">
                        <label htmlFor="message" className="block text-sm font-medium text-dark/75 dark:text-light/75">
                          Message:
                          <textarea name="message" id="message" required rows={4} className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"></textarea>
                        </label>
                      </div>
                      <div className="col-span-1 p-2">
                        <button type="submit" className="px-4 py-2 font-bold capitalize text-light bg-dark border border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light dark:hover:bg-dark dark:text-dark dark:hover:text-light">Send it!</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </section>
      </article>
    </>
  );
}
