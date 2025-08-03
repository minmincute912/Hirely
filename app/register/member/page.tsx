"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function MemberRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  })

  const getPasswordStrength = (password: string) => {
    if (password.length < 6) return { strength: 0, text: "Weak", color: "text-red-400" }
    if (password.length < 10) return { strength: 1, text: "Medium", color: "text-yellow-400" }
    return { strength: 2, text: "Strong", color: "text-green-400" }
  }

  const passwordStrength = getPasswordStrength(password)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Join as Professional</h1>
            <p className="text-gray-300">Create your professional profile</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className={passwordStrength.color}>{passwordStrength.text}</span>
                  <span className="text-gray-400">{password.length}/16 characters</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex justify-between items-center text-xs">
                  {confirmPassword && (
                    <span className={password === confirmPassword ? "text-green-400" : "text-red-400"}>
                      {password === confirmPassword ? "Passwords match" : "Passwords don't match"}
                    </span>
                  )}
                  <span className="text-gray-400">{confirmPassword.length}/16 characters</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-3 text-sm text-gray-300">
                <input type="checkbox" className="mt-1 rounded" />
                <span>
                  I agree to the{" "}
                  <Link href="#" className="text-orange-400 hover:text-orange-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-orange-400 hover:text-orange-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <Button className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium transition-all duration-200">
                Create Account
              </Button>
            </div>

            <div className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-400 hover:text-orange-300 transition-colors">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
