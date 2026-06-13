"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import Button from "@/components/Button"

const RegisterPage = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null)

  useEffect(() => {
    const user = typeof window !== "undefined" ? localStorage.getItem("adventure-user") : null
    if (user) {
      router.replace("/")
    }
  }, [router])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !password) {
      setMessage({ type: "error", text: "Please fill in all fields: name, email, and password." })
      return
    }
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." })
      return
    }

    localStorage.setItem("adventure-user", JSON.stringify({ name, email }))
    setMessage({ type: "success", text: "Registration successful, redirecting to home..." })
    setTimeout(() => router.push("/"), 300)
  }

  return (
    <section className="flexCenter min-h-[calc(100vh-96px)] bg-gray-10 px-6 py-20">
      <div className="max-container w-full">
        <div className="flex flex-col gap-10 rounded-[40px] bg-white p-8 shadow-[0_40px_80px_rgba(0,0,0,0.08)] lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="uppercase regular-18 text-green-50">Join Us</p>
              <h1 className="bold-52 max-w-[560px]">Create your AdventureHub account and get ready to explore.</h1>
              <p className="regular-16 text-gray-30">Save itineraries, manage activities, and discover more outdoor adventures. Enjoy the same consistent design as our home page.</p>
            </div>

            <div className="rounded-[32px] border border-gray-10 bg-white p-8 shadow-sm">
              <div className="mb-8">
                <p className="bold-24">Create a new account</p>
                <p className="regular-16 text-gray-30 mt-3">
                  Already have an account?&nbsp;
                  <Link href="/login" className="text-green-50 font-semibold">Sign in now</Link>
                </p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-3 text-gray-50">
                  <span>Full Name</span>
                  <input
                    className="auth-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col gap-3 text-gray-50">
                  <span>Email</span>
                  <input
                    className="auth-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                  />
                </label>

                <label className="flex flex-col gap-3 text-gray-50">
                  <span>Password</span>
                  <input
                    className="auth-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                  />
                </label>

                {message && (
                  <p className={`regular-14 ${message.type === "error" ? "text-orange-50" : "text-green-50"}`}>{message.text}</p>
                )}

                <Button type="submit" title="Create Account & Go Home" variant="btn_dark_green" full />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
