import React from "react"
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light px-6 py-3 absolute shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl mt-48 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-8 shadow-dark cursor-pointer lg:m-6 md:p-4 xs:text-xs xs:p-2"
        >
          Web
        </motion.div>

        {/* Frontend Skills */}
        <Skill name={"TypeScript"} x={"0vw"} y={"-22vw"} />
        <Skill name={"React"} x={"-18vw"} y={"-14vw"} />
        <Skill name={"NextJS"} x={"18vw"} y={"-14vw"} />
        <Skill name={"TailwindCSS"} x={"-28vw"} y={"-6vw"} />
        <Skill name={"Framer Motion"} x={"28vw"} y={"-6vw"} />
        <Skill name={"ShadcnUI"} x={"-32vw"} y={"4vw"} />
        <Skill name={"RadixUI"} x={"32vw"} y={"4vw"} />
        <Skill name={"Redux"} x={"-24vw"} y={"12vw"} />
        <Skill name={"Zustand"} x={"24vw"} y={"12vw"} />
        <Skill name={"Tanstack Query"} x={"-16vw"} y={"18vw"} />
        <Skill name={"Zod"} x={"16vw"} y={"18vw"} />
        <Skill name={"React Hook Form"} x={"0vw"} y={"22vw"} />

        {/* Backend Skills */}
        <Skill name={"NodeJS"} x={"-28vw"} y={"8vw"} />
        <Skill name={"ExpressJS"} x={"28vw"} y={"8vw"} />
        <Skill name={"Hono"} x={"-22vw"} y={"-10vw"} />
        <Skill name={"NestJS"} x={"22vw"} y={"-10vw"} />
        <Skill name={"TRPC"} x={"0vw"} y={"-14vw"} />
        <Skill name={"MongoDB"} x={"-14vw"} y={"-8vw"} />
        <Skill name={"PostgreSQL"} x={"14vw"} y={"-8vw"} />
        <Skill name={"Prisma"} x={"-10vw"} y={"6vw"} />
        <Skill name={"Drizzle ORM"} x={"10vw"} y={"6vw"} />
        <Skill name={"SocketIO"} x={"0vw"} y={"12vw"} />
        <Skill name={"Convex"} x={"-6vw"} y={"-18vw"} />
        <Skill name={"Redis"} x={"6vw"} y={"-18vw"} />
      </div>
    </>
  )
}

export default Skills
