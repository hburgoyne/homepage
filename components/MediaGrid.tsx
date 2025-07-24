'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface MediaItem {
  title: string
  description: string
  url: string
  thumbnail_url?: string
}

export default function MediaGrid() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/media.json')
      .then(res => res.json())
      .then(data => {
        setMediaItems(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading media:', err)
        setLoading(false)
      })
  }, [])

  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const getThumbnail = (item: MediaItem) => {
    if (item.thumbnail_url) {
      return item.thumbnail_url
    }
    
    const videoId = getVideoId(item.url)
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    
    // Fallback to logo
    return '/logo-fallback.svg'
  }

  if (loading) {
    return <div className="text-center py-12">Loading media...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mediaItems.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          <div className="aspect-video relative bg-gray-100">
            <Image
              src={getThumbnail(item)}
              alt={item.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/logo-fallback.svg'
              }}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-[#065f46] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
