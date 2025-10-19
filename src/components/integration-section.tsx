"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";

export default function IntegrationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactMethods = [
    {
      title: "Concierge",
      description: "24-hour sartorial assistance for wardrobe planning and rush alterations",
      action: "concierge@easttailor.com",
      cta: "Email Concierge",
      detail: "Replies within two hours worldwide",
      icon: Mail,
    },
    {
      title: "Private Consultations",
      description: "Book an atelier or virtual fitting with a master tailor",
      action: "+65 8900 1245",
      cta: "Arrange Fitting",
      detail: "Singapore • London • Dubai",
      icon: Phone,
    },
    {
      title: "House Style Journal",
      description: "Behind-the-scenes craftsmanship, travel trunk shows, and client stories",
      action: "@easttailor",
      cta: "Follow Updates",
      detail: "Instagram & Threads",
      icon: Instagram,
    },
    {
      title: "Flagship Atelier",
      description: "Experience fittings at The Fullerton Heritage precinct with ceremonial suites",
      action: "9 Upper Collyer Quay, Singapore",
      cta: "Plan Your Visit",
      detail: "By appointment only",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#F5F1E8] via-ivory to-background">
      {/* Animated decorative background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-gold/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-navy/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-navy/10 to-gold/10 rounded-full border border-navy/20"
          >
            <span className="text-sm font-medium text-navy">Private Service</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy mb-6">
            Concierge & Showrooms
          </h2>
          <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto">
            Access round-the-clock support, private fittings, and invitations to travelling trunk shows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-gold/20 via-navy/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />

              <div className="relative h-full p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gold/20 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10">
                {/* Icon with animation */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-14 h-14 mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-navy/10 rounded-xl blur-md" />
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-navy/5 rounded-xl border border-gold/30">
                    <method.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-serif font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-sm text-navy/70 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="mb-4 text-sm font-semibold text-navy">
                  {method.action}
                  <p className="text-xs font-normal text-navy/50">{method.detail}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gold/30 text-navy hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 group-hover:shadow-md"
                >
                  {method.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-navy/10 to-gold/20 rounded-3xl blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative px-8 py-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gold/30 shadow-lg">
              <p className="text-lg text-navy/80 mb-4">
                Ready for a tailored wardrobe preview curated for your calendar?
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy text-ivory shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request a Capsule Presentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-[#FAF7F0] dark:bg-[#0E1A2B] relative z-20 flex size-12 rounded-full border border-[#C4A552]/20 transition-all duration-300 hover:border-[#C4A552]/40 hover:shadow-lg",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};
