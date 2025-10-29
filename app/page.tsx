import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              East Tailor
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Process
              </Link>
              <Link href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation
              </Button>
            </div>

            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-accent font-medium">Bespoke Tailoring Since 1985</p>
                <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-tight text-balance">
                  Where tradition meets impeccable style
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Step into a world where every garment tells your story. Our master tailors blend time-honored
                  techniques with contemporary elegance, creating suits that don&apos;t just fit your body—they embody your
                  character, ambition, and refined taste.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Schedule Your Fitting
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-serif font-semibold">500+</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-serif font-semibold">38+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted">
                <img src="/hero-suit.jpg" alt="Bespoke tailored suit" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-sm shadow-lg">
                <p className="text-sm font-medium">Master Craftsmanship</p>
                <p className="text-2xl font-serif font-semibold mt-1">100% Handmade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Our Services</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6 text-balance">
              Masterfully crafted for life&apos;s defining moments
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether commanding the boardroom or celebrating life&apos;s milestones, our bespoke creations ensure you&apos;re
              dressed with distinction and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bespoke Suits",
                description:
                  "The pinnacle of sartorial excellence. Each suit is a masterpiece, constructed from the finest fabrics with over 50 precise measurements and 80+ hours of expert handwork.",
                image: "bespoke-suits.jpg",
              },
              {
                title: "Custom Shirts",
                description:
                  "Elevate your everyday with shirts crafted to your exact specifications. Choose from Italian cotton, French cuffs, and collar styles that complement your face and frame perfectly.",
                image: "custom-shirts.jpg",
              },
              {
                title: "Wedding & Formal Wear",
                description:
                  "Your wedding day deserves perfection. From classic tuxedos to modern three-piece suits, we create formal wear that makes your most important moments unforgettable.",
                image: "wedding-formal.jpg",
              },
              {
                title: "Expert Alterations",
                description:
                  "Transform off-the-rack into custom-fit. Our master tailors breathe new life into your existing wardrobe with precision alterations that honor the original craftsmanship.",
                image: "alterations.jpg",
              },
              {
                title: "Smart Casual Wear",
                description:
                  "Refined elegance for every day. Our sport coats, blazers, and tailored trousers bridge the gap between formal and casual with effortless sophistication.",
                image: "smart-casual.jpg",
              },
              {
                title: "Finishing Touches",
                description:
                  "The details define the man. Curated silk ties, hand-rolled pocket squares, and premium leather goods that complete your distinguished look.",
                image: "accessories.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={`/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <button className="text-sm font-medium text-accent hover:text-accent/80 inline-flex items-center group/btn">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Our Process</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6 text-balance">
                  The journey to your perfect suit
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Creating a bespoke garment is an intimate collaboration. Our time-honored process ensures every detail
                  reflects your vision, personality, and the uncompromising standards of true craftsmanship.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Personal Consultation",
                    description:
                      "Your journey begins with a one-on-one consultation. We discuss your lifestyle, preferences, and the occasions you're dressing for, ensuring every choice serves your unique needs.",
                  },
                  {
                    number: "02",
                    title: "Fabric Selection",
                    description:
                      "Explore our curated collection of the world's finest fabrics—from Italian Super 150s wool to Irish linen and English tweed. Touch, feel, and discover the perfect material for your vision.",
                  },
                  {
                    number: "03",
                    title: "Precise Measurements",
                    description:
                      "Our master tailors take over 50 measurements, noting your posture, shoulder slope, and body contours. This precision ensures a fit that's uniquely, unmistakably yours.",
                  },
                  {
                    number: "04",
                    title: "Expert Craftsmanship",
                    description:
                      "Over 4-6 weeks, skilled artisans hand-cut and stitch your garment. Each buttonhole, each seam receives meticulous attention—this is where fabric becomes art.",
                  },
                  {
                    number: "05",
                    title: "Final Fitting & Perfection",
                    description:
                      "We conduct a final fitting, making any subtle adjustments needed. When you leave, you're wearing more than a suit—you're wearing confidence, distinction, and timeless style.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="font-serif text-lg font-semibold text-accent">{step.number}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted">
                <img src="/tailor-workshop.jpg" alt="Tailoring process" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Our Work</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6 text-balance">
              A portfolio of distinction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg"].map(
              (image, index) => (
                <div key={index} className="aspect-[3/4] rounded-sm overflow-hidden bg-muted group cursor-pointer">
                  <img
                    src={`/${image}`}
                    alt="Tailored garment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ),
            )}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6 text-balance">
              Trusted by discerning gentlemen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "After years of off-the-rack suits, I finally understand what 'perfect fit' means. The attention to detail is extraordinary—from the hand-stitched buttonholes to the way the shoulders sit. This is investment dressing at its finest.",
                author: "Michael Chen",
                role: "CEO, Tech Innovations",
              },
              {
                quote:
                  "I've been a loyal client for over a decade. What keeps me coming back isn't just the impeccable craftsmanship—it's the personal service, the expertise, and knowing that every suit is made specifically for me. Simply unmatched.",
                author: "David Richardson",
                role: "Attorney at Law",
              },
              {
                quote:
                  "They created my wedding suit and it was absolutely perfect. The entire experience felt special—from selecting the fabric to the final fitting. On my wedding day, I felt like the best version of myself. I still wear that suit to important events.",
                author: "James Morrison",
                role: "Entrepreneur",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 border-border">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-balance">Your signature style awaits</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Experience the transformative power of bespoke tailoring. Schedule your private consultation and begin the
              journey to garments that are unmistakably, authentically you. Our master craftsmen are ready to bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Your Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Call Us: (555) 123-4567
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
              <h3 className="font-serif text-2xl font-semibold">East Tailor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafting bespoke menswear with passion and precision since 1985.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Bespoke Suits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Custom Shirts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Formal Wear
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Alterations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
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
            <p className="text-sm text-muted-foreground">© 2025 East Tailor Menswear. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
