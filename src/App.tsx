// App.tsx

import { useEffect } from "react";
import {
  Trophy,
  BarChart3,
  Repeat,
  Medal,
  TrendingUp,
  Sparkles,
  Star,
  Download,
  Mail,
  Shield,
} from "lucide-react";

import stadium from "./assets/stadium.jpeg";
import { Button } from "./components/Button";

const APP_URL =
  "https://play.google.com/store/apps/details?id=com.hunkydev.career_mode_tracker";

const ICON_URL =
  "https://play-lh.googleusercontent.com/RdjYPilvfmewUApI4Xmfv-9LScJ_1-SRzc5WHEvZpgyWggXmSK72EiAI-sorL54BauS2=w240-h480-rw";

const SCREENSHOTS = [
  "https://play-lh.googleusercontent.com/BPK6Nzb3VMIo84KfWDVdhSn7JgzKN1fz4KmVVLDCi__GQ0z5ttzbtmHgRdfxSeDo4MZlKP8zRIE6KwhXo4TKX7s=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/hSdUVrFGT5xsch7eQD7CAwH87_0LjMIcyWu8imj8qlc6WZfrv08ezbCogbLpdEIsKs2l1MCoSWTOXRyfX8z0=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/sdKP7GQWGAMYdvxI3cNEY3k6Aa2Bp8ZZMjIWcfsxVIxFXpiTauYG7sTywJAX_PalEhMaNtysxEt6Q2b1S4Sn8A=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/a4wm9b6uFZSPFosj9POj3MPkCbZSthYzLXnXt9ZNOcBGl8_Y0AjleVQYmJnM643mY0v3xVuea2ku1yp_5jFt_w=w2560-h1440-rw",
];

const features = [
  {
    icon: BarChart3,
    title: "Match Tracking",
    text: "Save every result and dig into the stats that matter.",
  },
  {
    icon: Repeat,
    title: "Transfer Management",
    text: "Record every transfer and squad shake-up of your career.",
  },
  {
    icon: Trophy,
    title: "Tournament Analysis",
    text: "Track competition runs and compare seasons side by side.",
  },
  {
    icon: Medal,
    title: "Trophy Cabinet",
    text: "A growing collection of every cup you've ever lifted.",
  },
  {
    icon: Sparkles,
    title: "Personal Bests",
    text: "Streaks, milestones and records you'll chase forever.",
  },
  {
    icon: TrendingUp,
    title: "Performance Graphs",
    text: "Beautiful charts that turn raw data into a story.",
  },
];

function App() {
  useEffect(() => {
    document.title =
      "Football Career Mode Tracker — Stats, Trophies & Transfers";
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center">
        <img
          src={stadium}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-64 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                4.6 • 140K+ downloads
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                Your Career.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Every Stat.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                The all-in-one companion for tracking your football simulator
                career. Matches, transfers, trophies and personal bests in one
                place.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={APP_URL} target="_blank" rel="noreferrer">
                  <Button>
                    <Download className="mr-2 h-5 w-5" />
                    Google Play
                  </Button>
                </a>

                <a
                  href="#features"
                  className="font-semibold text-slate-400 transition hover:text-white"
                >
                  See Features →
                </a>
              </div>
            </div>

            <div className="hidden justify-center lg:flex">
              <img
                src={ICON_URL}
                alt="App icon"
                className="h-72 w-72 rounded-[3rem] border border-cyan-500/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Built for obsessives
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.95]">
            Every detail of your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              virtual career
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-slate-950">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-xl font-bold uppercase">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-y border-white/10 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-5xl font-black uppercase">
              In{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Action
              </span>
            </h2>

            <p className="max-w-sm text-slate-400">
              Screens from the live application.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6">
            {SCREENSHOTS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-[280px] max-w-[70vw] flex-shrink-0 rounded-2xl border border-white/10 shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-12 text-center shadow-2xl">
          <Trophy className="mx-auto mb-6 h-12 w-12 text-cyan-400" />

          <h2 className="mb-4 text-5xl font-black uppercase leading-[0.95]">
            Elevate your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Career Mode
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-lg text-slate-400">
            Free to download. Built by a fan, for the fans.
          </p>

          <a href={APP_URL} target="_blank" rel="noreferrer">
            <Button>
              <Download className="mr-2 h-5 w-5" />
              Install Free
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row">
          <div>
            <p className="font-bold uppercase tracking-wider text-white">
              Football Career Mode Tracker
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} HunkyDev · Roman Martseniuk
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:roman.martseniuk98@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Support
            </a>

            <a
              href="https://www.termsfeed.com/live/1a189bd9-f7ae-4195-8a1b-cd9c46ba4b1a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Shield className="h-4 w-4" />
              Privacy
            </a>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Google Play
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;