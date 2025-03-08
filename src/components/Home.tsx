import { motion } from "motion/react";
import { IoLogoJavascript } from "react-icons/io";
import { FaAngular, FaDocker, FaJava, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiSpring, SiSpringboot, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDocker, DiPostgresql } from "react-icons/di";

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* <img
        src={backgroundImg}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-1xl lg:mx-0">
          <motion.h2
            className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Higor Beleza
          </motion.h2>
          <motion.p
            className="mt-8 text-xl font-semibold tracking-tight text-white sm:text-3xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            FullStack Developer
          </motion.p>
          <motion.p
            className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            I am a junior full-stack developer passionate about creating
            scalable and high-performance web solutions. With experience in
            Java, JavaScript, and React, I am always looking to learn new
            technologies and improve my skills.
          </motion.p>
        </div>

        <div className="mx-auto mt-10 max-w-1xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <motion.a
              href="#"
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Projects <span aria-hidden="true">&rarr;</span>
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Technologies <span aria-hidden="true">&rarr;</span>
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              About Me <span aria-hidden="true">&rarr;</span>
            </motion.a>
            <motion.a
              href="#"
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Contact <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <motion.dt
                className="text-base/7 text-gray-300"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Programming Languages
              </motion.dt>
              <motion.dd
                className="text-4xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                2
              </motion.dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <motion.dt
                className="text-base/7 text-gray-300"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Frameworks & Tools
              </motion.dt>
              <motion.dd
                className="text-4xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                3
              </motion.dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <motion.dt
                className="text-base/7 text-gray-300"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Projects Completed
              </motion.dt>
              <motion.dd
                className="text-4xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                5+
              </motion.dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <motion.dt
                className="text-base/7 text-gray-300"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 3.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Years Experience
              </motion.dt>
              <motion.dd
                className="text-4xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                1
              </motion.dd>
            </div>
          </dl>
        </div>

        {/* seção das linguagens */}
        <div className="mx-auto flex justify-center mt-30 max-w-1xl">
          <div className="grid grid-cols-4 gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <FaAngular className="text-4xl sm:text-5xl lg:text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <FaJava className="text-4xl sm:text-5xl lg:text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <DiPostgresql className="text-4xl sm:text-5xl lg:text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                delay: 3.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <FaNodeJs className="text-4xl sm:text-5xl lg:text-6xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
