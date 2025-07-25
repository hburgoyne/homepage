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
    return '/logo.png'
  }

  if (loading) {
    return <div className="text-center py-12">Loading media...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {mediaItems.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full max-w-[372px]"
        >
          <div className="aspect-video relative bg-white">
            <Image
              src={getThumbnail(item)}
              alt={item.title}
              fill
              className={getThumbnail(item) === '/logo.png' ? 'object-contain scale-[0.6]' : 'object-cover'}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/logo.png'
                target.className = target.className.replace('object-cover', 'object-contain scale-[0.6]')
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
