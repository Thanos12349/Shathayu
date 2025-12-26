import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import InfoBlock from "../components/InfoBlock";
import BenefitCard from "../components/BenefitCard";
import ListSection from "../components/ListSection";
import PlanCard from "../components/PlanCard";
import DaySchedule from "../components/DaySchedule";
import TimelineTable from "../components/TimelineTable";
import PropHeroSection from "../components/PropHeroSection";
import "../Styles/panchakarma.css";

const PainManagementPage = () => {

  const benefits = [
    "Reduces chronic pain",
    "Improves joint mobility",
    "Relieves back & neck stiffness",
    "Strengthens muscles",
    "Supports arthritis & spondylitis",
  ];

  const includes = [
    "Stay + sattvic meals included",
    "Daily pain-relief Ayurvedic therapies",
    "Physiotherapy & posture correction",
    "Potli, Kizhi & Pizhichil therapies",
    "Herbal pain-relief oils",
  ];

  const plansData = [
    {
      planTitle: "3-Day Pain Management Program",
      planDesc: "Initial pain relief & muscle relaxation",
      days: [
        {
          day: "Therapies",
          activities: [
            "Pain consultation & assessment",
            "Abhyanga (therapeutic oil massage)",
            "Potli massage for pain relief",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Pain Management Program",
      planDesc: "Deep pain relief & mobility improvement",
      days: [
        {
          day: "Includes everything in 3-Day +",
          activities: [
            "Pizhichil warm oil bath",
            "Guided physiotherapy sessions",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Advanced Pain Management",
      planDesc: "Long-term relief & functional recovery",
      days: [
        {
          day: "Includes everything in 5-Day +",
          activities: [
            "Njavarakizhi therapy",
            "Joint-strengthening yoga",
            "Corrective movement training",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "7:00 – 8:00 AM", activity: "Pain-relief stretches & mobility exercises" },
    { time: "10:00 – 11:30 AM", activity: "Pain therapy (Potli / Pizhichil)" },
    { time: "3:00 – 4:00 PM", activity: "Physiotherapy & posture correction" },
    { time: "6:00 – 7:00 PM", activity: "Mind–body relaxation & gentle breathing" },
  ];

  return (
    <>
      <Header />
      <PropHeroSection
        title="Advanced Physiotherapy & Wellness Care"
        description="Personalized physiotherapy programs designed to restore mobility, reduce pain, and improve your quality of life."
        image="/images/banner-1-scaled.jpg"
      />

      <div className="panchakarma-page">

        <SectionHeader
          title="Pain Management Program"
          subtitle="Ayurvedic healing combined with physiotherapy"
          Desc="A therapeutic program designed to address chronic pain, joint stiffness, muscle fatigue, and age-related degeneration through a combination of Ayurvedic therapies and physiotherapy-based rehabilitation."
        />

        <InfoBlock text="This program focuses on reducing pain at the root cause, improving joint mobility, strengthening muscles, and restoring functional movement through personalized therapy plans." />

        <SectionHeader title="Program Benefits" />
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <BenefitCard key={i} benefit={b} />
          ))}
        </div>

        <SectionHeader title="What’s Included" />
        <ListSection items={includes} />

        <SectionHeader title="Program Options" />
        <div className="plan-grid">
          <PlanCard title="3-Day Pain Relief" description="Initial pain reduction & relaxation" />
          <PlanCard title="5-Day Pain Therapy" description="Improved mobility & strength" />
          <PlanCard
            title="7-Day Advanced Recovery"
            description="Long-term pain management & rehabilitation"
            highlight
          />
        </div>

        <DaySchedule
          title="Pain Management Program Details"
          subtitle="Therapy-wise breakdown of each plan"
          plans={plansData}
        />

        <SectionHeader title="Sample Daily Schedule" />
        <TimelineTable timeline={timeline} />

      </div>

      <Footer />
    </>
  );
};

export default PainManagementPage;
