'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message_subject: '',
    message_text: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [botcheck, setBotcheck] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.message_text) {
      toast.error('Please fill in required fields')
      return
    }

    setIsSubmitting(true)

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
      if (!accessKey) throw new Error('Contact form is not configured')

      // Web3Forms emails each submission straight to my inbox (free tier: 250/month)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'haydenburgoyne.com',
          subject: formData.message_subject
            ? `[haydenburgoyne.com] ${formData.message_subject}`
            : '[haydenburgoyne.com] New message',
          email: formData.email,
          replyto: formData.email,
          message: formData.message_text,
          botcheck: botcheck,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.message || 'Submission failed')

      toast.success('Message sent successfully!')
      setFormData({
        email: '',
        message_subject: '',
        message_text: ''
      })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      {/* Honeypot: hidden from people, bots tend to tick it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message_subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="message_subject"
          name="message_subject"
          value={formData.message_subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent outline-none transition"
          placeholder="Optional subject"
        />
      </div>

      <div>
        <label htmlFor="message_text" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message_text"
          name="message_text"
          value={formData.message_text}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#065f46] focus:border-transparent outline-none transition resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#065f46] text-white py-3 px-6 rounded-lg hover:bg-[#047857] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
