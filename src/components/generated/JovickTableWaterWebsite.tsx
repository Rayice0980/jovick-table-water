import { FormEvent, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Quality", "quality"],
  ["Products", "products"],
  ["Contact", "contact"],
] as const;

const values = [
  ["01", "Consistency", "A dependable product and a consistent customer experience."],
  ["02", "Cleanliness", "Hygiene and responsible handling remain central to the brand."],
  ["03", "Trust", "Clear communication and honest business practices."],
  ["04", "Growth", "A modern foundation for a growing Nigerian water brand."],
];

const standards = [
  ["Water Treatment", "A clear explanation of the treatment process used in production."],
  ["Hygienic Production", "Production and packaging practices designed around cleanliness and consistency."],
  ["Quality Control", "Documented checks and standards that help keep every batch consistent."],
];

export function JovickTableWaterWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 text-left" aria-label="Jovick Table Water home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <span className="text-xl font-black text-white">J</span>
            </span>
            <span>
              <span className="block text-lg font-extrabold tracking-tight">JOVICK</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-blue-600">Table Water</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">{label}</button>
            ))}
          </nav>

          <button onClick={() => scrollTo("contact")} className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 md:block">
            Order Water
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <span className="text-xl" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-slate-100 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{label}</button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-slate-950 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,.35),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,.18),transparent_28%)]" />
          <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" /> Pure. Clean. Reliable.
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.04em] text-white sm:text-6xl lg:text-7xl">Refreshment you can <span className="text-blue-400">trust.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Jovick Table Water is built around one simple promise: clean, refreshing drinking water prepared with care for homes, businesses, events and everyday life.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("contact")} className="rounded-full bg-blue-500 px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/40 transition hover:bg-blue-400">Order / Make an Enquiry</button>
                <button onClick={() => scrollTo("quality")} className="rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10">Our Quality Promise</button>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
                {["Clean", "Fresh", "Jovick"].map((item) => <div key={item}><p className="text-2xl font-black text-white">{item}</p><p className="mt-1 text-xs text-slate-400">{item === "Jovick" ? "A brand you remember" : item === "Fresh" ? "Everyday refreshment" : "Quality focused"}</p></div>)}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative rounded-[3rem] border border-white/10 bg-white/[.07] p-8 shadow-2xl backdrop-blur">
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100">
                  <div className="relative h-[82%] w-[38%] rounded-[2.4rem] border-[5px] border-blue-200 bg-gradient-to-r from-white via-blue-50 to-white shadow-[inset_-14px_0_30px_rgba(37,99,235,.12),12px_25px_35px_rgba(15,23,42,.18)]">
                    <div className="absolute -top-7 left-1/2 h-10 w-20 -translate-x-1/2 rounded-t-xl rounded-b-md border-4 border-blue-200 bg-blue-600" />
                    <div className="absolute left-1/2 top-[42%] w-[150%] -translate-x-1/2 -rotate-3 rounded-2xl bg-blue-600 px-3 py-5 text-center shadow-lg">
                      <div className="text-lg font-black text-white">JOVICK</div>
                      <div className="mt-1 text-[8px] font-bold uppercase tracking-[.22em] text-blue-100">TABLE WATER</div>
                      <div className="mx-auto mt-3 h-px w-10 bg-white/50" />
                      <div className="mt-2 text-[7px] font-semibold uppercase tracking-widest text-white/80">Pure refreshment</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between px-2">
                  <div><p className="text-sm font-bold text-white">Jovick Table Water</p><p className="text-xs text-slate-400">Designed for everyday trust</p></div>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[.2em] text-blue-600">About Jovick</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Water made with purpose.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Jovick Table Water is part of the wider Jovick Unique vision: building dependable brands that people can confidently bring into their homes and businesses.</p>
              <p className="mt-4 leading-7 text-slate-600">Our water business is focused on consistency, responsible production, good presentation and customer trust. As the brand grows, our website will grow with it.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map(([number, title, description]) => (
                <article key={number} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <span className="text-xs font-black text-blue-600">{number}</span>
                  <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="bg-blue-50 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-sm font-black uppercase tracking-[.2em] text-blue-600">Our standard</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Quality is not a slogan.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">We will clearly document Jovick's actual treatment, testing, hygiene and regulatory standards as they are established—without making claims we cannot verify.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {standards.map(([title, description]) => (
                <article key={title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-blue-100">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-xl text-white">✓</div>
                  <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[.2em] text-blue-600">Our products</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Made for everyday moments.</h2>
            </div>
            <p className="max-w-md text-slate-600">Product sizes, packaging and wholesale options will be listed here as the official product range is finalized.</p>
          </div>
          <div className="mt-12 rounded-[2rem] border border-dashed border-blue-200 bg-blue-50/60 p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl shadow-sm">💧</div>
            <h3 className="mt-5 text-2xl font-extrabold">Jovick Table Water</h3>
            <p className="mx-auto mt-2 max-w-lg leading-7 text-slate-600">The product catalogue will showcase verified pack sizes, pricing guidance and bulk-order information here.</p>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[.2em] text-blue-400">Get in touch</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Ready to order or partner with Jovick?</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Use this section for direct customer orders, distributor enquiries, event supply and business partnerships.</p>
              <div className="mt-9 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Business</p><p className="mt-2 font-bold">Jovick Table Water</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Parent brand</p><p className="mt-2 font-bold">JOVICK UNIQUE</p><p className="mt-1 text-sm text-slate-400">JOVICK UNIQUE INTEGRATED VENTURES LIMITED</p></div>
              </div>
            </div>
            <form onSubmit={submit} className="rounded-[2rem] bg-white p-7 text-slate-950 shadow-2xl sm:p-9">
              <h3 className="text-2xl font-black">Send an enquiry</h3>
              <p className="mt-2 text-sm text-slate-500">{sent ? "Thank you. Your enquiry is ready for the next contact-channel integration." : "We will connect this form to your preferred contact channel next."}</p>
              <div className="mt-7 space-y-4">
                <input required className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Your name" aria-label="Your name" />
                <input required className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Phone or WhatsApp number" aria-label="Phone or WhatsApp number" />
                <textarea required rows={4} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="What would you like to order or discuss?" aria-label="Message" />
                <button className="w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700">{sent ? "Enquiry Received" : "Submit Enquiry"}</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-5 pb-8 text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jovick Table Water. All rights reserved.</p>
          <p>Part of the JOVICK UNIQUE brand.</p>
        </div>
      </footer>
    </div>
  );
}
