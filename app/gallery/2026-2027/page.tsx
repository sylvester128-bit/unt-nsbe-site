import Link from "next/link";

export default function Gallery20262027Page() {
  return (
    <div className="min-h-screen bg-black text-white">

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

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="h-[380px] rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
            <p className="text-white/30">
              Photos coming soon
            </p>
          </div>

          <div className="h-[380px] rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
            <p className="text-white/30">
              Photos coming soon
            </p>
          </div>

          <div className="h-[380px] rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
            <p className="text-white/30">
              Photos coming soon
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}