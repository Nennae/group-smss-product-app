"use client";

import Image from "next/image";
import FooterNav from "./footer-nav/footer-nav";
import FooterSocialLinks from "./footer-social-links/footer-social-links";

export default function Footer() {
  return (
    <footer className="bg-[#100b0b] text-white py-8 border-t-2">
      <div className="container mx-auto px-4">
              {/* Logotyp + Företagsnamn */}
              <header className="mb-4 flex items-center">
                <Image 
                  src="/icons/logo.png" 
                  alt="SMSS E-commerce logo" 
                  width={40} 
                  height={40}
                  className="mb-2"
                />
                <h3 className="text-base font-bold text-red-600 mt-1 ml-2">SMSS E-commerce</h3>
              </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Navigationslänkar */}
          <FooterNav />

                    {/* Sociala medier */}
                    <FooterSocialLinks />

          {/* Kontaktinformation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
            <ul className="space-y-2">
              <li className="hover:underline hover:text-yellow-400">📞 +46 721 234 56</li>
              <li className="hover:underline hover:text-yellow-400">✉️ smss@info.se</li>
            </ul>
          </div>
          {/* Adressinformation */}
          <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
          <ul className="space-y-2">
          <li>📍 Projektgatan 22,<br></br>   123 45 Narnia</li>
            </ul>
          </div>

        </div>

        {/* Copyright-text */}
        <p className="text-center mt-6 text-sm opacity-80">
          © 2025 SMSS AB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

