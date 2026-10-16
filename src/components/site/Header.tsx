"use client";

import Link from "next/link";
import { useRef } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "#how", label: "이용 방법" },
  { href: "#videos", label: "영상 종류" },
  { href: "#event", label: "추첨 이벤트" },
  { href: "#partners", label: "파트너" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export function Header() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (mobileMenu.current) mobileMenu.current.open = false; };
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.94rem] text-ink-soft">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-[0.94rem] font-medium text-ink hover:bg-mist"
          >
            로그인
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-[0.94rem] font-medium text-white hover:bg-ink/90"
          >
            등록 문의
          </a>
        </div>

        {/* 모바일 메뉴 */}
        <details ref={mobileMenu} className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full hover:bg-mist [&::-webkit-details-marker]:hidden">
            <span className="sr-only">메뉴 열기</span>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-60 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/5">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={closeMenu} className="block rounded-xl px-3 py-2.5 text-ink hover:bg-mist">
                {n.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-2">
              <Link href="/login" onClick={closeMenu} className="rounded-xl px-3 py-2.5 text-center font-medium hover:bg-mist">
                로그인
              </Link>
              <a href="#contact" onClick={closeMenu} className="rounded-xl bg-ink px-3 py-2.5 text-center font-medium text-white">
                등록 문의
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
