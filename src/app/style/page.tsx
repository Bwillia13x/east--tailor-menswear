"use client";

import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Shirt, Watch, Briefcase, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const styleGuides = [
    {
        title: "The Perfect Fit",
        icon: Shirt,
        tips: [
            "Jacket shoulder seams should align with your natural shoulder line",
            "Sleeve length should end at your wrist bone, showing 1/4 to 1/2 inch of shirt cuff",
            "Trouser break should be minimal - a slight break or no break for modern styling",
            "Shirt collar should allow two fingers to fit comfortably when buttoned",
        ],
    },
    {
        title: "Dress Codes Decoded",
        icon: Briefcase,
        tips: [
            "White Tie: Most formal - tailcoat, white bow tie, white vest",
            "Black Tie: Tuxedo with black bow tie, no variations",
            "Black Tie Optional: Tuxedo or dark suit appropriate",
            "Business Formal: Dark suit, conservative tie, leather dress shoes",
            "Business Casual: Blazer or sport coat, chinos, no tie required",
            "Smart Casual: Well-fitted jeans or chinos, button-down shirt",
        ],
    },
    {
        title: "Color Coordination",
        icon: BookOpen,
        tips: [
            "Navy and charcoal are versatile foundation colors",
            "Lighter shirts pair best with darker suits",
            "Your tie should be darker than your shirt",
            "Belt and shoes should match in color and finish",
            "Pocket square should complement but not match your tie exactly",
            "Earth tones work well together: browns, tans, olives",
        ],
    },
    {
        title: "Seasonal Styling",
        icon: Watch,
        tips: [
            "Spring/Summer: Lighter fabrics like cotton, linen, and lightweight wool",
            "Fall/Winter: Heavier fabrics like flannel, tweed, and cashmere",
            "Layering is key in transitional seasons",
            "Lighter colors for warmer months, richer tones for cooler weather",
        ],
    },
];

const essentials = [
    {
        item: "Navy Suit",
        description: "The foundation of any wardrobe. Versatile for business and formal occasions.",
        priority: "Essential",
    },
    {
        item: "Charcoal Suit",
        description: "Your second suit. Pairs with everything and suitable for any occasion.",
        priority: "Essential",
    },
    {
        item: "White Dress Shirts (2-3)",
        description: "Crisp white shirts are timeless and appropriate for any professional setting.",
        priority: "Essential",
    },
    {
        item: "Light Blue Dress Shirts (2)",
        description: "Versatile and slightly less formal than white. Perfect for everyday wear.",
        priority: "Essential",
    },
    {
        item: "Black Oxford Shoes",
        description: "The most formal shoe. Required for business and formal events.",
        priority: "Essential",
    },
    {
        item: "Brown Oxford Shoes",
        description: "More versatile than black. Works with navy, grey, and brown suits.",
        priority: "Essential",
    },
    {
        item: "Quality Leather Belt",
        description: "Match to your shoes. Invest in black and brown.",
        priority: "Essential",
    },
    {
        item: "Navy Blazer",
        description: "Can be dressed up or down. Pairs with everything from jeans to dress trousers.",
        priority: "Recommended",
    },
    {
        item: "Grey Trousers",
        description: "Mix and match with different blazers and shirts.",
        priority: "Recommended",
    },
    {
        item: "Quality Overcoat",
        description: "Camel or charcoal. Protects your suit and elevates your look.",
        priority: "Recommended",
    },
];

const patterns = [
    {
        name: "Solid",
        use: "Most versatile and formal. Foundation of your wardrobe.",
        pairing: "Pairs with anything - patterns or solids",
    },
    {
        name: "Pinstripe",
        use: "Classic business pattern. Projects authority and sophistication.",
        pairing: "Best with solid shirts and minimal pattern mixing",
    },
    {
        name: "Check/Plaid",
        use: "Less formal than pinstripe. Good for business casual.",
        pairing: "Pair with solid shirts. Avoid mixing with other patterns",
    },
    {
        name: "Herringbone",
        use: "Subtle texture. Works in professional settings.",
        pairing: "Versatile - works with both patterns and solids",
    },
];

