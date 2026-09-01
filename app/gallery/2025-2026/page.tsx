import Link from "next/link";

export default function Gallery20252026Page() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">

        <Link
          href="/gallery"
          className="text-green-400 text-sm hover:underline"
        >
          ← Back to Gallery
        </Link>

        <p className="uppercase tracking-[0.3em] text-xs text-green-400 mt-12 mb-4">
          UNT NSBE Gallery
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          2025–2026
        </h1>

        <p className="text-white/60 mt-6 text-lg">
          Explore memories from the 2025–2026 academic year.
        </p>

      </section>


      {/* PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {/* 1 — NSBE COOKOUT */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/gallery/2025-2026/NSBECOOKOUT.jpeg"
              alt="UNT NSBE Cookout"
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>


          {/* 2 — HACKATHON WINNERS */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/gallery/2025-2026/HACKATHONWINNERS.jpeg"
              alt="UNT NSBE Hackathon Winners"
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>


          {/* 3 — FRC */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/gallery/2025-2026/FRC.jpeg"
              alt="UNT NSBE FRC"
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>


          {/* 4 — TEXAS SPRING ZONE */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/gallery/2025-2026/TXSPRINGZONE.jpeg"
              alt="UNT NSBE Texas Spring Zone"
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>


        </div>

      </section>

    </div>
  );
}