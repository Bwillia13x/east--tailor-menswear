"use client";

import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Ruler, Scissors, Shirt, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Choose Your Style",
        description: "Select from our collection of classic cuts and contemporary designs",
        icon: Shirt,
    },
    {
        number: "02",
        title: "Select Fabric",
        description: "Browse premium fabrics from the world's finest mills",
        icon: Scissors,
    },
    {
        number: "03",
        title: "Get Measured",
        description: "Visit us in-store or use our digital measuring guide",
        icon: Ruler,
    },
    {
        number: "04",
        title: "Perfect Fit",
        description: "We craft your garment and ensure a perfect fit with complimentary alterations",
        icon: Check,
    },
];

const fabricOptions = [
    {
        name: "Loro Piana Wool",
        origin: "Italy",
        price: "+$400",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
    },
    {
        name: "Egyptian Cotton",
        origin: "Egypt",
        price: "+$80",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
    },
    {
        name: "Cashmere Blend",
        origin: "Scotland",
        price: "+$600",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop",
    },
    {
        name: "Irish Linen",
        origin: "Ireland",
        price: "+$120",
        image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=400&h=300&fit=crop",
    },
];

const customOptions = [
    { category: "Lapels", options: ["Notch", "Peak", "Shawl"] },
    { category: "Buttons", options: ["Horn", "Mother of Pearl", "Brass"] },
    { category: "Pockets", options: ["Flap", "Patch", "Jetted"] },
    { category: "Vents", options: ["Single", "Double", "No Vent"] },
    { category: "Lining", options: ["Full", "Half", "Quarter"] },
];

export default function CustomPage() {
    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-[var(--color-ivory)]">
                {/* Enhanced Hero Section */}
                <section className="relative bg-[var(--color-navy)] text-[var(--color-ivory)] py-24 overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
                        <motion.div
                            className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
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
                                <Scissors className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            </motion.div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Bespoke Tailoring
                            </h1>
                            <p className="text-lg text-[var(--color-ivory)]/80 max-w-2xl mx-auto mb-8">
                                Create something truly extraordinary. Our master tailors transform your vision
                                into reality with unparalleled precision, craftsmanship, and attention to every detail.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Start Your Custom Order
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[var(--color-ivory)] text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-navy)]"
                                >
                                    View Portfolio
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Process Steps */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-16"
                        >
                            The Custom Process
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <motion.div
                                            className="relative"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="w-20 h-20 rounded-full bg-[var(--color-navy)]/10 flex items-center justify-center group-hover:bg-[var(--color-navy)]/20 transition-colors duration-300">
                                                <step.icon className="w-10 h-10 text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <motion.div
                                                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center text-sm font-bold shadow-lg"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                                            >
                                                {step.number}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Fabric Selection */}
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
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4"
                        >
                            Premium Fabrics
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                        >
                            Select from our curated collection of the world&apos;s finest fabrics
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fabricOptions.map((fabric, index) => (
                                <motion.div
                                    key={fabric.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                        <CardHeader className="p-0">
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <motion.img
                                                    src={fabric.image}
                                                    alt={fabric.name}
                                                    className="h-full w-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold text-[var(--color-navy)] mb-1 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                                {fabric.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">{fabric.origin}</p>
                                            <p className="text-[var(--color-gold)] font-semibold text-lg">{fabric.price}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customization Options */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4"
                        >
                            Customization Options
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                        >
                            Every detail matters. Personalize your garment to match your style
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {customOptions.map((option) => (
                                <Card key={option.category} className="p-6">
                                    <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-4">
                                        {option.category}
                                    </h3>
                                    <div className="space-y-2">
                                        {option.options.map((opt) => (
                                            <div
                                                key={opt}
                                                className="flex items-center p-3 rounded border border-gray-200 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5 cursor-pointer transition-colors"
                                            >
                                                <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3"></div>
                                                <span className="text-gray-700">{opt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[var(--color-navy)] text-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                            Ready to Begin?
                        </h2>
                        <p className="text-lg text-[var(--color-ivory)]/80 mb-8 max-w-2xl mx-auto">
                            Book a consultation with one of our expert tailors to start your custom journey
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90"
                            >
                                Book Consultation
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[var(--color-ivory)] text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-navy)]"
                            >
                                View Measuring Guide
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer2 />
            </main>
        </>
    );
}
