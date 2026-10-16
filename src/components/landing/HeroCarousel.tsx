"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/wedding-hero-1.webp",
    alt: "꽃으로 장식된 예식장에서 함께 입장하는 신랑신부",
    eyebrow: "THE MOMENT · 첫 번째 이야기",
    slogan: "오늘의 감동을, 오래도록",
    title: <>두 사람의 이야기가<br />하객의 선물이 됩니다</>,
    description: "결혼식의 특별한 영상을 QR 하나로 전하고, 함께한 하객에게 또 하나의 즐거운 기억을 선물하세요.",
  },
  {
    image: "/images/wedding-hero-2.webp",
    alt: "결혼식에서 즐겁게 웃는 하객들",
    eyebrow: "THE MEMORY · 두 번째 이야기",
    slogan: "한 번의 스캔, 오래 남는 추억",
    title: <>축하하는 마음이<br />다시 꺼내 볼 추억으로</>,
    description: "앱 설치 없이 QR을 스캔하고, 원하는 영상을 바로 구매해 언제든 다시 감상할 수 있습니다.",
  },
  {
    image: "/images/wedding-hero-3.webp",
    alt: "피로연에서 함께 웃는 신랑신부",
    eyebrow: "THE JOY · 세 번째 이야기",
    slogan: "소중한 이야기에 설렘을 더하다",
    title: <>영상을 나누고<br />설렘을 더하세요</>,
    description: "영상을 구매한 하객은 경품 추첨에도 참여합니다. 식이 끝난 뒤에도 기분 좋은 순간이 이어집니다.",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion]);

  const slide = slides[active];

  return (
    <section
      aria-label="웨딩폼 소개 배너"
      className="hero-carousel relative z-20 isolate flex min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((item, index) => (
        <div
          key={item.image}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-[66%_center] sm:object-center"
          />
        </div>
      ))}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,30,25,.78)_0%,rgba(19,30,25,.58)_36%,rgba(19,30,25,.12)_75%),linear-gradient(0deg,rgba(19,30,25,.55),transparent_45%)] max-sm:bg-[linear-gradient(0deg,rgba(19,30,25,.91)_0%,rgba(19,30,25,.68)_43%,rgba(19,30,25,.06)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-9 pt-28 sm:px-8 sm:pb-10 lg:justify-center lg:px-12 lg:pb-24">
        <div key={active} className="hero-copy max-w-[680px] pb-14 sm:pb-16 lg:pb-0" aria-live="polite">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[.18em] text-white/85 sm:text-sm">
            <span className="h-px w-7 bg-white/75" />{slide.eyebrow}
          </p>
          <p className="mb-3 font-display text-lg text-white/95 sm:text-xl">{slide.slogan}</p>
          <h1 className="font-display text-[clamp(2.55rem,5.4vw,5rem)] leading-[1.25] tracking-[-.055em]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-[550px] text-[1rem] leading-[1.75] text-white/88 sm:text-[1.12rem]">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-semibold text-ink transition hover:bg-peony-soft">결혼식 등록 문의 <span aria-hidden="true" className="ml-2">↗</span></a>
            <a href="#how" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/65 px-6 font-medium text-white transition hover:bg-white/15">이용 방법 보기</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between gap-5 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="flex items-center gap-2" aria-label="배너 선택">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${index + 1}번째 배너 보기`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-white" : "w-5 bg-white/50 hover:bg-white/85"}`}
              />
            ))}
            <span className="ml-2 text-xs tabular-nums text-white/80">0{active + 1} / 0{slides.length}</span>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setActive((active + slides.length - 1) % slides.length)} aria-label="이전 배너" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-xl transition hover:bg-white/15">←</button>
            <button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="다음 배너" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-xl transition hover:bg-white/15">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
