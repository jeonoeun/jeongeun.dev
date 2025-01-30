"use client";

import { useEffect, useRef } from "react";

const Comment = () => {
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

  return <div ref={commentRef} className="w-[720px] max-w-[720px] p-4 mt-8" />;
};

export default Comment;
