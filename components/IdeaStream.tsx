"use client";

import { useEffect, useState } from "react";

type Idea = {
  title: string;
  summary: string;
};

export function IdeaStream({ ideas }: { ideas: Idea[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!ideas.length) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ideas.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [ideas.length]);

  return (
    <div className="idea-stream">
      {ideas.map((idea, index) => (
        <article
          key={idea.title}
          className={`idea-card${active === index ? " active" : ""}`}
          role="listitem"
        >
          <strong>{idea.title}</strong>
          <span>{idea.summary}</span>
        </article>
      ))}
    </div>
  );
}
