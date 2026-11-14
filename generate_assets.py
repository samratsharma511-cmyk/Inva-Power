import os

assets_dir = "/Users/samratsharma/.gemini/antigravity/scratch/inva-power-batteries/assets"
os.makedirs(assets_dir, exist_ok=True)

# 1. Inva Power Express Heavy-Duty Commercial Truck Battery
inva_truck_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e2229"/>
      <stop offset="50%" stop-color="#14171d"/>
      <stop offset="100%" stop-color="#0b0d10"/>
    </linearGradient>
    <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff3b30"/>
      <stop offset="70%" stop-color="#d61f14"/>
      <stop offset="100%" stop-color="#a5120a"/>
    </linearGradient>
    <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Ground Shadow -->
  <ellipse cx="300" cy="425" rx="240" ry="18" fill="#000000" opacity="0.3"/>

  <!-- Battery Main Container -->
  <g filter="url(#shadow)">
    <!-- Main Body Casing -->
    <rect x="70" y="130" width="460" height="275" rx="14" fill="url(#bodyGrad)" stroke="#374151" stroke-width="2"/>
    
    <!-- Ribbing for heavy-duty shock absorption -->
    <path d="M70 200 H530 M70 270 H530 M70 340 H530" stroke="#252a33" stroke-width="3" stroke-dasharray="12 8"/>
    <rect x="74" y="380" width="452" height="20" rx="4" fill="#090a0d"/>
    
    <!-- Heavy Duty Handles -->
    <path d="M50 160 C50 145 65 145 70 148 V230 C65 233 50 233 50 218 Z" fill="#991b1b" stroke="#7f1d1d"/>
    <path d="M550 160 C550 145 535 145 530 148 V230 C535 233 550 233 550 218 Z" fill="#991b1b" stroke="#7f1d1d"/>
    <rect x="42" y="170" width="16" height="50" rx="4" fill="#ef4444"/>
    <rect x="542" y="170" width="16" height="50" rx="4" fill="#ef4444"/>

    <!-- Top Lid -->
    <rect x="60" y="70" width="480" height="65" rx="8" fill="url(#lidGrad)" stroke="#7f1d1d" stroke-width="1.5"/>
    <rect x="80" y="60" width="440" height="15" rx="3" fill="#b91c1c"/>

    <!-- Terminal Posts -->
    <!-- Positive (+) Terminal -->
    <rect x="100" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
    <rect x="106" y="26" width="22" height="12" rx="3" fill="#dc2626"/>
    <text x="117" y="55" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="20" text-anchor="middle">+</text>

    <!-- Negative (-) Terminal -->
    <rect x="466" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
    <rect x="472" y="26" width="22" height="12" rx="3" fill="#1f2937"/>
    <text x="483" y="54" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="22" text-anchor="middle">−</text>

    <!-- Cell Vent Plugs (6 Plugs for 12V Heavy Truck) -->
    <g fill="#1f2937" stroke="#4b5563" stroke-width="1.5">
      <circle cx="175" cy="98" r="14"/><circle cx="175" cy="98" r="6" fill="#fbbf24"/>
      <circle cx="225" cy="98" r="14"/><circle cx="225" cy="98" r="6" fill="#fbbf24"/>
      <circle cx="275" cy="98" r="14"/><circle cx="275" cy="98" r="6" fill="#fbbf24"/>
      <circle cx="325" cy="98" r="14"/><circle cx="325" cy="98" r="6" fill="#fbbf24"/>
      <circle cx="375" cy="98" r="14"/><circle cx="375" cy="98" r="6" fill="#fbbf24"/>
      <circle cx="425" cy="98" r="14"/><circle cx="425" cy="98" r="6" fill="#fbbf24"/>
    </g>

    <!-- Front Premium Metallic Label -->
    <rect x="95" y="150" width="410" height="220" rx="8" fill="url(#labelGrad)" stroke="#ff3b30" stroke-width="2"/>
    <rect x="100" y="155" width="400" height="5" fill="#f59e0b"/>
    
    <!-- Label Accents & Lightning Motif -->
    <path d="M420 160 L480 160 L445 230 L470 230 L395 350 L425 250 L400 250 Z" fill="#ff3b30" opacity="0.15"/>

    <!-- Inva Power Brand -->
    <g transform="translate(120, 195)">
      <text x="0" y="0" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="34" letter-spacing="2">INVA POWER</text>
      <rect x="0" y="8" width="180" height="3" fill="#ff3b30"/>
      <text x="188" y="12" fill="#f59e0b" font-family="Arial, sans-serif" font-weight="800" font-size="11" letter-spacing="3">HEAVY DUTY COMMERCIAL</text>
    </g>

    <!-- Sub-brand "EXPRESS" for Truck -->
    <g transform="translate(120, 260)">
      <rect x="-4" y="-24" width="180" height="36" rx="4" fill="#dc2626"/>
      <text x="86" y="2" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28" letter-spacing="4" text-anchor="middle">EXPRESS</text>
      <text x="0" y="32" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="600">TRUCK &amp; COMMERCIAL VEHICLE BATTERY</text>
    </g>

    <!-- Specs Badges on Label -->
    <g transform="translate(120, 318)">
      <rect x="0" y="0" width="85" height="36" rx="4" fill="#0f172a" stroke="#334155"/>
      <text x="42" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">CAPACITY</text>
      <text x="42" y="30" fill="#f8fafc" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">135-180 Ah</text>

      <rect x="95" y="0" width="85" height="36" rx="4" fill="#0f172a" stroke="#334155"/>
      <text x="137" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">VOLTAGE</text>
      <text x="137" y="30" fill="#38bdf8" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">12V LEAD-ACID</text>

      <rect x="190" y="0" width="85" height="36" rx="4" fill="#0f172a" stroke="#334155"/>
      <text x="232" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">WARRANTY</text>
      <text x="232" y="30" fill="#4ade80" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">36 MONTHS</text>

      <rect x="285" y="0" width="85" height="36" rx="4" fill="#0f172a" stroke="#334155"/>
      <text x="327" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">TECHNOLOGY</text>
      <text x="327" y="30" fill="#f59e0b" font-family="Arial, sans-serif" font-weight="800" font-size="11" text-anchor="middle">HIGH CCA CRANK</text>
    </g>
    
    <!-- Made in India Badge -->
    <rect x="420" y="168" width="75" height="18" rx="3" fill="#1e293b" stroke="#475569"/>
    <text x="457" y="180" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">🇮🇳 MADE IN INDIA</text>
  </g>
