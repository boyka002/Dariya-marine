"use client"

import { motion } from "framer-motion"

export type VideoHeroProps = {
  youtubeId?: string
}

function VideoHero({ youtubeId }: VideoHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-slate-200 bg-white"
    >
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#06b6d4]" aria-hidden="true" />
        {youtubeId ? (
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&autohide=1`}
              title="Marine overview video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            className="block w-full"
            controls
            preload="metadata"
            poster="/marine-video-poster.png"
            aria-label="Marine overview video"
          >
            <source src="/videos/top.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-medium text-[#0a2540]">Overview</p>
          <p className="text-xs text-slate-600">A quick look at our marine solutions.</p>
        </div>
        <span className="rounded-full bg-[#06b6d4]/10 px-3 py-1 text-xs font-medium text-[#0a2540]">
          {youtubeId ? "YouTube" : "1080p"}
        </span>
      </div>
    </motion.div>
  )
}

export default VideoHero
export { VideoHero }
