"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        name: "Marcus Chen",
        role: "CEO, Tech Ventures",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
        content: "The craftsmanship is impeccable. Every detail speaks to the heritage and quality that East & Tailor represents. My entire wardrobe is now curated with their pieces.",
        rating: 5,
        location: "San Francisco, CA",
    },
    {
        name: "Raj Patel",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
        content: "Finding modern menswear that respects Eastern heritage has been a journey. East & Tailor isn't just clothing—it's an expression of cultural pride and contemporary style.",
        rating: 5,
        location: "London, UK",
    },
    {
        name: "David Kim",
        role: "Entrepreneur",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
        content: "The bespoke service exceeded all expectations. From the initial consultation to the final fitting, every interaction was professional, personal, and premium.",
        rating: 5,
        location: "New York, NY",
    },
];

const proofPoints = [
    {
        value: "82%",
        label: "of clients refresh bi-annually",
        detail: "Wardrobe capsules curated every season",
    },
    {
        value: "36",
        label: "countries served by our concierge",
        detail: "Virtual fittings with localised logistics",
    },
    {
        value: "24h",
        label: "turnaround on priority alterations",
        detail: "Master tailors on-call for ceremonial needs",
    },
];

export function TestimonialsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-[#F5F1E8] to-ivory">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy/5 via-transparent to-transparent" />
                <motion.div
                    className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-navy/5 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-gold/10 to-navy/5 rounded-full border border-gold/30 shadow-luxury backdrop-blur-sm"
                    >
                        <Quote className="w-4 h-4 text-gold" />
                        <span className="text-sm font-semibold text-navy tracking-wider">CLIENT TESTIMONIALS</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-serif font-semibold text-navy mb-6 tracking-tight">
                        Trusted by{" "}
                        <span className="text-gradient-luxury">Discerning Gentlemen</span>
                    </h2>
                    <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Hear from clients who&apos;ve experienced the East & Tailor difference
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 grid gap-4 sm:grid-cols-3"
                >
                    {proofPoints.map((item) => (
                        <div
                            key={item.label}
                            className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-white/70 p-6 text-left shadow-luxury transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxury-lg"
                        >
                            <div className="absolute -top-16 right-0 h-24 w-24 rounded-full bg-gold/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
                            <p className="text-4xl font-serif font-semibold text-navy">
                                <span className="text-gradient-gold">{item.value}</span>
                            </p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-navy/50">
                                {item.label}
                            </p>
                            <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 + index * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full p-8 rounded-2xl border border-gold/20 bg-white/70 backdrop-blur-md hover-lift hover:border-gold/40 hover:shadow-luxury-lg transition-all duration-500">
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                    <Quote className="w-6 h-6 text-gold" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-gold text-gold"
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-navy/80 leading-relaxed mb-6 font-light text-base">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/20 group-hover:ring-gold/40 transition-all duration-500">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            sizes="56px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-navy mb-0.5">{testimonial.name}</h4>
                                        <p className="text-sm text-navy/60">{testimonial.role}</p>
                                        <p className="text-xs text-gold/70 mt-0.5">{testimonial.location}</p>
                                    </div>
                                </div>

                                {/* Decorative accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social proof banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-full bg-gradient-to-r from-gold/5 via-white/60 to-gold/5 px-10 py-5 border border-gold/20 backdrop-blur-sm shadow-luxury-lg">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {testimonials.slice(0, 3).map((t, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white"
                                    >
                                        <Image src={t.image} alt={t.name} width={32} height={32} className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-navy">2,100+ Happy Clients</span>
                        </div>
                        <div className="h-6 w-px bg-gold/20" />
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-navy">4.9 Average Rating</span>
                        </div>
                        <div className="hidden h-6 w-px bg-gold/20 lg:block" />
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full border-gold/30 px-5 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold hover:text-navy/90"
                        >
                            <Link href="mailto:stories@easttailor.com?subject=Share%20My%20East%20%26%20Tailor%20Story&body=Hello%20East%20%26%20Tailor%2C%0A%0AI%E2%80%99d%20love%20to%20share%20a%20testimonial.%20Here%E2%80%99s%20what%20made%20my%20experience%20exceptional%3A%0A-%20">
                                Share Your Story
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
