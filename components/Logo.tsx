export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow layers */}
      <g opacity="0.1">
        <path d="M12 8 L12 28 M18 8 L18 28 M12 18 L18 18" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" transform="translate(2, -2)" />
        <path d="M12 32 L12 52 M18 32 L18 42 M12 42 L18 42 M18 42 Q18 52 12 52" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" transform="translate(2, -2)" />
      </g>
      <g opacity="0.05">
        <path d="M12 8 L12 28 M18 8 L18 28 M12 18 L18 18" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" transform="translate(4, -4)" />
        <path d="M12 32 L12 52 M18 32 L18 42 M12 42 L18 42 M18 42 Q18 52 12 52" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" transform="translate(4, -4)" />
      </g>
      
      {/* Main logo */}
      {/* H */}
      <path d="M12 8 L12 28 M18 8 L18 28 M12 18 L18 18" stroke="#065f46" strokeWidth="2" strokeLinecap="round" />
      
      {/* B */}
      <path d="M12 32 L12 52 M18 32 L18 42 M12 42 L18 42 M18 42 Q18 52 12 52" stroke="#065f46" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
