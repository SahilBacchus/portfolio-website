"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ProjectsCardProps {
  /** Project title */
  title: string;
  /** Short description (keep under ~120 chars for grid layout) */
  description: string;
  /** Technologies/tools used (will be rendered as badges) */
  technologies: string[];
  /** URL to GitHub repository (optional) */
  githubUrl?: string;
  /** URL to live demo (optional – if omitted, the Live button won't appear) */
  liveUrl?: string;
  /** Optional thumbnail image URL */
  imageSrc?: string;
  /** Optional alt text for the thumbnail */
  imageAlt?: string;
  /** Optional project highlights */
  highlights?: string[];
  /** Additional CSS classes */
  className?: string;
  /** Optional layout variant for bento emphasis */
  variant?: "default" | "featured";
}

export default function ProjectsCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageSrc,
  imageAlt = `${title} thumbnail`,
  highlights = [],
  className,
  variant = "default",
}: ProjectsCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll progress tied to this card
   *
   * Animation completes closer to the center of the viewport
   * so cards don't appear "finished" too early.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "center 0.55"],
  });

  /**
   * 🚀 Strong "fly up from bottom" motion
   *
   * Starts lower, slightly overshoots,
   * then settles into its final position.
   */
  const y = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [180, -12, 0]
  );

  /**
   * Gradual fade-in
   */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [0, 0.15, 0.85, 1]
  );

  /**
   * Slight overshoot creates a more premium feel
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [0.85, 1.03, 1]
  );

  /**
   * subtle 3D tilt for depth
   */
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [18, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        transformPerspective: 1200,
      }}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden",
        className,
      )}
    >
      {/* Optional Thumbnail Image */}
      {imageSrc && (
        <div
          className={cn(
            "relative w-full overflow-hidden bg-slate-800/50",
            variant === "featured" ? "flex-[1.3]" : "h-40"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              variant === "featured"
                ? "group-hover:scale-[1.03]"
                : "group-hover:scale-105"
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Subtle gradient overlay to blend with card content */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mt-4 space-y-2">
            {highlights.slice(0, 4).map((highlight, idx) => (
              <div
                key={idx}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                {highlight}
              </div>
            ))}
          </div>
        )}

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-0 text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge variant="outline" className="px-2 py-0 text-xs">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:scale-105"
            >
              <FaGithub className="h-4 w-4" />
              Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-white/20 hover:scale-105"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}