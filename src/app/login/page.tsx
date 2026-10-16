import type { Metadata } from "next";
import { Logo } from "@/components/site/Logo";
import { QrMock } from "@/components/landing/QrMock";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "로그인 | 웨딩폼",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-screen bg-mist lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="relative hidden overflow-hidden bg-ink p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-peony/30 blur-3xl"
        />
        <Logo tone="light" />
        <div className="relative max-w-xl">
          <div className="w-44 rotate-[-4deg] rounded-3xl bg-white p-4 text-ink shadow-2xl">
            <QrMock className="block h-auto w-full" />
          </div>
          <p className="mt-10 max-w-md font-display text-[2.1rem] leading-[1.35]">
            오늘도 누군가의 결혼식이 하객의 휴대폰에 남고 있습니다
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">영상과 추첨, 예식 운영을 한곳에서 편안하게 관리하세요.</p>
        </div>
        <p className="relative text-sm text-white/50">주식회사 이십세기 소년들</p>
      </aside>

      <main className="flex items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
        <div className="w-full max-w-[500px] rounded-[28px] border border-line bg-white p-6 shadow-[0_24px_70px_-45px_rgba(36,52,45,.24)] sm:p-10 lg:border-0 lg:shadow-none">
          <div className="lg:hidden">
            <Logo />
          </div>
          <p className="mt-9 text-xs font-semibold uppercase tracking-[.18em] text-peony-deep lg:mt-0">Weddingform Workspace</p>
          <h1 className="mt-3 font-display text-[2rem] text-ink sm:text-[2.4rem]">관리 페이지 로그인</h1>
          <p className="mt-2 text-ink-soft">신랑신부, 영업 관리자, 최고 관리자 계정으로 로그인합니다.</p>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
