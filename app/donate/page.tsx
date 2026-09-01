"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   SPONSORS
───────────────────────────────────────────── */

const sponsors = [
  {
    name: "Burns & McDonnell",
    tier: "Gold Sponsor",
    logo: "/Burns and Mcdonnell.png",
  },
  {
    name: "Parker Hannifin",
    tier: "Gold Sponsor",
    logo: "/ParkerHannifin.jpeg",
  },
  {
    name: "Peterbilt",
    tier: "Gold Sponsor",
    logo: "/peterbilt.jpeg",
  },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

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
              className="transition-colors hover:text-green-400"
            >
              Gallery
            </Link>

            <Link
              href="/donate"
              className="text-green-400"
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

      <section className="relative h-[90vh] flex items-center justify-center">

        <img
          src="/Baltimorensbe.JPG"
          alt="UNT NSBE"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >

          <p className="uppercase tracking-[0.35em] text-green-400 mb-5">
            Support Our Mission
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-8">
            DONATE &
            <br />
            SPONSOR
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Every contribution helps UNT NSBE empower future engineers through
            scholarships, conferences, mentorship, outreach, and professional
            development opportunities.
          </p>

        </motion.div>

      </section>


      {/* ─────────────────────────────────────────
          DONATE / SPONSOR BUTTONS
      ───────────────────────────────────────── */}

      <section className="py-20 px-6">

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#donate"
            className="bg-green-500 hover:bg-green-400 text-black px-10 py-5 rounded-full font-bold text-lg transition"
          >
            Make a Donation
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#sponsor"
            className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-10 py-5 rounded-full font-bold text-lg transition"
          >
            Become a Sponsor
          </motion.a>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          CORPORATE SPONSORS
      ───────────────────────────────────────── */}

      <section className="py-24 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-green-400 mb-3">
            Our Partners
          </p>

          <h2 className="text-5xl font-bold">
            Corporate Sponsors
          </h2>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto text-lg">
            These amazing organizations have invested in our future and made
            opportunities possible for UNT NSBE students.
          </p>

        </div>


        {/* SPONSOR CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          {sponsors.map((company, index) => (

            <motion.div
              key={company.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group bg-neutral-900 border border-white/10 hover:border-green-500/40 rounded-3xl p-10 text-center transition"
            >

              {/* LOGO AREA */}

              <div className="h-40 bg-white rounded-2xl flex items-center justify-center p-6 mb-8 overflow-hidden">

                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>


              {/* COMPANY NAME */}

              <h3 className="text-2xl font-bold mb-4">
                {company.name}
              </h3>


              {/* SPONSOR TIER */}

              <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 uppercase text-xs tracking-widest">
                {company.tier}
              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ─────────────────────────────────────────
          SPONSORSHIP OPPORTUNITIES
      ───────────────────────────────────────── */}

      <section
        id="sponsor"
        className="py-28 bg-neutral-950 border-y border-white/10"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-green-400 mb-3">
              Get Involved
            </p>

            <h2 className="text-5xl font-bold">
              Sponsorship Opportunities
            </h2>

            <p className="text-white/60 mt-6 max-w-3xl mx-auto">
              Partner with UNT NSBE and help us provide professional,
              academic, and leadership opportunities for our members.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* SPONSORSHIP DESCRIPTION */}

            <div>

              <p className="uppercase tracking-[0.25em] text-green-400 text-xs mb-4">
                Invest In Our Students
              </p>

              <h3 className="text-3xl font-bold mb-6">
                Alumni & Corporate Sponsorship
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                As a UNT NSBE alumnus or corporate partner, your contribution
                directly supports conference travel, scholarships, leadership
                development, STEM outreach, and career opportunities for our
                members.
              </p>

              <p className="text-white/60 leading-relaxed">
                Every investment helps create the next generation of engineers,
                innovators, and technology leaders.
              </p>

            </div>


            {/* SPONSORSHIP PACKET */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="bg-black border border-green-500/30 rounded-3xl p-10"
            >

              <p className="uppercase text-green-400 tracking-widest text-sm mb-3">
                Sponsorship Packet
              </p>

              <h3 className="text-3xl font-bold mb-5">
                Learn More About Partnership
              </h3>

              <p className="text-white/60 mb-8 leading-relaxed">
                View our sponsorship tiers, partnership benefits, and
                opportunities to support UNT NSBE.
              </p>

              <a
                href="https://drive.google.com/file/d/1uPFEVtO9oODrnkL_Y8htHy7TREj54YQx/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:bg-green-400 hover:scale-105 transition"
              >
                View Sponsorship Packet →
              </a>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          DONATION SECTION
      ───────────────────────────────────────── */}

      <section
        id="donate"
        className="py-28 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-green-400 mb-4">
            Make an Impact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Help Shape the Future
          </h2>

          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Your donation supports conferences, scholarships, professional
            development, STEM outreach programs, and student success throughout
            the year.
          </p>


          {/* ZELLE DONATION INFORMATION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-2xl mx-auto bg-neutral-900 border border-green-500/30 rounded-3xl p-8 md:p-10 mb-10"
          >

            <p className="uppercase tracking-[0.25em] text-green-400 text-sm mb-4">
              Donate via Zelle
            </p>

            <h3 className="text-3xl font-bold mb-5">
              Support UNT NSBE
            </h3>

            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              To make a donation, use Zelle through your bank or financial
              institution and send your contribution to the email below.
            </p>


            {/* ZELLE EMAIL */}

            <div className="bg-black border border-white/10 rounded-2xl p-6">

              <p className="text-white/40 uppercase tracking-widest text-xs mb-3">
                Zelle Email
              </p>

              <p className="text-green-400 text-xl md:text-2xl font-bold break-all">
                untnsbe@gmail.com
              </p>

            </div>

          </motion.div>


          {/* DONATE BUTTON */}

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="https://www.zellepay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-12 py-5 rounded-full text-xl font-bold transition"
          >
            Donate Now →
          </motion.a>


          <p className="text-white/40 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Donations are accepted through Zelle. Please verify the recipient
            information before sending your contribution.
          </p>

        </div>

      </section>


      {/* ─────────────────────────────────────────
          THANK YOU
      ───────────────────────────────────────── */}

      <section className="py-24 px-6 border-t border-white/10">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-green-400 mb-4">
            Our Community
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You to Our Partners
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            Corporate sponsorships and generous donations make our mission
            possible. Together, we&apos;re creating opportunities for future
            engineers and innovators.
          </p>

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