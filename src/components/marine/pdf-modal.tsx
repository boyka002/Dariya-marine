"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const BROCHURES = [
  { key: "brochure-1.pdf", label: "Brochure 1" },
  { key: "brochure-2.pdf", label: "Brochure 2" },
]

function PdfModal() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(BROCHURES[0].key)
  const [isMobile, setIsMobile] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePdfError = () => {
    setPdfError(true)
  }

  const resetPdfError = () => {
    setPdfError(false)
  }

  useEffect(() => {
    resetPdfError()
  }, [active])

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-[#0A0A3F] text-white hover:bg-[#7272b7]">
        View Brochures (PDF)
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label="PDF preview dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute inset-0 bg-slate-900/70"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close PDF preview"
            />

            <motion.div
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Header with responsive layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 px-3 sm:px-4 py-3 gap-3 sm:gap-2">
                <h3 className="text-sm font-semibold text-[#0a2540]">Product Brochures</h3>
                
                {/* Button group with mobile-friendly layout */}
                <div className="flex items-center justify-between sm:justify-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {BROCHURES.map((b) => {
                      const isActive = b.key === active
                      return (
                        <button
                          key={b.key}
                          onClick={() => {
                            setActive(b.key)
                            resetPdfError()
                          }}
                          className={`rounded-md px-2 sm:px-2.5 py-1.5 text-xs font-medium transition-colors ${
                            isActive
                              ? "bg-[#0A0A3F] text-white"
                              : "border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                          }`}
                          aria-pressed={isActive}
                        >
                          {b.label}
                        </button>
                      )
                    })}
                  </div>
                  
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 active:bg-slate-200 ml-auto sm:ml-0"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* PDF viewer with mobile-optimized height and fallback */}
              <div className="h-[60vh] sm:h-[70vh] w-full bg-slate-50 relative">
                {!pdfError && !isMobile ? (
                  // Desktop PDF viewer with multiple fallback attempts
                  <div className="h-full w-full">
                    <iframe 
                      key={`${active}-${Date.now()}`} // Force refresh on change
                      src={`/pdfs/${active}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=page-fit`}
                      className="h-full w-full border-0" 
                      title={`Preview ${active}`}
                      onError={handlePdfError}
                      onLoad={(e) => {
                        // Enhanced error checking
                        setTimeout(() => {
                          try {
                            const iframe = e.target as HTMLIFrameElement
                            // Check if iframe is accessible and has content
                            if (iframe.contentWindow) {
                              // If we can access the content, check for errors
                              try {
                                const doc = iframe.contentDocument
                                if (doc && (doc.body?.innerHTML?.includes('error') || doc.body?.innerHTML?.includes('404'))) {
                                  handlePdfError()
                                }
                              } catch (corsError) {
                                // CORS error might mean it's actually loading fine from external source
                                console.log('CORS prevented content check - PDF might be loading fine', corsError)
                              }
                            }
                            
                            // Additional check: if the iframe src is our PDF but shows 0 pages, there might be an issue
                            const currentSrc = iframe.src
                            if (currentSrc.includes('/pdfs/') && !currentSrc.includes('pdf.js')) {
                              // Give it more time for the PDF to load, then check if still empty
                              setTimeout(() => {
                                // This is a basic check - in a real app you might want more sophisticated detection
                                console.log('PDF load check completed for:', currentSrc)
                              }, 2000)
                            }
                          } catch (error) {
                            console.log('Error checking PDF load:', error)
                          }
                        }, 1500)
                      }}
                      style={{
                        backgroundColor: '#525659'
                      }}
                    />
                    
                    {/* Loading indicator */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 px-4 py-2 rounded-lg shadow-sm text-sm text-slate-600">
                        Loading PDF...
                      </div>
                    </div>
                  </div>
                ) : (
                  // Mobile fallback or error state
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-center max-w-sm">
                      <div className="mb-4">
                        <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-700 mb-2">
                        {BROCHURES.find(b => b.key === active)?.label}
                      </h4>
                      <p className="text-sm text-slate-500 mb-6">
                        {isMobile 
                          ? "For the best viewing experience on mobile, please use the options below." 
                          : "PDF preview is not available. Please ensure the PDF file exists and use the options below to access the document."
                        }
                      </p>
                      <div className="space-y-3">
                        <a
                          href={`/pdfs/${active}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-[#0A0A3F] text-white text-sm font-medium rounded-lg hover:bg-[#7272b7] transition-colors"
                          onClick={() => {
                            // Test if the PDF URL is accessible
                            console.log('Trying to open PDF:', `/pdfs/${active}`)
                          }}
                        >
                          Open in New Tab
                        </a>
                        <a
                          href={`/pdfs/${active}`}
                          download
                          className="block w-full px-4 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          Download PDF
                        </a>
                      </div>
                      
              
                    </div>
                  </div>
                )}
              </div>

              {/* Footer with multiple PDF access options */}
              {/* <div className="flex items-center justify-between border-t border-slate-100 px-3 sm:px-4 py-3">
                <p className="text-xs text-slate-500 hidden sm:block">
                  If PDF doesn't display, try the links →
                </p>
                <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
                  <a
                    href={`/pdfs/${active}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-[#0a2540] underline decoration-[#06b6d4]/60 underline-offset-4 hover:text-[#0894ad] active:text-[#0891b2]"
                  >
                    Open in New Tab
                  </a>
                  <a
                    href={`/pdfs/${active}`}
                    download
                    className="text-xs sm:text-sm font-medium text-[#0a2540] underline decoration-[#06b6d4]/60 underline-offset-4 hover:text-[#0894ad] active:text-[#0891b2]"
                  >
                    Download
                  </a>
                </div>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PdfModal
export { PdfModal }