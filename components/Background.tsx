import { ArrowUpRight, Award, GraduationCap, Rocket, Sparkles } from 'lucide-react'

type Link = { label: string; href: string }

type Role = {
  org: string
  title: string
  dates: string
  location: string
  blurb?: string
  highlights: string[]
  links?: Link[]
}

const stats = [
  { value: '$3.5B', label: 'NASA flagship mission (Europa Clipper) I helped model and de-risk at JPL' },
  { value: '>$250M', label: 'in mission savings enabled by my risk-assessment team' },
  { value: '$8.4M', label: 'in NASA & Space Force non-dilutive funding won with my proposals' },
  { value: '~15', label: 'engineers led as Director of Engineering at a YC space startup' },
]

const roles: Role[] = [
  {
    org: 'Sophia Space',
    title: 'Product Systems Engineer',
    dates: 'Oct 2025 – Present',
    location: 'Pasadena, CA',
    blurb: 'Building space-based edge compute and orbital data centers.',
    highlights: [
      'Leading early system architecture and engineering for the first demonstration missions of Sophia Space TILEs and Orbital Data Centers.',
      'Technical lead for a growing set of commercial and government partnerships; shaping the technology roadmap with the co-founders.',
    ],
    links: [{ label: 'sophia.space', href: 'https://sophia.space/' }],
  },
  {
    org: 'UsFolks.ai',
    title: 'Founder',
    dates: 'Jun 2025 – Oct 2025',
    location: 'Los Angeles, CA',
    blurb: 'AI for better constituent representation — a "Perplexity for Polling."',
    highlights: [
      'Selected for 50 Years VC’s 5050 Founders Program and the Menlo Ventures Menlo Labs Fellowship.',
      'Built several full-stack AI products using LLMs, RAG pipelines, fine-tuning, and synthetic polling models; ran customer discovery with officials, campaigns, and policy groups.',
    ],
  },
  {
    org: 'TransAstra',
    title: 'Director of Engineering',
    dates: 'Mar 2022 – Oct 2025',
    location: 'Pacoima, CA',
    blurb: 'YC (S21) startup building the technology to find, capture, and mine asteroids.',
    highlights: [
      'Led ~15 engineers across robotic telescopes and inflatable capture bags for debris removal and asteroid capture.',
      'Fielded three Sutter robotic telescope systems for Space Force customers ahead of schedule; flew a Capture Bag demonstrator on the ISS in September 2025.',
      'First author on US Patent 12,198,356 for matched-filter tracking of space objects — and uplinked the algorithm to a CubeSat in orbit to observe spacecraft in GEO.',
      'Wrote winning SBIR and TACFI proposals worth ~$8.4M in non-dilutive funding.',
    ],
    links: [
      { label: 'Patent', href: 'https://patents.justia.com/patent/12198356' },
      { label: 'ISS Capture Bag', href: 'https://www.newswire.com/news/transastra-to-demonstrate-capture-bag-on-the-international-space-22477316' },
      { label: 'On-orbit tracking', href: 'https://www.accessnewswire.com/newsroom/en/aerospace-and-defense/transastra-achieves-milestone-with-first-ever-space-based-matched-filter-track-924596' },
    ],
  },
  {
    org: 'NASA Jet Propulsion Laboratory',
    title: 'Systems Engineer · Phase & Analysis Lead, Europa Clipper',
    dates: 'Oct 2017 – Mar 2022',
    location: 'La Cañada Flintridge, CA',
    blurb: 'Europa Clipper launched in 2024 to assess whether Europa’s ocean could support life.',
    highlights: [
      'Built the models and simulations of the spacecraft, its tour of the Jovian system, and operations of its nine science instruments that the project still uses for key decisions.',
      'Led a team of 8 engineers performing probabilistic risk assessments presented to NASA HQ at gate reviews — work that enabled architecture improvements saving more than $250M.',
      'NASA Early Career Achievement Medal (2022) and JPL Charles Elachi Award for Outstanding Early Career Achievement (2021).',
    ],
  },
  {
    org: 'Hedron (formerly Analytical Space)',
    title: 'VP of Spacecraft Systems · Employee #1',
    dates: 'Apr 2016 – Oct 2017',
    location: 'Los Angeles, CA / Boston, MA',
    blurb: 'Seed-stage startup building a commercial data-relay CubeSat constellation.',
    highlights: [
      'Owned systems and mechanical engineering for the first demonstration spacecraft, deployed from the ISS in July 2018.',
      '2016 MassChallenge Platinum Prize winner.',
    ],
  },
]

