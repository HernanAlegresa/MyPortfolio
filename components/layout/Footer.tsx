import Link from "next/link";
import { cn } from "@/lib/utils";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/shipping", label: "Shipping" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-gray-600 hover:text-gray-900",
                      "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm",
                      "transition-colors"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-gray-600 hover:text-gray-900",
                      "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm",
                      "transition-colors"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <WaitlistForm variant="inline" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Oh Sh!rt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
