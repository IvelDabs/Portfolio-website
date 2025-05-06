import React from "react";
import Card from "./common/Card";

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "Design and build fully customized, scalable web applications tailored to specific business needs. From dashboards to internal tools, ensure secure, high-performance, and responsive apps using modern technologies.",
  },
  {
    title: "E-Commerce Development",
    description:
      "Build robust e-commerce platforms with seamless product browsing, secure checkout systems, order management, and integrated payment gateways. Solutions optimized for performance, conversions, and growth.",
  },
  {
    title: "Full-Stack API Development",
    description:
      "Develop secure RESTful APIs and backend systems to power modern web and mobile applications. Ensure clean architecture, scalability, and integration with third-party services.",
  },
  {
    title: "UI/UX Design Integration",
    description:
      "Implement intuitive and visually appealing interfaces that enhance user experience. Translate Figma, Adobe XD, or custom designs into responsive, accessible frontends using Tailwind, Shadcn/UI, or custom styles.",
  },
  {
    title: "Website Performance Optimization",
    description:
      "Audit and optimize website speed, responsiveness, and load times. Apply lazy loading, image compression, code splitting, and Lighthouse performance techniques for maximum efficiency.",
  },
  {
    title: "Mobile-Responsive Design",
    description:
      "Ensure websites and applications are fully optimized for all screen sizes and devices, offering a seamless experience across desktops, tablets, and smartphones.",
  },
  {
    title: "SEO Optimization",
    description:
      "Apply on-page SEO best practices including semantic HTML, meta tags, accessibility, and performance enhancements to improve visibility and search engine rankings.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Integrate services like Paystack, Stripe, Calendly, Mailchimp, CRM tools, and other APIs to enhance business operations and automate workflows.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Set up and configure hosting environments, CI/CD pipelines, and production deployments using platforms like Vercel, Netlify, Render, or traditional cloud providers like AWS and DigitalOcean.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Offer ongoing support, monitoring, and updates to ensure deployed applications stay secure, functional, and up-to-date with evolving tech and user needs.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 px-6 md:px-16 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
