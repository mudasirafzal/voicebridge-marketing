export default function TherapyCenterScreenshot() {
  return (
    <svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="900" height="560" fill="#f8fafc" />

      {/* Sidebar */}
      <rect width="210" height="560" fill="#0f172a" />
      <circle cx="32" cy="36" r="14" fill="#7c3aed" />
      <text x="32" y="41" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif">🏥</text>
      <text x="55" y="31" fill="white" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">VoiceBridge</text>
      <text x="55" y="46" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">Therapy Center</text>

      {[
        { icon: '📊', label: 'Overview', y: 88, active: true },
        { icon: '👥', label: 'Families', y: 126, active: false },
        { icon: '👶', label: 'Children', y: 164, active: false },
        { icon: '👩‍⚕️', label: 'Therapists', y: 202, active: false },
        { icon: '📋', label: 'Sessions', y: 240, active: false },
        { icon: '💳', label: 'Card Library', y: 278, active: false },
        { icon: '🔔', label: 'Notifications', y: 316, active: false },
        { icon: '📈', label: 'Reports', y: 354, active: false },
        { icon: '⚙️', label: 'Settings', y: 392, active: false },
      ].map(({ icon, label, y, active }) => (
        <g key={label}>
          {active && <rect x="0" y={y - 14} width="210" height="32" fill="#7c3aed" />}
          {!active && <rect x="0" y={y - 14} width="210" height="32" fill="transparent" />}
          <text x="20" y={y + 4} fill={active ? 'white' : '#64748b'} fontSize="13" fontFamily="Inter, sans-serif">{icon}</text>
          <text x="44" y={y + 4} fill={active ? 'white' : '#64748b'} fontSize="12" fontFamily="Inter, sans-serif">{label}</text>
        </g>
      ))}

      <rect x="10" y="490" width="190" height="50" rx="10" fill="#1e293b" />
      <circle cx="30" cy="515" r="14" fill="#7c3aed" />
      <text x="30" y="520" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter, sans-serif">HC</text>
      <text x="52" y="511" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Hope Care Center</text>
      <text x="52" y="526" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">Admin Account</text>

      {/* Top bar */}
      <rect x="210" y="0" width="690" height="56" fill="white" />
      <rect x="210" y="55" width="690" height="1" fill="#e2e8f0" />
      <text x="228" y="30" fill="#0f172a" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">Center Overview</text>
      <text x="228" y="48" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">July 2025  —  All Departments</text>

      {/* Invite button */}
      <rect x="760" y="14" width="120" height="30" rx="8" fill="#7c3aed" />
      <text x="820" y="33" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">+ Invite Family</text>

      {/* Stats row */}
      {[
        { label: 'Total Families', value: '24', sub: '+3 this month', icon: '👨‍👩‍👧', bg: '#ede9fe', x: 228 },
        { label: 'Active Children', value: '31', sub: '8 sessions today', icon: '👶', bg: '#dbeafe', x: 406 },
        { label: 'Therapists', value: '6', sub: 'All available', icon: '👩‍⚕️', bg: '#dcfce7', x: 584 },
        { label: 'Comm Events', value: '284', sub: 'This week', icon: '⚡', bg: '#fef3c7', x: 762 },
      ].map(({ label, value, sub, icon, bg, x }) => (
        <g key={label}>
          <rect x={x} y="68" width="160" height="78" rx="12" fill={bg} />
          <text x={x + 14} y="100" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="Inter, sans-serif">{value}</text>
          <text x={x + 14} y="116" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">{label}</text>
          <text x={x + 14} y="132" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">{sub}</text>
          <text x={x + 132} y="100" fontSize="20" fontFamily="Inter, sans-serif">{icon}</text>
        </g>
      ))}

      {/* Families table */}
      <text x="228" y="172" fill="#0f172a" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Registered Families</text>
      <rect x="228" y="180" width="652" height="34" rx="0" fill="#f1f5f9" />
      {['Family Name', 'Children', 'Therapist', 'Last Active', 'Status', 'Action'].map((h, i) => (
        <text key={h} x={[240, 360, 470, 570, 660, 760][i]} y="202" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{h}</text>
      ))}

      {[
        { name: 'Ahmed Family', children: '2 children', therapist: 'Dr. Sara K.', last: 'Today, 10:22', status: 'Active', dot: '#16a34a' },
        { name: 'Khan Family', children: '1 child', therapist: 'Dr. Ali M.', last: 'Today, 09:45', status: 'Active', dot: '#16a34a' },
        { name: 'Malik Family', children: '3 children', therapist: 'Dr. Sara K.', last: 'Yesterday', status: 'Active', dot: '#16a34a' },
        { name: 'Siddiqui Family', children: '1 child', therapist: 'Unassigned', last: '3 days ago', status: 'Pending', dot: '#f59e0b' },
      ].map(({ name, children, therapist, last, status, dot }, i) => (
        <g key={name}>
          <rect x="228" y={214 + i * 40} width="652" height="40" rx="0" fill={i % 2 === 0 ? 'white' : '#fafafa'} stroke="#e2e8f0" strokeWidth="0.5" />
          <circle cx="244" cy={234 + i * 40} r="14" fill="#ede9fe" />
          <text x="244" y={239 + i * 40} textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{name[0]}</text>
          <text x="264" y={239 + i * 40} fill="#0f172a" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{name}</text>
          <text x="360" y={239 + i * 40} fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{children}</text>
          <text x="470" y={239 + i * 40} fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{therapist}</text>
          <text x="570" y={239 + i * 40} fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">{last}</text>
          <circle cx="656" cy={234 + i * 40} r="4" fill={dot} />
          <text x="666" y={239 + i * 40} fill={dot === '#16a34a' ? '#16a34a' : '#d97706'} fontSize="11" fontFamily="Inter, sans-serif">{status}</text>
          <text x="760" y={239 + i * 40} fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">View →</text>
        </g>
      ))}

      {/* Bottom panels */}
      {/* Quick assign therapist */}
      <rect x="228" y="388" width="310" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="246" y="410" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Assign Therapist</text>
      <text x="246" y="426" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Drag to assign families to therapists</text>
      {[
        { name: 'Dr. Sara K.', count: '8 families', fill: '#ede9fe' },
        { name: 'Dr. Ali M.', count: '7 families', fill: '#dbeafe' },
        { name: 'Dr. Nadia R.', count: '6 families', fill: '#dcfce7' },
      ].map(({ name, count, fill }, i) => (
        <g key={name}>
          <rect x="240" y={436 + i * 30} width="285" height="24" rx="8" fill={fill} />
          <text x="254" y={452 + i * 30} fill="#0f172a" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{name}</text>
          <text x="450" y={452 + i * 30} fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">{count}</text>
        </g>
      ))}

      {/* Notification settings */}
      <rect x="558" y="388" width="322" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="576" y="410" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Notification Settings</text>
      {[
        { label: 'Alert parents on card tap', on: true },
        { label: 'Weekly progress reports', on: true },
        { label: 'Therapist session reminders', on: false },
      ].map(({ label, on }, i) => (
        <g key={label}>
          <text x="576" y={438 + i * 38} fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">{label}</text>
          <rect x="808" y={422 + i * 38} width="36" height="20" rx="10" fill={on ? '#7c3aed' : '#cbd5e1'} />
          <circle cx={on ? 834 : 820} cy={432 + i * 38} r="8" fill="white" />
        </g>
      ))}
    </svg>
  )
}
