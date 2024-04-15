"use client";
import { ReactNode } from "react";
import CopyButton from "@/components/ui/copy-button";

export default function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <style>
        {`
            th, tr, td {text-align: center}
            tr {border: 0}
            td {padding: 0}
        `}
      </style>
      <div className="flex justify-center items-center gap-2 rounded-2xl p-4 bg-[#0c0c0c] border border-[#242424]">
        {children}
      </div>
      {/*<CopyButton />*/}
    </div>
  );
}