</svg>
"""

# 2. Inva Power Jai Kisan Tractor Battery
inva_tractor_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyTractor" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#19231a"/>
      <stop offset="50%" stop-color="#0f1711"/>
      <stop offset="100%" stop-color="#070b08"/>
    </linearGradient>
    <linearGradient id="lidTractor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="70%" stop-color="#15803d"/>
      <stop offset="100%" stop-color="#166534"/>
    </linearGradient>
    <linearGradient id="labelTractor" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1b12"/>
      <stop offset="50%" stop-color="#132c1c"/>
      <stop offset="100%" stop-color="#07130b"/>
    </linearGradient>
    <filter id="shadowTractor" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-opacity="0.4"/>
    </filter>
  </defs>

  <ellipse cx="300" cy="425" rx="230" ry="16" fill="#000000" opacity="0.3"/>

  <g filter="url(#shadowTractor)">
    <!-- Battery Main Casing -->
    <rect x="80" y="130" width="440" height="275" rx="14" fill="url(#bodyTractor)" stroke="#22c55e" stroke-width="1.5"/>
    <path d="M80 210 H520 M80 290 H520 M80 370 H520" stroke="#1c2d20" stroke-width="2.5"/>

    <!-- Rugged Field Grip Handles -->
    <path d="M62 165 C62 150 78 150 80 152 V225 C78 227 62 227 62 215 Z" fill="#15803d"/>
    <path d="M538 165 C538 150 522 150 520 152 V225 C522 227 538 227 538 215 Z" fill="#15803d"/>
    <rect x="54" y="175" width="16" height="45" rx="3" fill="#22c55e"/>
    <rect x="530" y="175" width="16" height="45" rx="3" fill="#22c55e"/>

    <!-- Top Lid -->
    <rect x="70" y="70" width="460" height="65" rx="8" fill="url(#lidTractor)" stroke="#14532d" stroke-width="1.5"/>
    <rect x="90" y="60" width="420" height="15" rx="3" fill="#15803d"/>

    <!-- Terminals -->
    <rect x="110" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
    <rect x="116" y="26" width="22" height="12" rx="3" fill="#dc2626"/>
    <text x="127" y="55" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="20" text-anchor="middle">+</text>

    <rect x="456" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
    <rect x="462" y="26" width="22" height="12" rx="3" fill="#1f2937"/>
    <text x="473" y="54" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="22" text-anchor="middle">−</text>

    <!-- 6 Vent Plugs -->
    <g fill="#1f2937" stroke="#22c55e" stroke-width="1.5">
      <circle cx="180" cy="98" r="14"/><circle cx="180" cy="98" r="5" fill="#22c55e"/>
      <circle cx="228" cy="98" r="14"/><circle cx="228" cy="98" r="5" fill="#22c55e"/>
      <circle cx="276" cy="98" r="14"/><circle cx="276" cy="98" r="5" fill="#22c55e"/>
      <circle cx="324" cy="98" r="14"/><circle cx="324" cy="98" r="5" fill="#22c55e"/>
      <circle cx="372" cy="98" r="14"/><circle cx="372" cy="98" r="5" fill="#22c55e"/>
      <circle cx="420" cy="98" r="14"/><circle cx="420" cy="98" r="5" fill="#22c55e"/>
    </g>

    <!-- Label -->
    <rect x="105" y="150" width="390" height="220" rx="8" fill="url(#labelTractor)" stroke="#22c55e" stroke-width="2"/>
    <rect x="110" y="155" width="380" height="5" fill="#eab308"/>

    <!-- Inva Power Header -->
    <g transform="translate(128, 195)">
      <text x="0" y="0" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="34" letter-spacing="2">INVA POWER</text>
      <rect x="0" y="8" width="180" height="3" fill="#22c55e"/>
      <text x="188" y="12" fill="#facc15" font-family="Arial, sans-serif" font-weight="800" font-size="11" letter-spacing="2">RUGGED FARM SERIES</text>
    </g>

    <!-- Sub-brand "JAI KISAN" -->
    <g transform="translate(128, 260)">
      <rect x="-4" y="-24" width="195" height="36" rx="4" fill="#15803d"/>
      <text x="93" y="2" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28" letter-spacing="4" text-anchor="middle">JAI KISAN</text>
      <text x="0" y="32" fill="#86efac" font-family="Arial, sans-serif" font-size="12" font-weight="600">SPECIAL HEAVY DUTY TRACTOR BATTERY</text>
    </g>

    <!-- Specs Badges -->
    <g transform="translate(128, 318)">
      <rect x="0" y="0" width="80" height="36" rx="4" fill="#052e16" stroke="#166534"/>
      <text x="40" y="16" fill="#86efac" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">CAPACITY</text>
      <text x="40" y="30" fill="#ffffff" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">70 - 100 Ah</text>

      <rect x="88" y="0" width="80" height="36" rx="4" fill="#052e16" stroke="#166534"/>
      <text x="128" y="16" fill="#86efac" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">VIBRATION</text>
      <text x="128" y="30" fill="#facc15" font-family="Arial, sans-serif" font-weight="800" font-size="12" text-anchor="middle">ULTRA RESIST</text>

      <rect x="176" y="0" width="80" height="36" rx="4" fill="#052e16" stroke="#166534"/>
      <text x="216" y="16" fill="#86efac" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">WARRANTY</text>
      <text x="216" y="30" fill="#4ade80" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">48 MONTHS</text>

      <rect x="264" y="0" width="80" height="36" rx="4" fill="#052e16" stroke="#166534"/>
      <text x="304" y="16" fill="#86efac" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">APPLICATION</text>
      <text x="304" y="30" fill="#ffffff" font-family="Arial, sans-serif" font-weight="800" font-size="11" text-anchor="middle">TRACTORS &amp; HARV.</text>
    </g>

    <!-- Field icon/badge -->
    <rect x="410" y="168" width="75" height="18" rx="3" fill="#064e3b" stroke="#10b981"/>
    <text x="447" y="180" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">🌾 KISAN SPECIAL</text>
  </g>
</svg>
"""

