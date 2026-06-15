"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="sr-only">404 - Page Not Found</h1>

      <section className="relative w-full max-w-6xl">
        <svg
          viewBox="0 0 1200 300"
          className="mx-auto aspect-[4/1] w-full"
        >
          <defs>
            {/* MASK DEFINITION */}
            <mask id="mask-404">
              {/* white = visible */}
              <rect width="100%" height="100%" fill="black" />

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize="260"
                fontWeight="900"
                fill="white"
              >
                404
              </text>
            </mask>
          </defs>

          {/* BACKGROUND VISUAL INSIDE MASK */}
          <foreignObject
            width="1200"
            height="300"
            mask="url(#mask-404)"
          >
            <div className="h-full w-full">
              <DarkVeil
                hueShift={15}
                speed={0.8}
                noiseIntensity={0.03}
                scanlineIntensity={0.08}
                scanlineFrequency={1.5}
              />
            </div>
          </foreignObject>

          {/* OUTLINE OVERLAY (depth layer) */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
            fontSize="260"
            fontWeight="900"
            fill="rgba(255,255,255,0.08)"
          >
            404
          </text>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
            fontSize="260"
            fontWeight="900"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="3"
            paintOrder="stroke"
          >
            404
          </text>
        </svg>
      </section>

      <p className="mt-6 text-center text-2xl font-medium text-white/80">
        Page not found
      </p>

      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
      >
        Return Home
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </main>
  );
}