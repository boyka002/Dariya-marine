import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ExploreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showArrow?: boolean
  children: React.ReactNode
}

export function ExploreButton({
  showArrow = true,
  children,
  className,
  ...props
}: ExploreButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(
          "bg-[#0A0A3F] hover:bg-[#0A0A3F]/90 text-white rounded-full px-8 py-2 h-auto text-base font-medium",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ChevronRight className="ml-6 h-6 w-6 border border-white rounded-full p-1" />

        )}
      </Button>
    </motion.div>
  )
}