import React from "react";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: "Blog & Updates",
  description: "Read informative articles, practical guides, safety recommendations, and industry updates from Priya Escort Services in Nashik.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog & Updates | Priya Escort Services",
    description: "Read informative articles, practical guides, safety recommendations, and industry updates from Priya Escort Services in Nashik.",
    url: `${siteUrl}/blog`,
    siteName: "cal girl nashik",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Updates | Priya Escort Services",
    description: "Read informative articles, practical guides, and updates from Priya Escort Services in Nashik.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}