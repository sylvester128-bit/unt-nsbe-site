import Link from "next/link";

export default function GalleryPage() {
  const years = [
    {
      year: "2025–2026",
      href: "/gallery/2025-2026",
      description:
        "Relive the events, conferences, workshops, and memories from the 2025–2026 academic year.",
      cover: "/OLDMONEY.jpg",
      status: "View Gallery",
    },
    {
      year: "2026–2027",
      href: "/gallery/2026-2027",
      description:
        "Follow UNT NSBE through the 2026–2027 academic year as we continue building our chapter and community.",
      cover: "/Baltimorensbe.JPG",
      status: "View Gallery",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ─────────────────────────────────────────
          NAVBAR
      ───────────────────────────────────────── */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <div className="relative w-8 h-8 flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full border border-green-500/40 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>

            <h1 className="text-xl font-extrabold tracking-[0.2em]">
              UNT NSBE
            </h1>

          </Link>


          {/* NAVIGATION */}

          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-white/50">

            <Link
              href="/"
              className="transition-colors hover:text-green-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-green-400"
            >
              About
            </Link>

            <Link
              href="/leadership"
              className="transition-colors hover:text-green-400"
            >
              Leadership
            </Link>

            <Link
              href="/membership"
              className="transition-colors hover:text-green-400"
            >
              Membership
            </Link>

            <Link
              href="/gallery"
              className="text-green-400"
            >
              Gallery
            </Link>

            <Link
              href="/donate"
              className="transition-colors hover:text-green-400"
            >
              Donate
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-green-400"
            >
              Contact
            </Link>

          </div>

        </div>

      </nav>


      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section className="pt-44 pb-20 px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-xs text-green-400 mb-5">
          Photo Gallery
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Our Chapter in Motion
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-white/60 leading-relaxed">
          Explore the events, conferences, community service, professional
          development, and memories that make up the UNT NSBE experience.
        </p>

      </section>


      {/* ─────────────────────────────────────────
          YEAR ARCHIVE
      ───────────────────────────────────────── */}

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-xs text-green-400 mb-3">
            Our Memories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Gallery Archive
          </h2>

          <p className="text-white/50 mt-4">
            Select an academic year to explore its photo collection.
          </p>

        </div>


        {/* YEAR CARDS */}

        <div className="grid md:grid-cols-2 gap-10">

          {years.map((item) => (

            <Link
              key={item.year}
              href={item.href}
              className="group block"
            >

              <div className="relative h-[470px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 group-hover:-translate-y-2 group-hover:border-green-400/40">


                {/* COVER IMAGE */}

                <img
                  src={item.cover}
                  alt={`UNT NSBE ${item.year}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-105"
                />


                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />


                {/* FOLDER TAB */}

                <div className="absolute top-6 left-6">

                  <div className="px-5 py-2 rounded-t-xl rounded-br-xl bg-green-400 text-black text-xs font-bold uppercase tracking-widest">
                    Academic Year
                  </div>

                </div>


                {/* TEXT */}

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="text-green-400 text-sm uppercase tracking-[0.25em] mb-3">
                    UNT NSBE
                  </p>

                  <h3 className="text-4xl md:text-5xl font-black mb-4">
                    {item.year}
                  </h3>

                  <p className="text-white/60 leading-relaxed max-w-lg">
                    {item.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold">

                    {item.status}

                    <span className="text-green-400 text-xl transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* ─────────────────────────────────────────
          SHARE PHOTOS
      ───────────────────────────────────────── */}

      <section className="border-t border-white/10 py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-xs text-green-400 mb-4">
            Contribute
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Share Your Memories
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Have photos from a UNT NSBE event? Help us document our
            chapter&apos;s journey by sharing your favorite moments with us.
          </p>


          {/* BUTTONS */}

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-green-400 text-black font-bold hover:scale-105 transition"
            >
              Submit Photos
            </Link>

            <a
              href="https://www.instagram.com/untnsbe/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 font-semibold hover:border-green-400 hover:text-green-400 transition"
            >
              Tag Us on Instagram
            </a>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────── */}

      <footer className="py-14 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <Link
            href="/"
            className="font-bold tracking-[0.2em]"
          >
            UNT NSBE
          </Link>

          <p className="text-white/30 text-xs tracking-widest uppercase">
            © 2026 UNT NSBE · All Rights Reserved
          </p>


          {/* FOOTER LINKS */}

          <div className="flex gap-6 text-xs uppercase tracking-widest text-white/40">

            <Link
              href="/"
              className="hover:text-green-400 transition"
            >
              Home
            </Link>

            <Link
              href="/gallery"
              className="hover:text-green-400 transition"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
}