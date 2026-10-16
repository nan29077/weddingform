import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { ROLES, type RoleKey } from "@/lib/roles";

type Entry = { name: string; detail: string; status: string; ready?: boolean };
type Dashboard = {
  eyebrow: string; title: string; description: string;
  metrics: [string, string, string][];
  listTitle: string; listDescription: string; entries: Entry[];
  chartTitle: string; chartDescription: string; bars: number[];
  tasks: [string, string][];
};

const dashboards: Record<RoleKey, Dashboard> = {
  admin: {
    eyebrow: "전체 운영 현황", title: "오늘의 웨딩폼을 한눈에", description: "예식 운영과 파트너 현황을 한곳에서 살펴보세요.",
    metrics: [["진행 예정 예식", "24", "이번 달 기준"], ["활성 웨딩홀", "12", "제휴 운영 중"], ["영상 구매", "1,284", "이번 달 누적"], ["확인할 항목", "03", "처리 대기"]],
    listTitle: "다가오는 예식", listDescription: "이번 주 진행 예정인 예식과 준비 상태입니다.",
    entries: [
      { name: "민준 · 서연", detail: "11월 21일 12:30 · 그랜드홀", status: "QR 준비 완료", ready: true },
      { name: "지훈 · 하린", detail: "11월 22일 14:00 · 라온컨벤션", status: "영상 확인 중" },
      { name: "도윤 · 유나", detail: "11월 23일 11:00 · 아르떼웨딩", status: "QR 준비 완료", ready: true },
    ],
    chartTitle: "이번 주 구매 흐름", chartDescription: "일별 영상 구매 예시", bars: [34, 48, 40, 62, 54, 92, 74],
    tasks: [["결제 및 환불 확인", "최근 요청 내역 검토"], ["파트너 계정 관리", "신규 웨딩홀 승인 확인"], ["추첨 진행 상태", "예식별 결과 확인"]],
  },
  couple: {
    eyebrow: "우리의 결혼식", title: "민준 · 서연님의 특별한 하루", description: "영상과 하객 참여 현황을 살펴보고 예식을 준비하세요.",
    metrics: [["등록한 영상", "03", "공개 준비 중"], ["영상 구매", "128", "예시 참여 수"], ["추첨 참여", "128", "구매 시 자동 참여"], ["예식일", "11.21", "샘플 일정"]],
    listTitle: "우리의 영상", listDescription: "하객에게 전할 이야기의 준비 상태입니다.",
    entries: [
      { name: "우리가 처음 만난 날", detail: "3분 12초 · 연애 이야기", status: "공개 준비 완료", ready: true },
      { name: "엄마 아빠, 고맙습니다", detail: "4분 05초 · 감사 영상", status: "공개 준비 완료", ready: true },
      { name: "어린 시절 앨범", detail: "2분 40초 · 성장 영상", status: "검토 중" },
    ],
    chartTitle: "하객 참여 흐름", chartDescription: "시간대별 참여 예시", bars: [12, 25, 48, 86, 69, 35, 19],
    tasks: [["영상 공개 기간 확인", "각 영상의 시청 가능 기간"], ["경품 구성 확인", "당첨 인원과 안내 방식"], ["예식 QR 확인", "키오스크 표시 준비 상태"]],
  },
  sales: {
    eyebrow: "파트너 운영 현황", title: "담당 예식을 편안하게 관리하세요", description: "웨딩홀 일정부터 QR 전달과 정산까지 필요한 내용을 모았습니다.",
    metrics: [["담당 웨딩홀", "08", "운영 중"], ["이번 달 예식", "18", "전체 일정"], ["QR 전달 완료", "15", "예식별 발급"], ["확인할 정산", "03", "처리 대기"]],
    listTitle: "이번 주 파트너 일정", listDescription: "담당 웨딩홀의 예식과 QR 상태입니다.",
    entries: [
      { name: "그랜드홀", detail: "11월 21일 12:30 · 민준 · 서연", status: "QR 전달 완료", ready: true },
      { name: "라온컨벤션", detail: "11월 22일 14:00 · 지훈 · 하린", status: "전달 확인 필요" },
      { name: "아르떼웨딩", detail: "11월 23일 11:00 · 도윤 · 유나", status: "QR 전달 완료", ready: true },
    ],
    chartTitle: "이번 주 예식 분포", chartDescription: "일별 예정 예식 예시", bars: [18, 24, 20, 35, 42, 94, 78],
    tasks: [["QR 전달 상태 확인", "미확인 웨딩홀 점검"], ["예식 일정 정리", "이번 주 변경 사항 확인"], ["예식별 정산 검토", "파트너 정산 내역 확인"]],
  },
};

const nav = [["#overview", "대시보드"], ["#schedule", "주요 현황"], ["#performance", "활동 흐름"], ["#tasks", "확인할 일"]];

