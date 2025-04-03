"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ResumePasswordModal } from "./resume-password-modal"
import { verifyPassword } from "@/lib/password-utils"

interface ResumeHandlerProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ResumeHandler({ variant = "default", size = "default", className = "" }: ResumeHandlerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePasswordSubmit = (password: string) => {
    if (verifyPassword(password)) {
      // Password is correct, show/download the resume
      setError(null)
      setIsModalOpen(false)

      // Open the resume in a new tab or download it
      // Replace with your actual resume URL
      window.open("/path-to-your-resume.pdf", "_blank")
    } else {
      // Password is incorrect
      setError("Incorrect password. Please try again.")
    }
  }

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsModalOpen(true)}>
        VIEW MY RESUME
      </Button>

      <ResumePasswordModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setError(null)
        }}
        onPasswordSubmit={handlePasswordSubmit}
        error={error}
      />
    </>
  )
}

