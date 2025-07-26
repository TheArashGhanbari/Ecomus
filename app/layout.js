import "/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Ecomus - Premium Electronics Store",
  description:
    "Discover the latest electronics and gadgets at Ecomus. Shop for smartphones, laptops, gaming consoles, and more with premium quality and competitive prices.",
  keywords: "electronics, gadgets, smartphones, laptops, gaming, tech store",
  authors: [{ name: "Ecomus Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
