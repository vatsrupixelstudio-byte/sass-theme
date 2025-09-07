"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award } from 'lucide-react'

export function DashboardPreviewSection() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 animate-fade-in-up">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:scale-105 transition-transform duration-700">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 px-6 py-4 border-b border-slate-200 dark:border-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                    <Badge className="bg-green-100 text-green-700">+12%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">$24,500</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Monthly Revenue</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-500" />
                    <Badge className="bg-blue-100 text-blue-700">+8%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">1,234</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-purple-500" />
                    <Badge className="bg-purple-100 text-purple-700">+15%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">98.5%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</div>
                </CardContent>
              </Card>
            </div>
            {/* Interactive Dashboard Preview - Bar Chart */}
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-4 flex items-end justify-around gap-2">
              {/* Dummy data for bars */}
              {[
                { height: '60%', label: 'Jan', color: 'bg-blue-500' },
                { height: '75%', label: 'Feb', color: 'bg-purple-500' },
                { height: '50%', label: 'Mar', color: 'bg-pink-500' },
                { height: '85%', label: 'Apr', color: 'bg-blue-500' },
                { height: '70%', label: 'May', color: 'bg-purple-500' },
                { height: '90%', label: 'Jun', color: 'bg-pink-500' },
              ].map((bar, index) => (
                <div key={index} className="flex flex-col items-center h-full justify-end">
                  <div className={`w-8 rounded-t-md transition-all duration-500 ease-out ${bar.color}`} style={{ height: bar.height }}></div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{bar.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
