import { Scissors } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format",
    alt: "East & Tailor logo",
    title: "East & Tailor",
    url: "/",
  },
  tagline = "Eastern heritage tailored into contemporary icon wardrobes.",
  menuItems = [
    {
      title: "Shop",
      links: [
        { text: "All Items", url: "/shop" },
        { text: "Kurtas", url: "/shop" },
        { text: "Sherwanis", url: "/shop" },
        { text: "Jackets", url: "/shop" },
        { text: "Accessories", url: "/shop" },
        { text: "New Arrivals", url: "/shop" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Custom Tailoring", url: "/custom" },
        { text: "Style Guide", url: "/style" },
        { text: "Fitting Services", url: "/custom" },
        { text: "Size Charts", url: "/style" },
        { text: "Care Guide", url: "/style" },
        { text: "Appointments", url: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Our Heritage", url: "/heritage" },
        { text: "Craftsmanship", url: "/heritage" },
        { text: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Size Guide", url: "/style" },
        { text: "Shipping Info", url: "/contact" },
        { text: "Returns", url: "/contact" },
      ],
    },
  ],
  copyright = "© 2025 East & Tailor. Heritage tailored for today.",
  bottomLinks = [
    { text: "Terms of Service", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="relative py-24 border-t border-primary/10 bg-gradient-to-b from-background to-muted/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl px-6">
        <footer>
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-6 mb-16">
            <div className="col-span-2 mb-8 lg:mb-0">
              <Link href={logo.url} className="flex items-center gap-3 group mb-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="size-5 text-primary" />
                </div>
                <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                  East & Tailor
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {tagline}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="size-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="size-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="size-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 text-sm font-semibold tracking-wide uppercase text-foreground/80" style={{ fontFamily: 'var(--font-serif)' }}>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter section */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Join Our Heritage Circle
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Be the first to discover new collections, exclusive tailoring tips, and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
                <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-sm transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-6 pt-8 border-t border-primary/10 md:flex-row md:items-center md:justify-between">
            <p className="text-muted-foreground text-sm">
              {copyright}
            </p>
            <ul className="flex gap-6">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.url}
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
