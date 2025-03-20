import Image from "next/image";
import map from "../../public/images/map.jpeg";

export default function ContactPage() {

    return (
        <main>
            <section>
                <h2>Call To Us</h2>
                <p>If you’re experiencing any difficulties or have questions about our products, please don’t hesitate to reach out. We’re here to help and will do our best to resolve your issue as quickly as possible.</p>
                <address>
                    Phone: <a href="tel:+8801611112222">+8801611112222</a>
                </address>
            </section>
            <section>
                <h2>Write To Us</h2>
                <p>We will respond within 24 hours.</p>
                <address>Email: 
                    <a href="
	            	 mailto:support@smssfakeshopmail.com
	            	 ?subject=Issue with My Order - [Order Number]
                     &body=Hello,%0D%0A%0D%0AI am experiencing an issue with my recent order.%0D%0A%0D%0AOrder Number: [Your Order Number]%0D%0AIssue Description: [Briefly describe the problem]%0D%0A%0D%0ACould you please assist me in resolving this?%0D%0A%0D%0AThank you!%0D%0A[Your Name]
                    ">support@smss.com</a>
                </address>
            </section>
            <section>
                <Image
                    className="object-contain"
                    src={map}
                    alt=""
                    placeholder="blur"
                    priority
                />
                <address>Adress: Project Road 22, 123 45 Chicago, Narnia</address>
            </section>
        </main>
    );
}
