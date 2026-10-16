import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { FixedStoryBackground } from "@/components/landing/FixedStoryBackground";
import { QrMock } from "@/components/landing/QrMock";
import { InquiryForm } from "@/components/landing/InquiryForm";

const STEPS = [
  {
    title: "영상 등록",
    when: "결혼식 2주 전까지",
    body: "신랑신부가 관리 페이지에서 영상을 올리고, 영상마다 제목과 가격, 공개 기간을 정합니다.",
  },
  {
    title: "결혼식 전용 QR 발급",
    when: "등록 직후",
    body: "결혼식마다 하나의 QR이 만들어집니다. 제휴 키오스크 업체에 전달되어 식장 키오스크 화면에 표시됩니다.",
  },
  {
    title: "하객이 스캔하고 구매",
    when: "결혼식 당일",
    body: "하객은 휴대폰 카메라로 QR을 찍고, 앱 설치나 회원가입 없이 바로 결제하고 영상을 봅니다.",
  },
  {
    title: "추첨하고 경품 전달",
    when: "식 중 또는 식 후",
    body: "구매한 하객은 자동으로 추첨 명단에 오릅니다. 당첨자에게는 문자로 안내하고 경품을 전달합니다.",
  },
];

const VIDEO_TYPES = [
  {
    title: "연애 이야기",
    body: "처음 만난 날부터 프러포즈까지, 두 사람만 아는 이야기를 하객과 나눕니다.",
    tone: "bg-peony-soft text-peony-deep",
  },
  {
    title: "부모님께 드리는 영상",
    body: "식장에서 다 전하지 못한 감사 인사를 영상 편지로 남깁니다.",
    tone: "bg-sage-soft text-sage-deep",
  },
  {
    title: "어린 시절 앨범",
    body: "돌사진, 입학식, 가족 여행 사진을 모아 성장 영상으로 만듭니다.",
    tone: "bg-mist text-ink",
  },
  {
    title: "웨딩 촬영 비하인드",
    body: "스튜디오와 야외 촬영 날의 웃음과 실수까지 담은 메이킹 영상입니다.",
    tone: "bg-mist text-ink",
  },
  {
    title: "친구들의 축하 메시지",
    body: "오랜 친구와 동료가 보내 준 축하 영상을 한 편으로 엮습니다.",
    tone: "bg-peony-soft text-peony-deep",
  },
];

const AUDIENCES = [
  {
    who: "신랑신부",
    lead: "준비한 영상이 식장 스크린 한 번으로 끝나지 않습니다.",
    points: [
      "하객이 집에 돌아가서도 다시 볼 수 있는 기념품이 됩니다",
      "영상별 가격과 공개 기간을 직접 정합니다",
      "판매 현황과 추첨 결과를 관리 페이지에서 바로 확인합니다",
    ],
  },
  {
    who: "하객",
    lead: "축하의 순간을 휴대폰에 그대로 담아 갑니다.",
    points: [
      "QR 한 번이면 앱 설치도 회원가입도 필요 없습니다",
      "카드와 간편결제로 바로 결제합니다",
      "구매하면 자동으로 경품 추첨에 참여합니다",
    ],
  },
  {
    who: "웨딩홀과 키오스크 업체",
    lead: "기존 키오스크에 QR만 띄우면 새로운 서비스가 됩니다.",
    points: [
      "별도 장비나 화면 개발 없이 QR 이미지만 표시하면 됩니다",
      "예식마다 QR이 자동으로 발급되고 교체됩니다",
      "담당 영업 관리자가 예식 일정과 정산을 함께 챙깁니다",
    ],
  },
];

const PRIZES = [
  { rank: "1등", item: "호텔 숙박권", count: "1명" },
  { rank: "2등", item: "레스토랑 2인 식사권", count: "2명" },
  { rank: "3등", item: "커피 기프티콘", count: "10명" },
];

const ENTRIES = [
  { name: "김*연", phone: "010-****-2281", time: "12:41" },
  { name: "이*호", phone: "010-****-7710", time: "12:43" },
  { name: "박*은", phone: "010-****-0394", time: "12:44" },
  { name: "최*진", phone: "010-****-5562", time: "12:47" },
];

