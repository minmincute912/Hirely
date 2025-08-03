"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, Lock, Eye, EyeOff, Building, Globe, Briefcase, ArrowLeft, Award } from "lucide-react"

export default function ExpertRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    field: "",
  })

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
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Register as Expert</h1>
            <p className="text-gray-300">Share your expertise with professionals</p>
          </CardHeader>

          <CardContent className="space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
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
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
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
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Company</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Expertise Field</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <Select
                      value={formData.field}
                      onValueChange={(value) => setFormData({ ...formData, field: value })}
                    >
                      <SelectTrigger className="pl-12 h-12 bg-white/10 border-white/20 text-white focus:border-green-400 focus:ring-green-400/20">
                        <SelectValue placeholder="Select your field" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="technology">Technology & Software</SelectItem>
                        <SelectItem value="business">Business & Strategy</SelectItem>
                        <SelectItem value="design">Design & Creative</SelectItem>
                        <SelectItem value="marketing">Marketing & Sales</SelectItem>
                        <SelectItem value="finance">Finance & Accounting</SelectItem>
                        <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                      </SelectContent>
                    </Select>
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
                      className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="text-xs text-gray-400 text-right">{password.length}/16 characters</div>
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
                      className="pl-12 pr-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="text-xs text-gray-400 text-right">{confirmPassword.length}/16 characters</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-3 text-sm text-gray-300">
                <input type="checkbox" className="mt-1 rounded" />
                <span>
                  I agree to the{" "}
                  <Link href="#" className="text-green-400 hover:text-green-300">
                    Expert Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-green-400 hover:text-green-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium transition-all duration-200">
                Register as Expert
              </Button>
            </div>

            <div className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link href="/login" className="text-green-400 hover:text-green-300 transition-colors">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
