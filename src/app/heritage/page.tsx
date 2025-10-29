"use client";

import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Scissors, Users, Building, Clock } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
    {
        year: "1947",
        title: "The Beginning",
        description:
            "Founded in London by Master Tailor Edward East, establishing a tradition of excellence in bespoke menswear on Savile Row.",
    },
    {
        year: "1965",
        title: "Royal Warrant",
        description:
            "Awarded the Royal Warrant, becoming an official supplier to the British Royal Family. A testament to our uncompromising quality.",
    },
    {
        year: "1982",
        title: "International Expansion",
        description:
            "Opened our first international location in New York, bringing traditional British tailoring to discerning American gentlemen.",
    },
    {
        year: "1998",
        title: "Innovation in Tradition",
        description:
            "Introduced our signature blend of classic techniques with modern fit preferences, creating the 'East Contemporary' line.",
    },
    {
        year: "2010",
        title: "Digital Renaissance",
        description:
            "Launched our digital platform, making bespoke tailoring accessible while maintaining our commitment to craftsmanship.",
    },
    {
        year: "2024",
        title: "Sustainable Future",
        description:
            "Committed to 100% sustainable sourcing and carbon-neutral operations, preserving both craft and environment for future generations.",
    },
];

const values = [
    {
        icon: Scissors,
        title: "Craftsmanship",
        description:
            "Every stitch is a testament to our artisans' skill, honed over decades of dedicated practice and passed down through generations.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "We accept nothing less than perfection. Our quality standards are uncompromising, our attention to detail obsessive.",
    },
    {
        icon: Users,
        title: "Service",
        description:
            "Building lasting relationships with our clients through personalized attention, understanding, and exceeding expectations.",
    },
    {
        icon: Building,
        title: "Heritage",
        description:
            "Honoring 75+ years of tradition while embracing innovation, ensuring our craft remains relevant for modern gentlemen.",
    },
];

const craftsmen = [
    {
        name: "James East",
        title: "Master Tailor & CEO",
        years: "45 years experience",
        description:
            "Third-generation tailor carrying forward the East family legacy with unmatched precision and vision.",
    },
    {
        name: "Thomas Wright",
        title: "Head of Bespoke",
        years: "32 years experience",
        description:
            "Trained on Savile Row, Thomas brings old-world techniques to contemporary designs.",
    },
    {
        name: "Alessandro Rossi",
        title: "Fabric Curator",
        years: "28 years experience",
        description:
            "Italian-born Alessandro sources the finest fabrics from mills across Europe and beyond.",
    },
];

export default function HeritagePage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-[var(--color-ivory)]">
                {/* Enhanced Hero Section */}
                <section className="relative bg-[var(--color-navy)] text-[var(--color-ivory)] py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ rotate: -10, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Building className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            </motion.div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Our Heritage
                            </h1>
                            <p className="text-lg text-[var(--color-ivory)]/80 max-w-2xl mx-auto">
                                A legacy of excellence spanning over seven decades. Where tradition meets
                                innovation, and every garment tells a story.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Story Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                                    The East & Tailor Story
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        In the aftermath of World War II, Edward East returned to London with a
                                        vision: to create garments that embodied the resilience, elegance, and
                                        optimism of a new era. With a single sewing machine and an unwavering
                                        commitment to quality, he established East & Tailor on the legendary
                                        Savile Row.
                                    </p>
                                    <p>
                                        What began as a modest workshop has grown into a globally recognized
                                        house of bespoke tailoring, yet our core values remain unchanged. Each
                                        suit we create is more than fabric and thread—it&apos;s a continuation of
                                        Edward&apos;s legacy, a testament to the timeless art of traditional
                                        tailoring.
                                    </p>
                                    <p>
                                        Today, under the guidance of Edward&apos;s grandson James, we honor the past
                                        while embracing the future, ensuring that the art of bespoke tailoring
                                        not only survives but thrives for generations to come.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl group"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
                                    alt="Master Tailor at Work"
                                    className="h-full w-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Timeline */}
                <section className="py-24 bg-[var(--color-ivory)] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-20 right-20 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
                            animate={{
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-16"
                        >
                            Our Journey
                        </motion.h2>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-gold)] hidden md:block"></div>

                            <div className="space-y-12">
                                {timeline.map((event, index) => (
                                    <motion.div
                                        key={event.year}
                                        className="relative flex flex-col md:flex-row gap-8"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        {/* Year badge */}
                                        <div className="md:absolute md:left-0 flex items-center">
                                            <motion.div
                                                className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center font-bold text-sm md:relative md:z-10 shadow-lg"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                {event.year}
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <Card className="md:ml-28 flex-1 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[var(--color-gold)]/30">
                                            <CardContent className="p-6">
                                                <h3 className="font-serif text-2xl font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                                    {event.title}
                                                </h3>
                                                <p className="text-gray-700">{event.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4">
                            Our Values
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value) => (
                                <div key={value.title} className="text-center">
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-20 h-20 rounded-full bg-[var(--color-navy)] flex items-center justify-center">
                                            <value.icon className="w-10 h-10 text-[var(--color-gold)]" />
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Master Craftsmen */}
                <section className="py-20 bg-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4">
                            Our Master Craftsmen
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Meet the artisans who bring our vision to life
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {craftsmen.map((person) => (
                                <Card
                                    key={person.name}
                                    className="overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative h-64 w-full bg-gray-200">
                                        <img
                                            src={`https://images.unsplash.com/photo-${person.name === "James East"
                                                ? "1560250097-0b93528c311a"
                                                : person.name === "Thomas Wright"
                                                    ? "1472099645785-5658abf4ff4e"
                                                    : "1519085360753-af0119f7fa60"
                                                }?w=400&h=500&fit=crop&crop=faces`}
                                            alt={person.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-1">
                                            {person.name}
                                        </h3>
                                        <p className="text-[var(--color-gold)] font-semibold text-sm mb-2">
                                            {person.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-3">{person.years}</p>
                                        <p className="text-sm text-gray-700">{person.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Commitment Section */}
                <section className="py-20 bg-[var(--color-navy)] text-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <Scissors className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                                Our Commitment to You
                            </h2>
                            <p className="text-lg text-[var(--color-ivory)]/80 mb-8">
                                At East & Tailor, every garment we create carries the weight of our
                                heritage and the promise of our future. We&apos;re not just making suits—we&apos;re
                                crafting confidence, building relationships, and honoring a tradition that
                                has defined excellence for over seventy-five years.
                            </p>
                            <p className="text-lg text-[var(--color-ivory)]/80">
                                When you wear East & Tailor, you wear more than fine fabric. You wear a
                                legacy.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer2 />
            </main>
        </>
    );
}
