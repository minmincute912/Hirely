"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Building, Globe, MapPin, Calendar, Bell, Settings, Upload, Plus, X } from "lucide-react"

export default function ProfilePage() {
  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "Python"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">CV</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Professional CV Platform</h1>
              </div>

              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Browse Jobs
                </a>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-blue-700">Trust Score: 85</span>
                </div>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="relative">
                <Button variant="ghost" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">Nguyen Van B</span>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>NB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg"></div>
                <div className="px-6 pb-6">
                  <div className="flex flex-col items-center -mt-16">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="text-2xl bg-gray-200">NB</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-gray-900">Nguyen Van B</h2>
                    <p className="text-gray-600">Senior Frontend Developer</p>
                    <div className="flex items-center justify-center mt-2">
                      <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Ho Chi Minh City, Vietnam</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Profile Completion</span>
                      <span className="text-sm font-medium text-blue-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">127</div>
                      <div className="text-xs text-gray-600">Profile Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">23</div>
                      <div className="text-xs text-gray-600">Job Matches</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="mt-6 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-500">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    className="flex-1"
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input placeholder="Enter your full name" className="pl-12 h-12" defaultValue="Nguyen Van B" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-12 h-12"
                        defaultValue="nguyen.van.b@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-12 h-12"
                        defaultValue="+84 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Enter your location"
                        className="pl-12 h-12"
                        defaultValue="Ho Chi Minh City, Vietnam"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Enter your company"
                        className="pl-12 h-12"
                        defaultValue="Tech Solutions Inc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Website/Portfolio</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="url"
                        placeholder="Enter your website"
                        className="pl-12 h-12"
                        defaultValue="https://nguyenvanb.dev"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Professional Summary</label>
                  <Textarea
                    placeholder="Write a brief summary about your professional background..."
                    className="min-h-[120px]"
                    defaultValue="Experienced Frontend Developer with 5+ years of expertise in React, TypeScript, and modern web technologies. Passionate about creating user-friendly interfaces and optimizing web performance."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Work Experience</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-blue-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-2"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Senior Frontend Developer</h3>
                    <p className="text-blue-600 font-medium">Tech Solutions Inc.</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      Jan 2022 - Present
                    </div>
                    <p className="text-gray-700 text-sm">
                      Leading frontend development for enterprise applications, mentoring junior developers, and
                      implementing modern React patterns.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-2"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                    <p className="text-blue-600 font-medium">Digital Agency Co.</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      Mar 2020 - Dec 2021
                    </div>
                    <p className="text-gray-700 text-sm">
                      Developed responsive web applications using React and Vue.js, collaborated with design teams to
                      implement pixel-perfect UIs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
