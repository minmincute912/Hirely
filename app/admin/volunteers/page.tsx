import Link from "next/link"
import { AdminLayout } from "@/components/admin-layout"
import { UserTable } from "@/components/user-table"

export default function VolunteersPage() {
  const users = [
    { id: 1, username: "Van A", email: "van@gmail.com", phone: "0123456789", status: "Đang xử lý" },
    { id: 2, username: "Van A", email: "van@gmail.com", phone: "0123456789", status: "Từ chối" },
    { id: 3, username: "Van A", email: "van@gmail.com", phone: "0123456789", status: "Đang xử lý" },
  ]

  return (
    <AdminLayout>
      <div className="flex-1 p-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/admin" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span>{">"}</span>
          <Link href="/admin" className="text-blue-500 hover:underline">
            Admin
          </Link>
          <span>{">"}</span>
          <span className="text-gray-400">Volunteers</span>
        </nav>

        <UserTable title="Danh sách đăng ký mới" users={users} showStatus={true} />
      </div>
    </AdminLayout>
  )
}
