"use client";

import Link from "next/link";

export default function FooterNav() {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <p>Copyright SMSS AB 2025. All right reserved</p>
      </footer>
    </>
  );
}
