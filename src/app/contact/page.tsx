"use client";

import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock, Scissors, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const locations = [
    {
        city: "London",
        address: "15 Savile Row, Mayfair",
        postal: "London W1S 3PJ, UK",
        phone: "+44 20 7734 1234",
        email: "london@eastandtailor.com",
        hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
        city: "New York",
        address: "Madison Avenue 425",
        postal: "New York, NY 10017, USA",
        phone: "+1 212 555 0199",
        email: "newyork@eastandtailor.com",
        hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
    {
        city: "Milan",
        address: "Via Montenapoleone 8",
        postal: "20121 Milano, Italy",
        phone: "+39 02 7600 1234",
        email: "milan@eastandtailor.com",
        hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry. We will contact you shortly.");
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
                            className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"
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
                                <Mail className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            </motion.div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-[var(--color-ivory)]/80 max-w-2xl mx-auto">
                                Whether you&apos;re ready to start your bespoke journey or have questions about
                                our services, we&apos;re here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Contact Form & Info */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(196,165,82,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,165,82,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Enhanced Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-3xl font-bold text-[var(--color-navy)] mb-6">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-semibold text-gray-700 mb-2"
                                            >
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-semibold text-gray-700 mb-2"
                                            >
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="location"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Preferred Location *
                                        </label>
                                        <select
                                            id="location"
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                        >
                                            <option value="">Select a location</option>
                                            <option value="london">London</option>
                                            <option value="newyork">New York</option>
                                            <option value="milan">Milan</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="bespoke-suit">Bespoke Suit</option>
                                            <option value="made-to-measure">Made to Measure</option>
                                            <option value="alterations">Alterations</option>
                                            <option value="consultation">Style Consultation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 outline-none transition-colors resize-none"
                                            placeholder="Tell us about your tailoring needs..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90 group"
                                    >
                                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </Button>
                                </form>
                            </motion.div>

                            {/* Enhanced Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-3xl font-bold text-[var(--color-navy)] mb-6">
                                    Visit Our Ateliers
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Experience the art of bespoke tailoring in person. Book an appointment at
                                    any of our locations worldwide.
                                </p>

                                <div className="space-y-6">
                                    {locations.map((location, index) => (
                                        <motion.div
                                            key={location.city}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <Card className="p-6 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[var(--color-gold)]/30">
                                                <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-4 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                                    {location.city}
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start">
                                                        <MapPin className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <p className="text-gray-700">{location.address}</p>
                                                            <p className="text-gray-600 text-sm">{location.postal}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Phone className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" />
                                                        <a
                                                            href={`tel:${location.phone}`}
                                                            className="text-gray-700 hover:text-[var(--color-gold)] transition-colors"
                                                        >
                                                            {location.phone}
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Mail className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" />
                                                        <a
                                                            href={`mailto:${location.email}`}
                                                            className="text-gray-700 hover:text-[var(--color-gold)] transition-colors"
                                                        >
                                                            {location.email}
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="w-5 h-5 text-[var(--color-gold)] mr-3 flex-shrink-0" />
                                                        <p className="text-gray-700">{location.hours}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Quick answers to common inquiries
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            <Card className="p-6">
                                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                                    How long does a bespoke suit take?
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    A fully bespoke suit typically takes 8-12 weeks from initial consultation
                                    to final fitting, including 2-3 fittings to ensure perfection.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                                    Do I need an appointment?
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Yes, we operate by appointment only to ensure each client receives our
                                    undivided attention. Book online or call us directly.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                                    What is your price range?
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Bespoke suits start at $2,500. Made-to-measure options begin at $1,200.
                                    Prices vary based on fabric selection and customization.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                                    Can I visit without making a purchase?
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Absolutely! We welcome consultations to discuss your needs, show our
                                    fabrics, and explain our process with no obligation.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[var(--color-navy)] text-[var(--color-ivory)]">
                    <div className="container mx-auto px-6 max-w-7xl text-center">
                        <Scissors className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience Excellence?
                        </h2>
                        <p className="text-lg text-[var(--color-ivory)]/80 mb-8 max-w-2xl mx-auto">
                            Book your private consultation today and discover the difference that true
                            craftsmanship makes.
                        </p>
                        <Button
                            size="lg"
                            className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90"
                        >
                            Schedule Appointment
                        </Button>
                    </div>
                </section>

                <Footer2 />
            </main>
        </>
    );
}
