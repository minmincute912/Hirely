"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Users,
  UserCheck,
  UserPlus,
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Settings,
  BarChart3,
  FileText,
  Calendar,
  MessageSquare,
} from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [userManagementOpen, setUserManagementOpen] = useState(true)
  const [expertManagementOpen, setExpertManagementOpen] = useState(true)
  const [collaboratorManagementOpen, setCollaboratorManagementOpen] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">HR</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">HR Dashboard</h1>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search candidates, experts..."
                    className="pl-10 w-80 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="relative">
                <Button variant="ghost" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-emerald-700">Admin</span>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-emerald-500 text-white">A</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r shadow-sm min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              {/* Dashboard */}
              <Link href="/admin">
                <Button variant={isActive("/admin") ? "default" : "ghost"} className="w-full justify-start h-12">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Dashboard Overview
                </Button>
              </Link>

              {/* User Management */}
              <div className="space-y-1">
                <button
                  onClick={() => setUserManagementOpen(!userManagementOpen)}
                  className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-700">Candidate Management</span>
                  </div>
                  {userManagementOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>

                {userManagementOpen && (
                  <div className="ml-8 space-y-1">
                    <Link href="/admin">
                      <Button
                        variant={isActive("/admin") ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                      >
                        Active Candidates
                      </Button>
                    </Link>
                    <Link href="/admin/pending">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Pending Applications
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Expert Management */}
              <div className="space-y-1">
                <button
                  onClick={() => setExpertManagementOpen(!expertManagementOpen)}
                  className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">Expert Network</span>
                  </div>
                  {expertManagementOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>

                {expertManagementOpen && (
                  <div className="ml-8 space-y-1">
                    <Link href="/admin/experts">
                      <Button
                        variant={isActive("/admin/experts") ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                      >
                        Active Experts
                      </Button>
                    </Link>
                    <Link href="/admin/experts/applications">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Expert Applications
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* HR Partners */}
              <div className="space-y-1">
                <button
                  onClick={() => setCollaboratorManagementOpen(!collaboratorManagementOpen)}
                  className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <UserPlus className="w-5 h-5 text-purple-500" />
                    <span className="font-medium text-gray-700">HR Partners</span>
                  </div>
                  {collaboratorManagementOpen ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {collaboratorManagementOpen && (
                  <div className="ml-8 space-y-1">
                    <Link href="/admin/collaborators">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Active Partners
                      </Button>
                    </Link>
                    <Link href="/admin/collaborators/applications">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Partner Applications
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Reports */}
              <Link href="/admin/reports">
                <Button variant="ghost" className="w-full justify-start h-12">
                  <FileText className="w-5 h-5 mr-3" />
                  Reports & Analytics
                </Button>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
