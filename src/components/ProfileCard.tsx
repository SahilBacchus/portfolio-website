"use client";

import React from 'react';
import Avatar from './Avatar';
import SocialLinks from './SocialLinks';
import DarkVeil from './DarkVeil';

interface ProfileCardProps {
  avatarSrc: string;
  title: string;
  role: string;
  className?: string;
}

export default function ProfileCard({
  avatarSrc,
  title,
  role,
  className = "",
}: ProfileCardProps): React.JSX.Element {
  return (
    <div
      className={`relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-6 flex flex-col justify-center space-y-6 shadow-2xl backdrop-blur-md ${className}`}
    >
      
      {/* 
        BACKGROUND LAYER: Absolute layout wrapper for DarkVeil canvas animation.
        -z-10 moves it behind your profile elements.
        pointer-events-none makes sure your clicks pass straight to the social buttons.
      */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <DarkVeil hueShift={15} speed={0.8} />
      </div>

      {/* RENDER AVATAR: The visual profile anchor */}
      <Avatar
        src={avatarSrc}
        alt="Profile headshot"
        size="lg"
        className="border border-white/20 shadow-xl"
      />

      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {title}
        </p>
        <p className="text-sm font-medium text-muted-foreground">
          {role}
        </p>
      </div>

      {/* VISUAL DIVIDER: Subtle separation rule line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* RENDER SOCIAL LINKS: The interactive action links */}
      <SocialLinks />
      
    </div>
  );
}