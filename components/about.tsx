import Image from "next/image"
import { ResumeHandler } from "./resume-handler"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ABOUT ME</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="relative w-[240px] h-[320px] sm:w-[260px] sm:h-[350px] md:w-[280px] md:h-[380px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-lg border-4 border-primary/20">
              <Image src="/placeholder.svg?height=800&width=600" alt="Rafael De Leon" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a Full Stack Developer, with a background in Graphic Design since the start of my career. My pursuit
              of design led me to finding love and passion for code.
            </p>
            <p className="text-lg leading-relaxed">
              I'm an innovative problem solver passionate about developing apps with cutting edge design. My strengths
              lie in creativity, teamwork, and building projects from ideation to execution.
            </p>

            <div className="pt-4" id="resume">
              <ResumeHandler size="lg" className="px-8 bg-primary hover:bg-primary/90" />
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "HTML/CSS",
                  "MongoDB",
                  "Express",
                  "Next.js",
                  "Tailwind CSS",
                  "UI/UX Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