export function DashboardView({ role }: { role: RoleKey }) {
  const data = dashboards[role];
  const info = ROLES[role];
  return (
    <div className="min-h-screen bg-mist lg:flex">
      <aside className="hidden w-[248px] shrink-0 border-r border-line bg-white px-5 py-7 lg:flex lg:min-h-screen lg:flex-col">
        <div className="px-3"><Logo /></div>
        <p className="mt-12 px-3 text-[11px] font-bold uppercase tracking-[.2em] text-ink-soft/70">Workspace</p>
        <nav aria-label="대시보드 메뉴" className="mt-3 space-y-1">
          {nav.map(([href, label], index) => <a key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${index === 0 ? "bg-sage-soft text-sage-deep" : "text-ink-soft hover:bg-mist hover:text-ink"}`}><span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-sage" : "bg-line"}`} />{label}</a>)}
        </nav>
        <div className="mt-auto rounded-2xl bg-mist p-4">
          <p className="text-sm font-semibold text-ink">{info.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">{info.desc}</p>
          <Link href="/login" className="mt-4 inline-block text-sm font-medium text-sage-deep underline underline-offset-4">다른 계정 보기</Link>
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="border-b border-line bg-white/90 backdrop-blur">
          <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
            <div className="lg:hidden"><Logo /></div>
            <p className="hidden text-sm text-ink-soft lg:block">웨딩폼 / {info.label}</p>
            <div className="flex items-center gap-2 sm:gap-4"><span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage-deep">{info.label}</span><Link href="/login" className="text-xs font-medium text-ink-soft hover:text-ink lg:hidden">계정 변경</Link></div>
          </div>
        </header>
        <nav aria-label="모바일 대시보드 메뉴" className="scrollbar-hide overflow-x-auto border-b border-line bg-white lg:hidden">
          <div className="flex min-w-max gap-1 px-4 py-2">{nav.map(([href, label], index) => <a key={href} href={href} className={`rounded-full px-4 py-2 text-sm font-medium ${index === 0 ? "bg-ink text-white" : "text-ink-soft"}`}>{label}</a>)}</div>
        </nav>
        <main id="overview" className="mx-auto max-w-[1240px] px-5 pb-20 pt-8 sm:px-8 sm:pt-10 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-soft"><span className="rounded-full border border-line bg-white px-3 py-1.5">미리보기 화면</span><span>아래 수치는 화면 구성용 예시 데이터입니다.</span></div>
          <section className="mt-6 overflow-hidden rounded-[28px] bg-ink bg-[radial-gradient(circle_at_90%_20%,rgba(195,210,178,.22),transparent_38%)] px-6 py-9 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[.18em] text-peony-soft">{data.eyebrow}</p><h1 className="mt-3 font-display text-[2rem] leading-tight sm:text-[2.65rem]">{data.title}</h1><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">{data.description}</p>
            <a href="#schedule" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-peony-soft">주요 현황 보기 <span aria-hidden="true">↗</span></a>
          </section>
          <section aria-label="핵심 지표" className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {data.metrics.map(([label, value, note]) => <div key={label} className="rounded-2xl border border-line bg-white p-5 sm:p-6"><p className="text-xs font-medium text-ink-soft sm:text-sm">{label}</p><p className="mt-4 font-display text-[2rem] leading-none text-ink sm:text-[2.5rem]">{value}</p><p className="mt-3 text-xs text-sage-deep">{note}</p></div>)}
          </section>
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <section id="schedule" className="scroll-mt-32 rounded-[24px] border border-line bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-display text-[1.5rem] text-ink">{data.listTitle}</h2><p className="mt-1 text-sm text-ink-soft">{data.listDescription}</p></div><span className="rounded-full bg-mist px-3 py-1 text-xs text-ink-soft">최근 항목</span></div>
              <ul className="mt-6 divide-y divide-line">{data.entries.map((entry) => <li key={entry.name} className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><p className="font-semibold text-ink">{entry.name}</p><p className="mt-1 text-sm text-ink-soft">{entry.detail}</p></div><span className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${entry.ready ? "bg-sage-soft text-sage-deep" : "bg-peony-soft text-peony-deep"}`}>{entry.status}</span></li>)}</ul>
            </section>
            <section id="tasks" className="scroll-mt-32 rounded-[24px] border border-line bg-white p-5 sm:p-7">
              <h2 className="font-display text-[1.5rem] text-ink">확인할 일</h2><p className="mt-1 text-sm text-ink-soft">운영을 위해 챙겨 볼 항목입니다.</p>
              <ol className="mt-5 space-y-3">{data.tasks.map(([title, detail], index) => <li key={title} className="flex gap-4 rounded-2xl bg-mist/75 p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-sage-deep">0{index + 1}</span><div><p className="text-sm font-semibold text-ink">{title}</p><p className="mt-1 text-xs text-ink-soft">{detail}</p></div></li>)}</ol>
            </section>
          </div>
          <section id="performance" className="mt-6 scroll-mt-32 rounded-[24px] border border-line bg-white p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-2"><div><h2 className="font-display text-[1.5rem] text-ink">{data.chartTitle}</h2><p className="mt-1 text-sm text-ink-soft">{data.chartDescription}</p></div><span className="text-xs text-ink-soft">화면 구성용 예시</span></div>
            <div className="mt-7 flex h-40 items-end justify-between gap-2 sm:h-52 sm:gap-4" role="img" aria-label={`${data.chartTitle}: ${data.bars.join(", ")}`}>
              {data.bars.map((value, index) => <div key={index} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"><div className="flex h-full w-full items-end rounded-t-lg bg-mist"><div className={`w-full rounded-t-lg ${index === 5 ? "bg-peony" : "bg-sage"}`} style={{ height: `${value}%` }} /></div><span className="text-[11px] text-ink-soft sm:text-xs">{["월", "화", "수", "목", "금", "토", "일"][index]}</span></div>)}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
