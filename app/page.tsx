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
              <span className="text-xl font-bold text-[#065f46]">Hayden Burgoyne</span>
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
            <i>Mission:</i> Mining Asteroids and Ensuring Artificial Super-Intelligence Ultimately Serves Folks Like Us
          </h1>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Mobile Card View */}
            <div className="block sm:hidden max-w-sm mx-auto">
              <a 
                href="https://hburgoyne.notion.site/Curriculum-Vitae-23a126960bbf8064aee5dc25bf924c5b"
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-32 bg-gradient-to-br from-green-50 to-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Curriculum Vitae</h3>
                  <p className="text-sm text-gray-600">View my professional experience, education, and accomplishments</p>
                  <div className="mt-3 flex items-center text-green-700 text-sm font-medium">
                    <span>Open in Notion</span>
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Desktop Iframe View */}
            <div className="hidden sm:block max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-[600px] md:h-[600px] overflow-hidden">
                <div className="absolute inset-0 overflow-auto touch-pan-y">
                  <iframe 
                    src="https://hburgoyne.notion.site/ebd/23a126960bbf8064aee5dc25bf924c5b" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    allowFullScreen
                    className="pointer-events-auto"
                    style={{ minHeight: '600px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="py-16 px-4 sm:px-6 md:px-16 lg:px-32 bg-gray-50">
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
              2025 Hayden Burgoyne. All rights reserved. <br /> This page was built (almost) entirely by Claude.
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
