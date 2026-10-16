// 장식용 QR 패턴 (실제 QR 아님). 항상 같은 모양이 나오도록 고정 시드 사용.
const N = 25;

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function inFinder(x: number, y: number) {
  const zones = [
    [0, 0],
    [N - 7, 0],
    [0, N - 7],
  ];
  return zones.some(([zx, zy]) => x >= zx - 1 && x <= zx + 7 && y >= zy - 1 && y <= zy + 7);
}

const rand = seeded(20261121);
const CELLS: Array<[number, number]> = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!inFinder(x, y) && rand() > 0.52) CELLS.push([x, y]);
  }
}

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x + 0.5} y={y + 0.5} width={6} height={6} rx={1.4} fill="none" stroke="currentColor" strokeWidth={1} />
      <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.7} fill="currentColor" />
    </g>
  );
}

export function QrMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} className={className} role="img" aria-label="결혼식 전용 QR 코드 예시">
      <rect x={-1} y={-1} width={N + 2} height={N + 2} rx={2} fill="white" />
      {CELLS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.08} y={y + 0.08} width={0.84} height={0.84} rx={0.22} fill="currentColor" />
      ))}
      <Finder x={0} y={0} />
      <Finder x={N - 7} y={0} />
      <Finder x={0} y={N - 7} />
      <circle cx={N / 2} cy={N / 2} r={2.6} fill="white" />
      <path
        d={`M${N / 2} ${N / 2 + 1.3}c0 0-1.9-1.1-1.9-2.2 0-.8.6-1.2 1.1-1.2.4 0 .7.2.8.5.1-.3.4-.5.8-.5.5 0 1.1.4 1.1 1.2 0 1.1-1.9 2.2-1.9 2.2z`}
        fill="#d6457a"
      />
    </svg>
  );
}
