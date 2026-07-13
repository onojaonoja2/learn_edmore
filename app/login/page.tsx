import type { Metadata } from "next"
import LoginForm from "./LoginForm"

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Learn Edmore account to manage tutoring sessions, track progress, and communicate with your tutors.",
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <LoginForm />
}
