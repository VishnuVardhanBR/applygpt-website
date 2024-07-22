
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BotIcon className="h-6 w-6 pr-2" />
          <span className="lg:block hidden">ApplyGPT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Benefits
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="https://chromewebstore.google.com/detail/applygpt-beta/gpfdbolbomlaomkbkafaohipanopgmhn" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Download
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center" id="hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-normal tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your Job Applications with <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient font-black">ApplyGPT</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl py-4">
                    ApplyGPT is a powerful Chrome extension that uses AI to automatically fill out job application
                    forms, saving you time and effort.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://chromewebstore.google.com/detail/applygpt-beta/gpfdbolbomlaomkbkafaohipanopgmhn"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Install Now
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/applygpt-hero.png"
                width="550"
                height="310"
                alt="ApplyGPT Hero"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Job Search with ApplyGPT
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ApplyGPT is designed to save you time and effort by automatically filling out job application forms
                  with your personal information, work history, and other details.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automatic Form Filling</h3>
                      <p className="text-muted-foreground">
                        ApplyGPT uses advanced AI to quickly and accurately fill out job application forms for you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Responses</h3>
                      <p className="text-muted-foreground">
                        The extension tailors your responses to each job description, ensuring your applications are
                        customized and relevant.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Resume Optimization</h3>
                      <p className="text-muted-foreground">
                        ApplyGPT can analyze job listings and optimize your resume/cover letter to better match the requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/applygpt-features.png"
                width="550"
                height="310"
                alt="ApplyGPT Features"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center" id="benefits">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Full Potential with ApplyGPT
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ApplyGPT helps you focus on the important parts of the job application process, while the extension
                  handles the tedious tasks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/applygpt-benefits.png"
                width="550"
                height="310"
                alt="ApplyGPT Benefits"
                className="mx-auto overflow-hidden object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Save Time</h3>
                      <p className="text-muted-foreground">
                        Spend less time on repetitive application tasks and more time on the important parts of your job
                        search.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Increase Productivity</h3>
                      <p className="text-muted-foreground">
                        ApplyGPT's AI-powered features help you apply to more jobs in less time, boosting your overall
                        productivity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Applications</h3>
                      <p className="text-muted-foreground">
                        The extension ensures your applications are tailored to each job, improving your chances of
                        getting noticed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have used ApplyGPT to streamline their job application process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-lg border p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">Karthikeya Uppu</p>
                      <p className="text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Works really well. Highly recommended for job seekers."
                  </p>
                </div>
                <div className="grid gap-4 rounded-lg border p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">Anirudh</p>
                      <p className="text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Performed better than expected!"
                  </p>
                </div>
              </div>
              <img
                src="/applygpt-testimonials.png"
                width="1100"
                height="620"
                alt="ApplyGPT Testimonials"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t flex flex-col items-center" id="download">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 ">
              <div className="flex flex-col items-center space-y-4 text-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Download</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get ApplyGPT and Streamline Your Job Search
                </h2>
                <Link
                  href="https://chromewebstore.google.com/detail/applygpt-beta/gpfdbolbomlaomkbkafaohipanopgmhn"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Install Now
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Security</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  ApplyGPT is a secure and privacy-focused extension that respects your data. Your personal information
                  is never shared or stored outside of your device.
                </p>
                <Link
                  href="https://chromewebstore.google.com/detail/applygpt-beta/gpfdbolbomlaomkbkafaohipanopgmhn#:~:text=and%20this%20developer.-,Privacy,being%20used%20or%20transferred%20to%20determine%20creditworthiness%20or%20for%20lending%20purposes,-Related"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 ApplyGPT. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}