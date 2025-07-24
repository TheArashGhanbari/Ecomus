"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">ecomus</h1>
          <p>
            Address: 1234 Fashion Street, Suite 567,
            <br />
            New York, NY
          </p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:info@fashionshop.com">
              info@fashionshop.com
            </a>
          </p>
          <p>Phone: (212)555-1234</p>
          <Button variant="link" className="text-white px-0">
            Get direction →
          </Button>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>

        {/* Accordion Menus */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="help">
              <AccordionTrigger>Help</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  <li>
                    <Link href="#">Shipping Info</Link>
                  </li>
                  <li>
                    <Link href="#">Return Policy</Link>
                  </li>
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  <li>
                    <Link href="#">Our Story</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="email">
              <AccordionTrigger>Sign Up for Email</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="text-black"
                  />
                  <Button size="sm">
                    <FaEnvelope className="w-4 h-4 mr-1" />
                    Send
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center space-y-4">
        <p>© 2025 Ecomus. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <img src="/visa.svg" alt="Visa" className="h-6" />
          <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/paypal.svg" alt="PayPal" className="h-6" />
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border border-white"
        >
          <FaChevronUp />
        </Button>
        <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-400">
          <img src="/shopify.svg" alt="Shopify" className="h-4" />
          Gaming Accessories{" "}
          <span className="bg-gray-700 text-white text-[10px] px-2 py-0.5 rounded-full ml-2">
            Draft
          </span>
        </div>
      </div>
    </footer>
  );
}
