"use client";

import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Scissors, ShoppingBag, Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Classic Navy Suit",
        price: "$899",
        category: "Suits",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
        description: "Timeless navy wool suit with perfect drape",
        fabric: "Super 120s Wool",
        rating: 5,
    },
    {
        id: 2,
        name: "Oxford Dress Shirt",
        price: "$129",
        category: "Shirts",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop",
        description: "Crisp white cotton with mother-of-pearl buttons",
        fabric: "Egyptian Cotton",
        rating: 5,
    },
    {
        id: 3,
        name: "Charcoal Wool Trousers",
        price: "$249",
        category: "Trousers",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop",
        description: "Tailored fit with clean lines",
        fabric: "Merino Wool",
        rating: 5,
    },
    {
        id: 4,
        name: "Cashmere Overcoat",
        price: "$1,299",
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
        description: "Luxurious Italian cashmere blend",
        fabric: "Cashmere Blend",
        rating: 5,
    },
    {
        id: 5,
        name: "Silk Pocket Square",
        price: "$49",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1593030577515-e2e5e1c2b9e7?w=500&h=600&fit=crop",
        description: "Hand-rolled edges, paisley pattern",
        fabric: "Pure Silk",
        rating: 5,
    },
    {
        id: 6,
        name: "Leather Oxford Shoes",
        price: "$399",
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=600&fit=crop",
        description: "Full-grain leather, Goodyear welted",
        fabric: "Italian Leather",
        rating: 5,
    },
];

const categories = ["All", "Suits", "Shirts", "Trousers", "Outerwear", "Accessories", "Footwear"];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [favorites, setFavorites] = useState<number[]>([]);

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen bg-[var(--color-ivory)]">
                {/* Hero Section with enhanced design */}
                <section className="relative bg-[var(--color-navy)] text-[var(--color-ivory)] py-24 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
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
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Scissors className="mx-auto mb-6 h-12 w-12 text-[var(--color-gold)]" />
                            </motion.div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Our Collection
                            </h1>
                            <p className="text-lg text-[var(--color-ivory)]/80 max-w-2xl mx-auto">
                                Expertly crafted garments for the discerning gentleman. Each piece represents
                                the pinnacle of tailoring excellence and timeless style.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Category Filter with enhanced styling */}
                <section className="bg-white/80 backdrop-blur-md border-b border-[var(--color-gold)]/20 sticky top-0 z-40 shadow-sm">
                    <div className="container mx-auto px-6 py-5 max-w-7xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={category === selectedCategory ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full transition-all duration-300 ${category === selectedCategory
                                            ? "bg-[var(--color-navy)] text-[var(--color-ivory)] hover:bg-[var(--color-navy)]/90 shadow-lg scale-105"
                                            : "border-[var(--color-navy)]/20 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                                        }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Grid with enhanced cards */}
                <section className="py-20">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/40 bg-white/90 backdrop-blur">
                                        <CardHeader className="p-0 relative">
                                            <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                {/* Overlay gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Quick actions */}
                                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="secondary"
                                                        className="rounded-full w-10 h-10 p-0 bg-white/90 backdrop-blur hover:bg-white shadow-lg"
                                                        onClick={() => toggleFavorite(product.id)}
                                                    >
                                                        <Heart
                                                            className={`w-4 h-4 transition-colors ${favorites.includes(product.id)
                                                                    ? "fill-red-500 text-red-500"
                                                                    : "text-gray-600"
                                                                }`}
                                                        />
                                                    </Button>
                                                </div>

                                                {/* Category badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-gold)]/90 text-[var(--color-navy)] rounded-full backdrop-blur">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            {/* Rating */}
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(product.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                                                ))}
                                            </div>

                                            <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-xs px-2 py-1 bg-[var(--color-ivory)] text-gray-600 rounded">
                                                    {product.fabric}
                                                </span>
                                            </div>
                                            <p className="text-2xl font-bold text-[var(--color-navy)]">
                                                {product.price}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="p-6 pt-0 flex gap-3">
                                            <Button className="flex-1 bg-[var(--color-navy)] hover:bg-[var(--color-navy)]/90 group-hover:shadow-lg transition-all duration-300">
                                                <ShoppingBag className="w-4 h-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                            <Button variant="outline" className="flex-1 border-[var(--color-navy)]/20 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                                                Details
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <Footer2 />
            </main>
        </>
    );
}
