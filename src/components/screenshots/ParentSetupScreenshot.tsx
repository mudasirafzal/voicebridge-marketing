export default function ParentSetupScreenshot() {
  return (
    <svg viewBox="0 0 390 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="390" height="700" fill="#f8fafc" />

      {/* Header */}
      <rect width="390" height="60" fill="#7c3aed" />
      <text x="195" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">Add Child Profile</text>
      <text x="195" y="52" textAnchor="middle" fill="#ddd6fe" fontSize="11" fontFamily="Inter, sans-serif">Step 1 of 3 — Basic Information</text>

      {/* Progress bar */}
      <rect x="20" y="68" width="350" height="4" rx="2" fill="#e2e8f0" />
      <rect x="20" y="68" width="116" height="4" rx="2" fill="#7c3aed" />

      {/* Avatar upload circle */}
      <circle cx="195" cy="130" r="42" fill="#ede9fe" />
      <circle cx="195" cy="118" r="16" fill="#7c3aed" />
      <ellipse cx="195" cy="150" rx="22" ry="12" fill="#7c3aed" />
      <circle cx="225" cy="152" r="13" fill="#7c3aed" />
      <circle cx="225" cy="152" r="8" fill="white" />
      <text x="225" y="156" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">+</text>
      <text x="195" y="188" textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">Upload Photo</text>

      {/* Form fields */}
      {/* Child's Name */}
      <text x="24" y="218" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Child's Name *</text>
      <rect x="20" y="224" width="350" height="42" rx="10" fill="white" stroke="#7c3aed" strokeWidth="2" />
      <text x="36" y="250" fill="#1e1b4b" fontSize="14" fontFamily="Inter, sans-serif">Musa Ahmed</text>

      {/* Date of Birth */}
      <text x="24" y="284" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Date of Birth</text>
      <rect x="20" y="290" width="350" height="42" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="36" y="316" fill="#6b7280" fontSize="14" fontFamily="Inter, sans-serif">15 March 2017</text>
      <text x="340" y="316" fill="#9ca3af" fontSize="16" fontFamily="Inter, sans-serif">📅</text>

      {/* Preferred Language */}
      <text x="24" y="350" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Preferred Language</text>
      {/* English option - selected */}
      <rect x="20" y="356" width="165" height="56" rx="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
      <text x="102" y="381" textAnchor="middle" fill="#1e1b4b" fontSize="20" fontFamily="Inter, sans-serif">🇬🇧</text>
      <text x="102" y="400" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">English</text>
      {/* Urdu option */}
      <rect x="205" y="356" width="165" height="56" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="287" y="381" textAnchor="middle" fill="#1e1b4b" fontSize="20" fontFamily="Inter, sans-serif">🇵🇰</text>
      <text x="287" y="400" textAnchor="middle" fill="#6b7280" fontSize="12" fontFamily="Inter, sans-serif">Urdu</text>

      {/* Diagnosis / Notes */}
      <text x="24" y="432" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Notes (Optional)</text>
      <rect x="20" y="438" width="350" height="72" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="36" y="460" fill="#9ca3af" fontSize="13" fontFamily="Inter, sans-serif">Any relevant information for</text>
      <text x="36" y="478" fill="#9ca3af" fontSize="13" fontFamily="Inter, sans-serif">therapists or caregivers...</text>

      {/* Tip box */}
      <rect x="20" y="522" width="350" height="50" rx="10" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1" />
      <text x="36" y="543" fill="#7c3aed" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">💡 Quick Tip</text>
      <text x="36" y="559" fill="#6b21a8" fontSize="11" fontFamily="Inter, sans-serif">Default communication cards are added automatically</text>

      {/* Next button */}
      <rect x="20" y="586" width="350" height="48" rx="12" fill="url(#parentSetupGrad)" />
      <text x="195" y="616" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">Continue →</text>

      {/* Bottom nav */}
      <rect x="0" y="650" width="390" height="50" fill="white" />
      <rect x="0" y="650" width="390" height="1" fill="#e2e8f0" />
      <text x="98" y="681" textAnchor="middle" fill="#7c3aed" fontSize="10" fontFamily="Inter, sans-serif">🏠 Home</text>
      <text x="195" y="681" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">👶 Profiles</text>
      <text x="293" y="681" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">⚙️ Settings</text>

      <defs>
        <linearGradient id="parentSetupGrad" x1="0" y1="0" x2="390" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
