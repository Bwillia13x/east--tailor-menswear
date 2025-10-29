"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const categories = ["All", "Suits", "Shirts", "Trousers", "Outerwear", "Accessories"]

const fabrics = ["All Fabrics", "Wool", "Cotton", "Linen", "Cashmere", "Silk"]

const priceRanges = ["All Prices", "Under $500", "$500 - $1000", "$1000 - $2000", "$2000+"]

const products = [
  {
    id: 1,
    name: "The Executive Three-Piece",
    category: "Suits",
    fabric: "Wool",
    price: 2850,
    image: "executive-suit.jpg",
    description: "Charcoal Super 150s wool with peak lapels and hand-stitched details",
    featured: true,
  },
  {
    id: 2,
    name: "Navy Pinstripe Suit",
    category: "Suits",
    fabric: "Wool",
    price: 2450,
    image: "navy-pinstripe.jpg",
    description: "Classic navy with subtle pinstripes, notch lapel, two-button closure",
    featured: true,
  },
  {
    id: 3,
    name: "Italian Cotton Dress Shirt",
    category: "Shirts",
    fabric: "Cotton",
    price: 285,
    image: "white-dress-shirt.jpg",
    description: "Crisp white Italian cotton with French cuffs and mother-of-pearl buttons",
    featured: false,
  },
  {
    id: 4,
    name: "Summer Linen Suit",
    category: "Suits",
    fabric: "Linen",
    price: 1850,
    image: "linen-suit.jpg",
    description: "Breathable stone linen, unstructured shoulders, perfect for warm weather",
    featured: false,
  },
  {
    id: 5,
    name: "Checked Sport Coat",
    category: "Outerwear",
    fabric: "Wool",
    price: 1450,
    image: "checked-blazer.jpg",
    description: "Brown and cream windowpane check, patch pockets, unlined for comfort",
    featured: false,
  },
  {
    id: 6,
    name: "Oxford Blue Shirt",
    category: "Shirts",
    fabric: "Cotton",
    price: 245,
    image: "blue-oxford.jpg",
    description: "Classic button-down collar in premium Oxford cloth",
    featured: false,
  },
  {
    id: 7,
    name: "Charcoal Flannel Trousers",
    category: "Trousers",
    fabric: "Wool",
    price: 485,
    image: "flannel-trousers.jpg",
    description: "Mid-weight flannel with pleated front and adjustable waistband",
    featured: false,
  },
  {
    id: 8,
    name: "Cashmere Overcoat",
    category: "Outerwear",
    fabric: "Cashmere",
    price: 3200,
    image: "cashmere-coat.jpg",
    description: "Luxurious navy cashmere blend, full canvas construction",
    featured: true,
  },
  {
    id: 9,
    name: "Silk Pocket Squares Set",
    category: "Accessories",
    fabric: "Silk",
    price: 125,
    image: "pocket-squares.jpg",
    description: "Hand-rolled silk in complementary patterns, set of three",
    featured: false,
  },
  {
    id: 10,
    name: "Midnight Tuxedo",
    category: "Suits",
    fabric: "Wool",
    price: 3450,
    image: "tuxedo.jpg",
    description: "Peak lapel tuxedo in midnight blue Super 180s wool with satin details",
    featured: true,
  },
  {
    id: 11,
    name: "Cream Linen Shirt",
    category: "Shirts",
    fabric: "Linen",
    price: 265,
    image: "linen-shirt.jpg",
    description: "Relaxed fit linen shirt with spread collar, perfect for summer",
    featured: false,
  },
  {
    id: 12,
    name: "Tan Chino Trousers",
    category: "Trousers",
    fabric: "Cotton",
    price: 385,
    image: "tan-chinos.jpg",
    description: "Tailored fit cotton chinos with side adjusters",
    featured: false,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFabric, setSelectedFabric] = useState("All Fabrics")
  const [selectedPrice, setSelectedPrice] = useState("All Prices")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory
    const fabricMatch = selectedFabric === "All Fabrics" || product.fabric === selectedFabric

    let priceMatch = true
    if (selectedPrice === "Under $500") priceMatch = product.price < 500
    else if (selectedPrice === "$500 - $1000") priceMatch = product.price >= 500 && product.price < 1000
    else if (selectedPrice === "$1000 - $2000") priceMatch = product.price >= 1000 && product.price < 2000
    else if (selectedPrice === "$2000+") priceMatch = product.price >= 2000

    return categoryMatch && fabricMatch && priceMatch
  })

  const featuredProducts = filteredProducts.filter((p) => p.featured)
  const regularProducts = filteredProducts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2"
            >
              <Image src="/logo.png" alt="East & Tailor Logo" width={40} height={40} className="rounded-full" />
              East & Tailor
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-sm text-foreground font-medium">
                Shop
              </Link>
              <Link href="/#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Process
              </Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Our Collection</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Discover timeless elegance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our curated collection of bespoke suits, custom shirts, and refined accessories. Each piece
              represents the pinnacle of tailoring craftsmanship, ready to be customized to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="flex-shrink-0">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Fabric</label>
                  <select
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm"
                  >
                    {fabrics.map((fabric) => (
                      <option key={fabric} value={fabric}>
                        {fabric}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedFabric("All Fabrics")
                      setSelectedPrice("All Prices")
                    }}
                    className="w-full"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-2">Featured Collection</h2>
              <p className="text-muted-foreground">
                Our most sought-after pieces, crafted with exceptional attention to detail
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group cursor-pointer border-border hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={`/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl font-semibold leading-tight">{product.name}</h3>
                        <p className="text-lg font-semibold text-accent whitespace-nowrap">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-secondary rounded-full">{product.fabric}</span>
                        <span className="px-2 py-1 bg-secondary rounded-full">{product.category}</span>
                      </div>
                    </div>
                    <Button className="w-full group/btn">
                      Customize This Piece
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Products */}
      {regularProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary/20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-2">Complete Collection</h2>
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden group cursor-pointer border-border hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={`/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold leading-tight mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-accent">${product.price.toLocaleString()}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <span className="px-2 py-0.5 bg-secondary rounded-full">{product.fabric}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group/btn bg-transparent">
                      View Details
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-md mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold">No pieces found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or browse our complete collection</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedFabric("All Fabrics")
                  setSelectedPrice("All Prices")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Bespoke CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-balance">
              Can&apos;t find exactly what you&apos;re looking for?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every piece in our collection can be fully customized to your specifications. Or, start from scratch with
              a completely bespoke creation. Our master tailors will guide you through fabric selection, styling
              details, and precise measurements to create something truly unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold">East & Tailor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafting bespoke menswear with passion and precision since 1985.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/shop" className="hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=Suits" className="hover:text-foreground transition-colors">
                    Suits
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=Shirts" className="hover:text-foreground transition-colors">
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=Accessories" className="hover:text-foreground transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-foreground transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="hover:text-foreground transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Visit Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 Savile Row</li>
                <li>London, W1S 3PB</li>
                <li className="pt-2">Mon-Fri: 9am - 6pm</li>
                <li>Sat: 10am - 4pm</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 East & Tailor. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
