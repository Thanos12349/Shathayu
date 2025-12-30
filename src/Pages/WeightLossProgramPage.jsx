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

const WeightLossProgramPage = () => {

  const benefits = [
    "Natural fat loss",
    "Boosted metabolism",
    "Reduced bloating",
    "Stabilized hormones",
    "Long-term fat loss habits",
  ];

  const includes = [
    "Stay + sattvic meals included",
    "Fat-loss specific Ayurvedic therapies",
    "Udwarthana therapy + steam",
    "Fasting & diet guidance",
    "Fitness training & yoga",
  ];

  const plansData = [
    {
      planTitle: "3-Day Weight Loss Kickstart",
      planDesc: "Light detox & metabolic activation",
      days: [
        {
          day: "Therapies",
          activities: [
            "Udwarthana (herbal fat-reducing scrub)",
            "Light detox diet",
            "Cardio-based yoga sessions",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Weight Loss Program",
      planDesc: "Fat burning & digestive reset",
      days: [
        {
          day: "Includes everything in 3-Day +",
          activities: [
            "Potli detox therapy",
            "Structured intermittent fasting plan",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Metabolic Reset",
      planDesc: "Deep fat loss & habit transformation",
      days: [
        {
          day: "Includes everything in 5-Day +",
          activities: [
            "Deep metabolic reset therapies",
            "Rasayana herbs for metabolism",
            "Guided fitness training",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "6:30 AM", activity: "Lemon–ginger detox water" },
    { time: "7:00 – 8:00 AM", activity: "Cardio yoga & movement training" },
    { time: "10:00 – 11:00 AM", activity: "Udwarthana (herbal scrub therapy)" },
    { time: "4:00 – 5:00 PM", activity: "Fitness training / HIIT session" },
    { time: "7:00 PM", activity: "Light sattvic dinner soup" },
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
          title="Weight Loss & Metabolic Reset Program"
          subtitle="Ayurvedic fat loss with sustainable lifestyle change"
          Desc="A scientifically aligned Ayurvedic program focused on natural fat loss, improved metabolism, and digestive health through detox therapies, structured diet planning, and guided fitness routines."
        />

        <InfoBlock text="This program targets fat metabolism at the root level, reduces bloating, stabilizes hormones, and builds long-term habits for sustainable weight management." />

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
          <PlanCard title="3-Day Kickstart" description="Light detox & fat activation" />
          <PlanCard title="5-Day Fat Burn" description="Digestive reset & fasting support" />
          <PlanCard
            title="7-Day Metabolic Reset"
            description="Deep fat loss & habit transformation"
            highlight
          />
        </div>

        <DaySchedule
          title="Weight Loss Program Details"
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

export default WeightLossProgramPage;
