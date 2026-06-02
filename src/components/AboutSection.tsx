"use client";

import ProfileCard from "@/components/ProfileCard";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="w-full px-6 py-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-16">
          {/* LEFT COLUMN */}
          <ProfileCard
            avatarSrc="https://media.licdn.com/dms/image/v2/D4E03AQHDMo1Dcy8shQ/profile-displayphoto-scale_200_200/B4EZq3mpykGUAc-/0/1764016956570?e=2147483647&v=beta&t=TK5oCeXf2wKRumyPmPpVDG4q-fid05zXMVu-A5ebcn4"
            title="Software Engineering"
            role="Student @ UofC"
            className="max-w-[360px] min-h-[460px] px-8 py-12"
          />

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-2xl text-muted-foreground">👋 Hi, I'm</p>
              <DiaTextReveal
                text="Sahil Bacchus"
                className="text-6xl font-extrabold"
                duration={2.5}
                colors={["#60A5FA", "#A78BFA", "#F472B6"]}
              />
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground max-w-2xl">
              <p>
                I’m a Software Engineering student with experience in machine
                learning, full-stack development, and embedded systems.
              </p>

              <p>
                I enjoy building systems across the stack, from low-level
                programming and embedded systems to modern web applications and
                distributed services.
              </p>

              <p>
                I’m always exploring new technologies and working on projects
                that turn ideas into practical tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
