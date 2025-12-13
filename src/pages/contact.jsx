import { useEffect, useRef, useState } from "react"
import Head from "next/head"
import AnimatedText from "../components/AnimatedText"
import Layout from "../components/Layout"
import Link from "next/link"
import TransitionEffect from "../components/TransitionEffect"
import emailjs from "@emailjs/browser"
import Toast from "../components/Toast"

const Card = ({ icon, title, contact, text, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex flex-col items-center justify-center dark:text-light text-dark py-6 w-80 rounded-lg border border-gray-300 dark:border-gray-600 cursor-pointer hover:shadow-lg shadow-gray-300 dark:shadow-light/10 transition"
    >
      <span className="mb-2">{icon}</span>
      <span className="font-semibold text-lg">{title}</span>
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {contact}
      </span>

      <div
        target="_blank"
        className="group relative flex items-center mt-4 text-gray-600 dark:text-gray-300 cursor-pointer"
      >
        {text}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 absolute -right-[1.7rem] group-hover:-right-[2rem] transition-all ease duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </Link>
  )
}

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        "service_avag28j",
        "template_26e67hr",
        form.current,
        "sFHiRuKjwF4aoOb8m"
      )
      .then(
        (result) => {
          console.log(result.text)
          setShowToast(true)
          setName("")
          setEmail("")
          setMessage("")
        },
        (error) => {
          console.log(error.text)
          alert(error.text)
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [showToast])

  return (
    <>
      <Head>
        <title>Ahmad Hamza&apos;s Portfolio | Contact</title>
        <meta
          name="description"
          content="Contact Ahmad Hamza for any web development project."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="w-full md:!p-20 sm:!px-4 h-auto">
          <div>
            <AnimatedText
              text="Get in touch"
              className="lg:!text-6xl md:!text-5xl sm:!text-4xl !text-3xl"
            />
            <span className="flex items-center justify-center text-xl text-gray-500 dark:text-gray-400">
              Contact Me
            </span>
          </div>

          <div className="flex max-w-5xl w-full mx-auto text-dark dark:text-light mt-16 flex-row lg:flex-col gap-y-20">
            <div className="w-1/2 lg:w-full flex items-center flex-col  relative">
              <h2 className="text-2xl font-semibold text-center mx-auto">
                Talk to me
              </h2>

              <div className="flex flex-col gap-y-6 md:mt-12 mt-6">
                <Card
                  title={"Email"}
                  contact={"ahmaddev4u@gmail.com"}
                  text={"Write Me"}
                  href={"mailto:ahmaddev4u@gmail.com"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
                    </svg>
                  }
                />

                <Card
                  title={"Phone"}
                  contact={"+92 326 6261570"}
                  text={"Call Me"}
                  href={"tel:+923266261570"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.5 2C16.671 2 16 2.671 16 3.5v17c0 .829.671 1.5 1.5 1.5s1.5-.671 1.5-1.5v-17C19 2.671 18.329 2 17.5 2zM12 4c-.552 0-1 .448-1 1v14c0 .552.448 1 1 1s1-.448 1-1V5C13 4.448 12.552 4 12 4zM6.5 6C5.671 6 5 6.671 5 7.5v9c0 .829.671 1.5 1.5 1.5S8 17.329 8 16.5v-9C8 6.671 7.329 6 6.5 6z"></path>
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="w-1/2 lg:w-full relative">
              <h2 className="text-2xl font-semibold text-center mx-auto">
                Tell me about your project
              </h2>

              <form
                onSubmit={handleSubmit}
                ref={form}
                className="flex flex-col gap-y-6 w-full mt-12 md:mt-6"
              >
                <div className="relative group">
                  <label htmlFor="name" className="labelStyles">
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    className="inputStyles"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="labelStyles">
                    Email
                  </label>

                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    className="inputStyles"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="labelStyles">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    className="inputStyles resize-none min-h-[250px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-dark dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light rounded-lg text-light w-fit flex items-center gap-2 border-2 border-dark hover:bg-light hover:text-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  )}
                </button>

                {showToast && (
                  <Toast
                    message="Message sent successfully"
                    onClose={() => setShowToast(false)}
                  />
                )}
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Contact
