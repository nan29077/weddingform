"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ROLES, ROLE_KEYS, type RoleKey } from "@/lib/roles";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<RoleKey | null>(null);

  function enter(role: RoleKey) {
    setPending(role);
    try {
      localStorage.setItem("wf_role", role);
    } catch {
      /* 저장소를 못 쓰는 환경이어도 이동은 진행 */
    }
    router.push(`/dashboard/${role}`);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    const match = ROLE_KEYS.find((k) => ROLES[k].email === email);
    if (match) {
      enter(match);
      return;
    }
    setError("이메일 또는 비밀번호가 맞지 않습니다. 아직 계정 연동 전이라 아래 테스트 로그인을 이용해 주세요.");
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4" noValidate>
        <label className="grid gap-1.5 text-sm font-medium text-ink">
          이메일
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={() => setError(null)}
            className="rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
            placeholder="name@example.com"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-ink">
          <span className="flex items-center justify-between">
            비밀번호
            <span className="font-normal text-ink-soft">데모 화면</span>
          </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={() => setError(null)}
            className="rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
            placeholder="비밀번호"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-soft">
          <input type="checkbox" name="remember" className="h-4 w-4 accent-[#24213a]" />
          로그인 상태 유지
        </label>
        {error && (
          <p role="alert" className="rounded-xl bg-peony-soft px-4 py-3 text-sm leading-relaxed text-peony-deep">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending !== null}
          className="rounded-full bg-ink px-6 py-3.5 font-medium text-white transition-colors hover:bg-ink/90 disabled:opacity-60"
        >
          로그인
        </button>
      </form>

      <section aria-labelledby="test-login" className="mt-10 rounded-3xl border border-dashed border-ink/25 bg-mist p-5">
        <div className="flex items-center justify-between">
          <h2 id="test-login" className="font-semibold text-ink">
            테스트 로그인
          </h2>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs text-ink-soft">개발용</span>
        </div>
        <p className="mt-1 text-sm text-ink-soft">역할을 누르면 해당 계정으로 바로 들어갑니다.</p>
        <ul className="mt-4 grid gap-2">
          {ROLE_KEYS.map((key) => (
            <li key={key}>
              <button
                type="button"
                onClick={() => enter(key)}
                disabled={pending !== null}
                className="flex w-full items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 text-left ring-1 ring-transparent transition hover:ring-ink/15 disabled:opacity-60"
              >
                <span>
                  <span className="block font-medium text-ink">{ROLES[key].label}로 로그인</span>
                  <span className="block text-sm text-ink-soft">{ROLES[key].desc}</span>
                </span>
                <span className="shrink-0 text-sm text-ink-soft">{pending === key ? "이동 중" : ""}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-center text-sm text-ink-soft">
        아직 계정이 없으신가요?{" "}
        <Link href="/#contact" className="font-medium text-ink underline underline-offset-4">
          등록 문의하기
        </Link>
      </p>
    </>
  );
}
