import { Shield, Award, Target, GraduationCap, Wrench, Sparkles, RefreshCw, Handshake } from "lucide-react";

const About = () => {
  const whyChooseItems = [
    { Icon: GraduationCap, text: "Certified Lead Auditors in ISO standards and privacy laws" },
    { Icon: Wrench, text: "Hands-on, Practical Implementation" },
    { Icon: Sparkles, text: "Simple & Business-Friendly Approach" },
    { Icon: RefreshCw, text: "End-to-End Compliance Support" },
    { Icon: Handshake, text: "Long-Term Partnership" }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Neumorphic Header */}
        <div className="about-header">
          <div className="about-header-card">
            <h1 className="about-main-title">
              About Us
            </h1>
            <div className="about-title-underline" />
          </div>
        </div>

        <div className="about-grid">
          
          {/* Left Column - Logo and Why Choose IMC */}
          <div className="about-left-column">
            
            {/* Logo Card */}
            <div className="about-logo-card">
              <div className="about-logo-wrapper">
                <img
                  src="https://ik.imagekit.io/meznljfns/logo.png?updatedAt=1767541764225"
                  alt="Infinitii Management Consulting Logo"
                  className="about-logo-image"
                />
              </div>

              <p className="about-logo-text">
                Strong Systems.
                <br />
                Expert Consultancy.
              </p>
            </div>

            {/* Why Choose IMC Card */}
            <div className="about-why-choose-card">
              <div className="about-card-header">
                <div className="about-icon-box about-icon-gold">
                  <Award className="about-icon" />
                </div>
                <h2 className="about-card-title">
                  Why Choose IMC
                </h2>
              </div>

              <div className="about-card-content">
                <div className="about-list">
                  {whyChooseItems.map((item, index) => {
                    const Icon = item.Icon;
                    return (
                      <div key={index} className="about-list-item">
                        <div className="about-list-icon">
                          <Icon className="about-icon-small" />
                        </div>
                        <p className="about-list-text">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Content Cards */}
          <div className="about-right-column">
            
            {/* Who We Are */}
            <article className="about-content-card">
              <div className="about-card-header">
                <div className="about-icon-box about-icon-navy">
                  <Target className="about-icon-white" />
                </div>
                <h2 className="about-card-title">
                  Who We Are
                </h2>
              </div>

              <div className="about-card-content">
                <p className="about-text">
                  Infinitii Management Consulting Services is a specialized
                  consulting firm providing end-to-end support in management
                  systems, information security, and data privacy compliance.
                </p>
              </div>
            </article>

            {/* Our Mission */}
            <article className="about-content-card">
              <div className="about-card-header">
                <div className="about-icon-box about-icon-gold">
                  <Award className="about-icon" />
                </div>
                <h2 className="about-card-title">
                  Our Mission
                </h2>
              </div>

              <div className="about-card-content">
                <p className="about-text">
                  As a trusted management consulting partner, we transform
                  strategic vision into practical, measurable, and long-term
                  business value by helping organizations build robust,
                  efficient, and audit-ready systems that enhance performance,
                  protect critical information assets, and ensure regulatory
                  compliance for sustainable growth and success.
                </p>
              </div>
            </article>

            {/* Our Expertise */}
            <article className="about-content-card">
              <div className="about-card-header">
                <div className="about-icon-box about-icon-navy">
                  <Shield className="about-icon-white" />
                </div>
                <h2 className="about-card-title">
                  Our Expertise
                </h2>
              </div>

              <div className="about-card-content">
                <p className="about-text">
                  Our consultants bring extensive hands-on implementation
                  experience across diverse industries and are certified Lead
                  Auditors in management systems and data privacy, with
                  professional exposure to accredited certification bodies.
                  This enables us to understand operational challenges and
                  audit expectations and deliver solutions that are practical,
                  effective, and fully prepared for successful certification.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;