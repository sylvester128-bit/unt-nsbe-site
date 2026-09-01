export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">

      {/* MOVING BACKGROUND GLOW ORBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full float-slow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full float-slow" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-400/10 blur-3xl rounded-full drift" />


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
              className="text-green-400"
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
              className="transition-colors hover:text-green-400"
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

      <section className="relative h-screen flex items-center justify-center text-center">

        <img
          src="/Baltimorensbe.JPG"
          alt="UNT NSBE members"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />


        {/* HERO CONTENT */}

        <div className="relative z-10 max-w-4xl px-6 fade-up">

          <p className="text-xs tracking-[0.3em] text-white/60 mb-4">
            UNT NSBE CHAPTER
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-6">
            ABOUT US
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            We are a community of engineers building excellence through
            leadership, mentorship, and opportunity.
          </p>

        </div>


        {/* SCROLL INDICATOR */}

        <div className="absolute bottom-10 text-white/40 animate-bounce text-sm">
          SCROLL ↓
        </div>

      </section>


      {/* ─────────────────────────────────────────
          STATS
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 max-w-6xl mx-auto fade-up">

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              num: "23+",
              label: "Years Strong",
            },
            {
              num: "100+",
              label: "Members",
            },
            {
              num: "51",
              label: "Years of NSBE",
            },
          ].map((stat, i) => (

            <div
              key={i}
              className="group"
            >

              <h2 className="text-6xl font-black text-green-400 group-hover:scale-110 transition-transform">
                {stat.num}
              </h2>

              <p className="text-white/50 mt-3 tracking-widest uppercase text-sm">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ─────────────────────────────────────────
          HISTORY
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">


          {/* HISTORY IMAGE */}

          <img
            src="/NSBE6.jpeg"
            alt="UNT NSBE members"
            className="rounded-3xl hover:scale-105 transition duration-700"
          />


          {/* HISTORY TEXT */}

          <div className="fade-up">

            <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
              Our History
            </p>

            <h2 className="text-5xl font-bold mb-6">
              How NSBE Started
            </h2>

            <p className="text-white/70 leading-relaxed mb-6">
              The National Society of Black Engineers (NSBE) was founded in
              1975 by six engineering students at Purdue University who wanted
              to create a supportive community for Black engineering students.
              At a time when Black engineers were greatly underrepresented,
              they believed that mentorship, academic excellence, and
              leadership could help future generations succeed.
            </p>

            <p className="text-white/60 leading-relaxed">
              What began as one student chapter has grown into one of the
              largest student-managed organizations in the world. Today, NSBE
              continues its mission of developing culturally responsible
              engineers who excel academically, succeed professionally, and
              positively impact their communities.
            </p>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          CHAPTER MOMENTS
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 max-w-7xl mx-auto">

        {/* SECTION HEADING */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
            Our Community
          </p>

          <h2 className="text-5xl font-bold">
            Chapter Moments
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            A look at some of the experiences, events, and opportunities that
            bring our UNT NSBE community together.
          </p>

        </div>


        {/* MOMENTS GRID */}

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">


          {/* SPRING ZONE */}

          <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 hover:-translate-y-2 transition duration-300">

            {/* IMAGE */}

            <div className="h-80 bg-neutral-950 overflow-hidden flex items-center justify-center">

              <img
                src="/SpringZONE.jpeg"
                alt="UNT NSBE members at Spring Zone"
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              />

            </div>


            {/* DESCRIPTION */}

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-green-400 text-xs mb-3">
                NSBE Zone
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Spring Zone
              </h3>

              <p className="text-white/60 leading-relaxed">
                UNT NSBE members connecting with fellow chapters, developing
                professionally, and representing our chapter at Spring Zone.
              </p>

            </div>

          </div>


          {/* FRC GROUP PHOTO */}

          <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 hover:-translate-y-2 transition duration-300">

            {/* IMAGE */}

            <div className="h-80 bg-neutral-950 overflow-hidden flex items-center justify-center">

              <img
                src="/FRCGROUPPHOTO.jpeg"
                alt="UNT NSBE members at Fall Regional Conference"
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              />

            </div>


            {/* DESCRIPTION */}

            <div className="p-8">

              <p className="uppercase tracking-[0.2em] text-green-400 text-xs mb-3">
                Conference
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Fall Regional Conference
              </h3>

              <p className="text-white/60 leading-relaxed">
                Our members representing UNT NSBE at the Fall Regional
                Conference while networking, learning, and building
                connections with NSBE members from across the region.
              </p>

            </div>

          </div>

        </div>


        {/* VIEW GALLERY BUTTON */}

        <div className="text-center mt-14">

          <a
            href="/gallery"
            className="inline-block border border-green-500 text-green-400 px-8 py-4 rounded-full font-bold hover:bg-green-500 hover:text-black hover:scale-105 transition"
          >
            View Our Gallery →
          </a>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          VALUES
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
            Our Values
          </p>

          <h2 className="text-5xl font-bold">
            What We Stand For
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Our chapter is built around the values that help our members
            succeed academically, professionally, and personally.
          </p>

        </div>


        {/* VALUE CARDS */}

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Academic Excellence",
              description:
                "We encourage our members to strive for excellence in the classroom through mentorship, study support, academic resources, and a community focused on success.",
            },

            {
              title: "Professional Development",
              description:
                "We prepare members for successful careers by connecting them with industry professionals, internships, networking opportunities, workshops, and career resources.",
            },

            {
              title: "Community Service",
              description:
                "We give back through outreach, volunteering, and STEM initiatives that inspire and support the next generation of engineers and leaders.",
            },

            {
              title: "Brotherhood & Sisterhood",
              description:
                "We build a strong community where members can connect, support one another, form lasting relationships, and grow together throughout their college experience.",
            },

          ].map((value, i) => (

            <div
              key={i}
              className="group p-8 md:p-10 border border-white/10 rounded-3xl bg-white/5 hover:bg-green-500/10 hover:border-green-500/30 hover:scale-[1.02] transition duration-300"
            >

              {/* NUMBER */}

              <p className="text-green-400/50 text-sm font-bold tracking-widest mb-5">
                0{i + 1}
              </p>


              {/* TITLE */}

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
                {value.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="text-white/60 leading-relaxed">
                {value.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ─────────────────────────────────────────
          CALL TO ACTION
      ───────────────────────────────────────── */}

      <section className="py-28 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
            Join Our Community
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-up">
            Become Part of the Legacy
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Connect with fellow students, grow professionally, and become part
            of a community committed to excellence and impact.
          </p>

          <a
            href="/membership"
            className="inline-block px-10 py-5 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 hover:scale-105 transition"
          >
            Join NSBE →
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