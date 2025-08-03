"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Search, Eye } from "lucide-react"

interface User {
  id: number
  username: string
  email: string
  phone: string
  active?: boolean
  status?: string
}

interface UserTableProps {
  title: string
  users: User[]
  showStatus?: boolean
}

export function UserTable({ title, users, showStatus = false }: UserTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Tìm kiếm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-80"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">UserId</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Username</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                {showStatus ? "State" : "State"}
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.username}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.phone}</td>
                <td className="px-6 py-4">
                  {showStatus ? (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "Đang xử lý" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Switch checked={user.active} />
                      <span className="text-sm text-gray-600">{user.active ? "active" : "deactive"}</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
