"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSocialLinks() {
  return (
    <div>
          <ul>
          <li>
            <Link href="https://www.facebook.com/?locale=sv_SE">
              <Image
                src="./icons/facebook.svg"
                alt="facebook logo"
                height={40}
                width={40}
              />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/">
              <Image
                src="./icons/twitter.svg"
                alt="twitter logo"
                height={40}
                width={40}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">
              <Image
                src="./icons/instagram.svg"
                alt="instagram logo"
                height={40}
                width={40}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/">
              <Image
                src="./icons/linkedin.svg"
                alt="linkedin logo"
                height={40}
                width={40}
              />
            </Link>
          </li>
        </ul>
    </div>
  )
}
