import { AdminLayout } from "@/components/admin-layout"
import { ExpertTable } from "@/components/expert-table"
import { StatsCards } from "@/components/stats-cards"

export default function ExpertsPage() {
  const experts = [
    {
      id: 1,
      name: "Dr. Nguyen Van A",
      email: "expert.a@company.com",
      phone: "0123456789",
      company: "Tech Corp",
      expertise: "Software Architecture",
      experience: "10+ years",
      status: "active",
      rating: 4.9,
      consultations: 150,
    },
    {
      id: 2,
      name: "Ms. Tran Thi B",
      email: "expert.b@design.com",
      phone: "0987654321",
      company: "Design Studio",
      expertise: "UX Strategy",
      experience: "8 years",
      status: "inactive",
      rating: 4.7,
      consultations: 89,
    },
    {
      id: 3,
      name: "Mr. Le Van C",
      email: "expert.c@business.com",
      phone: "0123456789",
      company: "Business Solutions",
      expertise: "Business Strategy",
      experience: "12 years",
      status: "active",
      rating: 4.8,
      consultations: 200,
    },
  ]

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Expert Management</h1>
            <p className="text-gray-600 mt-1">Manage expert profiles and consultations</p>
          </div>
        </div>

        <StatsCards type="experts" />

        <ExpertTable title="Registered Experts" experts={experts} />
      </div>
    </AdminLayout>
  )
}
