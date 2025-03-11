"use client";

import { useEffect, useRef } from "react";

export default function Comment() {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentRef.current) return;

    if (commentRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "jeonoeun/jeongeun.dev");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.crossOrigin = "anonymous";

    commentRef.current.appendChild(script);
  }, []);

  return (
    <div className="p-4 w-full mx-auto mt-6">
      <div ref={commentRef} />
    </div>
  );
}
