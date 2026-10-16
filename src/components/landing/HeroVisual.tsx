import { QrMock } from "./QrMock";

const VIDEOS = [
  { title: "우리가 처음 만난 날", length: "3분 12초" },
  { title: "엄마 아빠, 고맙습니다", length: "4분 05초" },
  { title: "어린 시절 앨범", length: "2분 40초" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/6.6] w-full sm:aspect-[5/5.4] max-w-[460px]">
      {/* 청첩장 카드 */}
      <div className="absolute left-0 top-4 w-[86%] sm:w-[78%] -rotate-3 rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(36,33,58,0.35)] sm:p-8">
        <p className="text-center text-sm text-ink-soft">저희 두 사람, 결혼합니다</p>
        <p className="mt-3 text-center font-display text-[1.7rem] leading-tight text-ink sm:text-3xl">
          민준 <span className="text-peony">&amp;</span> 서연
        </p>
        <p className="mt-2 text-center text-[0.8rem] text-ink-soft sm:text-sm">2026년 11월 21일 토요일<br className="sm:hidden" /> 낮 12시 30분</p>

        <div className="relative mx-auto mt-6 w-[72%] overflow-hidden rounded-2xl border border-line p-3 text-ink">
          <QrMock className="block h-auto w-full" />
          <div
            aria-hidden="true"
            className="scan-line pointer-events-none absolute inset-x-2 top-[4%] h-[3px] rounded-full bg-peony shadow-[0_0_16px_4px_rgba(214,69,122,0.45)]"
          />
        </div>
        <p className="mt-4 text-center text-[0.82rem] text-ink-soft">
          키오스크의 QR을 휴대폰 카메라로 찍어 주세요
        </p>
      </div>

      {/* 하객 휴대폰 화면 */}
      <div className="phone-in absolute bottom-0 right-0 w-[56%] sm:w-[52%] rotate-[4deg] rounded-[34px] border-[6px] border-ink bg-ink shadow-[0_40px_70px_-30px_rgba(36,33,58,0.6)]">
        <div className="overflow-hidden rounded-[28px] bg-white">
          <div className="bg-peony-soft px-4 pb-4 pt-5">
            <p className="text-[0.7rem] text-peony-deep">민준 &amp; 서연의 결혼식</p>
            <p className="mt-1 font-display text-[1.05rem] leading-snug text-ink">두 사람의 이야기 영상</p>
          </div>
          <ul className="divide-y divide-line px-3">
            {VIDEOS.map((v) => (
              <li key={v.title} className="flex items-center gap-2.5 py-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
                  <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
                    <path d="M0 0l10 6-10 6z" fill="currentColor" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.72rem] font-medium text-ink">{v.title}</span>
                  <span className="block text-[0.64rem] text-ink-soft">{v.length}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="p-3 pt-1">
            <div className="rounded-xl bg-ink px-3 py-2.5 text-center text-[0.72rem] font-medium text-white">
              구매하고 경품 추첨 참여
            </div>
            <p className="mt-2 text-center text-[0.62rem] text-sage-deep">구매 즉시 추첨 명단에 등록됩니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}
