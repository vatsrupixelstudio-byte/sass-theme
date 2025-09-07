import { UserPlus, LayoutDashboard, TrendingUpIcon } from 'lucide-react'

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How SaasFlow Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get started in three simple steps and unlock the full power of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">1. Sign Up & Onboard</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Create your account in minutes and follow our guided onboarding to set up your workspace.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <LayoutDashboard className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">2. Customize Your Dashboard</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Tailor your dashboard with widgets and integrations to fit your unique business needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TrendingUpIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">3. Analyze & Grow</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Leverage powerful analytics to make informed decisions and drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
