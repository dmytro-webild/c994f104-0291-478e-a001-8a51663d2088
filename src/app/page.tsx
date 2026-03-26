"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumLarge"
      background="circleGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="EID Real Estate"
          navItems={[
            { name: "Properties", id: "featured-properties" },
            { name: "About Us", id: "about-us" },
            { name: "Locations", id: "locations" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Living"
          description="Exclusive properties in Lebanon, meticulously curated for the discerning client."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Explore Properties", href: "#featured-properties" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/umbrella-chair-around-outdoor-swimming-pool-resort-hotel-vacation-leisure_74190-14764.jpg"
          imageAlt="Luxury villa at night with cinematic lighting"
          mediaAnimation="slide-up"
          ariaLabel="Hero section showcasing luxury living"
          imagePosition="right"
          fixedMediaHeight={true}
          useInvertedBackground={false}
        />
      </div>
      <div id="featured-properties" data-section="featured-properties">
        <ProductCardThree
          products={[
            { id: "prop-1", name: "Luxurious Beirut Penthouse", price: "$5,500,000", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9619.jpg", imageAlt: "Luxurious Beirut Penthouse Interior", priceButtonProps: { text: "View Details" } },
            { id: "prop-2", name: "Grand Jounieh Villa", price: "$7,800,000", imageSrc: "http://img.b2bpic.net/free-photo/terrace_1203-53.jpg", imageAlt: "Grand Jounieh Villa with Sea View", priceButtonProps: { text: "View Details" } },
            { id: "prop-3", name: "Elegant Kaslik Duplex", price: "$3,200,000", imageSrc: "http://img.b2bpic.net/free-photo/living-room-with-modern-beautiful-decoration_181624-30650.jpg", imageAlt: "Elegant Kaslik Duplex Living Room", priceButtonProps: { text: "View Details" } },
            { id: "prop-4", name: "Opulent City View Apartment", price: "$4,100,000", imageSrc: "http://img.b2bpic.net/free-photo/businessman-bench_23-2148006264.jpg", imageAlt: "Opulent Apartment with City View", priceButtonProps: { text: "View Details" } }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="Featured Properties"
          description="Discover an exquisite collection of the finest properties in Lebanon's most prestigious locations."
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Featured Properties section"
        />
      </div>
      <div id="about-us" data-section="about-us">
        <TextAbout
          title="The Art of Luxury Real Estate"
          description="At EID Real Estate, we redefine luxury living with unparalleled expertise, unwavering trust, and a commitment to premium service. We connect discerning clients with exclusive properties that embody sophistication and prestige. Our dedicated team ensures a seamless journey from selection to acquisition, making your dream of luxury ownership a tangible reality. Trust in our legacy, invest in your future."
          useInvertedBackground={false}
          ariaLabel="About Us section"
        />
      </div>
      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardMedia
          features={[
            { id: "service", title: "Unrivaled Luxury Service", description: "Experience personalized attention and bespoke services tailored to your every need.", tag: "Excellence" },
            { id: "listings", title: "Exclusive Property Listings", description: "Access a curated portfolio of properties not available on the open market.", tag: "Rarity" },
            { id: "experience", title: "Personalized Client Experience", description: "From initial consultation to closing, your journey is handled with utmost discretion and precision.", tag: "Tailored" }
          ]}
          animationType="slide-up"
          title="Why Choose EID Real Estate?"
          description="Partner with a brand synonymous with prestige, discretion, and unparalleled service in the luxury property market."
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Why Choose Us section"
        />
      </div>
      <div id="locations" data-section="locations">
        <FeatureCardMedia
          features={[
            { id: "kaslik", title: "Kaslik", description: "Discover opulent residences along the vibrant Kaslik coastline, offering breathtaking sea views and luxurious amenities.", tag: "Coastal Elegance", imageSrc: "http://img.b2bpic.net/free-photo/dam-ebro-river-logrono-la-rioja_1398-4852.jpg" },
            { id: "jounieh", title: "Jounieh", description: "Explore grand villas and exquisite apartments in Jounieh, combining historical charm with modern luxury and panoramic bay views.", tag: "Scenic Grandeur", imageSrc: "http://img.b2bpic.net/free-photo/breathtaking-view-buildings-nature_23-2148347715.jpg" },
            { id: "beirut", title: "Beirut", description: "Immerse yourself in the heart of Beirut's most exclusive districts, featuring high-rise penthouses and sophisticated urban estates.", tag: "Urban Prestige", imageSrc: "http://img.b2bpic.net/free-photo/view-frankfurt-from-skyscraper-germany_1268-20935.jpg" }
          ]}
          animationType="slide-up"
          title="Our Exclusive Locations"
          description="EID Real Estate specializes in premier properties across Lebanon's most sought-after and luxurious areas."
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Locations section"
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            { id: "1", name: "Mr. Anthony Semaan", date: "October 2023", title: "Seamless Acquisition", quote: "EID Real Estate provided an absolutely seamless and discreet service. Their expertise in the luxury market is unmatched, leading me to my dream property.", tag: "Exceptional", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-as-lawyer_23-2151152323.jpg" },
            { id: "2", name: "Mrs. Lena Haddad", date: "September 2023", title: "Truly Professional", quote: "The team at EID Real Estate is truly professional and attentive. They understood my unique requirements perfectly and delivered beyond expectation.", tag: "Dedicated", avatarSrc: "http://img.b2bpic.net/free-photo/smiling-female-worker-posing-company-business-catalogue_1163-4801.jpg" },
            { id: "3", name: "Dr. Charbel Naim", date: "August 2023", title: "Unmatched Expertise", quote: "Their knowledge of the Lebanese luxury property market is simply unmatched. I felt confident and well-guided throughout the entire process.", tag: "Insightful", avatarSrc: "http://img.b2bpic.net/free-photo/empowered-business-women-working-together_23-2149322971.jpg" },
            { id: "4", name: "Ms. Rima Karam", date: "July 2023", title: "Highly Recommended", quote: "EID Real Estate exceeded all my expectations. Their exclusive listings and personalized approach made finding my new home a truly luxurious experience. Highly recommended!", tag: "Superior", avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-female-real-estate-agent-standing-house-entrance-smiling-woman-with-short-graying-hair-pink-suit-getting-ready-meet-customers-real-estate-business-work-concept_74855-22183.jpg" }
          ]}
          title="Client Testimonials"
          description="Hear from our esteemed clients who have experienced the difference of EID Real Estate's premium service."
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Testimonials section"
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Connect"
          title="Contact EID Real Estate"
          description="Reach out to our team for exclusive property viewings, personalized consultations, or any inquiries.\n\nPhone: +961 03 602 215 / +961 76 033 933\nLocation: Altavista Center, Kaslik, Lebanon"
          buttons={[
            { text: "Send an Inquiry", href: "mailto:info@eidrealestate.com" },
            { text: "WhatsApp Us", href: "https://wa.me/96176033933" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact Us section"
        />
      </div>
      <div id="footer" data-section="footer" className="bg-black text-white">
        <FooterLogoReveal
          logoText="EID Real Estate"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
