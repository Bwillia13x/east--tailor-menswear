"use client";

import Image from "next/image";
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const lookbookItems = [
  {
    title: "Aurora Sherwani",
    caption: "Handloom Banarasi silk with zari work",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Metropolitan Tux",
    caption: "Midnight jacquard with champagne piping",
    image:
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ivory Bandhgala",
    caption: "Mother-of-pearl buttons and tonal threadwork",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jaipur Cocktail Jacket",
    caption: "Dupion silk with hand-beaded lapel",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Saffron Kurta Set",
    caption: "Plant-dyed cotton and heritage block print",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Celestial Bandhgala",
    caption: "Suede velvet with fine mukaish embroidery",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
];

const moodWords = [
  "Hand Embroidery",
  "Heritage Weaves",
  "Private Fittings",
  "Natural Fibres",
  "Trunk Shows",
  "Signature Capsules",
];

export function LookbookSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-ivory)] via-white to-[#F5F1E8] py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-navy)]/5 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-5 py-2 text-xs font-semibold tracking-[0.4em] text-[var(--color-navy)]/80">
            LOOKBOOK 2025
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-[var(--color-navy)] md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Capsule moments handcrafted for luminous evenings
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-navy)]/70">
            Glide through our seasonless wardrobe: artisanal textiles, precision tailoring,
            and silhouettes designed to travel from ceremony to boardroom with ease.
          </p>
        </div>

        <InfiniteSlider className="py-2" gap={32} speed={55} speedOnHover={80}>
          {lookbookItems.map((item) => (
            <motion.figure
              key={item.title}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative h-80 w-56 overflow-hidden rounded-3xl border border-[var(--color-gold)]/20 bg-white/70 backdrop-blur-sm shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 60vw, 224px"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-left text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]/90">
                  {item.title}
                </p>
                <p className="text-sm text-white/80">{item.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </InfiniteSlider>

        <InfiniteSlider className="py-4" gap={48} speed={70} reverse>
          {moodWords.map((word) => (
            <span
              key={word}
              className="text-lg font-semibold uppercase tracking-[0.6em] text-[var(--color-navy)]/40"
            >
              {word}
            </span>
          ))}
        </InfiniteSlider>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.5em] text-[var(--color-navy)]/50">
            capsule archive
          </p>
          <p className="max-w-xl text-[var(--color-navy)]/70 text-sm md:text-base">
            Request a personalised lookbook with silhouettes tailored to your itinerary—weddings,
            boardrooms, and soirées mapped with one wardrobe story.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[var(--color-gold)]/40 bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]"
          >
            <Link
              href="mailto:concierge@easttailor.com?subject=Curate%20My%20Capsule&body=Hello%20East%20%26%20Tailor%2C%0A%0AI%E2%80%99d%20love%20to%20commission%20a%20capsule%20lookbook.%20Here%E2%80%99s%20a%20quick%20outline%20of%20my%20upcoming%20events%3A%0A-%20"
            >
              Curate My Capsule
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
