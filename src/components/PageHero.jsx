import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  align = "center",
  className,
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#1a1e23] text-white pt-32 md:pt-40 pb-16",
        className
      )}
    >
      {/* Background image (optional) */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-[#1a1e23]" />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(hsla(var(--gold) / 0.65) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1e23] via-[#1a1e23]/70 to-[#1a1e23]" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn("flex flex-col gap-5", alignClass)}
        >
          {eyebrow ? (
            <span className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#d4765d] font-semibold">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.03]">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-3xl text-base md:text-xl text-white/75 font-light leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