const education = [
  {
    school: 'Caltech',
    degree: 'Ph.D. Space Engineering (2016), M.S. (2012)',
    notes: [
      'William F. Ballhaus Award — most outstanding doctoral dissertation',
      'Ernest E. Sechler Award for Teaching and Research',
      'NASA Space Technology Research Fellow',
    ],
    link: { label: 'Dissertation', href: 'http://thesis.library.caltech.edu/9729/' },
  },
  {
    school: 'Harvard University',
    degree: 'S.B. Engineering Sciences (2011)',
    notes: ['Magna cum laude with highest honors', 'John Harvard Scholar'],
  },
]

const beyond = [
  'Numerai Council of Elders (2020–21), top participant in a crowdsourced quant ML competition',
  '20+ peer-reviewed publications in impact mechanics, microfluidics, and space systems',
  'LA Zoo animal behavior research volunteer',
  'Eagle Scout · Cessna pilot · marathoner',
]

function LinkPill({ href, label }: Link) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-green-200 px-3 py-1 text-xs font-medium text-[#065f46] hover:bg-green-50 transition-colors"
    >
      {label}
      <ArrowUpRight size={12} />
    </a>
  )
}

export default function Background() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Summary */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Systems engineer and startup builder working at the edge of spacecraft and AI. I spent five
          years on NASA&apos;s Europa Clipper at JPL, led engineering at a YC-backed asteroid-mining
          startup, founded an AI company, and now architect orbital data centers at Sophia Space.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {stats.map((s) => (
          <div key={s.value} className="rounded-lg bg-green-50 border border-green-100 p-5 text-center">
            <div className="text-3xl font-bold text-[#065f46]">{s.value}</div>
            <div className="mt-2 text-sm text-gray-600 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Experience timeline */}
        <div className="lg:col-span-2">
          <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
            <Rocket size={20} className="text-[#065f46]" /> Experience
          </h3>
          <ol className="relative border-l-2 border-green-100 ml-2">
            {roles.map((r) => (
              <li key={r.org} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#065f46]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-lg font-semibold text-gray-900">{r.org}</h4>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{r.dates}</span>
                </div>
                <p className="text-sm font-medium text-[#065f46]">{r.title}</p>
                {r.blurb && <p className="mt-1 text-sm italic text-gray-500">{r.blurb}</p>}
                <ul className="mt-3 space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-700 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-green-300" />
                      {h}
                    </li>
                  ))}
                </ul>
                {r.links && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.links.map((l) => (
                      <LinkPill key={l.href} {...l} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
              <GraduationCap size={20} className="text-[#065f46]" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school}>
                  <h4 className="font-semibold text-gray-900">{e.school}</h4>
                  <p className="text-sm text-[#065f46] font-medium">{e.degree}</p>
                  <ul className="mt-2 space-y-1">
                    {e.notes.map((n) => (
                      <li key={n} className="text-sm text-gray-600 flex gap-2">
                        <Award size={14} className="mt-0.5 shrink-0 text-green-600" />
                        {n}
                      </li>
                    ))}
                  </ul>
                  {e.link && (
                    <div className="mt-2">
                      <LinkPill {...e.link} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
              <Sparkles size={20} className="text-[#065f46]" /> Beyond work
            </h3>
            <ul className="space-y-2">
              {beyond.map((b) => (
                <li key={b} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-green-300" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
