'use client'

import { Toaster } from 'react-hot-toast'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import MediaGrid from '@/components/MediaGrid'
import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#065f46',
              secondary: '#fff',
            },
          },
        }}
      />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Logo />
              <span className="text-xl font-semibold text-gray-900">Hayden Burgoyne</span>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 text-center border-b border-gray-100">
          <h1 className="text-3xl md:text-5xl font-bold text-[#065f46] max-w-5xl mx-auto">
            Asteroid Mining and Ensuring Artificial Super-Intelligence Ultimately Serves Us Folks
          </h1>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-16 px-6">
          <div className="container mx-auto">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Curriculum Vitae</h2> */}
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-[600px] overflow-auto">
                <iframe 
                  src="https://hburgoyne.notion.site/ebd/23a126960bbf8064aee5dc25bf924c5b" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="py-16 px-32 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Media</h2>
            <MediaGrid />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#065f46] text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              2025 Hayden Burgoyne. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/hayden-burgoyne/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/hburgoyne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
