/**
 * PROJECT ETERA - SPORTS MODULE
 * Cohesive Vector SVG Illustrations
 * Follows strict Storyboard visual direction:
 * - Faceless mutlak: zero eyes, nose, mouth, facial details.
 * - Modest / syar'i attire: hijab & full coverage for female figures, modest sportswear for male figures.
 * - Minimal, mature, clean aesthetic.
 */

export const VISUAL_ASSETS = {
  // Brand / Module Cover Still Life
  module_cover: `
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-56">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F8FAFC"/>
          <stop offset="1" stop-color="#EEF2F6"/>
        </linearGradient>
        <linearGradient id="pitchGrad" x1="50" y1="180" x2="350" y2="220" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E2E8F0"/>
          <stop offset="1" stop-color="#CBD5E1"/>
        </linearGradient>
      </defs>
      <!-- Background subtle ground curve -->
      <rect width="400" height="240" rx="16" fill="url(#bgGrad)"/>
      <ellipse cx="200" cy="200" rx="160" ry="24" fill="url(#pitchGrad)"/>
      
      <!-- Football -->
      <circle cx="150" cy="170" r="32" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
      <polygon points="150,150 162,159 158,173 142,173 138,159" fill="#0F172A"/>
      <polygon points="150,150 150,138 135,142 138,159" stroke="#0F172A" stroke-width="2" fill="none"/>
      <polygon points="162,159 174,155 178,168 158,173" stroke="#0F172A" stroke-width="2" fill="none"/>
      
      <!-- Basketball -->
      <circle cx="235" cy="165" r="36" fill="#F97316" stroke="#9A3412" stroke-width="3"/>
      <path d="M200 165 H270" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M235 130 V200" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M210 140 C225 152 225 178 210 190" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <path d="M260 140 C245 152 245 178 260 190" stroke="#7C2D12" stroke-width="2" fill="none"/>
      
      <!-- Tennis Racket Head leaning -->
      <ellipse cx="295" cy="145" rx="20" ry="32" transform="rotate(25 295 145)" stroke="#0D9488" stroke-width="4" fill="#F0FDFA" opacity="0.9"/>
      <line x1="280" y1="125" x2="310" y2="165" stroke="#99F6E4" stroke-width="1.5"/>
      <line x1="310" y1="125" x2="280" y2="165" stroke="#99F6E4" stroke-width="1.5"/>
      <rect x="312" y="170" width="8" height="42" rx="4" transform="rotate(25 312 170)" fill="#0F766E"/>
      
      <!-- Shuttlecock -->
      <path d="M100 160 L85 135 L115 135 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
      <ellipse cx="100" cy="160" rx="8" ry="6" fill="#F43F5E"/>
    </svg>
  `,

  // 01: Football on pitch
  football: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F1F5F9"/>
      <!-- Pitch turf -->
      <path d="M20 145 C70 135 170 135 220 145 L215 165 C165 172 75 172 25 165 Z" fill="#DCFCE7"/>
      <path d="M40 142 L200 142" stroke="#86EFAC" stroke-width="2" stroke-dasharray="4 4"/>
      <!-- Football -->
      <circle cx="120" cy="115" r="38" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
      <!-- Pentagons -->
      <polygon points="120,95 133,105 128,121 112,121 107,105" fill="#1E293B"/>
      <!-- Radiating seam lines -->
      <line x1="120" y1="95" x2="120" y2="78" stroke="#1E293B" stroke-width="2"/>
      <line x1="133" y1="105" x2="149" y2="98" stroke="#1E293B" stroke-width="2"/>
      <line x1="128" y1="121" x2="142" y2="137" stroke="#1E293B" stroke-width="2"/>
      <line x1="112" y1="121" x2="98" y2="137" stroke="#1E293B" stroke-width="2"/>
      <line x1="107" y1="105" x2="91" y2="98" stroke="#1E293B" stroke-width="2"/>
      <!-- Subtle shadow -->
      <ellipse cx="120" cy="154" rx="28" ry="6" fill="#94A3B8" opacity="0.4"/>
    </svg>
  `,

  // 02: Basketball and hoop
  basketball: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FFF7ED"/>
      <!-- Backboard and rim -->
      <rect x="140" y="25" width="8" height="60" rx="2" fill="#94A3B8"/>
      <rect x="95" y="65" width="45" height="5" rx="2" fill="#EA580C"/>
      <!-- Net -->
      <path d="M98 70 L110 100 L122 70 L134 100 L138 70" stroke="#CBD5E1" stroke-width="2" fill="none"/>
      <path d="M102 85 L135 85" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Basketball -->
      <ellipse cx="75" cy="125" rx="34" ry="34" fill="#F97316" stroke="#9A3412" stroke-width="3"/>
      <path d="M42 125 H108" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M75 92 V158" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M52 102 C66 113 66 137 52 148" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <path d="M98 102 C84 113 84 137 98 148" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <!-- Shadow -->
      <ellipse cx="75" cy="162" rx="26" ry="5" fill="#FED7AA" opacity="0.8"/>
    </svg>
  `,

  // 03: Volleyball above net
  volleyball: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Net pole & mesh -->
      <line x1="25" y1="80" x2="215" y2="80" stroke="#059669" stroke-width="4"/>
      <line x1="25" y1="130" x2="215" y2="130" stroke="#059669" stroke-width="3"/>
      <!-- Net grid lines -->
      <path d="M40 80 V130 M70 80 V130 M100 80 V130 M130 80 V130 M160 80 V130 M190 80 V130" stroke="#6EE7B7" stroke-width="1.5"/>
      <path d="M25 105 H215" stroke="#6EE7B7" stroke-width="1.5"/>
      <!-- Volleyball hovering in air -->
      <g transform="translate(120, 48)">
        <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#047857" stroke-width="2.5"/>
        <path d="M-21 -21 C-5 -5 -5 15 -21 21" stroke="#FBBF24" stroke-width="4" fill="none"/>
        <path d="M21 -21 C5 -5 5 15 21 21" stroke="#3B82F6" stroke-width="4" fill="none"/>
        <path d="M-29 0 C-10 0 10 0 29 0" stroke="#047857" stroke-width="2"/>
        <path d="M0 -29 C0 -10 0 10 0 29" stroke="#047857" stroke-width="2"/>
      </g>
    </svg>
  `,

  // 04: Tennis racket and ball
  tennis: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Tennis Racket -->
      <g transform="translate(100, 85) rotate(-20)">
        <ellipse cx="0" cy="-25" rx="28" ry="40" stroke="#2563EB" stroke-width="4" fill="#EFF6FF"/>
        <!-- Strings -->
        <path d="M-18 -25 H18 M-24 -40 H24 M-24 -10 H24 M0 -60 V10 M-12 -55 V5 M12 -55 V5" stroke="#93C5FD" stroke-width="1.5"/>
        <!-- Throat and grip -->
        <path d="M-8 15 L-6 40 H6 L8 15 Z" fill="#1D4ED8"/>
        <rect x="-6" y="40" width="12" height="42" rx="4" fill="#1E293B"/>
        <path d="M-6 48 H6 M-6 58 H6 M-6 68 H6" stroke="#94A3B8" stroke-width="1.5"/>
      </g>
      <!-- Tennis ball with felt curve -->
      <circle cx="165" cy="115" r="18" fill="#CCFF00" stroke="#65A30D" stroke-width="2.5"/>
      <path d="M152 105 C162 110 162 120 152 125" stroke="#FFFFFF" stroke-width="2" fill="none"/>
      <path d="M178 105 C168 110 168 120 178 125" stroke="#FFFFFF" stroke-width="2" fill="none"/>
    </svg>
  `,

  // 05: Swimming pool lane & modest swimmer (faceless, hijab swimwear)
  swimming: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#E0F2FE"/>
      <!-- Pool lane floats -->
      <path d="M15 50 Q120 60 225 50" stroke="#0284C7" stroke-width="4" stroke-dasharray="10 8"/>
      <path d="M15 140 Q120 148 225 140" stroke="#0284C7" stroke-width="4" stroke-dasharray="10 8"/>
      <!-- Water waves -->
      <path d="M30 85 Q70 75 110 85 T190 85" stroke="#38BDF8" stroke-width="2" fill="none"/>
      <path d="M50 115 Q90 105 130 115 T210 115" stroke="#38BDF8" stroke-width="2" fill="none"/>
      
      <!-- Modest faceless swimmer silhouette (swimming cap/burkini, fully covered, faceless) -->
      <g transform="translate(110, 85)">
        <!-- Arm extending stroke in water -->
        <path d="M-35 8 C-10 -5 15 -10 35 -5" stroke="#0369A1" stroke-width="8" stroke-linecap="round"/>
        <!-- Body with full modest coverage -->
        <ellipse cx="0" cy="5" rx="30" ry="12" fill="#0C4A6E"/>
        <!-- Head with modest swimming hood/cap (faceless - completely smooth) -->
        <circle cx="28" cy="-2" r="13" fill="#075985"/>
        <!-- Splash bubbles -->
        <circle cx="-38" cy="12" r="3" fill="#BAE6FD"/>
        <circle cx="-45" cy="5" r="2" fill="#BAE6FD"/>
      </g>
    </svg>
  `,

  // 06: Running track and shoes / runner silhouette (faceless, modest activewear)
  running: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FFF1F2"/>
      <!-- Track lanes -->
      <path d="M20 135 C80 125 160 125 220 135" stroke="#E11D48" stroke-width="8" stroke-linecap="round"/>
      <path d="M20 155 C80 145 160 145 220 155" stroke="#FDA4AF" stroke-width="2" stroke-dasharray="8 6"/>
      <!-- Faceless modest runner (long sleeve athletic wear, joggers, faceless head) -->
      <g transform="translate(120, 45)">
        <!-- Head (faceless, smooth silhouette) -->
        <circle cx="0" cy="18" r="14" fill="#9F1239"/>
        <!-- Torso in modest running top -->
        <path d="M-10 32 C-14 45 -12 70 -5 78 H8 C12 70 12 45 8 32 Z" fill="#BE123C"/>
        <!-- Arms in running motion -->
        <path d="M-8 38 L-22 55 L-12 65" stroke="#BE123C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M8 38 L24 48 L32 38" stroke="#BE123C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Legs in running stride (modest joggers) -->
        <path d="M-4 78 L-18 105 L-5 112" stroke="#4C0519" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M6 78 L22 96 L28 114" stroke="#4C0519" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Running shoes -->
        <ellipse cx="-4" cy="113" rx="7" ry="4" fill="#F43F5E"/>
        <ellipse cx="30" cy="116" rx="7" ry="4" fill="#F43F5E"/>
      </g>
    </svg>
  `,

  // 07: Bicycle in a park
  cycling: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Park greenery hills -->
      <path d="M10 155 C60 140 180 140 230 155" stroke="#86EFAC" stroke-width="6" stroke-linecap="round"/>
      <circle cx="205" cy="120" r="18" fill="#DCFCE7"/>
      <rect x="202" y="132" width="6" height="18" fill="#86EFAC"/>
      
      <!-- Bicycle -->
      <g transform="translate(115, 115)">
        <!-- Wheels -->
        <circle cx="-45" cy="20" r="22" stroke="#334155" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="45" cy="20" r="22" stroke="#334155" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="-45" cy="20" r="4" fill="#64748B"/>
        <circle cx="45" cy="20" r="4" fill="#64748B"/>
        <!-- Frame -->
        <path d="M-45 20 L-15 20 L25 -10 L-10 -10 Z" stroke="#16A34A" stroke-width="3.5" stroke-linejoin="round" fill="none"/>
        <path d="M-15 20 L-22 -16" stroke="#16A34A" stroke-width="3.5"/>
        <path d="M25 -10 L45 20" stroke="#16A34A" stroke-width="3.5"/>
        <!-- Handlebar & seat -->
        <path d="M20 -20 H32" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
        <path d="M-28 -18 H-14" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
        <!-- Pedals -->
        <circle cx="-15" cy="20" r="6" stroke="#0F172A" stroke-width="2" fill="#E2E8F0"/>
      </g>
    </svg>
  `,

  // 08: Table tennis paddle and table
  table_tennis: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FEFCE8"/>
      <!-- Ping pong table in isometric view -->
      <polygon points="40,120 140,105 200,125 100,140" fill="#1E3A8A"/>
      <polygon points="40,120 100,140 100,146 40,126" fill="#172554"/>
      <polygon points="100,140 200,125 200,131 100,146" fill="#172554"/>
      <!-- Net -->
      <line x1="120" y1="112" x2="150" y2="132" stroke="#FFFFFF" stroke-width="4"/>
      <!-- Table tennis paddle -->
      <g transform="translate(90, 65) rotate(-15)">
        <ellipse cx="0" cy="0" rx="22" ry="26" fill="#DC2626" stroke="#991B1B" stroke-width="3"/>
        <rect x="-5" y="24" width="10" height="28" rx="3" fill="#D97706"/>
      </g>
      <!-- Small white ball -->
      <circle cx="155" cy="75" r="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    </svg>
  `,

  // 09: Badminton racket and shuttlecock
  badminton: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDFA"/>
      <!-- Badminton Racket -->
      <g transform="translate(100, 85) rotate(35)">
        <ellipse cx="0" cy="-35" rx="24" ry="32" stroke="#0D9488" stroke-width="3" fill="#CCFBF1"/>
        <!-- Fine cross string mesh -->
        <path d="M-16 -35 H16 M-14 -50 H14 M-14 -20 H14 M0 -65 V-5 M-10 -60 V-10 M10 -60 V-10" stroke="#5EEAD4" stroke-width="1.2"/>
        <!-- Shaft & Grip -->
        <line x1="0" y1="-3" x2="0" y2="40" stroke="#0F766E" stroke-width="3"/>
        <rect x="-4" y="40" width="8" height="35" rx="3" fill="#134E4A"/>
      </g>
      <!-- Shuttlecock (feather and cork) -->
      <g transform="translate(155, 65) rotate(-25)">
        <path d="M0 0 L-18 -32 H18 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <line x1="-12" y1="-18" x2="12" y2="-18" stroke="#94A3B8" stroke-width="1.5"/>
        <ellipse cx="0" cy="2" rx="9" ry="7" fill="#F43F5E"/>
      </g>
    </svg>
  `,

  // 10: Karate belt and training stance (faceless, modest uniform)
  karate: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Dojo mat ground -->
      <rect x="30" y="145" width="180" height="10" rx="3" fill="#E2E8F0"/>
      <!-- Faceless karateka in modest white gi with black belt -->
      <g transform="translate(120, 40)">
        <!-- Head: completely smooth, faceless -->
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <!-- White Gi Jacket (wrap-over design) -->
        <path d="M-16 32 L-22 68 H22 L16 32 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
        <path d="M-12 32 L5 68 M12 32 L-5 68" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Black belt with knot -->
        <rect x="-24" y="65" width="48" height="7" rx="2" fill="#0F172A"/>
        <path d="M-2 72 L-6 92 M3 72 L7 90" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
        <!-- Guard arms -->
        <path d="M-16 42 L-34 52 L-28 35" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 42 L34 46 L26 30" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Loose white pants in martial stance -->
        <path d="M-15 72 L-25 108" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
        <path d="M15 72 L25 108" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // 11: Yoga mat and simple pose (faceless, modest clothing)
  yoga: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FAF5FF"/>
      <!-- Yoga Mat -->
      <rect x="35" y="135" width="170" height="12" rx="6" fill="#C084FC"/>
      <!-- Faceless modest yoga figure in gentle seated/tree pose -->
      <g transform="translate(120, 60)">
        <!-- Head (faceless, smooth silhouette) -->
        <circle cx="0" cy="15" r="13" fill="#6B21A8"/>
        <!-- Modest top -->
        <path d="M-10 28 C-14 42 -10 65 0 68 C10 65 14 42 10 28 Z" fill="#9333EA"/>
        <!-- Peaceful arms extended/prayer -->
        <path d="M-10 35 C-25 40 -20 20 -4 18" stroke="#9333EA" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M10 35 C25 40 20 20 4 18" stroke="#9333EA" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Modest loose yoga pants seated gracefully -->
        <path d="M-28 72 C-20 62 20 62 28 72 Z" fill="#581C87"/>
      </g>
    </svg>
  `,

  // 12: Walking path and shoes
  walking: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Cobblestone or winding walking path -->
      <path d="M80 180 Q110 110 130 50 L160 50 Q145 110 165 180 Z" fill="#E2E8F0"/>
      <line x1="95" y1="160" x2="148" y2="160" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="110" y1="120" x2="142" y2="120" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="5 5"/>
      <!-- Trees along path -->
      <circle cx="60" cy="90" r="16" fill="#86EFAC"/>
      <circle cx="190" cy="80" r="18" fill="#86EFAC"/>
      <!-- Comfortable walking shoes on path -->
      <g transform="translate(112, 130)">
        <ellipse cx="0" cy="0" rx="14" ry="7" fill="#0284C7"/>
        <path d="M-8 -6 C-2 -10 6 -8 12 -2" stroke="#E0F2FE" stroke-width="2" fill="none"/>
      </g>
      <g transform="translate(138, 110)">
        <ellipse cx="0" cy="0" rx="14" ry="7" fill="#0284C7"/>
        <path d="M-8 -6 C-2 -10 6 -8 12 -2" stroke="#E0F2FE" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `,

  // Sentence S1: Favourite sport (football)
  sentence_fav_football: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Ground -->
      <ellipse cx="140" cy="160" rx="110" ry="14" fill="#E2E8F0"/>
      <!-- Faceless speaker gesturing to football -->
      <g transform="translate(95, 55)">
        <circle cx="0" cy="18" r="14" fill="#475569"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#3B82F6"/>
        <path d="M8 40 L28 62" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
        <!-- Legs in trousers -->
        <path d="M-6 78 V105 M6 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Football being pointed to -->
      <circle cx="165" cy="135" r="24" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.5"/>
      <polygon points="165,123 173,129 170,139 160,139 157,129" fill="#0F172A"/>
    </svg>
  `,

  // Sentence S2: Asking preference (two faceless characters talking)
  sentence_ask_preference: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F1F5F9"/>
      <ellipse cx="140" cy="162" rx="100" ry="12" fill="#E2E8F0"/>
      <!-- Character 1 (Speaker asking question) -->
      <g transform="translate(85, 55)">
        <circle cx="0" cy="18" r="13" fill="#334155"/>
        <path d="M-8 32 L-12 78 H12 L8 32 Z" fill="#0D9488"/>
        <path d="M8 42 L24 48" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="5" stroke-linecap="round"/>
      </g>
      <!-- Speech bubble motif with question symbol ? -->
      <rect x="112" y="35" width="56" height="30" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
      <text x="140" y="56" font-size="20" font-family="Arial" font-weight="bold" fill="#0D9488" text-anchor="middle">؟</text>
      <!-- Character 2 (Addressee listening politely) -->
      <g transform="translate(195, 55)">
        <circle cx="0" cy="18" r="13" fill="#475569"/>
        <path d="M-8 32 L-12 78 H12 L8 32 Z" fill="#3B82F6"/>
        <path d="M-8 42 L-18 58" stroke="#3B82F6" stroke-width="5" stroke-linecap="round"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Sentence S3: Female subject swimming (modest swimwear, poolside)
  sentence_female_swimming: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#E0F2FE"/>
      <!-- Pool water tiles -->
      <path d="M10 80 Q140 70 270 80 V170 H10 Z" fill="#BAE6FD" opacity="0.6"/>
      <path d="M20 110 Q140 100 260 110" stroke="#0284C7" stroke-width="2"/>
      <path d="M40 140 Q150 132 250 140" stroke="#0284C7" stroke-width="2"/>
      <!-- Female faceless swimmer in modest swimwear / hijab -->
      <g transform="translate(130, 95)">
        <ellipse cx="0" cy="5" rx="36" ry="14" fill="#0369A1"/>
        <!-- Head with modest swim hood (faceless) -->
        <circle cx="34" cy="-4" r="13" fill="#075985"/>
        <path d="M-40 8 C-15 -6 18 -12 40 -6" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      </g>
      <!-- Label tag for grammar notice -->
      <rect x="25" y="25" width="80" height="28" rx="6" fill="#FFFFFF" stroke="#38BDF8"/>
      <text x="65" y="44" font-size="14" font-weight="bold" fill="#0369A1" text-anchor="middle">هِيَ (She)</text>
    </svg>
  `,

  // Sentence S4: Male subject running in park
  sentence_male_running: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Park trees and path -->
      <circle cx="50" cy="95" r="22" fill="#BBF7D0"/>
      <circle cx="230" cy="85" r="25" fill="#BBF7D0"/>
      <path d="M20 150 C100 135 180 135 260 150" stroke="#86EFAC" stroke-width="6"/>
      <!-- Faceless male runner -->
      <g transform="translate(135, 50)">
        <circle cx="0" cy="18" r="14" fill="#1E293B"/>
        <path d="M-8 32 L-10 70 H10 L8 32 Z" fill="#15803D"/>
        <!-- Running arms -->
        <path d="M-6 38 L-20 52 L-12 60" stroke="#15803D" stroke-width="6" stroke-linecap="round"/>
        <path d="M6 38 L22 46 L28 38" stroke="#15803D" stroke-width="6" stroke-linecap="round"/>
        <!-- Stride legs -->
        <path d="M-4 70 L-18 96" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
        <path d="M4 70 L18 90 L24 105" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
      </g>
      <!-- Label tag for grammar notice -->
      <rect x="25" y="25" width="80" height="28" rx="6" fill="#FFFFFF" stroke="#4ADE80"/>
      <text x="65" y="44" font-size="14" font-weight="bold" fill="#15803D" text-anchor="middle">هُوَ (He)</text>
    </svg>
  `,

  // Sentence S5: Likes basketball
  sentence_like_basketball: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#FFF7ED"/>
      <!-- Faceless figure holding basketball happily -->
      <g transform="translate(110, 50)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-12 78 H12 L10 32 Z" fill="#EA580C"/>
        <!-- Arms cradling ball -->
        <path d="M8 40 L28 50" stroke="#EA580C" stroke-width="6" stroke-linecap="round"/>
        <path d="M-8 40 L15 55" stroke="#EA580C" stroke-width="6" stroke-linecap="round"/>
        <!-- Legs -->
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Basketball in hands -->
      <circle cx="152" cy="102" r="22" fill="#F97316" stroke="#9A3412" stroke-width="2.5"/>
      <path d="M130 102 H174 M152 80 V124" stroke="#7C2D12" stroke-width="2"/>
    </svg>
  `,

  // Sentence S6: Dislikes cycling
  sentence_dislike_cycling: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Bicycle beside figure -->
      <g transform="translate(80, 115) scale(0.7)">
        <circle cx="-40" cy="20" r="20" stroke="#64748B" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="40" cy="20" r="20" stroke="#64748B" stroke-width="3" fill="#FFFFFF"/>
        <path d="M-40 20 L-15 20 L20 -10 L-10 -10 Z" stroke="#94A3B8" stroke-width="3" fill="none"/>
      </g>
      <!-- Faceless speaker politely declining with hand gesture -->
      <g transform="translate(175, 55)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-12 78 H12 L10 32 Z" fill="#64748B"/>
        <!-- Raised palm gentle decline gesture -->
        <path d="M-10 40 L-26 35" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
        <circle cx="-28" cy="35" r="4" fill="#64748B"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Dialogue Scenes: Female Friends (Speaker A & B, modest attire & hijab, faceless)
  female_dialogue: `
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="320" height="180" rx="12" fill="#FDF4FF"/>
      <!-- Sports club benches and decor -->
      <rect x="30" y="150" width="260" height="8" rx="4" fill="#F0ABFC"/>
      
      <!-- Speaker A (Left) - Modest attire with Lavender Hijab -->
      <g id="speakerA_group" transform="translate(90, 50)">
        <!-- Hijab & head silhouette (no face) -->
        <path d="M0 4 C-12 4 -16 16 -16 26 C-16 38 -8 44 0 44 C8 44 16 38 16 26 C16 16 12 4 0 4 Z" fill="#A855F7"/>
        <ellipse cx="0" cy="22" rx="10" ry="12" fill="#D8B4FE"/> <!-- Smooth faceless face area -->
        <!-- Modest dress/abaya -->
        <path d="M-14 44 L-24 100 H24 L14 44 Z" fill="#9333EA"/>
        <!-- Gentle turn gesture -->
        <path d="M12 56 L28 66" stroke="#9333EA" stroke-width="5" stroke-linecap="round"/>
      </g>

      <!-- Speaker B (Right) - Modest attire with Teal Hijab -->
      <g id="speakerB_group" transform="translate(230, 50)">
        <!-- Hijab & head silhouette (no face) -->
        <path d="M0 4 C-12 4 -16 16 -16 26 C-16 38 -8 44 0 44 C8 44 16 38 16 26 C16 16 12 4 0 4 Z" fill="#0D9488"/>
        <ellipse cx="0" cy="22" rx="10" ry="12" fill="#99F6E4"/> <!-- Smooth faceless face area -->
        <!-- Modest abaya/tunic -->
        <path d="M-14 44 L-24 100 H24 L14 44 Z" fill="#0F766E"/>
        <path d="M-12 56 L-26 66" stroke="#0F766E" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Dialogue Scenes: Male Friends (Speaker A & B, modest sportswear, faceless)
  male_dialogue: `
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="320" height="180" rx="12" fill="#F1F5F9"/>
      <ellipse cx="160" cy="158" rx="130" ry="12" fill="#E2E8F0"/>
      
      <!-- Speaker A (Left) - Modest Tracksuit, Faceless -->
      <g id="male_speakerA_group" transform="translate(100, 50)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#0284C7"/>
        <path d="M10 44 L28 54" stroke="#0284C7" stroke-width="5" stroke-linecap="round"/>
        <path d="M-6 78 V105 M6 78 V105" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
      </g>

      <!-- Speaker B (Right) - Modest Tracksuit, Faceless -->
      <g id="male_speakerB_group" transform="translate(220, 50)">
        <circle cx="0" cy="18" r="14" fill="#475569"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#059669"/>
        <path d="M-10 44 L-28 54" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
        <path d="M-6 78 V105 M6 78 V105" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Completion celebratory badge (faceless, clean, non-garish)
  completion_badge: `
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-52 mx-auto">
      <circle cx="120" cy="100" r="70" fill="#F0FDF4" stroke="#86EFAC" stroke-width="3"/>
      <circle cx="120" cy="100" r="56" fill="#15803D"/>
      <!-- Checkmark -->
      <path d="M100 100 L114 114 L144 84" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Laurel leaves -->
      <path d="M60 120 C50 90 65 60 85 45" stroke="#16A34A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M180 120 C190 90 175 60 155 45" stroke="#16A34A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="68" cy="85" r="4" fill="#22C55E"/>
      <circle cx="78" cy="65" r="4" fill="#22C55E"/>
      <circle cx="172" cy="85" r="4" fill="#22C55E"/>
      <circle cx="162" cy="65" r="4" fill="#22C55E"/>
    </svg>
  `
};

export function getVisual(key) {
  return VISUAL_ASSETS[key] || VISUAL_ASSETS.module_cover;
}
