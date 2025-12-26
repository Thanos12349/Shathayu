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

const Udvartana = () => {
  const plansData = [
    {
      planTitle: "3-Day Light Detox Program",
      planDesc: "Improves circulation & lymphatic flow",
      days: [
        {
          day: "Day 1",
          activities: [
            "Udvartana herbal powder massage",
            "Post-therapy herbal steam",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Udvartana therapy",
            "Yoga & stretching for lymphatic drainage",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Udvartana massage",
            "Dietary counselling",
            "Lifestyle guidance",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Fat Metabolism Reset",
      planDesc: "Enhanced detox & weight regulation",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Daily Udvartana powder massage",
            "Herbal steam therapy",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Focused fat-mobilizing Udvartana",
            "Metabolism-boosting yoga",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Extended Udvartana therapy",
            "Diet review & herbal tonics",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Full Body Metabolic Therapy",
      planDesc: "Deep purification & skin rejuvenation",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily Udvartana massage",
            "Kapha-reducing therapies",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Advanced detox & fat reduction protocols",
            "Digestive fire enhancement",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Skin rejuvenation therapies",
            "Long-term metabolism guidance",
          ],
        },
      ],
    },
  ];

  const benefits = [
    "Stimulates lymphatic drainage",
    "Reduces subcutaneous fat & cellulite",
    "Improves skin texture & natural glow",
    "Enhances metabolism & digestive fire",
    "Removes excess Kapha accumulation",
    "Boosts energy & vitality",
  ];

  const includes = [
    "Stay with sattvic meals",
    "Doctor consultation & dosha analysis",
    "Udvartana herbal powder massage (45–60 mins)",
    "Post-therapy herbal steam",
    "Yoga & meditation guidance",
    "Dietary counselling & herbal tonics",
  ];

  const timeline = [
    { time: "6:30 – 7:00 AM", activity: "Warm herbal drink" },
    { time: "7:00 – 8:00 AM", activity: "Yoga & stretching" },
    { time: "8:30 – 9:00 AM", activity: "Breakfast" },
    { time: "10:00 – 11:00 AM", activity: "Udvartana powder massage" },
    { time: "11:00 – 11:30 AM", activity: "Herbal steam therapy" },
    { time: "12:30 – 2:00 PM", activity: "Lunch & rest" },
    { time: "3:00 – 4:00 PM", activity: "Doctor consultation / diet review" },
    { time: "4:00 – 4:30 PM", activity: "Herbal tea" },
    { time: "4:30 – 6:00 PM", activity: "Nature walk / gentle yoga" },
    { time: "6:30 – 7:30 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Evening meditation" },
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
          title="Udvartana – Herbal Powder Scrub Therapy"
          subtitle="Ayurvedic detox for metabolism, skin & fat reduction"
          Desc="Udvartana is a dry herbal powder massage therapy that stimulates the skin and lymphatic system. It helps remove excess fat, reduce cellulite, detoxify the body, and improve metabolism while enhancing circulation and skin texture."
        />

        <InfoBlock text="Udvartana is especially effective for Kapha imbalance, weight management, sluggish metabolism, and improving skin tone and vitality." />

        <SectionHeader title="Key Benefits" />
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <BenefitCard key={i} benefit={b} />
          ))}
        </div>

        <SectionHeader title="What’s Included" />
        <ListSection items={includes} />

        <SectionHeader title="Duration Options" />
        <div className="plan-grid">
          <PlanCard title="3-Day Light Detox" description="Improves circulation & lymphatic flow" />
          <PlanCard title="5-Day Fat Metabolism Reset" description="Enhanced detox & weight regulation" />
          <PlanCard
            title="7-Day Full Body Metabolic Therapy"
            description="Deep purification & skin rejuvenation"
            highlight
          />
        </div>

        <DaySchedule
          title="Udvartana Therapy Programs"
          subtitle="Doctor-guided metabolic detox & skin rejuvenation"
          plans={plansData}
        />

        <SectionHeader title="Daily Sample Timeline" />
        <TimelineTable timeline={timeline} />
      </div>
      <Footer />
    </>
  );
};

export default Udvartana;
