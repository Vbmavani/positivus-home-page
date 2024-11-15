import Header from "../../components/Header";
import HeroImage from "../../assets/images/hero-img.png";
import AmazonLogo from "../../assets/images/amazon.png";
import DribbleLogo from "../../assets/images/dribble.png";
import HubSpotLogo from "../../assets/images/hubspot.png";
import NotionLogo from "../../assets/images/notion.png";
import ZoomLogo from "../../assets/images/zoom.png";
import SeachEngineOptimizationImage from "../../assets/images/services/search-engine-optimization.png";
import PayPerClickImage from "../../assets/images/services/pay-per-click-advertising.png";
import SocialMediaMarketingImage from "../../assets/images/services/social-media-marketing.png";
import EmailMarketingImage from "../../assets/images/services/email-marketing.png";

export const HomePage = () => {
  const servicesCards = [
    {
      title: "Search engine",
      subtitle: "optimization",
      ulr: "www.facebook.com",
      image: SeachEngineOptimizationImage,
    },
    {
      title: "Pay-per-click",
      subtitle: "advertising",
      ulr: "www.facebook.com",
      image: PayPerClickImage,
    },
    {
      title: "Social Media",
      subtitle: "Marketing",
      ulr: "www.facebook.com",
      image: SocialMediaMarketingImage,
    },
    {
      title: "Email",
      subtitle: "Marketing",
      ulr: "www.facebook.com",
      image: EmailMarketingImage,
    },
  ];
  return (
    <div className="container home-page">
      <Header />
      <section className="section hero-section">
        <div className="hero-content">
          <div className="left-hero-content">
            <h1>Navigating the digital landscape for success</h1>
            <img src={HeroImage} alt="hero-image" className="mobile-hero-img" />
            <h4>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </h4>
            <button className="primary-btn book-a-consultation">
              Book a consultation
            </button>
          </div>
          <div className="right-hero-content">
            <img src={HeroImage} alt="hero-image" className="hero-img" />
          </div>
        </div>
        <div className="company-logos">
          <img src={AmazonLogo} alt="amazon-logo" />
          <img src={DribbleLogo} alt="dribble-logo" />
          <img src={HubSpotLogo} alt="hubspot-logo" />
          <img src={NotionLogo} alt="notion-logo" />
          <img src={ZoomLogo} alt="zoom-logo" />
        </div>
      </section>
      <section className="section services">
        <div className="section-intro">
          <h2 className="title">Services</h2>
          <p className="description">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="services-cards">
          {servicesCards.map((service, index) => {
            return (
              <div
                key={index}
                className={`service-card card-${(index % 3) + 1}`}
              >
                <div className="service-card-content">
                  <div className="service-card-header">
                    <div className="service-card-title">
                      <h4 className="title">{service.title}</h4>
                      <h4 className="title">{service.subtitle}</h4>
                    </div>
                    <div className="service-card-footer">
                      <p>Learn more</p>
                    </div>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
