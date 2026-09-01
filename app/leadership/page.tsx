import Link from "next/link";

export default function LeadershipPage() {
  const executiveBoard = [
    {
      name: "Uba Anyiam",
      role: "President",
      image: "/Uba.jpg",
    },
    {
      name: "Caleb Piggé",
      role: "Vice President",
      image: "/Caleb.jpg",
    },
    {
      name: "Khultum Badmus",
      role: "Secretary",
      image: "/Khultum.jpg",
    },
    {
      name: "Gloria Ukattah",
      role: "Programs Chair",
      image: "/Gloria.JPG",
    },
    {
      name: "Michael Ayesu",
      role: "Finance Chair",
      image: "/Michael.jpg",
    },
    {
      name: "Courtney Ajayi",
      role: "Parliamentarian",
      image: "/Courtney.jpg",
    },
  ];

  const outreachZone = [
    {
      name: "Eyob Tesfay",
      role: "PCI Chair",
      image: "/Eyob.jpg",
    },
    {
      name: "Auriana Collins",
      role: "Vice PCI Chair",
      image: "/Ariana.jpg",
    },
    {
      name: "Eryn Lloyd",
      role: "TORCH Chair",
      image: "/Eryn.jpg",
    },
    {
      name: "Desire Ndabunguye",
      role: "Ambassador",
      image: "/Desire.jpg",
    },
  ];

  const communicationsZone = [
    {
      name: "Sylvester Ayanwale",
      role: "Telecommunications Chair",
      image: "/Sylvester.jpg",
    },
    {
      name: "Bethany Finesse",
      role: "PR Chair",
      image: "/Bethany.jpg",
    },
    {
      name: "Zigno Xavier",
      role: "Graphic Designer",
      image: "/Zig.jpg",
    },
    {
      name: "Ariane Doris Umuhire",
      role: "Ambassador",
      image: "/Doris.jpg",
    },
    {
      name: "Zion Bagby",
      role: "Ambassador",
      image: "/Zion.jpg",
    },
  ];

  const programsZone = [
    {
      name: "Dulcie Nguonpe Fezeu",
      role: "Academic Excellence Chair",
      image: "/Dulcie.jpg",
    },
    {
      name: "Hamid Momodu",
      role: "Membership Chair",
      image: "/Hamid.jpg",
    },
    {
      name: "Ulemelero Mkaka",
      role: "Mentorship Chair",
      image: "/Ule.jpg",
    },
    {
      name: "Matthew Adindu",
      role: "Ambassador",
      image: "/Mathew.jpg",
    },
  ];

  const financeZone = [
    {
      name: "Eloghosa Ibie-Idusuyi",
      role: "Finance Chair",
      image: "/Osa.jpg",
    },
    {
      name: "Isaiah Knighten",
      role: "Vice Finance Chair",
      image: "/Isaiah.jpg",
    },
    {
      name: "Ebele Ufondu",
      role: "CPC Chair",
      image: "/Ebele.jpg",
    },
    {
      name: "Rodney Amuebie",
      role: "Vice CPC Chair",
      image: "/RJ.jpg",
    },
    {
      name: "Prince Agyei",
      role: "Ambassador",
      image: "/Prince.jpg",
    },
    {
      name: "Nnamdi Ahaiwe",
      role: "Ambassador",
      image: "/Nnamdi.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full border border-green-500/40 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>

            <h1 className="text-xl font-extrabold tracking-[0.2em]">
              UNT NSBE
            </h1>
          </Link>

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
              className="text-green-400"
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
              className="transition-colors hover:text-green-400"
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

      {/* HERO */}
      <section className="pt-40 pb-20 text-center px-6">

        <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
          UNT NSBE Leadership
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Meet Our Leadership Team
        </h1>

        <p className="max-w-3xl mx-auto text-white/70 text-lg">
          Dedicated student leaders committed to academic excellence,
          professional development, and community impact.
        </p>

      </section>

      {/* EXECUTIVE BOARD */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <h2 className="text-4xl font-bold text-center mb-12">
          Executive Board
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {executiveBoard.map((person) => (
            <div
              key={person.name}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/40 hover:-translate-y-2 transition duration-300"
            >

              {/* NO-CROP IMAGE */}
              <div className="w-full h-[420px] bg-neutral-950 flex items-center justify-center p-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {person.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {person.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* OUTREACH ZONE */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <h2 className="text-4xl font-bold text-center mb-12">
          Outreach Zone
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {outreachZone.map((person) => (
            <div
              key={person.name}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/40 hover:-translate-y-2 transition duration-300"
            >

              {/* NO-CROP IMAGE */}
              <div className="w-full h-[360px] bg-neutral-950 flex items-center justify-center p-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {person.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {person.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* COMMUNICATIONS ZONE */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <h2 className="text-4xl font-bold text-center mb-12">
          Communications Zone
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {communicationsZone.map((person) => (
            <div
              key={person.name}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/40 hover:-translate-y-2 transition duration-300"
            >

              {/* NO-CROP IMAGE */}
              <div className="w-full h-[380px] bg-neutral-950 flex items-center justify-center p-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {person.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {person.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PROGRAMS ZONE */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <h2 className="text-4xl font-bold text-center mb-12">
          Programs Zone
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {programsZone.map((person) => (
            <div
              key={person.name}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/40 hover:-translate-y-2 transition duration-300"
            >

              {/* NO-CROP IMAGE */}
              <div className="w-full h-[360px] bg-neutral-950 flex items-center justify-center p-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {person.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {person.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FINANCE ZONE */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <h2 className="text-4xl font-bold text-center mb-12">
          Finance Zone
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {financeZone.map((person) => (
            <div
              key={person.name}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/40 hover:-translate-y-2 transition duration-300"
            >

              {/* NO-CROP IMAGE */}
              <div className="w-full h-[380px] bg-neutral-950 flex items-center justify-center p-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {person.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {person.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <Link
            href="/"
            className="font-bold tracking-[0.2em]"
          >
            UNT NSBE
          </Link>

          <p className="text-white/30 text-xs uppercase tracking-widest">
            © 2026 UNT NSBE · All Rights Reserved
          </p>

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