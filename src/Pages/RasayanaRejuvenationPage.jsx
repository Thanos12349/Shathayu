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

const RasayanaRejuvenationPage = () => {

  const benefits = [
    "Improved skin glow",
    "Enhanced immunity",
    "Delayed ageing",
    "Increased vitality",
    "Mental clarity",
  ];

  const includes = [
    "Stay + sattvic meals included",
    "Abhyanga & Shirodhara therapies",
    "Njavarakizhi rejuvenation therapy",
    "Pizhichil warm oil rejuvenation bath",
    "Beauty & skin enhancement treatments",
  ];

  const plansData = [
    {
      planTitle: "3-Day Rasayana Rejuvenation",
      planDesc: "Quick vitality boost & skin glow",
      days: [
        {
          day: "Therapies",
          activities: [
            "Rejuvenation Abhyanga",
            "Glow-enhancing sattvic diet",
            "Facial & skin therapy",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Rasayana Rejuvenation",
      planDesc: "Deep tissue nourishment & radiance",
      days: [
        {
          day: "Includes everything in 3-Day +",
          activities: [
            "Njavarakizhi therapy",
            "Pizhichil rejuvenation oil bath",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Advanced Rasayana",
      planDesc: "Complete anti-ageing & cellular renewal",
      days: [
        {
          day: "Includes everything in 5-Day +",
          activities: [
            "Rasayana herbal formulations",
            "Advanced skincare & rejuvenation rituals",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "7:00 – 8:00 AM", activity: "Gentle yoga & mobility" },
    { time: "10:00 – 11:30 AM", activity: "Rejuvenation therapy session" },
    { time: "3:00 – 4:00 PM", activity: "Beauty & skin ritual" },
    { time: "6:00 – 7:00 PM", activity: "Sunset meditation & relaxation" },
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
          title="Rasayana – Anti-Ageing & Rejuvenation Program"
          subtitle="Luxury Ayurvedic rejuvenation for vitality & youthfulness"
          Desc="A premium Rasayana experience designed to reverse fatigue, enhance vitality, nourish tissues, and restore youthful energy through classical Ayurvedic rejuvenation therapies."
        />

        <InfoBlock text="This program focuses on cellular rejuvenation, immune enhancement, skin radiance, and mental clarity through personalized Rasayana therapies and mindful routines." />

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
          <PlanCard title="3-Day Rejuvenation" description="Glow & vitality boost" />
          <PlanCard title="5-Day Rejuvenation" description="Deep nourishment & radiance" />
          <PlanCard
            title="7-Day Rasayana"
            description="Complete anti-ageing renewal"
            highlight
          />
        </div>

        <DaySchedule
          title="Rasayana Program Details"
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

export default RasayanaRejuvenationPage;
