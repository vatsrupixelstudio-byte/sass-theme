"use client"

import React from 'react'

export default function FloatingElements() {
  return (
    <>
      {/* Floating circles for background effect */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-8000"></div>
    </>
  )
}