const ROLES = [
  {
    title: "결혼식 당사자",
    body: "영상 업로드, 가격과 공개 기간 설정, 판매 현황, 추첨 진행과 당첨자 확인",
  },
  {
    title: "영업 관리자",
    body: "담당 웨딩홀과 예식 일정 관리, QR 발급 상태 확인, 예식별 정산 내역",
  },
  {
    title: "최고 관리자",
    body: "전체 예식과 회원, 결제와 환불, 키오스크 업체와 영업 관리자 계정 관리",
  },
];

const FAQ = [
  {
    q: "하객이 앱을 설치해야 하나요?",
    a: "아니요. 휴대폰 기본 카메라로 QR을 찍으면 웹 페이지가 열리고, 그 자리에서 결제하고 영상을 봅니다.",
  },
  {
    q: "키오스크도 웨딩폼에서 설치해 주나요?",
    a: "키오스크는 제휴 키오스크 업체가 운영합니다. 웨딩폼은 결혼식마다 전용 QR을 발급해 키오스크에 표시되도록 전달합니다.",
  },
  {
    q: "영상은 언제까지 볼 수 있나요?",
    a: "신랑신부가 영상마다 공개 기간을 정할 수 있습니다. 기간 안에는 구매한 하객이 몇 번이든 다시 볼 수 있습니다.",
  },
  {
    q: "경품은 누가 준비하나요?",
    a: "경품 구성과 당첨 인원은 결혼식마다 신랑신부와 상담해 정합니다. 당첨 안내와 전달은 웨딩폼이 대신 진행합니다.",
  },
  {
    q: "어떤 결제 수단을 쓸 수 있나요?",
    a: "신용카드와 체크카드, 주요 간편결제를 지원합니다. 결제 내역은 하객에게 문자로 안내됩니다.",
  },
  {
    q: "영상 판매 금액은 어떻게 정산되나요?",
    a: "정산 방식과 일정은 상담 때 자세히 안내해 드립니다. 관리 페이지에서 예식별 판매 금액을 언제든 확인할 수 있습니다.",
  },
];