export default function StyleGuidePage() {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

    const toggleCheck = (index: number) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(index)) {
            newChecked.delete(index);
        } else {
            newChecked.add(index);
        }
        setCheckedItems(newChecked);
    };

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-[var(--color-ivory)]">
                {/* Enhanced Hero Section */}
                <section className="relative bg-[var(--color-navy)] text-[var(--color-ivory)] py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
                        <motion.div
                            className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 8,
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
                                <BookOpen className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            </motion.div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Style Guide
                            </h1>
                            <p className="text-lg text-[var(--color-ivory)]/80 max-w-2xl mx-auto">
                                Master the art of classic menswear. Learn the timeless rules of fit,
                                coordination, and personal style.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Style Tips Grid */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-16"
                        >
                            Essential Style Principles
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {styleGuides.map((guide, index) => (
                                <motion.div
                                    key={guide.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[var(--color-gold)]/20">
                                        <div className="flex items-center mb-6">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mr-4 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <guide.icon className="w-6 h-6 text-[var(--color-gold)]" />
                                            </motion.div>
                                            <h3 className="font-serif text-2xl font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                                {guide.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {guide.tips.map((tip, tipIndex) => (
                                                <motion.li
                                                    key={tipIndex}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 + tipIndex * 0.05 }}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0 font-bold">
                                                        •
                                                    </span>
                                                    <span className="text-gray-700">{tip}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enhanced Wardrobe Essentials with Interactive Checklist */}
                <section className="py-24 bg-[var(--color-ivory)] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute bottom-20 left-20 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
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
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4"
                        >
                            Wardrobe Essentials
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                        >
                            Build a versatile wardrobe with these foundational pieces - check them off as you collect them
                        </motion.p>
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {essentials.map((essential, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Card
                                        className={`p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group ${checkedItems.has(index) ? 'bg-[var(--color-gold)]/5 border-[var(--color-gold)]' : 'hover:border-[var(--color-gold)]/30'
                                            }`}
                                        onClick={() => toggleCheck(index)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <div className="flex items-center mb-2">
                                                    <motion.div
                                                        className={`w-6 h-6 rounded border-2 mr-3 flex items-center justify-center ${checkedItems.has(index)
                                                                ? 'bg-[var(--color-gold)] border-[var(--color-gold)]'
                                                                : 'border-gray-300 group-hover:border-[var(--color-gold)]'
                                                            }`}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        {checkedItems.has(index) && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <Check className="w-4 h-4 text-[var(--color-navy)]" />
                                                            </motion.div>
                                                        )}
                                                    </motion.div>
                                                    <h3 className={`font-serif text-xl font-semibold mr-4 ${checkedItems.has(index) ? 'text-[var(--color-gold)]' : 'text-[var(--color-navy)]'
                                                        }`}>
                                                        {essential.item}
                                                    </h3>
                                                    <span
                                                        className={`text-xs px-3 py-1 rounded-full font-semibold ${essential.priority === "Essential"
                                                            ? "bg-[var(--color-gold)]/20 text-[var(--color-gold)]"
                                                            : "bg-gray-200 text-gray-600"
                                                            }`}
                                                    >
                                                        {essential.priority}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600">{essential.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pattern Guide */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4">
                            Understanding Patterns
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Know when and how to wear different patterns
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {patterns.map((pattern) => (
                                <Card key={pattern.name} className="p-6">
                                    <CardContent className="p-0">
                                        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-3">
                                            {pattern.name}
                                        </h3>
                                        <div className="space-y-2">
                                            <div>
                                                <span className="text-sm font-semibold text-[var(--color-gold)]">
                                                    When to Wear:
                                                </span>
                                                <p className="text-gray-700 text-sm">{pattern.use}</p>
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold text-[var(--color-gold)]">
                                                    Pairing Guide:
                                                </span>
                                                <p className="text-gray-700 text-sm">{pattern.pairing}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Tips */}
                <section className="py-20 bg-[var(--color-navy)] text-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                            Quick Style Rules
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Rule of Three</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    Limit your outfit to three colors maximum for a cohesive look
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Button Rules</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    Two-button: top only. Three-button: middle or top two. Never button the bottom
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Sock Guidelines</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    Socks should match your trousers, not your shoes. They should be over-the-calf length
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Watch Etiquette</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    Wear your watch on your non-dominant wrist. Keep it under your shirt cuff
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Tie Length</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    The tip of your tie should reach the middle of your belt buckle
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-[var(--color-ivory)]/10 backdrop-blur">
                                <h3 className="font-semibold text-[var(--color-gold)] mb-2">Fit Over Fashion</h3>
                                <p className="text-sm text-[var(--color-ivory)]/80">
                                    A well-fitted affordable piece always looks better than an ill-fitting expensive one
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer2 />
            </main>
        </>
    );
}
