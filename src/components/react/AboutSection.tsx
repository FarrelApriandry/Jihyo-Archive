// src/components/react/AboutSection.tsx
import { motion } from "framer-motion";

export default function AboutSection({ jihyoProfile, fact }: { jihyoProfile: any, fact: string}) {
  return (
    <section className="py-16 bg-black text-white px-6 border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif italic mb-6">The Leader.</h2>
            <div className="space-y-6 text-[11px] tracking-[0.3em] uppercase opacity-50">
              <p>Position: {jihyoProfile.position.join(' / ')}</p>
              <p>Energy: {jihyoProfile.MBTI} — {jihyoProfile.emoji[1]}</p>
              <p>Established: October 20, 2015</p>
              <div className="pt-4 border-t border-white/40">
                <p className="mb-2 text-[#FCC89B]">Did you know?</p>
                <p className="inline-block normal-case tracking-normal leading-relaxed italic">
                  "{fact}"
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-2xl font-light leading-relaxed text-zinc-300">
              {/* Lo bisa ambil bio dari API atau custom teks editorial sendiri */}
              Park Jihyo is not just a vocalist; she is the backbone of TWICE. 
              With a decade of training and a voice that commands attention, 
              her journey is a testament to resilience and artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}