function SectionHeading({ title, desc, align = "left" }: { title: string; desc?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="font-display text-[1.9rem] leading-[1.3] text-ink sm:text-[2.4rem]">{title}</h2>
      {desc && <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{desc}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <FixedStoryBackground />
        <HeroCarousel />

        <section className="story-panel relative z-10 border-b border-line py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-peony-deep">Weddingform Experience</p>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.3] tracking-tight text-ink sm:text-[2.8rem]">
                한 장의 QR에서 시작해<br />오래 남는 이야기로
              </h2>
              <p className="mt-5 max-w-xl leading-[1.85] text-ink-soft">
                식장에서 잠깐 스쳐 가는 영상이 아쉬웠다면, 하객이 직접 소장할 수 있게 전해 주세요. 웨딩폼은 영상 등록부터 QR 안내, 결제와 추첨까지 자연스럽게 이어 줍니다.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "간편하게", "카메라로 QR 스캔"],
                  ["02", "바로 감상", "구매 후 영상 시청"],
                  ["03", "즐겁게", "경품 추첨 자동 참여"],
                ].map(([number, title, body]) => (
                  <div key={number} className="rounded-2xl border border-line bg-mist/55 p-4 sm:p-5">
                    <span className="text-xs font-semibold tracking-widest text-peony-deep">{number}</span>
                    <p className="mt-4 font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[radial-gradient(circle_at_75%_18%,#f7e8e0,transparent_45%),#f5f4ef] px-6 py-8 sm:px-10 sm:py-10">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="story-interlude relative z-10 flex min-h-[52svh] items-center py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-bold tracking-[.2em] text-white/75">THE DAY, KEPT CLOSE</p>
            <h2 className="mt-5 max-w-2xl font-display text-[2rem] leading-[1.4] sm:text-[3rem]">함께한 순간이<br />오래 남는 이야기가 되도록</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/85">결혼식이 끝난 뒤에도, 그날의 마음을 다시 꺼내 볼 수 있습니다.</p>
          </div>
        </section>

        {/* 이용 방법 */}
        <section id="how" className="story-panel-soft relative z-10 scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              title="결혼식 하루, 이렇게 흘러갑니다"
              desc="신랑신부는 영상만 준비하면 됩니다. QR 발급부터 결제, 추첨, 경품 안내까지 웨딩폼이 이어서 진행합니다."
            />
            <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[22px] hidden border-t border-dashed border-ink/20 md:block"
            />
            <ol className="relative grid gap-6 md:grid-cols-4 md:gap-5">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-lg text-white">
                    {i + 1}
                  </span>
                  <p className="mt-5 text-sm text-peony-deep">{s.when}</p>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-ink-soft">{s.body}</p>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>

        {/* 영상 종류 */}
        <section id="videos" className="story-panel relative z-10 scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div className="md:sticky md:top-28 md:self-start">
              <SectionHeading
                title="어떤 영상이든 이야기가 됩니다"
                desc="이미 식전 영상을 준비하셨다면 그대로 올리면 됩니다. 영상은 여러 편으로 나눠 따로 판매할 수도, 한 묶음으로 판매할 수도 있습니다."
              />
              <div className="mt-8 rounded-2xl border border-line p-5">
                <p className="font-semibold text-ink">올릴 수 있는 파일</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  MP4, MOV 영상 파일. 휴대폰으로 찍은 세로 영상도 그대로 재생됩니다.
                </p>
              </div>
            </div>
            <ul className="grid gap-4">
              {VIDEO_TYPES.map((v) => (
                <li key={v.title} className="flex gap-5 rounded-3xl border border-line p-6 sm:p-7">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${v.tone}`} aria-hidden="true">
                    <svg width="18" height="20" viewBox="0 0 18 20">
                      <path d="M2 1.5v17l14-8.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{v.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="story-transition" className="story-interlude relative z-10 flex min-h-[52svh] items-center py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-bold tracking-[.2em] text-white/75">MOMENTS THAT CONTINUE</p>
            <h2 className="mt-5 max-w-2xl font-display text-[2rem] leading-[1.4] sm:text-[3rem]">식이 끝난 뒤에도<br />즐거움은 계속됩니다</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/85">영상을 나누고, 경품을 기다리는 설렘까지 함께 전해 보세요.</p>
          </div>
        </section>

        {/* 추첨 이벤트 */}
        <section id="event" className="story-panel-dark relative z-10 scroll-mt-20 py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-[1.9rem] leading-[1.3] sm:text-[2.4rem]">
                영상을 구매한 하객 모두가 추첨 대상입니다
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-white/80">
                구매가 끝나면 하객 이름과 연락처가 추첨 명단에 자동으로 올라갑니다. 식 중에 현장에서 함께 추첨하거나, 식이 끝난 뒤
                자동으로 추첨해 문자로 결과를 알릴 수 있습니다.
              </p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-l-2 border-white/30 pl-4">
                  <dt className="font-semibold">현장 추첨</dt>
                  <dd className="mt-1.5 text-white/75">사회자가 식장 스크린에 추첨 화면을 띄우고 그 자리에서 당첨자를 발표합니다.</dd>
                </div>
                <div className="border-l-2 border-white/30 pl-4">
                  <dt className="font-semibold">자동 추첨</dt>
                  <dd className="mt-1.5 text-white/75">정해 둔 시간에 자동으로 추첨하고, 당첨자에게 경품 수령 방법을 보냅니다.</dd>
                </div>
              </dl>
            </div>

            {/* 추첨 화면 예시 */}
            <figure className="rounded-[28px] bg-white p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-ink-soft">민준 &amp; 서연의 결혼식</p>
                  <p className="mt-1 font-display text-2xl">경품 추첨</p>
                </div>
                <span className="rounded-full bg-sage-soft px-3 py-1 text-sm font-medium text-sage-deep">
                  참여 128명
                </span>
              </div>
              <ul className="mt-6 grid gap-2">
                {PRIZES.map((p) => (
                  <li key={p.rank} className="flex items-center justify-between rounded-xl bg-mist px-4 py-3">
                    <span>
                      <span className="mr-3 font-semibold text-peony-deep">{p.rank}</span>
                      {p.item}
                    </span>
                    <span className="text-sm text-ink-soft">{p.count}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-ink-soft">최근 참여한 하객</p>
              <ul className="mt-2 divide-y divide-line text-sm">
                {ENTRIES.map((e) => (
                  <li key={e.phone} className="flex justify-between py-2.5">
                    <span>
                      {e.name} <span className="ml-2 text-ink-soft">{e.phone}</span>
                    </span>
                    <span className="text-ink-soft">{e.time}</span>
                  </li>
                ))}
              </ul>
              <figcaption className="mt-5 text-center text-xs text-ink-soft">추첨 화면 예시입니다</figcaption>
            </figure>
          </div>
        </section>

        {/* 누구에게 좋은가 */}
        <section className="story-panel relative z-10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading title="모두에게 의미 있는 순간이 됩니다" align="center" />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-3">
              {AUDIENCES.map((a) => (
                <div key={a.who} className="bg-white p-7 sm:p-9">
                  <h3 className="text-sm font-semibold text-peony-deep">{a.who}</h3>
                  <p className="mt-3 font-display text-[1.35rem] leading-snug text-ink">{a.lead}</p>
                  <ul className="mt-6 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed text-ink-soft">
                        <svg className="mt-1.5 shrink-0 text-sage" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                          <path d="M2 7.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 파트너 */}
        <section id="partners" className="story-panel-soft relative z-10 scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto max-w-sm rounded-[28px] bg-ink p-6 text-white sm:p-8">
                <p className="text-sm text-white/60">키오스크 화면에 표시되는 QR</p>
                <div className="mt-4 rounded-2xl bg-white p-4 text-ink">
                  <QrMock className="mx-auto block h-auto w-full max-w-[220px]" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 px-3 py-2.5">
                    <p className="text-white/60">예식</p>
                    <p className="mt-0.5 font-medium">11월 21일 12:30</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-2.5">
                    <p className="text-white/60">장소</p>
                    <p className="mt-0.5 font-medium">그랜드홀 3층</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading
                title="웨딩홀과 키오스크 업체는 QR만 띄우면 됩니다"
                desc="웨딩폼은 키오스크 화면을 따로 만들지 않습니다. 이미 쓰고 계신 키오스크에 예식별 QR 이미지만 표시하면, 결제와 영상 재생, 추첨은 하객의 휴대폰에서 이루어집니다."
              />
              <ul className="mt-8 space-y-4">
                <li className="rounded-2xl bg-white p-5">
                  <p className="font-semibold text-ink">예식마다 자동 발급</p>
                  <p className="mt-1.5 text-ink-soft">예식이 등록되면 전용 QR이 만들어지고, 예식 시간에 맞춰 교체할 이미지를 미리 받습니다.</p>
                </li>
                <li className="rounded-2xl bg-white p-5">
                  <p className="font-semibold text-ink">담당 영업 관리자 배정</p>
                  <p className="mt-1.5 text-ink-soft">웨딩홀마다 담당자가 배정되어 예식 일정, QR 상태, 정산을 함께 확인합니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 관리 페이지 */}
        <section className="story-panel relative z-10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                title="역할에 맞는 관리 페이지"
                desc="로그인하면 계정 역할에 맞춰 필요한 메뉴만 보입니다."
              />
              <Link
                href="/login"
                className="self-start rounded-full border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-white md:self-auto"
              >
                관리 페이지 로그인
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {ROLES.map((r) => (
                <div key={r.title} className="rounded-3xl border border-line p-7">
                  <h3 className="font-display text-xl text-ink">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section id="faq" className="story-panel-soft relative z-10 scroll-mt-20 border-t border-line py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <SectionHeading title="자주 묻는 질문" desc="더 궁금한 점은 아래 문의 화면에서 미리 작성해 보세요." />
            <div className="divide-y divide-line border-y border-line">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.05rem] font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-transform group-open:rotate-45"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[40rem] pb-6 pr-12 leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 상담 신청 */}
        <section id="contact" className="relative z-10 scroll-mt-20 bg-peony-soft/90 py-20 backdrop-blur-sm md:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className="font-display text-[1.9rem] leading-[1.3] text-ink sm:text-[2.4rem]">
                결혼식 날짜가 정해졌다면
                <br />
                상담을 준비해 보세요
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
                예식장과 날짜, 준비 중인 영상을 정리해 보세요. 상담 기능은 준비 중이며 현재는 화면을 미리 살펴보실 수 있습니다.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <div className="relative z-10"><Footer /></div>
    </>
  );
}
