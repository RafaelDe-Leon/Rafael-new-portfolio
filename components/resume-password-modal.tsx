"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface ResumePasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onPasswordSubmit: (password: string) => void
  error: string | null
}

export function ResumePasswordModal({ isOpen, onClose, onPasswordSubmit, error }: ResumePasswordModalProps) {
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPasswordSubmit(password)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Resume Access</DialogTitle>
          <DialogDescription>
            My resume is password-protected to ensure it's shared only with interested parties.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Need the password?</h4>
              <p className="text-sm text-muted-foreground">
                Please{" "}
                <Link href="#contact" onClick={() => onClose()} className="text-primary hover:underline">
                  contact me
                </Link>{" "}
                via email to request the password. I'll respond promptly with access.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

