import FooterNav from "./footer-nav/footer-nav";
import FooterSocialLinks from "./footer-social-links/footer-social-links";

export default function Footer() {
  return (
    <>
      <footer>
        <FooterNav />
        <FooterSocialLinks />
        <ul>
          <li>Phone: +46 721 234 56</li>
          <li>Mail: smss@info.se</li>
          <li>Adress: Projektgatan 22, 123 45 Narnia</li>
        </ul>
        <p>Copyright SMSS AB 2025. All right reserved</p>
      </footer>
    </>
  );
}
