import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Oh Sh!rt. We'd love to hear from you.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ohshrt.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Miami, FL",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
          <ContactFAQ />
        </div>
      </div>
    </div>
  );
}
