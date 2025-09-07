"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X, ChevronDown, Search, Bell, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Navigation() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)
const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
const pathname = usePathname()
const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

const handleMouseEnter = (name: string) => {
  if (dropdownTimeoutRef.current) {
    clearTimeout(dropdownTimeoutRef.current)
  }
  setActiveDropdown(name)
}

const handleMouseLeave = () => {
  dropdownTimeoutRef.current = setTimeout(() => {
    setActiveDropdown(null)
  }, 150); // Small delay to prevent accidental closing
}

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Product',
    href: '/features',
    dropdown: [
      { name: 'Features', href: '/features', description: 'Explore our powerful features' },
      { name: 'Integrations', href: '/integrations', description: 'Connect with your favorite tools' },
      // Removed API Documentation link
      { name: 'Security', href: '/security', description: 'Enterprise-grade security' }
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  {
    name: 'Company',
    href: '/about',
    dropdown: [
      { name: 'About Us', href: '/about', description: 'Learn about our mission' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { name: 'Careers', href: '/careers', description: 'Join our amazing team' },
      { name: 'Press Kit', href: '/press', description: 'Media resources' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]

return (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
    isScrolled
      ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-slate-900/5'
      : 'bg-transparent'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25">
              <Zap className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent tracking-tight">
              SaasFlow
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wider">
              PREMIUM
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <>
                  <div className="flex items-center cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80">
                    <span className={`text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold text-sm tracking-wide ${
                      pathname.startsWith(item.href) ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}>
                      {item.name}
                    </span>
                    <ChevronDown className={`w-4 h-4 ml-1 text-slate-400 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-4 w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 py-3 animate-in fade-in-0 zoom-in-95 duration-300 pointer-events-auto">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group/item"
                        >
                          <div className="font-semibold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">
                            {dropdownItem.name}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            {dropdownItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300 font-semibold text-sm tracking-wide ${
                    pathname === item.href ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 h-10 bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:bg-white dark:focus:bg-slate-700 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative h-10 w-10 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs border-2 border-white dark:border-slate-900">
              3
            </Badge>
          </Button>

          {/* Auth Buttons */}
          <Link href="/login">
            <Button variant="ghost" size="sm" className="h-10 px-4 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300 font-semibold">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="h-10 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 rounded-xl">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-10 w-10 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-700 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search..."
                className="pl-10 h-12 bg-slate-100/80 dark:bg-slate-800/80 border-0 rounded-xl"
              />
            </div>

            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold py-3 px-2 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 ${
                    pathname === item.href ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-2 mt-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{dropdownItem.name}</div>
                        <div className="text-xs text-slate-400 mt-1">{dropdownItem.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full h-12 rounded-xl font-semibold">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-xl font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
)
}
