import { notFound } from "next/navigation";
import { DashboardView } from "@/components/dashboard/DashboardView";
import { ROLES, ROLE_KEYS, type RoleKey } from "@/lib/roles";

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const info = ROLES[role as RoleKey];
  return { title: info ? `${info.label} 대시보드 | 웨딩폼` : "웨딩폼" };
}

export function generateStaticParams() {
  return ROLE_KEYS.map((role) => ({ role }));
}

export default async function DashboardPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!ROLE_KEYS.includes(role as RoleKey)) notFound();
  return <DashboardView role={role as RoleKey} />;
}
