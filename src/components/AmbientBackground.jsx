import React from "react";

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Warm highlight */}
      <div
        className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, hsla(var(--gold) / 0.35) 0%, hsla(var(--gold) / 0.0) 70%)",
        }}
      />

      {/* Forest tint */}
      <div
        className="absolute -bottom-64 -left-40 h-[620px] w-[620px] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(var(--forest) / 0.25) 0%, hsla(var(--forest) / 0.0) 70%)",
        }}
      />

      {/* Terracotta accent */}
      <div
        className="absolute top-1/3 -right-56 h-[520px] w-[520px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(var(--accent) / 0.28) 0%, hsla(var(--accent) / 0.0) 70%)",
        }}
      />

      {/* Topographic line pattern */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: "var(--pattern-topo)",
          backgroundRepeat: "repeat",
          backgroundSize: "520px 520px",
          maskImage: "radial-gradient(60% 60% at 50% 10%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 10%, black 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default AmbientBackground;
