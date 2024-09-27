"use client";

import { useAnimate } from "framer-motion";

export function DropBox(): JSX.Element {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    // animate(scope.current, {opacity: 0})
    await animate("#target", { x: 150 });
    await animate("#target", { y: 150, rotate: "360deg" }, { duration: 0.5 });
    await animate("button", { rotate: "360deg" });
    await animate("#target", { x: -150 });
    await animate("button", { rotate: "0deg" });
    await animate("#target", { y: 0, rotate: "0deg" }, { duration: 0.5 });
    await animate("#target", { x: 0 });
  };

  return (
    <section className="drop-box flex flex-col items-center justify-center gap-6">
      <div ref={scope} className="py-10">
        <div id="target" className="h-24 w-24 bg-violet-500"></div>
        <button
          onClick={() => handleAnimate()}
          className="rounded-md px-4 py-2 bg-slate-900 font-semibold text-white mt-4"
        >
          Trigger animation
        </button>
      </div>
    </section>
  );
}
