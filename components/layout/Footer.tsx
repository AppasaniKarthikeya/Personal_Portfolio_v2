"use client";

import { Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { motion } from "framer-motion";
import { motionPresets, PERSONAL_INFO } from "@/lib/utils";
import { useState } from "react";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKCcXaT1MT-LyUAucalyN5Xg8LjykGjyNJ6_IRPIcHlZ3ScA/formResponse";
  const ENTRY_ID_NAME = "entry.1924324585";
  const ENTRY_ID_EMAIL = "entry.752848685";
  const ENTRY_ID_MESSAGE = "entry.466544786";
  return (
    <footer
      id="contact"
      className="w-full px-4 md:px-12 py-16 flex flex-col items-center gap-8 bg-[#180a0a] border-t-2 border-[#5b403f] relative overflow-hidden"
    >
      <motion.div
        {...motionPresets.staggerContainer}
        className="flex flex-col items-center w-full max-w-2xl gap-8 z-10"
      >
        <motion.h2
          {...motionPresets.staggerChild}
          className="font-display-xl text-neo-crimson text-center w-full"
          style={{
            fontSize: "clamp(40px, 8vw, 100px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
          }}
        >
          LET&apos;S BUILD
        </motion.h2>

        <motion.div
          {...motionPresets.staggerChild}
          className="w-full flex flex-col gap-4"
        >
          {isSubmitted ? (
            <div className="w-full p-8 border border-neo-teal bg-neo-teal/10 flex flex-col items-center justify-center gap-4">
               <span className="font-headline-md text-neo-teal">TRANSMISSION SUCCESSFUL</span>
               <span className="font-label-sm text-text-warm text-center">Your message has been securely routed to the mainframe.</span>
               <button onClick={() => setIsSubmitted(false)} className="mt-4 font-label-sm px-6 py-2 border border-neo-teal text-neo-teal hover:bg-neo-teal hover:text-black transition-colors">SEND ANOTHER</button>
            </div>
          ) : (
            <form 
              action={GOOGLE_FORM_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  setIsSubmitted(true);
                  // Reset form fields
                  const form = document.getElementById("contact-form") as HTMLFormElement;
                  if (form) form.reset();
                }, 1500);
              }}
              id="contact-form"
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                  name={ENTRY_ID_NAME}
                  required
                  className="flex-grow bg-neo-bg border border-neo-border focus:border-neo-crimson focus:outline-none font-label-sm py-4 px-4 transition-colors placeholder:text-text-warm text-text-primary"
                  placeholder="NAME / IDENTIFIER"
                  type="text"
                />
                <input
                  name={ENTRY_ID_EMAIL}
                  required
                  className="flex-grow bg-neo-bg border border-neo-border focus:border-neo-crimson focus:outline-none font-label-sm py-4 px-4 transition-colors placeholder:text-text-warm text-text-primary"
                  placeholder="COMM_LINK (EMAIL)"
                  type="email"
                />
              </div>
              <textarea
                name={ENTRY_ID_MESSAGE}
                required
                className="w-full min-h-[120px] bg-neo-bg border border-neo-border focus:border-neo-crimson focus:outline-none font-label-sm py-4 px-4 transition-colors placeholder:text-text-warm text-text-primary resize-y"
                placeholder="TRANSMIT YOUR MESSAGE..."
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="font-label-sm w-full md:w-auto self-end px-8 py-4 bg-neo-crimson text-black border border-transparent hover:bg-transparent hover:border-neo-crimson hover:text-neo-crimson transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "TRANSMITTING..." : "Transmit"}
              </button>
            </form>
          )}
          
          {/* Hidden iframe to prevent page redirection on form submit */}
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />
        </motion.div>

        <motion.div
          {...motionPresets.staggerChild}
          className="flex gap-6"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-neo-border flex items-center justify-center text-text-warm hover:bg-neo-crimson hover:text-black hover:border-neo-crimson transition-colors group"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-12 h-12 border border-neo-border flex items-center justify-center text-text-warm hover:bg-neo-crimson hover:text-black hover:border-neo-crimson transition-colors group"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center font-label-sm text-text-warm mt-8 border-t border-neo-border pt-4 z-10 gap-4">
        <span>© {new Date().getFullYear()} KARTHIKEYA APPASANI. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-neo-crimson transition-all duration-300">
            GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neo-crimson transition-all duration-300">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Decorative END text */}
      <div
        className="absolute bottom-0 right-0 font-display-xl text-[200px] leading-none opacity-[0.05] pointer-events-none select-none text-neo-border"
        style={{ writingMode: "vertical-rl" }}
      >
        END
      </div>
    </footer>
  );
}