# 3. Inva Power Tall Tubular Inverter Battery
inva_inverter_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyTubular" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="lidBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="60%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <filter id="shadowInverter" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="14" stdDeviation="12" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Floor Shadow -->
  <ellipse cx="250" cy="535" rx="190" ry="16" fill="#000000" opacity="0.3"/>

  <g filter="url(#shadowInverter)">
    <!-- Tall Tubular Body -->
    <rect x="90" y="120" width="320" height="400" rx="12" fill="url(#bodyTubular)" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="94" y="500" width="312" height="16" rx="4" fill="#94a3b8"/>

    <!-- Bottom reinforcement ribs -->
    <path d="M90 440 H410 M90 470 H410" stroke="#cbd5e1" stroke-width="2"/>

    <!-- Side Handles -->
    <rect x="74" y="190" width="16" height="50" rx="3" fill="#0369a1"/>
    <rect x="410" y="190" width="16" height="50" rx="3" fill="#0369a1"/>

    <!-- Blue Top Lid -->
    <rect x="80" y="70" width="340" height="55" rx="8" fill="url(#lidBlue)" stroke="#075985" stroke-width="1.5"/>

    <!-- Float Level Indicators (6 Ceramic Floats) -->
    <g transform="translate(110, 42)">
      <!-- 1 -->
      <rect x="10" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="16" cy="10" r="4" fill="#ef4444"/>
      <circle cx="16" cy="22" r="3" fill="#22c55e"/>
      <!-- 2 -->
      <rect x="52" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="58" cy="10" r="4" fill="#ef4444"/>
      <circle cx="58" cy="22" r="3" fill="#22c55e"/>
      <!-- 3 -->
      <rect x="94" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="100" cy="10" r="4" fill="#ef4444"/>
      <circle cx="100" cy="22" r="3" fill="#22c55e"/>
      <!-- 4 -->
      <rect x="174" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="180" cy="10" r="4" fill="#ef4444"/>
      <circle cx="180" cy="22" r="3" fill="#22c55e"/>
      <!-- 5 -->
      <rect x="216" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="222" cy="10" r="4" fill="#ef4444"/>
      <circle cx="222" cy="22" r="3" fill="#22c55e"/>
      <!-- 6 -->
      <rect x="258" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="264" cy="10" r="4" fill="#ef4444"/>
      <circle cx="264" cy="22" r="3" fill="#22c55e"/>
    </g>

    <!-- Terminals -->
    <rect x="100" y="30" width="22" height="38" rx="3" fill="#dc2626"/>
    <text x="111" y="55" fill="#ffffff" font-weight="900" font-size="16" text-anchor="middle">+</text>

    <rect x="378" y="30" width="22" height="38" rx="3" fill="#1e293b"/>
    <text x="389" y="55" fill="#ffffff" font-weight="900" font-size="18" text-anchor="middle">−</text>

    <!-- Front Label Artwork -->
    <rect x="110" y="145" width="280" height="270" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
    <rect x="115" y="150" width="270" height="4" fill="#0284c7"/>

    <!-- Inva Power Brand -->
    <g transform="translate(130, 195)">
      <text x="0" y="0" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="30" letter-spacing="2">INVA POWER</text>
      <rect x="0" y="7" width="140" height="3" fill="#0284c7"/>
      <text x="0" y="24" fill="#38bdf8" font-family="Arial, sans-serif" font-weight="800" font-size="11" letter-spacing="2">TALL TUBULAR LEAD-ACID</text>
    </g>

    <!-- Model highlight -->
    <g transform="translate(130, 255)">
      <rect x="0" y="-18" width="160" height="28" rx="4" fill="url(#lidBlue)"/>
      <text x="80" y="2" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="18" letter-spacing="2" text-anchor="middle">ULTRA BACKUP</text>
      <text x="0" y="30" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11" font-weight="600">HOME &amp; COMMERCIAL INVERTERS</text>
    </g>

    <!-- Specs grid -->
    <g transform="translate(130, 310)">
      <rect x="0" y="0" width="115" height="42" rx="4" fill="#1e293b" stroke="#334155"/>
      <text x="57" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">CAPACITY RANGE</text>
      <text x="57" y="33" fill="#38bdf8" font-family="Arial, sans-serif" font-weight="800" font-size="14" text-anchor="middle">150 - 220 Ah</text>

      <rect x="125" y="0" width="115" height="42" rx="4" fill="#1e293b" stroke="#334155"/>
      <text x="182" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">WARRANTY</text>
      <text x="182" y="33" fill="#4ade80" font-family="Arial, sans-serif" font-weight="800" font-size="14" text-anchor="middle">60 MONTHS</text>
    </g>

    <g transform="translate(130, 365)">
      <rect x="0" y="0" width="240" height="36" rx="4" fill="#1e293b" stroke="#334155"/>
      <text x="120" y="15" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">⚡ ULTRA LOW MAINTENANCE</text>
      <text x="120" y="28" fill="#94a3b8" font-family="Arial, sans-serif" font-size="8.5" text-anchor="middle">Extra Acid Volume • Fast Recharge Cycle</text>
    </g>

    <!-- Float Level Guide on Battery -->
    <g transform="translate(130, 430)">
      <rect x="0" y="0" width="240" height="26" rx="3" fill="#e2e8f0"/>
      <circle cx="20" cy="13" r="5" fill="#22c55e"/>
      <text x="32" y="17" fill="#1e293b" font-family="Arial, sans-serif" font-size="9" font-weight="bold">OK</text>
      <circle cx="80" cy="13" r="5" fill="#ef4444"/>
      <text x="92" y="17" fill="#1e293b" font-family="Arial, sans-serif" font-size="9" font-weight="bold">TOP-UP</text>
      <text x="175" y="17" fill="#475569" font-family="Arial, sans-serif" font-size="8.5">Float Indicator Guide</text>
    </g>
  </g>
