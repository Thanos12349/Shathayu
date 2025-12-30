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

const WomensHormonalBalancePage = () => {

  const benefits = [
    "Balanced hormones",
    "Reduced PMS pain & discomfort",
    "Improved skin & emotional stability",
    "Better sleep quality",
    "Gentle fertility support",
  ];

  const includes = [
    "Stay + sattvic meals included",
    "Personalized hormone-balancing diet",
    "Shirodhara therapy",
    "Potli massage & Abhyanga",
    "Emotional wellness & counseling therapy",
  ];

  const plansData = [
    {
      planTitle: "3-Day Hormonal Balance Program",
      planDesc: "Initial hormone regulation & relaxation",
      days: [
        {
          day: "Therapies",
          activities: [
            "Hormone consultation & assessment",
            "Abhyanga (balancing oil massage)",
            "Shirodhara (nervous system calming)",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Hormonal Balance Program",
      planDesc: "Cycle support & emotional stability",
      days: [
        {
          day: "Includes everything in 3-Day +",
          activities: [
            "Potli therapy",
            "Herbal womb-support therapy",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Complete Hormonal Care",
      planDesc: "Deep hormone harmony & lifestyle reset",
      days: [
        {
          day: "Includes everything in 5-Day +",
          activities: [
            "Personalized nutrition therapy",
            "Yoga practices for hormonal balance",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "7:00 – 8:00 AM", activity: "Hormone-balancing yoga & gentle movement" },
    { time: "10:00 – 11:00 AM", activity: "Abhyanga therapy" },
    { time: "11:00 – 11:30 AM", activity: "Herbal steam therapy" },
    { time: "4:00 – 5:00 PM", activity: "Shirodhara session" },
    { time: "6:30 – 7:00 PM", activity: "Emotional meditation & relaxation" },
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
          title="Women’s Hormonal Balance Program"
          subtitle="Ayurvedic support for hormonal harmony & emotional wellness"
          Desc="A targeted Ayurvedic program designed to balance hormones, improve menstrual wellness, support PCOS/PCOD, and enhance emotional stability through personalized therapies, nutrition, and mindful practices."
        />

        <InfoBlock text="This program gently addresses hormonal imbalances at the root level, helping regulate cycles, improve sleep and mood, and support reproductive health in a safe and natural way." />

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
          <PlanCard title="3-Day Balance Reset" description="Initial hormonal calming" />
          <PlanCard title="5-Day Cycle Support" description="Emotional & physical balance" />
          <PlanCard
            title="7-Day Complete Hormonal Care"
            description="Deep hormone harmony & lifestyle reset"
            highlight
          />
        </div>

        <DaySchedule
          title="Hormonal Balance Program Details"
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

export default WomensHormonalBalancePage;
