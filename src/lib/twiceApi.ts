// src/lib/twiceApi.ts

// --- TYPES & INTERFACES ---

export interface MemberOtherNames {
  zh: string;
  ja: string;
  ko: string;
  en?: string;
}

export interface JihyoProfile {
  name: string;
  otherNames: MemberOtherNames;
  birthDate: number; // UNIX Timestamp
  age: string;
  birthPlace: string;
  height: string;
  weight: string;
  bloodType: string;
  MBTI: string;
  occupation: string[];
  position: string[];
  color: string;
  instagram: string[];
  emoji: string[];
  images: string[];
  signature: string;
  facts: string[];
  lovely: {
    name: string;
    personality: string;
    picture: string;
    banner: string;
  };
}

// --- API FETCHERS ---

const BASE_URL = 'https://qing762.is-a.dev/api/twice';

/**
 * Fetches the specific profile for Jihyo.
 * Digunakan untuk halaman utama / Jihyo Archive.
 */
export async function getJihyoProfile(): Promise<JihyoProfile> {
  try {
    const response = await fetch(`${BASE_URL}/members/jihyo`);
    if (!response.ok) throw new Error(`HTTP error | status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch Jihyo data:", error);
    throw error;
  }
}

/**
 * OPTIONAL: Buat "Hidden Layer" lo. 
 * Fetching data Ships untuk melihat interaksi Jihyo dengan member lain.
 */
export async function getJihyoShips() {
  const response = await fetch(`${BASE_URL}/ships`);
  const allShips = await response.json();
  
  // Filter hanya ship yang ada Jihyo-nya
  return Object.values(allShips).filter((ship: any) => 
    ship.shipped.includes('Jihyo')
  );
}

export function sanitizeWikiaUrl(url: string): string {
  if (!url) return '';
  
  // 1. Ambil URL dasar sampai ke ekstensi file
  const baseUrl = url.split(/\.(jpg|jpeg|png|gif)/i)[0] + '.' + url.match(/\.(jpg|jpeg|png|gif)/i)?.[1];
  
  // 2. Cari parameter 'cb' (cache-buster) aslinya biar server Wikia gak bingung
  const cbMatch = url.match(/cb=\d+/);
  const cbParam = cbMatch ? `?${cbMatch[0]}` : '';
  
  // 3. Gabungkan jadi URL original yang bersih tapi tetap valid secara internal Wikia
  return `${baseUrl}/revision/latest${cbParam}`;
}

export function getOptimizedImage(url: string, width = 800): string {
  if (!url) return '';
  const cleanUrl = url.split('/revision/latest')[0]; // Ambil source asli
  
  // Gunakan weserv.nl untuk:
  // - &w=: Resize lebar sesuai kebutuhan (nggak perlu 4K buat thumbnail bento)
  // - &output=webp: Paksa jadi format WebP yang super ringan
  // - &q=80: Kompres kualitas ke 80% (nggak kelihatan bedanya tapi size turun drastis)
  return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=${width}&output=webp&q=80`;
}