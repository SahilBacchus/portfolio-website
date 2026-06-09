import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function EducationSection() {
  const coursework = [
    "Data Structures",
    "Machine Learning",
    "Embedded Systems",
    "Full-Stack Development",
  ];

  return (
    <section className="w-full bg-background py-16 text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Education
          </h2>
        </div>

        {/* Education Entry */}
        <div className="flex gap-6">
          {/* Logo */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-3">
            <Image
              src="/images/schulich-eng-logo.jpg"
              alt="Schulich School of Engineering"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Degree + School + Date */}
          <div>
            <h3 className="text-xl font-semibold">
              B.Sc. in Software Engineering (3rd Year)
            </h3>

            <div className="mt-1 text-sm text-muted-foreground">
              <p>Schulich School of Engineering · University of Calgary</p>

              <div className="mt-1 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>2023 – 2028 (Expected)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-medium text-primary">
            Relevant Coursework:
          </p>

          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <Badge
                key={course}
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:border-primary/40 hover:bg-accent"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}