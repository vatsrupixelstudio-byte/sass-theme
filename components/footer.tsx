"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-6">
          <Link href="/" className="text-3xl font-bold text-white">
            SaasFlow
          </Link>
          <p className="text-slate-400 leading-relaxed max-w-md">
            The complete platform for modern SaaS applications. Ship faster with our pre-built components, authentication, payments, and analytics.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Product Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-3">
            <li><Link href="/features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/integrations" className="text-slate-400 hover:text-white transition-colors">Integrations</Link></li>
            <li><Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</Link></li>
            <li><Link href="/security" className="text-slate-400 hover:text-white transition-colors">Security</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/press" className="text-slate-400 hover:text-white transition-colors">Press</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-slate-400">
            Subscribe to our newsletter for the latest news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="Your email" className="flex-1 bg-slate-800 border-slate-700 text-white placeholder-slate-500" />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} SaasFlow. All rights reserved.
      </div>
    </footer>
  )
}
