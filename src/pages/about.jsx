import React, { useEffect, useRef } from "react"
import Head from "next/head"
import AnimatedText from "../components/AnimatedText"
import Layout from "../components/Layout"
import Image from "next/image"
import ProfileImg from "../../public/images/profile/me.png"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "../components/Skills"
import TransitionEffect from "../components/TransitionEffect"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest <= value) {
        if (value % 1 !== 0) {
          ref.current.textContent = latest.toFixed(1)
        } else {
          ref.current.textContent = latest.toFixed(0)
        }
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export default function About() {
  return (
    <>
      <Head>
        <title>Ahmad Hamza&apos;s Portfolio | About</title>
        <meta
          name="description"
          content="About Ahmad Hamza, Associate Software Engineer with 2+ years of experience in full stack web development."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col dark:text-light items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 sm:mb-8 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start md:col-span-8 justify-start xl:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                Hi, I&apos;m <span className="font-bold">Ahmad Hamza</span>, an
                Associate Software Engineer and passionate Full Stack Web
                Developer with over 3.5 years of professional experience in
                building high-performance web applications. I am dedicated to
                turning ideas and visions into innovative, responsive, and fully
                functional web experiences.
              </p>

              <p className="font-medium my-4">
                I specialize in creating scalable web architectures, integrating
                complex APIs, implementing modern UI/UX principles, and
                optimizing application performance. I believe that great web
                development is about solving real problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium">
                With strong experience working in agile team environments, I
                collaborate closely with designers and backend engineers to
                deliver solutions for both startup and enterprise clients. My
                expertise spans the entire development lifecycle from UI design
                to backend integration and deployment.
              </p>
            </div>

            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl border-2 border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfileImg}
                alt="profile_image"
                className="w-full max-h-[600px] h-auto object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-center gap-y-24 gap-x-4 md:order-3">
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-base sm:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                  <AnimatedNumbers value={3.5} />+
                </span>
                <h2 className="text-lg xl:text-center md:text-base sm:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="w-full mt-32 mb-16">
            <AnimatedText
              text={"Experience"}
              className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
            />

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-4xl">
                <div className="border-l-2 border-dark dark:border-light pl-6 md:pl-4 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark dark:bg-light rounded-full"></div>

                  <div className="mb-8">
                    <h3 className="text-2xl md:text-xl font-bold mb-2">
                      Full Stack Web Developer
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm md:text-xs">
                      <span className="font-semibold text-primary dark:text-primaryDark">
                        Devminified
                      </span>
                      <span className="text-dark/75 dark:text-light/75">•</span>
                      <span className="text-dark/75 dark:text-light/75">
                        June 2024 – Present
                      </span>
                    </div>
                    <p className="font-medium text-dark/75 dark:text-light/75 mb-4">
                      Leading end-to-end development of multiple full-scale web
                      applications, working across the entire development
                      lifecycle from UI design to backend integration and
                      deployment.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-dark/75 dark:text-light/75 font-medium ml-4">
                      <li>
                        Led end-to-end development of multiple full-scale web
                        applications
                      </li>
                      <li>
                        Integrated Firebase, AWS Cognito, and AWS Amplify for
                        secure authentication and real-time data handling
                      </li>
                      <li>
                        Optimized web application performance and ensured
                        consistent, pixel-perfect cross-platform UI/UX
                      </li>
                      <li>
                        Collaborated with UI/UX designers and backend developers
                        to deliver user-centric, high-quality web products
                      </li>
                      <li>
                        Delivered production-ready web applications for both
                        startup and enterprise clients
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl md:text-xl font-bold mb-2">
                      Full Stack Developer
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm md:text-xs">
                      <span className="font-semibold text-primary dark:text-primaryDark">
                        Bravt Cloud
                      </span>
                      <span className="text-dark/75 dark:text-light/75">•</span>
                      <span className="text-dark/75 dark:text-light/75">
                        November 2024 – May 2025
                      </span>
                    </div>
                    <p className="font-medium text-dark/75 dark:text-light/75 mb-4">
                      Developed the frontend and backend of a cloud hosting
                      platform with full ownership after team transitions.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-dark/75 dark:text-light/75 font-medium ml-4">
                      <li>
                        Delivered core features and maintained project
                        continuity under tight deadlines
                      </li>
                      <li>
                        Troubleshot critical issues, optimized performance, and
                        improved platform reliability
                      </li>
                      <li>
                        Collaborated with team members and maintained quality
                        through reviews and iterative improvements
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl md:text-xl font-bold mb-2">
                      Full Stack Developer
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm md:text-xs">
                      <span className="font-semibold text-primary dark:text-primaryDark">
                        Zircon
                      </span>
                      <span className="text-dark/75 dark:text-light/75">•</span>
                      <span className="text-dark/75 dark:text-light/75">
                        April 2023 – December 2023
                      </span>
                    </div>
                    <p className="font-medium text-dark/75 dark:text-light/75 mb-4">
                      Developed a complete perfume e-commerce store with product
                      listings, search, cart, and checkout flows.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-dark/75 dark:text-light/75 font-medium ml-4">
                      <li>
                        Implemented a clean, intuitive UI with optimized
                        frontend performance
                      </li>
                      <li>
                        Integrated backend APIs and designed smooth user
                        navigation and shopping experience
                      </li>
                      <li>
                        Ensured reliability through debugging, performance
                        tuning, and architectural improvements
                      </li>
                    </ul>
                  </div>

                  <div className="absolute -left-[9px] bottom-0 w-4 h-4 bg-dark dark:bg-light rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="w-full mt-16 mb-16">
            <AnimatedText
              text={"Education"}
              className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
            />

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-4xl">
                <div className="border-l-2 border-dark dark:border-light pl-6 md:pl-4 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark dark:bg-light rounded-full"></div>

                  <div className="mb-8">
                    <h3 className="text-2xl md:text-xl font-bold mb-2">
                      Bachelor of Science in Computer Science
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm md:text-xs">
                      <span className="font-semibold text-primary dark:text-primaryDark">
                        University of Engineering and Technology (UET), Lahore
                      </span>
                      <span className="text-dark/75 dark:text-light/75">•</span>
                      <span className="text-dark/75 dark:text-light/75">
                        September 2020 – May 2024
                      </span>
                    </div>
                    <p className="font-medium text-dark/75 dark:text-light/75">
                      Completed undergraduate studies in Computer Science,
                      gaining strong foundation in software engineering,
                      algorithms, data structures, and web development
                      principles.
                    </p>
                  </div>

                  <div className="absolute -left-[9px] bottom-0 w-4 h-4 bg-dark dark:bg-light rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  )
}
