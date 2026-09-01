"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// PARTICLE BACKGROUND
// ─────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74,222,128,${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];

          const dx = p.x - b.x;
          const dy = p.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(
              74,
              222,
              128,
              ${0.07 * (1 - d / 90)}
            )`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

// ─────────────────────────────────────────────
// GLITCH TEXT
// ─────────────────────────────────────────────
function GlitchText({ children }: { children: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);

      setTimeout(() => {
        setGlitch(false);
      }, 180);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block">
      <span className={glitch ? "opacity-0" : ""}>
        {children}
      </span>

      {glitch && (
        <>
          <span
            className="absolute inset-0 text-green-400"
            style={{
              clipPath: "inset(20% 0 60% 0)",
              transform: "translateX(-4px)",
            }}
          >
            {children}
          </span>

          <span
            className="absolute inset-0 text-white"
            style={{
              clipPath: "inset(60% 0 10% 0)",
              transform: "translateX(4px)",
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}

// ─────────────────────────────────────────────
// AURORA BACKGROUND
// ─────────────────────────────────────────────
function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 800,
          height: 800,
          top: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 600,
          height: 600,
          bottom: "-15%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// MAGNETIC CARD
// ─────────────────────────────────────────────
function MagneticCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 16;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 16;

    ref.current.style.transform =
      `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transition: "transform 0.2s ease",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;

        const step = () => {
          start += Math.ceil((target - start) / 12);

          setCount(Math.min(start, target));

          if (start < target) {
            requestAnimationFrame(step);
          }
        };

        step();
        obs.disconnect();
      }
    });

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────────
// MAIN HOME PAGE
// ─────────────────────────────────────────────
export default function Home() {
  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 600],
    [0, 100]
  );

  const heroOpacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  // ───────────────────────────────────────────
  // NAVIGATION
  // ───────────────────────────────────────────
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Leadership",
      href: "/leadership",
    },
    {
      name: "Membership",
      href: "/membership",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Donate",
      href: "/donate",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // ───────────────────────────────────────────
  // PROGRAMS
  // ───────────────────────────────────────────
  const programs = [
    {
      name: "Resume Workshops",
      icon: "📄",
    },
    {
      name: "Mock Interviews",
      icon: "🎤",
    },
    {
      name: "Corporate Networking",
      icon: "🤝",
    },
    {
      name: "Mentorship Program",
      icon: "🧠",
    },
    {
      name: "Study Sessions",
      icon: "📚",
    },
    {
      name: "Community Outreach",
      icon: "🌍",
    },
  ];

  // ───────────────────────────────────────────
  // LEADERSHIP
  // ───────────────────────────────────────────
  const leaders = [
    {
      name: "Uba Anyiam",
      role: "President",
      img: "/Uba.jpg",
    },
    {
      name: "Caleb Piggé",
      role: "Vice President",
      img: "/Caleb.jpg",
    },
    {
      name: "Khultum Badmus",
      role: "Secretary",
      img: "/Khultum.jpg",
    },
    {
      name: "Gloria Ukattah",
      role: "Programs Chair",
      img: "/Gloria.JPG",
    },
    {
      name: "Michael Ayesu",
      role: "Finance Chair",
      img: "/Michael.jpg",
    },
    {
      name: "Courtney Ajayi",
      role: "Parliamentarian",
      img: "/Courtney.jpg",
    },
  ];

  // ───────────────────────────────────────────
  // STATS
  // ───────────────────────────────────────────
  const stats = [
    {
      num: 100,
      suffix: "+",
      label: "Members",
    },
    {
      num: 20,
      suffix: "+",
      label: "Events",
    },
    {
      num: 10,
      suffix: "+",
      label: "Partners",
    },
    {
      num: 95,
      suffix: "%",
      label: "Internship Success",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">

      <ParticleField />
      <Aurora />

      {/* ═══════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════ */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">

              <motion.span
                className="absolute w-8 h-8 rounded-full border border-green-500/40"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />

              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />

            </div>

            <h1 className="text-xl font-extrabold tracking-[0.2em]">
              UNT NSBE
            </h1>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-7 text-xs uppercase tracking-widest text-white/50">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-green-400"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>

      </nav>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}

      <section className="h-screen flex items-center justify-center relative overflow-hidden">

        <motion.img
          src="/OLDMONEY.jpg"
          alt="UNT NSBE Group"
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full object-cover opacity-55 scale-110"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.10), transparent 60%)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative text-center px-6 max-w-4xl z-10"
        >

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="inline-block mb-6 px-5 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-[0.3em]"
          >
            University of North Texas Chapter
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            <motion.span
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              Empowering{" "}
            </motion.span>

            <span className="text-green-400 relative inline-block">

              <GlitchText>
                Black
              </GlitchText>

              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-green-400/60"
                animate={{
                  scaleX: [0.6, 1, 0.6],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

            </span>

            <motion.span
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              {" "}Engineers
            </motion.span>

          </h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
            className="mt-8 text-white/50 tracking-widest text-sm uppercase"
          >
            Academic excellence · Leadership · Community impact
          </motion.p>

          {/* HERO BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >

            <Link
              href="/membership"
              className="px-7 py-3 rounded-full bg-green-400 text-black font-bold hover:scale-105 transition"
            >
              Join UNT NSBE
            </Link>

            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:border-green-400/50 hover:text-green-400 transition"
            >
              Learn More
            </Link>

          </motion.div>

          {/* SCROLL */}
          <motion.div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <span className="text-xs text-white/30 uppercase tracking-widest">
              Scroll
            </span>

            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />

          </motion.div>

        </motion.div>

      </section>

      {/* ═══════════════════════════════════════
          PROGRAMS
      ═══════════════════════════════════════ */}

      <section className="py-28 px-6 max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14"
        >

          <p className="text-green-400 text-xs uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>

          <h2 className="text-5xl font-black">
            Programs
          </h2>

          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full" />

        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">

          {programs.map((item, i) => (

            <motion.div
              key={item.name}
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
                delay: i * 0.08,
              }}
            >

              <MagneticCard className="h-full">

                <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.02] h-full relative overflow-hidden cursor-default">

                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="text-3xl mb-4 block">
                    {item.icon}
                  </span>

                  <p className="font-semibold text-white/90 group-hover:text-green-300 transition-colors duration-300">
                    {item.name}
                  </p>

                </div>

              </MagneticCard>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ═══════════════════════════════════════
          IMPACT
      ═══════════════════════════════════════ */}

      <section className="py-28 px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-neutral-950/80 border-y border-white/10" />

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-14"
          >

            <p className="text-green-400 text-xs uppercase tracking-[0.3em] mb-3">
              By The Numbers
            </p>

            <h2 className="text-5xl font-black">
              Our Impact
            </h2>

            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full mx-auto" />

          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">

            {stats.map((item, i) => (

              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 180,
                }}
              >

                <MagneticCard>

                  <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/5 rounded-bl-full" />

                    <h3 className="text-5xl text-green-400 font-black">

                      <AnimatedCounter
                        target={item.num}
                        suffix={item.suffix}
                      />

                    </h3>

                    <p className="text-white/40 mt-3 text-sm uppercase tracking-widest">
                      {item.label}
                    </p>

                  </div>

                </MagneticCard>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ═══════════════════════════════════════
          LEADERSHIP PREVIEW
      ═══════════════════════════════════════ */}

      <section className="py-28 px-6 max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          <p className="text-green-400 text-xs uppercase tracking-[0.3em] mb-3">
            The Team
          </p>

          <h2 className="text-5xl font-black">
            Executive Leadership
          </h2>

          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full mx-auto" />

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {leaders.map((person, i) => (

            <motion.div
              key={person.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
              }}
            >

              <MagneticCard>

                <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] relative">

                  <div className="relative overflow-hidden h-[320px]">

                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/15 transition-colors duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold backdrop-blur-sm">
                      {person.role}
                    </div>

                  </div>

                  <div className="p-5 flex items-center justify-between">

                    <div>

                      <h3 className="text-lg font-bold">
                        {person.name}
                      </h3>

                      <p className="text-green-400/70 text-xs uppercase tracking-widest mt-0.5">
                        {person.role}
                      </p>

                    </div>

                    <div className="relative w-3 h-3">

                      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />

                      <span className="relative w-3 h-3 rounded-full bg-green-400 block" />

                    </div>

                  </div>

                </div>

              </MagneticCard>

            </motion.div>

          ))}

        </div>

        {/* VIEW ALL LEADERSHIP */}
        <div className="text-center mt-14">

          <Link
            href="/leadership"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-green-400/30 text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            View Full Leadership Team
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* ═══════════════════════════════════════
          GALLERY PREVIEW
      ═══════════════════════════════════════ */}

      <section className="py-28 px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-14"
          >

            <p className="text-green-400 text-xs uppercase tracking-[0.3em] mb-3">
              Our Memories
            </p>

            <h2 className="text-5xl font-black">
              UNT NSBE Gallery
            </h2>

            <p className="text-white/50 mt-5 max-w-2xl mx-auto">
              Explore moments from our chapter events, conferences,
              professional development programs, and community.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* 2025-2026 */}
            <Link href="/gallery/2025-2026">

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-10 cursor-pointer"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">

                  <div className="text-6xl">
                    📁
                  </div>

                  <div className="mt-16">

                    <p className="text-green-400 text-xs uppercase tracking-[0.3em]">
                      Gallery
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      2025–2026
                    </h3>

                    <p className="text-white/40 mt-3">
                      View photos from the 2025–2026 school year.
                    </p>

                    <p className="text-green-400 mt-6">
                      Open Gallery →
                    </p>

                  </div>

                </div>

              </motion.div>

            </Link>

            {/* 2026-2027 */}
            <Link href="/gallery/2026-2027">

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-10 cursor-pointer"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">

                  <div className="text-6xl">
                    📁
                  </div>

                  <div className="mt-16">

                    <p className="text-green-400 text-xs uppercase tracking-[0.3em]">
                      Gallery
                    </p>

                    <h3 className="text-3xl font-black mt-2">
                      2026–2027
                    </h3>

                    <p className="text-white/40 mt-3">
                      View photos from the 2026–2027 school year.
                    </p>

                    <p className="text-green-400 mt-6">
                      Open Gallery →
                    </p>

                  </div>

                </div>

              </motion.div>

            </Link>

          </div>

          <div className="text-center mt-12">

            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-green-400/30 text-green-400 hover:bg-green-400 hover:text-black transition"
            >
              View Full Gallery
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

      {/* ═══════════════════════════════════════
          GET INVOLVED
      ═══════════════════════════════════════ */}

      <section className="py-28 px-6 relative z-10">

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
          className="max-w-5xl mx-auto rounded-3xl border border-green-400/20 bg-green-400/[0.04] px-8 py-16 text-center relative overflow-hidden"
        >

          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5" />

          <div className="relative z-10">

            <p className="text-green-400 text-xs uppercase tracking-[0.3em] mb-4">
              Join The Community
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Ready to Get Involved?
            </h2>

            <p className="text-white/50 mt-5 max-w-2xl mx-auto">
              Connect with UNT NSBE, attend our events, grow professionally,
              and become part of our community.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/membership"
                className="px-7 py-3 rounded-full bg-green-400 text-black font-bold hover:scale-105 transition"
              >
                Become a Member
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3 rounded-full border border-white/20 hover:border-green-400/50 hover:text-green-400 transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}

      <footer className="py-14 border-t border-white/10 relative z-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <div className="relative w-6 h-6 flex items-center justify-center">

                <motion.span
                  className="absolute w-6 h-6 rounded-full border border-green-500/40"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />

                <span className="w-2 h-2 rounded-full bg-green-400" />

              </div>

              <span className="text-sm font-bold tracking-[0.2em]">
                UNT NSBE
              </span>

            </Link>

            {/* FOOTER LINKS */}
            <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-white/30">

              {navigation.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-green-400 transition-colors"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-8 text-center">

            <p className="text-white/25 text-xs tracking-widest uppercase">
              © 2026 UNT NSBE · All Rights Reserved
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}