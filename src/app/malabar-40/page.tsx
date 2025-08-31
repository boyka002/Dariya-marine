import type { Metadata } from "next"
import { Suspense } from "react"
// import { VideoHero } from "@/components/marine/video-hero"
import { VideoHero } from "@/components/marine/video-hero"
import { ImageGallery } from "@/components/marine/image-gallery"
import { PdfModal } from "@/components/marine/pdf-modal"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Marine Showcase | Dhariya-inspired",
  description: "Video hero, paginated gallery, and brochure PDFs with a marine aesthetic.",
}

export default function MarineShowcasePage() {
  return (
    <main className="min-h-dvh bg-white text-slate-800">
<header className="border-b border-slate-200">
  <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
    <div>
      <h1 className="text-pretty text-2xl font-semibold tracking-tight text-[#0a2540]">Malabar 40</h1>
    </div>

    {/* Back to Home Button */}
    <Link
      href="/"
      className="rounded-md bg-[#0A0A3F] px-4 py-2 text-white text-sm font-medium hover:bg-[#7272b7] transition"
    >
      Back to Home
    </Link>
  </div>
</header>

      <section aria-labelledby="video-hero" className="border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 id="video-hero" className="sr-only">
            Overview Video
          </h2>
          <Suspense fallback={<div className="h-48 w-full animate-pulse rounded-lg bg-slate-100" />}>
            <VideoHero youtubeId="v6nwMeMOj-A" />
          </Suspense>
        </div>
      </section>

      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[#0a2540]">
            A Journey From the UK to Kochi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            A designer from the UK searched the world for the right yard: capability, CNC-cut precision, and a team that
            could collaborate without fuss. That search led to Kochi — and to us. The result wasn’t just a boat, but a
            build that earned trust every step of the way.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[#0a2540]">What We Build</h3>
              <p className="mt-2 text-slate-700">
                Steel vessels tailored to your purpose — each engineered for reliability and comfort.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Charter Yachts — elegant, experience-rich vessels</li>
                <li>Floating Restaurants & Luxury Hotels — unforgettable stays on water</li>
                <li>Work Boats & Utility Vessels — robust and intelligently built</li>
                <li>Conversions — transform existing hulls into something extraordinary</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0a2540]">Why Clients Choose Us</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                <li>End‑to‑end execution — hulls, interiors, systems</li>
                <li>Precision CNC‑cut kits and fabrication</li>
                <li>Custom layouts, drawn with you — then built by us</li>
                <li>Aftercare & support that keeps you sailing</li>
                <li>A personal touch — you’ll know the team by name</li>
              </ul>
              <p className="mt-4 rounded-md border-l-4 border-[#06b6d4] bg-cyan-50 px-4 py-3 text-sm text-slate-700">
                Whatever your goal, our job is to make it seaworthy — from design to launch, and long after.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Project Gallery</h3>
            <PdfModal />
          </div>
          {/* <p className="mt-2 text-slate-600">
            Add your images to <code className="text-[#0a2540]">/public/gallery</code>. The grid paginates
            automatically.
          </p> */}
          <div className="mt-8">
            <ImageGallery/>
          </div>
        </div>
      </section>

      {/* <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Marine Showcase</p>
        </div>
      </footer> */}
      <Footer/>
    </main>
  )
}
