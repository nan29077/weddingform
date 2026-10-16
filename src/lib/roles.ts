export type RoleKey = "admin" | "couple" | "sales";

export const ROLES: Record<RoleKey, { label: string; desc: string; email: string }> = {
  admin: {
    label: "최고 관리자",
    desc: "전체 예식, 회원, 결제, 파트너 계정 관리",
    email: "admin@weddingform.test",
  },
  couple: {
    label: "결혼식 당사자",
    desc: "영상 등록, 판매 현황, 경품 추첨",
    email: "couple@weddingform.test",
  },
  sales: {
    label: "영업 관리자",
    desc: "담당 웨딩홀, 예식 일정, QR 발급, 정산",
    email: "sales@weddingform.test",
  },
};

export const ROLE_KEYS = Object.keys(ROLES) as RoleKey[];
