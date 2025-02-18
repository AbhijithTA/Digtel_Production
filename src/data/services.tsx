interface Service {
    src: string;
    title: string;
    category: string;
    content: JSX.Element;
  }

  import branding from "../../public/servicesImages/Branding.jpg"
  import Marketing from "../../public/servicesImages/Marketing.jpg"
  import WebDevelopment from "../../public/servicesImages/WebDevelopment.jpg"
  import Ecommerce from "../../public/servicesImages/Ecommerce.jpg"
  import Photography from "../../public/servicesImages/Photography.jpg"
  import MobileApps from "../../public/servicesImages/MobileApps.jpg"
  import software from "../../public/servicesImages/software.jpg"
  import CyberSecurity from "../../public/servicesImages/CyberSecurity.jpg"
  import erpSolutions from "../../public/servicesImages/erpSolutions.jpg"
  import Training from "../../public/servicesImages/Training.jpg"
  import cloudSolutions from "../../public/servicesImages/cloudSolutions.jpg"
  
  export const services: Service[] = [
    {
      src: branding,
      title: "Craft Unique Brand Identities",
      category: "Branding",
      content: (
        <p>
          Create compelling logos, memorable assets, and cohesive guidelines to
          define your brand’s essence and captivate your audience.
        </p>
      ),
    },
    {
      src: Marketing,
      title: "Amplify Your Brand Presence",
      category: "Marketing",
      content: (
        <p>
          Deliver tailored campaigns using digital and traditional tools to ensure
          your brand stands out in a crowded marketplace.
        </p>
      ),
    },
    {
      src: WebDevelopment,
      title: "Build Stunning Websites",
      category: "Web Development",
      content: (
        <p>
          Design and develop optimized, responsive websites that enhance user
          experiences and drive business growth.
        </p>
      ),
    },
    {
      src: Ecommerce,
      title: "Launch Seamless Online Stores",
      category: "E-commerce",
      content: (
        <p>
          Create user-friendly platforms with secure payment gateways to deliver
          an effortless shopping experience.
        </p>
      ),
    },
    {
      src: Photography,
      title: "Capture Professional Imagery",
      category: "Photography",
      content: (
        <p>
          Offer event coverage, headshots, and product photography to align
          visuals with your brand’s identity.
        </p>
      ),
    },
    {
      src: MobileApps,
      title: "Create Custom Mobile Apps",
      category: "Mobile Apps",
      content: (
        <p>
          Develop native apps for iOS and Android with robust performance and
          exceptional user experiences.
        </p>
      ),
    },
    {
      src: software,
      title: "Empower with Tailored Software",
      category: "Software",
      content: (
        <p>
          Build scalable CRM, inventory, and bespoke systems to streamline
          operations and boost efficiency.
        </p>
      ),
    },
    {
      src: CyberSecurity,
      title: "Secure Your Digital Assets",
      category: "Cybersecurity",
      content: (
        <p>
          Protect your business with network security, data encryption, and
          tailored risk mitigation strategies.
        </p>
      ),
    },
    {
      src: erpSolutions,
      title: "Automate Business Operations",
      category: "ERP Solutions",
      content: (
        <p>
          Implement scalable ERP systems to optimize processes across finance, HR,
          and supply chain management.
        </p>
      ),
    },
    {
      src: Training,
      title: "Invest in Corporate Growth",
      category: "Training",
      content: (
        <p>
          Provide leadership development and technical skills training to empower
          your workforce.
        </p>
      ),
    },
    {
      src: cloudSolutions,
      title: "Future-Proof with Cloud Services",
      category: "Cloud Solutions",
      content: (
        <p>
          Deploy tailored cloud infrastructures to enhance scalability, security,
          and efficiency.
        </p>
      ),
    },
  ];
  