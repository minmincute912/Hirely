"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Eye, MessageSquare, Star, Building, Award } from "lucide-react"

interface Expert {
  id: number
  name: string
  email: string
  phone: string
  company: string
  expertise: string
  experience: string
  status: string
  rating: number
  consultations: number
}

interface ExpertTableProps {
  title: string
  experts: Expert[]
}

export function ExpertTable({ title, experts }: ExpertTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredExperts = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search experts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {filteredExperts.map((expert) => (
            <div key={expert.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={`/placeholder-expert-${expert.id}.jpg`} />
                    <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg">
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                      <Badge variant={expert.status === "active" ? "default" : "secondary"}>{expert.status}</Badge>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {expert.expertise}
                      </div>
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {expert.company}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {expert.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Experience:</span> {expert.experience}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Consultations:</span> {expert.consultations}
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mt-2">
                      {expert.email} • {expert.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No experts found</div>
            <div className="text-sm text-gray-500">Try adjusting your search</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
