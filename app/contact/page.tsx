import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
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
              className="transition-colors hover:text-green-400"
            >
              Donate
            </Link>

            <Link
              href="/contact"
              className="text-green-400"
            >
              Contact
            </Link>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
          Get Connected
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Contact Us
        </h1>

        <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
          Have questions about UNT NSBE? Interested in becoming a member,
          partnering with us, or learning more about our organization?
          We&apos;d love to hear from you.
        </p>

      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-400 text-xs mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Send Us a Message
            </h2>

            <p className="text-white/60 mb-10 leading-relaxed">
              Have a question or want to learn more about UNT NSBE?
              Fill out the form below and one of our officers will
              get back to you as soon as possible.
            </p>

            {/* CONTACT FORM */}
            <form
              action="https://formsubmit.co/untnsbe.secretary2@gmail.com"
              method="POST"
              className="space-y-6"
            >

              {/* FormSubmit Settings */}
              <input
                type="hidden"
                name="_subject"
                value="New Message From UNT NSBE Website"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/70 mb-2"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 outline-none focus:border-green-500 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/70 mb-2"
                >
                  Your Email *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 outline-none focus:border-green-500 transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-white/70 mb-2"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 outline-none focus:border-green-500 transition"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-white/70 mb-2"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 outline-none focus:border-green-500 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-white/70 mb-2"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 outline-none focus:border-green-500 transition resize-none"
                />
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-green-400 hover:scale-105 transition duration-300"
              >
                Send Message →
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            <div>
              <p className="uppercase tracking-[0.3em] text-green-400 text-xs mb-4">
                UNT NSBE
              </p>

              <h2 className="text-4xl font-bold">
                Connect With Us
              </h2>
            </div>

            {/* LOCATION */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-green-500/30 transition">

              <div className="text-3xl mb-5">
                📍
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Find Us On Campus
              </h3>

              <p className="text-white/70">
                University of North Texas
              </p>

              <p className="text-white/50 mt-2">
                Denton, Texas
              </p>

              <p className="text-white/50 mt-4">
                National Society of Black Engineers
              </p>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

              <h3 className="text-2xl font-bold mb-8">
                Follow UNT NSBE
              </h3>

              <div className="space-y-4">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/untnsbe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">
                      📷
                    </span>

                    <div>
                      <p className="font-semibold">
                        Instagram
                      </p>

                      <p className="text-white/40 text-sm">
                        @untnsbe
                      </p>
                    </div>
                  </div>

                  <span className="text-white/30 group-hover:text-green-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/unt-nsbe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">
                      💼
                    </span>

                    <div>
                      <p className="font-semibold">
                        LinkedIn
                      </p>

                      <p className="text-white/40 text-sm">
                        UNT NSBE
                      </p>
                    </div>
                  </div>

                  <span className="text-white/30 group-hover:text-green-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

                {/* GROUPME */}
                <a
                  href="https://groupme.com/join_group/116483930/s51EqYSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">
                      💬
                    </span>

                    <div>
                      <p className="font-semibold">
                        GroupMe
                      </p>

                      <p className="text-white/40 text-sm">
                        Join our community
                      </p>
                    </div>
                  </div>

                  <span className="text-white/30 group-hover:text-green-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:untnsbe.secretary2@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">
                      ✉️
                    </span>

                    <div>
                      <p className="font-semibold">
                        Email
                      </p>

                      <p className="text-white/40 text-sm">
                        untnsbe.secretary2@gmail.com
                      </p>
                    </div>
                  </div>

                  <span className="text-white/30 group-hover:text-green-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

              </div>
            </div>

            {/* MEMBERSHIP CARD */}
            <div className="bg-green-500 rounded-3xl p-8 text-black">

              <p className="uppercase tracking-[0.25em] text-black/60 text-xs font-bold mb-3">
                Join The Family
              </p>

              <h3 className="text-3xl font-black mb-4">
                Become a Member
              </h3>

              <p className="mb-7 text-black/70 leading-relaxed">
                Join UNT NSBE and connect with students, alumni,
                recruiters, and industry professionals while developing
                academically and professionally.
              </p>

              <Link
                href="/membership"
                className="bg-black text-white px-6 py-3 rounded-xl inline-block font-semibold hover:scale-105 transition"
              >
                Join UNT NSBE →
              </Link>

            </div>

          </div>
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