</svg>
"""

# 4. Inva Power Bike Battery
inva_bike_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyBike" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="60%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <filter id="shadowBike" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-opacity="0.35"/>
    </filter>
  </defs>

  <ellipse cx="225" cy="370" rx="170" ry="14" fill="#000000" opacity="0.3"/>

  <g filter="url(#shadowBike)">
    <!-- Battery Casing -->
    <rect x="75" y="100" width="300" height="250" rx="10" fill="url(#bodyBike)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="70" y="80" width="310" height="30" rx="5" fill="#0f172a" stroke="#1e293b"/>

    <!-- Terminals -->
    <rect x="95" y="55" width="26" height="30" rx="3" fill="#dc2626"/>
    <text x="108" y="76" fill="#ffffff" font-weight="900" font-size="18" text-anchor="middle">+</text>

    <rect x="329" y="55" width="26" height="30" rx="3" fill="#475569"/>
    <text x="342" y="75" fill="#ffffff" font-weight="900" font-size="20" text-anchor="middle">−</text>

    <!-- Front Label -->
    <rect x="95" y="125" width="260" height="205" rx="6" fill="#090d16" stroke="#0284c7" stroke-width="1.5"/>
    
    <g transform="translate(115, 160)">
      <text x="0" y="0" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="26" letter-spacing="1">INVA POWER</text>
      <rect x="0" y="6" width="120" height="3" fill="#38bdf8"/>
      <text x="0" y="22" fill="#38bdf8" font-family="Arial, sans-serif" font-weight="800" font-size="10" letter-spacing="2">VRLA / MF BIKE BATTERY</text>
    </g>

    <g transform="translate(115, 215)">
      <rect x="0" y="0" width="105" height="40" rx="4" fill="#1e293b"/>
      <text x="52" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">CAPACITY</text>
      <text x="52" y="32" fill="#38bdf8" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">2.5Ah - 9Ah</text>

      <rect x="115" y="0" width="105" height="40" rx="4" fill="#1e293b"/>
      <text x="167" y="16" fill="#94a3b8" font-family="Arial, sans-serif" font-size="9" text-anchor="middle">WARRANTY</text>
      <text x="167" y="32" fill="#4ade80" font-family="Arial, sans-serif" font-weight="800" font-size="13" text-anchor="middle">48 MONTHS</text>
    </g>

    <g transform="translate(115, 275)">
      <rect x="0" y="0" width="220" height="36" rx="4" fill="#0f172a" stroke="#1e293b"/>
      <text x="110" y="15" fill="#f8fafc" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">🏍️ ZERO MAINTENANCE VRLA</text>
      <text x="110" y="28" fill="#94a3b8" font-family="Arial, sans-serif" font-size="8.5" text-anchor="middle">Instant Self-Start • Spill-Proof AGM</text>
    </g>
  </g>
</svg>
"""

