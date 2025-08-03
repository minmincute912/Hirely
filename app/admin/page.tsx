import { AdminLayout } from "@/components/admin-layout"
import { CandidateTable } from "@/components/candidate-table"
import { StatsCards } from "@/components/stats-cards"

export default function AdminPage() {
  const candidates = [
    {
      id: 1,
      name: "Nguyen Van A",
      email: "van.a@gmail.com",
      phone: "0123456789",
      position: "Frontend Developer",
      experience: "3 years",
      status: "active",
      skills: ["React", "TypeScript", "Node.js"],
      location: "Ho Chi Minh City",
      salary: "$2000-3000",
    },
    {
      id: 2,
      name: "Tran Thi B",
      email: "thi.b@gmail.com",
      phone: "0987654321",
      position: "UI/UX Designer",
      experience: "5 years",
      status: "inactive",
      skills: ["Figma", "Adobe XD", "Sketch"],
      location: "Hanoi",
      salary: "$1500-2500",
    },
    {
      id: 3,
      name: "Le Van C",
      email: "van.c@gmail.com",
      phone: "0123456789",
      position: "Backend Developer",
      experience: "4 years",
      status: "active",
      skills: ["Python", "Django", "PostgreSQL"],
      location: "Da Nang",
      salary: "$2500-3500",
    },
  ]

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Candidate Management</h1>
            <p className="text-gray-600 mt-1">Manage and review candidate profiles</p>
          </div>
        </div>

        <StatsCards />

        <CandidateTable title="Active Candidates" candidates={candidates} showFilters={true} />
      </div>
    </AdminLayout>
  )
}
