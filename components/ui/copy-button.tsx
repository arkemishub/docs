"use client";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

export default function CopyButton() {
  function onCopy() {}
  return (
    <Button
      onClick={onCopy}
      className="absolute top-4 right-4 border border-[#242424] p-2 h-6"
    >
      <CopyIcon className="w-3" />
    </Button>
  );
}