# 5. Exide Truck & Commercial Battery
exide_truck_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <ellipse cx="300" cy="425" rx="240" ry="18" fill="#000000" opacity="0.3"/>
  <rect x="70" y="130" width="460" height="275" rx="14" fill="#1c1917" stroke="#44403c" stroke-width="2"/>
  <path d="M70 200 H530 M70 270 H530 M70 340 H530" stroke="#292524" stroke-width="3" stroke-dasharray="12 8"/>
  <rect x="60" y="70" width="480" height="65" rx="8" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <rect x="100" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
  <rect x="466" y="35" width="34" height="30" rx="4" fill="#9ca3af"/>
  <!-- 6 Plugs -->
  <g fill="#1f2937" stroke="#dc2626" stroke-width="1.5">
    <circle cx="175" cy="98" r="14"/><circle cx="225" cy="98" r="14"/><circle cx="275" cy="98" r="14"/>
    <circle cx="325" cy="98" r="14"/><circle cx="375" cy="98" r="14"/><circle cx="425" cy="98" r="14"/>
  </g>
  <rect x="95" y="150" width="410" height="220" rx="8" fill="#0c0a09" stroke="#dc2626" stroke-width="2"/>
  <g transform="translate(120, 205)">
    <text x="0" y="0" fill="#dc2626" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="44" letter-spacing="3">EXIDE</text>
    <rect x="160" y="-30" width="110" height="32" rx="4" fill="#dc2626"/>
    <text x="215" y="-8" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="22" text-anchor="middle">XPRESS</text>
    <text x="0" y="24" fill="#f59e0b" font-family="Arial, sans-serif" font-weight="bold" font-size="12">HEAVY DUTY COMMERCIAL TRUCK</text>
  </g>
  <g transform="translate(120, 275)">
    <text x="0" y="20" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Extreme Cranking Power • Factory Sealed</text>
    <text x="0" y="45" fill="#a8a29e" font-family="Arial, sans-serif" font-size="12">Available in 135Ah, 150Ah, 180Ah</text>
  </g>
  <rect x="410" y="325" width="80" height="30" rx="4" fill="#292524" stroke="#dc2626"/>
  <text x="450" y="345" fill="#fca5a5" font-family="Arial, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">36M WTY</text>
