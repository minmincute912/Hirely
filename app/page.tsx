import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, Briefcase, Award, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <span className="text-3xl font-bold text-white">CV</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Professional CV Platform</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect talented professionals with leading companies. Streamline your recruitment process with our
              comprehensive CV management system.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/login">
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sign In</h3>
                  <p className="text-gray-300">Access your account and manage your professional profile</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/register/member">
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-orange-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join as Professional</h3>
                  <p className="text-gray-300">Create your professional profile and get discovered by top employers</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/register/expert">
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Register as Expert</h3>
                  <p className="text-gray-300">Share your expertise and mentor the next generation of professionals</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/register/collaborator">
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-red-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Become HR Partner</h3>
                  <p className="text-gray-300">Join our network of HR professionals and find the perfect candidates</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Active Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
