"use client";

import { useState } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-ink">
        <p className="font-display text-2xl">문의 화면 미리보기</p>
        <p className="mt-3 text-ink-soft">
          현재는 화면 구성 단계로, 입력하신 내용은 전송되지 않았습니다.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:bg-mist"
        >
          다른 내용 작성하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 rounded-3xl bg-white p-6 text-ink sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          이름
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
            placeholder="홍길동"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          연락처
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
            placeholder="010-0000-0000"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          결혼식 날짜
          <input
            name="date"
            type="date"
            className="rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          문의하시는 분
          <select
            name="type"
            className="rounded-xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-ink"
            defaultValue="couple"
          >
            <option value="couple">신랑신부</option>
            <option value="hall">웨딩홀</option>
            <option value="kiosk">키오스크 업체</option>
            <option value="etc">기타</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        남기실 말씀
        <textarea
          name="message"
          rows={3}
          className="resize-none rounded-xl border border-line px-4 py-3 text-base font-normal outline-none focus:border-ink"
          placeholder="예식장, 예상 하객 수, 준비 중인 영상 등을 적어 주시면 상담이 빨라집니다"
        />
      </label>
      <button
        type="submit"
        className="mt-1 rounded-full bg-peony-deep px-6 py-3.5 font-medium text-white transition-colors hover:bg-peony"
      >
        문의 화면 확인하기
      </button>
      <p className="text-center text-xs text-ink-soft">
        현재 미리보기 단계이며 입력 내용은 저장되거나 전송되지 않습니다.
      </p>
    </form>
  );
}
