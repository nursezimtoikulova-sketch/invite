import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Loader2, MessageCircle, Send } from "lucide-react";
import { Corners, SectionHeading, Tunduk } from "./Ornament";
import { Reveal } from "./Reveal";
import { submitRsvp, whatsappRsvpLink } from "../lib/rsvp";
import type { RsvpData } from "../lib/rsvp";
import { APPS_SCRIPT_URL, WHATSAPP_NUMBER } from "../config";

type Status = "idle" | "sending" | "success" | "error";

const ATTEND_YES = "Ооба, катышып жатам";
const ATTEND_NO = "Тилек каршы, катыша албайм";

export function RSVP() {
  const [form, setForm] = useState<RsvpData>({
    name: "",
    phone: "",
    attendance: ATTEND_YES,
    guests: "1",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof RsvpData) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await submitRsvp(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="relative overflow-hidden bg-red-deep py-18 sm:py-24 pattern-red">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 py-6 sm:py-0">
        <Reveal>
          <SectionHeading light eyebrow="Меймандын анкетасы" title="Катышууңузду тактаңыз" />
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-paper/75">
            Форманы толтуруңуз — жообуңуз дароо мектептин жооптуу кишисине
            жетет. Биз үчүн эң маанилүүсү — сиздин келишиңиз!
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <div className="relative bg-paper shadow-[0_34px_80px_-30px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-2.5 hairline-red pointer-events-none" />
            <Corners />
            <div className="relative p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="py-6 text-center"
                  >
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="mx-auto w-max"
                    >
                      <Tunduk className="h-16 w-16 text-red" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-4xl font-semibold uppercase text-ink">
                      Рахмат!
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                      Жообуңуз мектепке жетти. Сизди жана үй-бүлөңүздү
                      31-октябрда саат 10:00дө чын жүрөктөн күтөбүз!
                    </p>
                    <CalendarCheck className="mx-auto mt-6 h-6 w-6 text-gold" />
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    className="space-y-7"
                  >
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                          Аты-жөнүңүз *
                        </span>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => set("name")(e.target.value)}
                          className="field mt-1"
                          placeholder="Айперке (мисалы)"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                          Телефонуңуз *
                        </span>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone")(e.target.value)}
                          className="field mt-1"
                          placeholder="+996 ___ __ __ __"
                        />
                      </label>
                    </div>

                    <div>
                      <span className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                        Майрамга катышасызбы? *
                      </span>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {[ATTEND_YES, ATTEND_NO].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => set("attendance")(opt)}
                            className={`rounded-full border px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition-all ${
                              form.attendance === opt
                                ? "border-red bg-red text-paper shadow-[0_10px_24px_-10px_rgba(166,28,44,0.6)]"
                                : "border-gold/50 text-ink-soft hover:border-gold"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                          Канча киши келесиздер? *
                        </span>
                        <select
                          value={form.guests}
                          onChange={(e) => set("guests")(e.target.value)}
                          className="field mt-1 cursor-pointer appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                              {n} киши
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-ink-soft">
                          Кошумча билдирүү
                        </span>
                        <input
                          value={form.message}
                          onChange={(e) => set("message")(e.target.value)}
                          className="field mt-1"
                          placeholder="Каалооңуз жанасы…"
                        />
                      </label>
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-red/40 bg-red/5 px-4 py-3 text-center text-[0.82rem] leading-relaxed text-red"
                      >
                        Кешириңиз, жөнөтүүдө ката кетти. {`WhatsApp (${WHATSAPP_DISPLAY})`}
                        аркылуу жибериңиз же кайра аракет кылыңыз — анкетаниңыз
                        ошол жерден жетет.
                      </motion.p>
                    )}

                    <div className="flex flex-col items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn btn-primary min-w-56 disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Жөнөтүүлүп жатат…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Жөнөтүү
                          </>
                        )}
                      </button>
                      <a
                        href={whatsappRsvpLink(form)}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-red"
                      >
                        <MessageCircle className="h-4 w-4" />
                        же WhatsApp аркылуу жөнөтүү
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
