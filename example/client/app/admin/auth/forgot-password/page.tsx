import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export default function AdminForgotPasswordPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

