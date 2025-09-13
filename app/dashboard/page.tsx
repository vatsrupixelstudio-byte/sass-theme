"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart, TrendingUp, Users, DollarSign, ShoppingCart, Activity, Clock, CalendarDays, Settings, Bell, HelpCircle } from 'lucide-react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingElements from "@/components/floating-elements"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Bell className="w-4 h-4" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">$45,231.89</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">+2350</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">+12,234</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">+19% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">+573</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Overview</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">Monthly Revenue Growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-around gap-2">
                {/* Placeholder for a more complex chart component */}
                {[
                  { height: '60%', label: 'Jan', value: 15000, color: 'bg-blue-500' },
                  { height: '75%', label: 'Feb', value: 20000, color: 'bg-purple-500' },
                  { height: '50%', label: 'Mar', value: 12000, color: 'bg-pink-500' },
                  { height: '85%', label: 'Apr', value: 25000, color: 'bg-blue-500' },
                  { height: '70%', label: 'May', value: 18000, color: 'bg-purple-500' },
                  { height: '90%', label: 'Jun', value: 28000, color: 'bg-pink-500' },
                  { height: '65%', label: 'Jul', value: 16000, color: 'bg-blue-500' },
                  { height: '80%', label: 'Aug', value: 22000, color: 'bg-purple-500' },
                  { height: '55%', label: 'Sep', value: 14000, color: 'bg-pink-500' },
                  { height: '95%', label: 'Oct', value: 30000, color: 'bg-blue-500' },
                  { height: '70%', label: 'Nov', value: 19000, color: 'bg-purple-500' },
                  { height: '88%', label: 'Dec', value: 27000, color: 'bg-pink-500' },
                ].map((bar, index) => (
                  <div key={index} className="flex flex-col items-center h-full justify-end group">
                    <div className={`w-6 rounded-t-md transition-all duration-500 ease-out ${bar.color}`} style={{ height: bar.height }}></div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{bar.label}</div>
                    <span className="absolute bottom-full mb-2 p-1 text-xs bg-slate-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      ${bar.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">User Acquisition</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">New users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-slate-500 dark:text-slate-400">
                {/* Placeholder for a line chart */}
                <LineChart className="w-16 h-16" />
                <p>Line Chart Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>New user registered: John Doe</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Subscription upgraded: Jane Smith (Pro Plan)</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">1 day ago</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>New event scheduled: Team Meeting</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">3 days ago</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Support ticket opened: Account access issue</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">4 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white">
                <Users className="w-4 h-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950">
                <DollarSign className="w-4 h-4" />
                View Invoices
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-purple-500 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-950">
                <Settings className="w-4 h-4" />
                Configure Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
