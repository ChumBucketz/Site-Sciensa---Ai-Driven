import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "Solutions", href: "/solutions" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Energy & Utilities", href: "/industries/energy-utilities" },
      { label: "Telecommunications", href: "/industries/telecommunications" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1336px] mx-auto px-4 3xl:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
              <Image
                src="/logos/Logo Sciensa Dark.svg"
                alt="Sciensa"
                width={120}
                height={32}
                className="h-[50px] w-auto"
              />
            </Link>
            <p className="mt-4 text-[15px] text-white/50 leading-relaxed max-w-xs tracking-[0.01em]">
              AI-native engineering for the industries that can't afford to fail.
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-label text-white/30 mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/60 hover:text-white transition-colors tracking-[0.01em]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} Sciensa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
