import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-[0.94rem] leading-relaxed">
            결혼식 이벤트 영상을 QR 하나로 하객에게 전하고, 구매한 하객에게 추첨 경품을 드리는 서비스입니다.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">서비스</h2>
          <ul className="mt-4 space-y-2.5 text-[0.94rem]">
            <li><a href="#how" className="hover:text-white">이용 방법</a></li>
            <li><a href="#videos" className="hover:text-white">영상 종류</a></li>
            <li><a href="#event" className="hover:text-white">추첨 이벤트</a></li>
            <li><Link href="/login" className="hover:text-white">관리 페이지 로그인</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">회사 정보</h2>
          <ul className="mt-4 space-y-2.5 text-[0.94rem]">
            <li>주식회사 이십세기 소년들</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/50 sm:px-6">
          © {new Date().getFullYear()} 주식회사 이십세기 소년들. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
