"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function Unlock() {
  return (
    <Suspense fallback={null}>
      <Inner />
    </Suspense>
  );
}

function Inner() {
  const sp = useSearchParams();
  const token = sp.get("token");
  return <div>token: {token ?? "なし"}</div>;
}
