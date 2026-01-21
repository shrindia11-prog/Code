import React, { useState } from "react";
import { 
  CheckCircle2, ArrowLeft, ShieldCheck, BookOpen, FileText, 
  Users, Settings, ClipboardCheck, Briefcase, GraduationCap
} from "lucide-react";
import { Card } from "@/components/ui/card";

// --- VIDEO HEADER COMPONENT ---
const VideoHeader = () => (
  <div className="video-header-container">
    <div className="video-wrapper">
      {/* <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video-element"
      >
        <source src="/Logo_Creation_Request.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="video-gradient-overlay"></div>
    </div>
  </div>
);

const Services = () => {
  const [view, setView] = useState('main'); 
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const consultancyContent = {
    "ISO 9001": {
      mainTitle: "ISO 9001 Quality Management System",
      tabs: [
        { 
          title: "Gap Assessment", 
          icon: ShieldCheck, 
          content: "At IMC, we believe that effective implementation of ISO 9001 is key to building a strong Quality Management System, achieving organizational excellence, and enhancing customer satisfaction. As part of our ISO 9001 consultancy services, we offer professional Gap Assessment services to:", 
          points: [
            "Systematically evaluate your organisations existing processes and practices against ISO 9001 requirements", 
            "Identify compliance gaps and improvement opportunities", 
            "Provide practical and actionable recommendations to achieve full conformity with the standard", 
            "Strengthen your overall quality management framework",
            "Develop a clear and structured roadmap toward ISO 9001 certification and continual improvement"
          ] 
        },
        { 
          title: "Awareness Training", 
          icon: BookOpen, 
          content: "IMC offers specialized ISO 9001 Awareness Training to help organizations build a strong quality culture by:", 
          points: [
            "Explaining ISO 9001 requirements in a simple and clear way", 
            "Showing how these requirements apply to day-to-day work", 
            "Helping employees understand how they can support system implementation", 
            "Explaining the benefits of ISO 9001 certification",
            "Promoting continual improvement and overall business excellence"
          ] 
        },
        { 
          title: "Providing Required Documents", 
          icon: FileText, 
          content: "IMC supports organizations by preparing and reviewing the documents required for ISO 9001 implementation. Our consultancy services include:", 
          points: [
            "Preparing new policies and procedures as per ISO 9001 requirements", 
            "Revising or reviewing existing documents to match standard requirements and your business practices", 
            "Developing key documents such as the Quality Policy and Quality Manual", 
            "Creating standard operating procedures (SOPs), risk assessment documents",
            "Providing formats and templates required for system implementation and maintenance"
          ] 
        },
        { 
          title: "Internal Auditor Training", 
          icon: Users, 
          content: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability by providing:", 
          points: [
            "Clear explanation of ISO 9001 requirements and internal auditing principles", 
            "Practical training on audit planning and preparation of checklists", 
            "Hands-on experience through mock audits and audit evidence collection", 
            "Guidance on audit documentation, note-taking, and report writing",
            "Skills to identify nonconformities and improvement opportunities for continual improvement"
          ] 
        },
        { 
          title: "Implementation Support", 
          icon: Settings, 
          content: "IMC provides practical implementation support to help organizations set up an effective Quality Management System (QMS):", 
          points: [
            "Design a QMS tailored to your organization's size, industry, and processes", 
            "Ensure full alignment with ISO 9001 requirements", 
            "Cover all key quality-related processes and controls", 
            "Provide hands-on guidance throughout the implementation process",
            "Work closely with your team to ensure smooth adoption and effective operation"
          ] 
        },
        { 
          title: "AMC for Certificate Maintenance", 
          icon: ClipboardCheck, 
          content: "IMC offers Annual Maintenance Contract (AMC) services to help organizations maintain their ISO certification by:", 
          points: [
            "Reviewing and modifying policies, procedures, and records as required", 
            "Conducting internal audits through experienced and qualified Lead Auditors", 
            "Supporting closure of non-conformities and preparation for external surveillance and certification audits", 
            "Assisting in conducting Management Review Meetings as per organizational practices",
            "Ensuring continued compliance with ISO standards and smooth certificate renewal"
          ] 
        },
        { 
          title: "MR as a Service", 
          icon: Briefcase, 
          content: "IMC offers \"Management Representative (MR) as a Service\" to provide continuous support for your Quality Management System:", 
          points: [
            "Provide a dedicated and experienced Lead Auditor to act as your Management Representative", 
            "Support your organization during external and surveillance audits", 
            "Guide your team on ISO 9001 requirements and best practices", 
            "Monitor implementation and ongoing compliance of the QMS",
            "Offer continuous support, not just a one-time consultancy engagement"
          ] 
        }
      ]
    },
    "ISO 27001": {
      mainTitle: "ISO 27001 Information Security Management System",
      tabs: [
        { 
          title: "Gap Assessment", 
          icon: ShieldCheck, 
          content: "At IMC, we believe that effective implementation of ISO 27001 is key to building a strong Information Security Management System that preserves the Confidentiality, Integrity and Availability of information by applying risk management process and gives confidence to interested parties that risks are adequately managed. As part of our ISO 27001 consultancy services, we offer professional Gap Assessment services to:", 
          points: [
            "Systematically evaluate your organisations existing processes and practices against ISO 27001 requirements", 
            "Identify compliance gaps and improvement opportunities", 
            "Provide practical and actionable recommendations to achieve full conformity with the standard", 
            "Strengthen your overall Information Security Management framework",
            "Develop a clear and structured roadmap toward ISO 27001 certification and continual improvement"
          ] 
        },
        { 
          title: "Awareness Training", 
          icon: BookOpen, 
          content: "IMC offers specialized ISO 27001 Awareness Training to help organizations build a strong Information security culture by:", 
          points: [
            "Explaining ISO 27001 requirements in a simple and clear way", 
            "Showing how these requirements apply to day-to-day work", 
            "Helping employees understand how they can support system implementation", 
            "Explaining the benefits of ISO 27001 certification"
          ] 
        },
        { 
          title: "Providing Required Documents", 
          icon: FileText, 
          content: "IMC supports organizations by preparing and reviewing the documents required for ISO 27001 implementation. Our consultancy services include:", 
          points: [
            "Preparing new policies and procedures as per ISO 27001 requirements", 
            "Revising or reviewing existing documents to match standard requirements and your business practices", 
            "Developing key documents such as the ISMS Policy and ISMS Manual, SOA", 
            "Creating standard operating procedures (SOPs), risk assessment documents",
            "Providing formats and templates required for system implementation and maintenance"
          ] 
        },
        { 
          title: "Internal Auditor Training", 
          icon: Users, 
          content: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability by providing:", 
          points: [
            "Clear explanation of ISO 27001 requirements and internal auditing principles", 
            "Practical training on audit planning and preparation of checklists", 
            "Hands-on experience through mock audits and audit evidence collection", 
            "Guidance on audit documentation, note-taking, and report writing",
            "Skills to identify nonconformities and improvement opportunities for continual improvement"
          ] 
        },
        { 
          title: "Implementation Support", 
          icon: Settings, 
          content: "IMC provides practical implementation support to help organizations set up an effective Information Security Management System (ISMS):", 
          points: [
            "Design an ISMS tailored to your organization's size, industry, and processes", 
            "Ensure full alignment with ISO 27001 requirements", 
            "Cover all key quality-related processes and controls", 
            "Provide hands-on guidance throughout the implementation process",
            "Work closely with your team to ensure smooth adoption and effective operation"
          ] 
        },
        { 
          title: "AMC for Certificate Maintenance", 
          icon: ClipboardCheck, 
          content: "IMC offers Annual Maintenance Contract (AMC) services to help organizations maintain their ISO certification by:", 
          points: [
            "Reviewing and modifying policies, procedures, and records as required", 
            "Conducting internal audits through experienced and qualified Lead Auditors", 
            "Supporting closure of non-conformities and preparation for external surveillance and certification audits", 
            "Assisting in conducting Management Review Meetings as per organizational practices",
            "Ensuring continued compliance with ISO standards and smooth certificate renewal"
          ] 
        },
        { 
          title: "MR as a Service", 
          icon: Briefcase, 
          content: "IMC offers \"Management Representative (MR) as a Service\" to provide continuous support for your Information Security Management System:", 
          points: [
            "Provide a dedicated and experienced Lead Auditor to act as your Management Representative", 
            "Support your organization during external and surveillance audits", 
            "Guide your team on ISO 27001 requirements and best practices", 
            "Monitor implementation and ongoing compliance of the ISMS",
            "Offer continuous support, not just a one-time consultancy engagement"
          ] 
        }
      ]
    },
    "ISO 14001": {
      mainTitle: "ISO 14001 Environmental Management System",
      tabs: [
        { 
          title: "Gap Assessment", 
          icon: ShieldCheck, 
          content: "At IMC, we believe that effective implementation of ISO 14001 is key to building a strong Environmental Management System to enhance environmental performance, fulfilment of compliance obligations. As part of our ISO 14001 consultancy services, we offer professional Gap Assessment services to:", 
          points: [
            "Systematically evaluate your organisations existing processes and practices against ISO 14001 requirements", 
            "Identify compliance gaps and improvement opportunities", 
            "Provide practical and actionable recommendations to achieve full conformity with the standard", 
            "Strengthen your overall Environmental management framework",
            "Develop a clear and structured roadmap toward ISO 14001 certification"
          ] 
        },
        { 
          title: "Awareness Training", 
          icon: BookOpen, 
          content: "IMC offers specialized ISO 14001 Awareness Training to help organizations build a strong Environmental Management culture by:", 
          points: [
            "Explaining ISO 14001 requirements in a simple and clear way", 
            "Showing how these requirements apply to day-to-day work", 
            "Helping employees understand how they can support system implementation", 
            "Explaining the benefits of ISO 14001 certification"
          ] 
        },
        { 
          title: "Providing Required Documents", 
          icon: FileText, 
          content: "IMC supports organizations by preparing and reviewing the documents required for ISO 14001 implementation. Our consultancy services include:", 
          points: [
            "Preparing new policies and procedures as per ISO 14001 requirements", 
            "Revising or reviewing existing documents to match standard requirements and your business practices", 
            "Developing key documents such as the Environmental Policy and EMS Manual", 
            "Creating standard operating procedures (SOPs), risk assessment documents",
            "Providing formats and templates required for system implementation and maintenance"
          ] 
        },
        { 
          title: "Internal Auditor Training", 
          icon: Users, 
          content: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability by providing:", 
          points: [
            "Clear explanation of ISO 14001 requirements and internal auditing principles", 
            "Practical training on audit planning and preparation of checklists", 
            "Hands-on experience through mock audits and audit evidence collection", 
            "Guidance on audit documentation, note-taking, and report writing",
            "Skills to identify nonconformities and improvement opportunities for continual improvement"
          ] 
        },
        { 
          title: "Implementation Support", 
          icon: Settings, 
          content: "IMC provides practical implementation support to help organizations set up an effective Environmental Management System (EMS):", 
          points: [
            "Design a EMS tailored to your organization's size, industry, and processes", 
            "Ensure full alignment with ISO 14001 requirements", 
            "Cover all key Environment-related processes", 
            "Provide hands-on guidance throughout the implementation process",
            "Work closely with your team to ensure smooth adoption and effective operation"
          ] 
        },
        { 
          title: "AMC for Certificate Maintenance", 
          icon: ClipboardCheck, 
          content: "IMC offers Annual Maintenance Contract (AMC) services to help organizations maintain their ISO certification by:", 
          points: [
            "Reviewing and modifying policies, procedures, and records as required", 
            "Conducting internal audits through experienced and qualified Lead Auditors", 
            "Supporting closure of non-conformities and preparation for external surveillance and certification audits", 
            "Assisting in conducting Management Review Meetings as per organizational practices",
            "Ensuring continued compliance with ISO standards and smooth certificate renewal"
          ] 
        },
        { 
          title: "MR as a Service", 
          icon: Briefcase, 
          content: "IMC offers \"Management Representative (MR) as a Service\" to provide continuous support for your Environmental Management System:", 
          points: [
            "Provide a dedicated and experienced Lead Auditor to act as your Management Representative", 
            "Support your organization during external and surveillance audits", 
            "Guide your team on ISO 14001 requirements and best practices", 
            "Monitor implementation and ongoing compliance of the EMS",
            "Offer continuous support, not just a one-time consultancy engagement"
          ] 
        }
      ]
    },
    "ISO 45001": {
      mainTitle: "ISO 45001 Occupational Health and Safety Management System",
      tabs: [
        { 
          title: "Gap Assessment", 
          icon: ShieldCheck, 
          content: "At IMC, we believe that effective implementation of ISO 45001 is key to building a strong Occupational Health and Safety Management System to enable organisation to provide safe and healthy work places, prevent work-related injury and ill health, and continually improve its OH&S performance. As part of our ISO 45001 consultancy services, we offer professional Gap Assessment services to:", 
          points: [
            "Systematically evaluate your organisations existing processes and practices against ISO 45001 requirements", 
            "Identify compliance gaps and improvement opportunities", 
            "Provide practical and actionable recommendations to achieve full conformity with the standard", 
            "Strengthen your overall Occupational Health and Safety Management framework",
            "Develop a clear and structured roadmap toward ISO 45001 certification"
          ] 
        },
        { 
          title: "Awareness Training", 
          icon: BookOpen, 
          content: "IMC offers specialized ISO 45001 Awareness Training to help organizations build a strong Occupational Healthy culture by:", 
          points: [
            "Explaining ISO 45001 requirements in a simple and clear way", 
            "Showing how these requirements apply to day-to-day work", 
            "Helping employees understand how they can support system implementation", 
            "Explaining the benefits of ISO 45001 certification"
          ] 
        },
        { 
          title: "Providing Required Documents", 
          icon: FileText, 
          content: "IMC supports organizations by preparing and reviewing the documents required for ISO 45001 implementation. Our consultancy services include:", 
          points: [
            "Preparing new policies and procedures as per ISO 45001 requirements", 
            "Revising or reviewing existing documents to match standard requirements and your business practices", 
            "Developing key documents such as the OHS Policy and OHS Manual", 
            "Creating standard operating procedures (SOPs), risk assessment documents",
            "Providing formats and templates required for system implementation and maintenance"
          ] 
        },
        { 
          title: "Internal Auditor Training", 
          icon: Users, 
          content: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability by providing:", 
          points: [
            "Clear explanation of ISO 45001 requirements and internal auditing principles", 
            "Practical training on audit planning and preparation of checklists", 
            "Hands-on experience through mock audits and audit evidence collection", 
            "Guidance on audit documentation, note-taking, and report writing",
            "Skills to identify nonconformities and improvement opportunities for continual improvement"
          ] 
        },
        { 
          title: "Implementation Support", 
          icon: Settings, 
          content: "IMC provides practical implementation support to help organizations set up an effective Occupational Health and Safety Management System (OHSMS):", 
          points: [
            "Design an OHSMS tailored to your organization's size, industry, and processes", 
            "Ensure full alignment with ISO 45001 requirements", 
            "Cover all key Health related processes", 
            "Provide hands-on guidance throughout the implementation process",
            "Work closely with your team to ensure smooth adoption and effective operation"
          ] 
        },
        { 
          title: "AMC for Certificate Maintenance", 
          icon: ClipboardCheck, 
          content: "IMC offers Annual Maintenance Contract (AMC) services to help organizations maintain their ISO certification by:", 
          points: [
            "Reviewing and modifying policies, procedures, and records as required", 
            "Conducting internal audits through experienced and qualified Lead Auditors", 
            "Supporting closure of non-conformities and preparation for external surveillance and certification audits", 
            "Assisting in conducting Management Review Meetings as per organizational practices",
            "Ensuring continued compliance with ISO standards and smooth certificate renewal"
          ] 
        },
        { 
          title: "MR as a Service", 
          icon: Briefcase, 
          content: "IMC offers \"Management Representative (MR) as a Service\" to provide continuous support for your Occupational Health and Safety Management System:", 
          points: [
            "Provide a dedicated and experienced Lead Auditor to act as your Management Representative", 
            "Support your organization during external and surveillance audits", 
            "Guide your team on ISO 45001 requirements and best practices", 
            "Monitor implementation and ongoing compliance of the OHSMS",
            "Offer continuous support, not just a one-time consultancy engagement"
          ] 
        }
      ]
    }
  };

  const trainingContent = {
    "Awareness Training - Individual": {
      mainTitle: "Awareness Training - ISO 9001/14001/45001/27001",
      description: "IMC offers specialized Awareness Training to help organizations build a strong Management culture",
      courseContent: [
        {
          topic: "Introduction to Management Systems & ISO Standards",
          points: [
            "Purpose and benefits of ISO standards",
            "Overview of IMS approach",
            "Overview of Standard"
          ]
        },
        {
          topic: "Key Requirements of the Standards",
          points: [
            "Policy, objectives, and leadership commitment",
            "Risk-based thinking and controls",
            "Documentation and records"
          ]
        },
        {
          topic: "Roles & Responsibilities of Employees",
          points: [
            "How employees contribute to compliance",
            "Do's and Don'ts in daily activities"
          ]
        },
        {
          topic: "Process Approach & Continual Improvement",
          points: [
            "PDCA cycle",
            "Corrective actions and improvement culture"
          ]
        },
        {
          topic: "Compliance & Certification Overview",
          points: [
            "Internal audits and management review",
            "Certification process and surveillance audits"
          ]
        },
        {
          topic: "Additional Topics",
          points: [
            "Benefits to Organization & Employees",
            "Common Non-conformities & Best Practices",
            "Questions & Discussion"
          ]
        }
      ]
    },
    "IMS Awareness Training": {
      mainTitle: "IMS Awareness Training - ISO 9001, 14001, 45001 & 27001",
      description: "IMC offers specialized Awareness Training to help organizations build a strong Management culture",
      courseContent: [
        {
          topic: "Introduction to Management Systems & ISO Standards",
          points: [
            "Purpose and benefits of ISO standards",
            "Overview of IMS approach"
          ]
        },
        {
          topic: "Overview of Each Standard",
          points: [
            "ISO 9001 – Quality Management System",
            "ISO 14001 – Environmental Management System",
            "ISO 45001 – Occupational Health & Safety Management System",
            "ISO 27001 – Information Security Management System"
          ]
        },
        {
          topic: "Key Requirements of the Standards",
          points: [
            "Policy, objectives, and leadership commitment",
            "Risk-based thinking and controls",
            "Documentation and records"
          ]
        },
        {
          topic: "Roles & Responsibilities of Employees",
          points: [
            "How employees contribute to compliance",
            "Do's and Don'ts in daily activities"
          ]
        },
        {
          topic: "Process Approach & Continual Improvement",
          points: [
            "PDCA cycle",
            "Corrective actions and improvement culture"
          ]
        },
        {
          topic: "Compliance & Certification Overview",
          points: [
            "Internal audits and management review",
            "Certification process and surveillance audits"
          ]
        },
        {
          topic: "Additional Topics",
          points: [
            "Benefits to Organization & Employees",
            "Common Non-conformities & Best Practices",
            "Questions & Discussion"
          ]
        }
      ]
    },
    "Internal Auditor - Individual": {
      mainTitle: "Internal Auditor Training - ISO 9001/14001/45001/27001",
      description: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability",
      courseContent: [
        {
          topic: "Introduction to Internal Auditing",
          points: [
            "Purpose of internal audits",
            "Overview of IMS and ISO standards"
          ]
        },
        {
          topic: "Overview of ISO Standards Requirements",
          points: [
            "Key clauses of ISO 9001/ ISO 14001/ ISO 45001/ ISO 27001",
            "Common and specific requirements"
          ]
        },
        {
          topic: "Audit Principles & Auditor Competence",
          points: [
            "Auditor roles and ethics",
            "Audit types and audit program"
          ]
        },
        {
          topic: "Audit Planning & Preparation",
          points: [
            "Defining scope and criteria",
            "Preparing audit plans and checklists"
          ]
        },
        {
          topic: "Conducting the Audit",
          points: [
            "Opening meeting",
            "Interview techniques",
            "Evidence collection and sampling"
          ]
        },
        {
          topic: "Identifying & Classifying Findings",
          points: [
            "Conformities, non-conformities, and observations"
          ]
        },
        {
          topic: "Audit Documentation & Reporting",
          points: [
            "Audit notes",
            "Writing clear audit reports"
          ]
        },
        {
          topic: "Corrective Actions & Follow-up",
          points: [
            "Root cause analysis",
            "Verification of effectiveness"
          ]
        },
        {
          topic: "Practical Application",
          points: [
            "Mock Audit / Case Study",
            "Questions & Discussion"
          ]
        }
      ]
    },
    "Internal Auditor - IMS": {
      mainTitle: "Internal Auditor Training (IMS) - ISO 9001, 14001, 45001 & 27001",
      description: "IMC offers Internal Auditor Training to help organizations develop strong internal auditing capability",
      courseContent: [
        {
          topic: "Introduction to Internal Auditing & IMS",
          points: [
            "Purpose of internal audits",
            "Overview of IMS and ISO standards"
          ]
        },
        {
          topic: "Overview of ISO Standards Requirements",
          points: [
            "Key clauses of ISO 9001, 14001, 45001, 27001",
            "Common and specific requirements"
          ]
        },
        {
          topic: "Audit Principles & Auditor Competence",
          points: [
            "Auditor roles and ethics",
            "Audit types and audit program"
          ]
        },
        {
          topic: "Audit Planning & Preparation",
          points: [
            "Defining scope and criteria",
            "Preparing audit plans and checklists"
          ]
        },
        {
          topic: "Conducting the Audit",
          points: [
            "Opening meeting",
            "Interview techniques",
            "Evidence collection and sampling"
          ]
        },
        {
          topic: "Identifying & Classifying Findings",
          points: [
            "Conformities, non-conformities, and observations"
          ]
        },
        {
          topic: "Audit Documentation & Reporting",
          points: [
            "Audit notes",
            "Writing clear audit reports"
          ]
        },
        {
          topic: "Corrective Actions & Follow-up",
          points: [
            "Root cause analysis",
            "Verification of effectiveness"
          ]
        },
        {
          topic: "Practical Application",
          points: [
            "Mock Audit / Case Study",
            "Questions & Discussion"
          ]
        }
      ]
    },
    "DPDPA Awareness": {
      mainTitle: "DPDPA Awareness Training",
      description: "IMC offers DPDPA Awareness Training, to help employees understand the requirements of the Digital Personal Data Protection Act and their roles in protecting personal data. It enables organizations to reduce compliance risks and ensure lawful and secure handling of personal information.",
      courseContent: [
        {
          topic: "Introduction to Digital Personal Data Protection Act (DPDPA)",
          points: [
            "Purpose and scope of the Act",
            "Key definitions and concepts"
          ]
        },
        {
          topic: "Personal Data and Data Processing",
          points: [
            "What is personal data and sensitive data",
            "Lawful processing and consent requirements"
          ]
        },
        {
          topic: "Rights and Duties",
          points: [
            "Rights of data principals (individuals)",
            "Responsibilities of data fiduciaries and processors"
          ]
        },
        {
          topic: "Compliance Requirements",
          points: [
            "Key obligations under DPDPA",
            "Data protection measures and record keeping"
          ]
        },
        {
          topic: "Data Breaches and Incident Handling",
          points: [
            "What is a data breach",
            "Reporting and response requirements"
          ]
        },
        {
          topic: "Additional Topics",
          points: [
            "Penalties and Consequences of Non-Compliance",
            "Practical Examples and Best Practices",
            "Roles of Employees in Data Protection",
            "Questions & Answers / Discussion"
          ]
        }
      ]
    }
  };

  const GoldUnderline = () => (
    <div className="gold-underline"></div>
  );

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setActiveTab(0);
    setView('detail');
  };

  const handleTrainingClick = (training) => {
    setSelectedTopic(training);
    setView('training-detail');
  };

  return (
    <div className="services-page-container">
      <div className="services-content-wrapper">
        
        <VideoHeader />

        <div className="services-main-content">
            {view !== 'main' && (
            <button 
                onClick={() => {
                  if (view === 'detail' || view === 'training-detail') {
                    setView(view === 'detail' ? 'consultancy-topics' : 'training-topics');
                  } else {
                    setView('main');
                  }
                }}
                className="back-button"
            >
                <ArrowLeft size={16} /> Back
            </button>
            )}

            {/* --- LEVEL 1: MAIN SERVICES --- */}
            {view === 'main' && (
            <div className="main-services-view">
                <div className="heading-with-underline">
                    <h1 className="main-heading">Our Core Services</h1>
                    <GoldUnderline />
                </div>

                <div className="services-grid">
                <Card 
                    onClick={() => setView('consultancy-topics')} 
                    className="service-card service-card-active"
                >
                    <Briefcase className="service-icon" size={48} strokeWidth={1.5} />
                    <h2 className="service-title">Consultancy Services</h2>
                    <p className="service-description">
                    Expert guidance on ISO standards implementation and certification.
                    </p>
                </Card>

                <Card 
                    onClick={() => setView('training-topics')}
                    className="service-card service-card-active"
                >
                    <GraduationCap className="service-icon" size={48} strokeWidth={1.5} />
                    <h2 className="service-title">Training Services</h2>
                    <p className="service-description">
                    Professional awareness and internal auditor certification programs.
                    </p>
                </Card>
                </div>
            </div>
            )}

            {/* --- LEVEL 2: CONSULTANCY TOPICS --- */}
            {view === 'consultancy-topics' && (
            <div className="consultancy-topics-view">
                <div className="heading-with-underline-small">
                    <h1 className="topics-heading">Consultancy Topics</h1>
                    <GoldUnderline />
                </div>
                <div className="topics-grid">
                {Object.keys(consultancyContent).map((topic) => (
                    <Card 
                    key={topic}
                    onClick={() => handleTopicClick(topic)}
                    className="topic-card"
                    >
                    <span className="topic-name">{topic}</span>
                    </Card>
                ))}
                </div>
            </div>
            )}

            {/* --- LEVEL 2: TRAINING TOPICS --- */}
            {view === 'training-topics' && (
            <div className="consultancy-topics-view">
                <div className="heading-with-underline-small">
                    <h1 className="topics-heading">Training Programs</h1>
                    <GoldUnderline />
                </div>
                <div className="topics-grid">
                {Object.keys(trainingContent).map((training) => (
                    <Card 
                    key={training}
                    onClick={() => handleTrainingClick(training)}
                    className="topic-card"
                    >
                    <span className="topic-name">{training}</span>
                    </Card>
                ))}
                </div>
            </div>
            )}

            {/* --- LEVEL 3: CONSULTANCY DETAIL VIEW --- */}
            {view === 'detail' && selectedTopic && (
            <div className="detail-view">
                <h1 className="detail-heading">{consultancyContent[selectedTopic].mainTitle}</h1>
                
                <div className="tabs-container">
                {consultancyContent[selectedTopic].tabs.map((item, idx) => (
                    <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`tab-button ${activeTab === idx ? 'tab-button-active' : ''}`}
                    >
                    {item.title}
                    </button>
                ))}
                </div>

                <Card className="detail-card">
                <div className="detail-card-content">
                    <div className="detail-header">
                    <div className="detail-icon-wrapper">
                        {React.createElement(consultancyContent[selectedTopic].tabs[activeTab].icon, { size: 24 })}
                    </div>
                    <h2 className="detail-title">{consultancyContent[selectedTopic].tabs[activeTab].title}</h2>
                    </div>

                    <p className="detail-description">
                    {consultancyContent[selectedTopic].tabs[activeTab].content}
                    </p>

                    <div className="detail-points-grid">
                    {consultancyContent[selectedTopic].tabs[activeTab].points.map((point, i) => (
                        <div key={i} className="detail-point-item">
                        <div className="detail-point-icon">
                            <CheckCircle2 size={14} className="check-icon" />
                        </div>
                        <span className="detail-point-text">{point}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </Card>
            </div>
            )}

            {/* --- LEVEL 3: TRAINING DETAIL VIEW --- */}
            {view === 'training-detail' && selectedTopic && trainingContent[selectedTopic] && (
            <div className="detail-view">
                <h1 className="detail-heading">{trainingContent[selectedTopic].mainTitle}</h1>
                
                <Card className="detail-card">
                <div className="detail-card-content">
                    <div className="detail-header">
                    <div className="detail-icon-wrapper">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="detail-title">Course Overview</h2>
                    </div>

                    <div className="training-description-box">
                    <p className="training-description-text">
                        {trainingContent[selectedTopic].description}
                    </p>
                    </div>

                    <div className="training-content-section">
                    <h3 className="course-content-heading">Course Content</h3>
                    <div className="training-modules-container">
                        {trainingContent[selectedTopic].courseContent.map((section, idx) => (
                        <div key={idx} className="training-topic-module">
                            <div className="training-topic-header">
                            <div className="topic-number">{idx + 1}</div>
                            <h4 className="training-topic-title">{section.topic}</h4>
                            </div>
                            <div className="training-topic-content">
                            {section.points.map((point, i) => (
                                <div key={i} className="training-content-point">
                                <span className="point-bullet">•</span>
                                <span className="point-text">{point}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </Card>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Services;