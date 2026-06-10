"use client";

import React from "react";
import SocialLinks from "@/components/SocialLinks";
import DarkVeil from "@/components/DarkVeil";

export default function ContactSection() {
  return (
    <footer className="relative w-full bg-background pt-12 pb-8 text-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Card container – lighter background for contrast */}
        <div className="relative overflow-visible rounded-2xl border border-white/20 bg-black/30 p-6 text-center backdrop-blur-md">
          {/* DarkVeil background */}
          <div className="absolute inset-0 -z-10 opacity-60 overflow-hidden rounded-2xl pointer-events-none">
            <DarkVeil hueShift={15} speed={0.8} />
          </div>

          {/* "Contact" pill - straddles top border */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="inline-flex rounded-full border border-white/20 bg-gray-600 px-6 py-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Thanks for stopping by. If you'd like to connect, talk about a
              project, or simply introduce yourself, feel free to reach out.
            </p>
            {/* Social Links*/}
            <div className="flex justify-center">
              <SocialLinks />
            </div>

            {/* Copyright line */}
            <div className="mt-8 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sahil Bacchus. Designed and built by me.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
