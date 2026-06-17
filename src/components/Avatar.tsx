import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = "md",
  className = "",
}: AvatarProps) {
  const sizeMap = {
    sm: { w: 40, h: 40 },
    md: { w: 64, h: 64 }, // Standard profile size
    lg: { w: 128, h: 128 }, // Profile page header size
  };

  const { w, h } = sizeMap[size];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-gray-200",
        className
      )}
      style={{ width: w, height: h }}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="object-cover"
        priority // make priority since its the hero image
      />
    </div>
  );
}