</svg>
"""

# 6. Exide Inverter Battery
exide_inverter_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="100%" height="100%">
  <ellipse cx="250" cy="535" rx="190" ry="16" fill="#000000" opacity="0.3"/>
  <rect x="90" y="120" width="320" height="400" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="80" y="70" width="340" height="55" rx="8" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
  <!-- Floats -->
  <g transform="translate(110, 42)">
    <rect x="10" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="52" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="94" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="174" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="216" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="258" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#dc2626" stroke-width="1.5"/>
  </g>
  <rect x="110" y="150" width="280" height="260" rx="8" fill="#1c1917" stroke="#dc2626" stroke-width="2"/>
  <g transform="translate(130, 210)">
    <text x="0" y="0" fill="#dc2626" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="38" letter-spacing="2">EXIDE</text>
    <text x="0" y="30" fill="#facc15" font-family="Impact, Arial Black, sans-serif" font-size="22">INVAMASTER</text>
    <text x="0" y="55" fill="#ffffff" font-family="Arial, sans-serif" font-size="12">Short / Tall Tubular Inverter Battery</text>
    <text x="0" y="80" fill="#a8a29e" font-family="Arial, sans-serif" font-size="11">High Reliability &amp; Deep Discharge Cycle</text>
  </g>
  <rect x="130" y="325" width="240" height="40" rx="4" fill="#292524"/>
  <text x="250" y="350" fill="#fca5a5" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Official Exide Warranty: 48M</text>
</svg>
"""

