export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ─────────────────────────────────────────
          NAVBAR
      ───────────────────────────────────────── */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}

          <a href="/" className="flex items-center gap-3">

            <div className="relative w-8 h-8 flex items-center justify-center">

              <span className="absolute w-8 h-8 rounded-full border border-green-500/40 animate-ping" />

              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />

            </div>

            <h1 className="text-xl font-extrabold tracking-[0.2em]">
              UNT NSBE
            </h1>

          </a>


          {/* NAVIGATION */}

          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-white/50">

            <a
              href="/"
              className="transition-colors hover:text-green-400"
            >
              Home
            </a>

            <a
              href="/about"
              className="transition-colors hover:text-green-400"
            >
              About
            </a>

            <a
              href="/leadership"
              className="transition-colors hover:text-green-400"
            >
              Leadership
            </a>

            <a
              href="/membership"
              className="text-green-400"
            >
              Membership
            </a>

            <a
              href="/gallery"
              className="transition-colors hover:text-green-400"
            >
              Gallery
            </a>

            <a
              href="/donate"
              className="transition-colors hover:text-green-400"
            >
              Donate
            </a>

            <a
              href="/contact"
              className="transition-colors hover:text-green-400"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>


      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 text-center pt-40">

        <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
          Become a Member
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Join UNT NSBE
        </h1>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
          Become part of a national network of Black engineers committed to
          excellence, leadership, and community impact.
        </p>

      </section>


      {/* ─────────────────────────────────────────
          STEPS TO MEMBERSHIP
      ───────────────────────────────────────── */}

      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          Steps to Membership
        </h2>

        <p className="text-white/70 text-lg mb-10">
          To become a NSBE member, register locally with UNT NSBE and then
          purchase national membership for full benefits.
        </p>


        <div className="grid md:grid-cols-2 gap-10">


          {/* ─────────────────────────────────────
              LOCAL MEMBERSHIP
          ───────────────────────────────────── */}

          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:border-green-500/30 transition">

            <p className="uppercase tracking-[0.2em] text-green-400 text-xs mb-3">
              Step 01
            </p>

            <h3 className="text-2xl font-bold mb-2">
              Local Membership
            </h3>

            <p className="text-white/50 mb-6">
              UNT NSBE Chapter
            </p>


            {/* BENEFITS */}

            <ul className="text-white/70 space-y-3 text-sm mb-8">

              <li>
                ✔ Resume workshops &amp; career prep
              </li>

              <li>
                ✔ Networking &amp; professional events
              </li>

              <li>
                ✔ Leadership opportunities
              </li>

              <li>
                ✔ Community outreach
              </li>

            </ul>


            {/* PRICE */}

            <div className="text-3xl font-bold mb-6">
              $30
              <span className="text-white/40 text-base font-normal">
                {" "} / Semester
              </span>
            </div>


            {/* REGISTER BUTTON */}

            <a
              href="https://docs.google.com/forms/d/1vXOBaqyT0GlR3qjf-diRph6XpWrpGoETpgvOJJsbsPU/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black px-7 py-3 rounded-full font-semibold inline-block transition hover:scale-105"
            >
              Register Now →
            </a>

          </div>


          {/* ─────────────────────────────────────
              NATIONAL MEMBERSHIP
          ───────────────────────────────────── */}

          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:border-green-500/30 transition">

            <p className="uppercase tracking-[0.2em] text-green-400 text-xs mb-3">
              Step 02
            </p>

            <h3 className="text-2xl font-bold mb-2">
              National Membership
            </h3>

            <p className="text-white/50 mb-6">
              NSBE National Organization
            </p>


            {/* BENEFITS */}

            <ul className="text-white/70 space-y-3 text-sm mb-8">

              <li>
                ✔ Required for conferences
              </li>

              <li>
                ✔ Access to corporate partners
              </li>

              <li>
                ✔ National scholarships
              </li>

              <li>
                ✔ Career fairs &amp; internships
              </li>

            </ul>


            {/* PRICE */}

            <div className="text-3xl font-bold mb-6">
              $20
              <span className="text-white/40 text-base font-normal">
                {" "} / Year
              </span>
            </div>


            {/* REGISTER BUTTON */}

            <a
              href="https://nsbe.org/collegiate/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-black px-7 py-3 rounded-full font-semibold inline-block transition hover:scale-105"
            >
              Register Now →
            </a>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          BENEFITS OF MEMBERSHIP
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 bg-white text-black">

        <div className="max-w-6xl mx-auto">

          <div className="mb-14">

            <p className="uppercase tracking-[0.3em] text-green-700 text-sm mb-4">
              Why Join?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Benefits of Membership
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-10">


            {/* PROFESSIONAL DEVELOPMENT */}

            <div className="border-t-4 border-green-500 pt-6">

              <p className="text-green-700 font-bold text-sm mb-4">
                01
              </p>

              <h3 className="text-xl font-bold mb-3">
                Professional Development
              </h3>

              <p className="text-black/70 leading-relaxed">
                Workshops, resume reviews, mock interviews, and mentorship to
                prepare you for industry success.
              </p>

            </div>


            {/* NETWORKING */}

            <div className="border-t-4 border-green-500 pt-6">

              <p className="text-green-700 font-bold text-sm mb-4">
                02
              </p>

              <h3 className="text-xl font-bold mb-3">
                Networking Opportunities
              </h3>

              <p className="text-black/70 leading-relaxed">
                Connect with companies, professionals, alumni, and fellow NSBE
                members at regional and national events.
              </p>

            </div>


            {/* COMMUNITY */}

            <div className="border-t-4 border-green-500 pt-6">

              <p className="text-green-700 font-bold text-sm mb-4">
                03
              </p>

              <h3 className="text-xl font-bold mb-3">
                Community &amp; Support
              </h3>

              <p className="text-black/70 leading-relaxed">
                Join a strong community of engineers supporting each other
                academically, professionally, and personally.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
            UNT NSBE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join?
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Take the first step toward becoming part of a community focused on
            academic excellence, professional success, and positive impact.
          </p>

          <a
            href="https://docs.google.com/forms/d/1vXOBaqyT0GlR3qjf-diRph6XpWrpGoETpgvOJJsbsPU/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-full font-bold transition hover:scale-105"
          >
            Become a Member →
          </a>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────── */}

      <footer className="py-14 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <a
            href="/"
            className="font-bold tracking-[0.2em]"
          >
            UNT NSBE
          </a>

          <p className="text-white/30 text-xs tracking-widest uppercase">
            © 2026 UNT NSBE · All Rights Reserved
          </p>


          {/* FOOTER LINKS */}

          <div className="flex gap-6 text-xs uppercase tracking-widest text-white/40">

            <a
              href="/"
              className="hover:text-green-400 transition"
            >
              Home
            </a>

            <a
              href="/gallery"
              className="hover:text-green-400 transition"
            >
              Gallery
            </a>

            <a
              href="/contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}