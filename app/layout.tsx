import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
});

const body = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "PetPal — On-demand dog walking, pet sitting, grooming & vet visits",
  description:
    "PetPal offers friendly, trustworthy pet care on demand in Chicago—dog walking, drop-in sitting, at-home grooming, and vet visit transport. Book in minutes and get photo updates every visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} font-body bg-background text-foreground`}
      >
        <Navbar
          logoText="PetPal"
          links={[
            { label: "Home", href: "/" },
            { label: "How it works", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Book", href: "/contact" },
          ]}
          ctaText="Book care now"
          ctaHref="/contact"
        />

        <div className="min-h-screen pt-20">{children}</div>

        <FooterMultiColumn
          brand="PetPal"
          description="On-demand care for pets who feel like family."
          columns={[
            {
              title: "Services",
              links: [
                { label: "Dog Walking", href: "/pricing" },
                { label: "Pet Sitting", href: "/pricing" },
                { label: "Grooming", href: "/pricing" },
                { label: "Vet Visits", href: "/pricing" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "How it works", href: "/features" },
                { label: "About PetPal", href: "/about" },
                { label: "Book & Contact", href: "/contact" },
              ],
            },
            {
              title: "Policies",
              links: [
                { label: "Safety & screening", href: "/about" },
                { label: "Cancellation policy", href: "/pricing" },
                { label: "Privacy (summary)", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2026 PetPal. All rights reserved."
        />
      </body>
    </html>
  );
}