# 7. Luminous Inverter Battery
luminous_inverter_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="100%" height="100%">
  <ellipse cx="250" cy="535" rx="190" ry="16" fill="#000000" opacity="0.3"/>
  <rect x="90" y="120" width="320" height="400" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="80" y="70" width="340" height="55" rx="8" fill="#1e3a8a" stroke="#172554" stroke-width="1.5"/>
  <!-- Floats -->
  <g transform="translate(110, 42)">
    <rect x="10" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
    <rect x="52" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
    <rect x="94" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
    <rect x="174" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
    <rect x="216" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
    <rect x="258" y="0" width="12" height="32" rx="3" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.5"/>
  </g>
  <rect x="110" y="150" width="280" height="260" rx="8" fill="#0f172a" stroke="#2563eb" stroke-width="2"/>
  <g transform="translate(130, 210)">
    <text x="0" y="0" fill="#38bdf8" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="34" letter-spacing="2">LUMINOUS</text>
    <rect x="0" y="10" width="160" height="26" rx="3" fill="#dc2626"/>
    <text x="80" y="28" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-size="16" letter-spacing="2" text-anchor="middle">RED CHARGE</text>
    <text x="0" y="65" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="12">Extra Backup Tall Tubular Battery</text>
    <text x="0" y="90" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">Fast Charging • Heavy Power Cuts</text>
  </g>
  <rect x="130" y="325" width="240" height="40" rx="4" fill="#1e293b"/>
  <text x="250" y="350" fill="#60a5fa" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Luminous Certified: 36M + 18M</text>
</svg>
"""

files = {
    "inva-truck-express.svg": inva_truck_svg,
    "inva-tractor-jaikisan.svg": inva_tractor_svg,
    "inva-inverter-tubular.svg": inva_inverter_svg,
    "inva-bike-power.svg": inva_bike_svg,
    "exide-truck.svg": exide_truck_svg,
    "exide-inverter.svg": exide_inverter_svg,
    "luminous-inverter.svg": luminous_inverter_svg,
}

for name, content in files.items():
    with open(os.path.join(assets_dir, name), "w", encoding="utf-8") as f:
        f.write(content.strip())

print(f"Generated {len(files)} battery SVG assets successfully in {assets_dir}")

