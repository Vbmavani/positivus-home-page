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
import LearnMoreIcon from "../../assets/svg/learn-more-icon.svg";
import ContactUsImage from "../../assets/images/contact-us-bg.png";
import LinkedinLogo from "../../assets/images/linkedin-logo.png";
import OutlinedPlusIcon from "../../assets/svg/outlined-plus-icon.svg";
import OutlinedMinusIcon from "../../assets/svg/outlined-minus-icon.svg";

import { useState } from "react";

export const HomePage = () => {
  const [openedWorkingProcessItem, setOpenedWorkingProcessItem] =
    useState(null);

  const handlButtonClick = () => {};
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
  const workingProgressList = [
    {
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Implementation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Reporting and Communication",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  const teamList = [
    {
      name: "John Smith",
      designation: "CEO and Founder",
      summary:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      designation: "CEO and Founder",
      summary:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "John Smith",
      designation: "CEO and Founder",
      summary:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Michael Brown",
      designation: "Senior SEO Specialist",
      summary:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "John Smith",
      designation: "CEO and Founder",
      summary:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      designation: "CEO and Founder",
      summary:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
  ];

  const handleWorkingProcessExpandCollapse = (index) => {
    setOpenedWorkingProcessItem(index);
  };
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
            <button
              className="primary-btn book-a-consultation"
              onClick={handlButtonClick}
            >
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
                      <img
                        src={LearnMoreIcon}
                        alt="learn-more-icon"
                        className="learn-more-icon"
                      />
                      <p className="learn-more-text">Learn more</p>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-image service-card-image-mobile"
                      />
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
        <div className="free-proposal">
          <div className="free-proposal-content">
            <h3 className="free-proposal-title">Let's make things happen</h3>
            <p className="free-proposal-description">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="primary-btn free-proposal-btn">
              Get your proposal
            </button>
          </div>
        </div>
      </section>
      <section className="section case-studies">
        <div className="section-intro">
          <h2 className="title">Case Studies</h2>
          <p className="description">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="case-studies-content">
          <div className="case-studies-cards">
            <div className="case-studies-card">
              <p className="case-studies-card-description">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <div className="case-studies-card-footer">
                <p>Learn More</p>
                <img
                  src={LearnMoreIcon}
                  alt="learn-more-icon"
                  className="learn-more-icon"
                />
              </div>
            </div>
            <div className="divider"></div>
            <div className="case-studies-card">
              <p className="case-studies-card-description">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <div className="case-studies-card-footer">
                <p>Learn More</p>
                <img
                  src={LearnMoreIcon}
                  alt="learn-more-icon"
                  className="learn-more-icon"
                />
              </div>
            </div>
            <div className="divider"></div>
            <div className="case-studies-card">
              <p className="case-studies-card-description">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <div className="case-studies-card-footer">
                <p>Learn More</p>
                <img
                  src={LearnMoreIcon}
                  alt="learn-more-icon"
                  className="learn-more-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section case-studies">
        <div className="section-intro">
          <h2 className="title">Our Working Process</h2>
          <p className="description">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="working-process-content">
          <div className="working-process-cards">
            {workingProgressList.map((wp, index) => {
              const isOpen = openedWorkingProcessItem === index;
              return (
                <div
                  className={`working-process-card ${
                    isOpen ? "open" : "close"
                  }`}
                >
                  <div className="working-process-card-header">
                    <h4
                      className="working-process-title"
                      data-content={`${index + 1 < 10 ? "0" : ""}${index + 1}`}
                    >
                      {wp.title}
                    </h4>
                    <img
                      src={isOpen ? OutlinedMinusIcon : OutlinedPlusIcon}
                      alt="plus-icon"
                      className="working-process-expand-collapse-icon"
                      onClick={() =>
                        handleWorkingProcessExpandCollapse(
                          isOpen ? null : index
                        )
                      }
                    />
                  </div>
                  {openedWorkingProcessItem == index && (
                    <div className="working-process-content">
                      <div className="divider"> </div>
                      <p className="working-process-description">
                        {wp.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section teams">
        <div className="section-intro">
          <h2 className="title">Team</h2>
          <p className="description">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="team-cards">
          {teamList.map((person) => {
            return (
              <div className="team-card">
                <div className="team-card-header">
                  <div className="team-profile-photo">
                    <div className="profile-image-container">
                      <img
                        src={LinkedinLogo}
                        alt="Profile Picture"
                        className="profile-image"
                      />
                      <div className="background-shape"></div>
                    </div>
                  </div>
                  <div className="team-profile-details">
                    <div className="team-linkedin-logo-wrapper">
                      <img
                        src={LinkedinLogo}
                        alt="team-linkedin-logo"
                        className="team-card-linkedin-logo"
                      />
                    </div>
                    <div className="team-profile-info">
                      <h5 className="team-profile-title">{person.name}</h5>
                      <p className="team-profile-description">
                        {person.designation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="team-card-body">
                  <div className="divider"></div>
                  <p className="team-profile-summary">{person.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="team-footer">
          <button className="primary-btn see-all-team-btn">See all team</button>
        </div>
      </section>
      <section className="section contact-us">
        <div className="section-intro">
          <h2 className="title">Contact Us</h2>
          <p className="description">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div>
          <div className="contact-us-content">
            <form className="contact-us-form">
              <div className="radio-buttons">
                <label>
                  <input type="radio" name="contact-type" value="hi" />
                  Say Hi
                </label>
                <label>
                  <input type="radio" name="contact-type" value="quote" />
                  Get a Quote
                </label>
              </div>
              <div className="input-fields">
                <div>
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <label>Email *</label>
                  <input type="email" required placeholder="Email" />
                </div>
                <div>
                  <label>Message *</label>
                  <textarea rows={10} required placeholder="Message" />
                </div>
              </div>
              <button type="submit" className="primary-btn">
                Send Message
              </button>
            </form>
            <div className="contact-us-img">
              <img src={ContactUsImage} alt="bg-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
