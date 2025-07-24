# Hayden Burgoyne Personal Homepage

A minimalist personal homepage built with Next.js, Tailwind CSS, and Supabase.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Curriculum Vitae**: Embedded Notion page showcasing professional experience
- **Media Gallery**: Dynamic grid displaying media appearances and publications
- **Contact Form**: Integrated with Supabase for message submissions
- **Minimalist Theme**: Clean white design with subtle green accents (#065f46)

## Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hburgoyne/haydenburgoyne.git
cd haydenburgoyne/homepage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Deploy to Render

1. Push your code to the `deploy` branch
2. Connect your GitHub repository to Render
3. Use the included `render.yaml` blueprint
4. Add the required environment variables in Render dashboard

## Project Structure

```
homepage/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── Logo.tsx         # HB ladder logo
│   ├── Navigation.tsx   # Responsive navigation
│   ├── ContactForm.tsx  # Supabase contact form
│   └── MediaGrid.tsx    # Media gallery
├── lib/
│   └── supabase.ts      # Supabase client
├── public/
│   ├── media.json       # Media items data
│   └── favicon.svg      # Site favicon
└── render.yaml          # Render deployment config
```

## Customization

### Adding Media Items

Edit `public/media.json` to add new media items:
```json
{
  "title": "Item Title",
  "description": "Brief description",
  "url": "https://example.com",
  "thumbnail_url": "https://example.com/image.jpg" // Optional
}
```

### Updating Content

- **Hero Tagline**: Edit the h1 in `app/page.tsx`
- **CV Iframe**: Update the Notion URL in `app/page.tsx`
- **Navigation Links**: Modify `components/Navigation.tsx`

## License

Copyright 2025 Hayden Burgoyne. All rights reserved.
