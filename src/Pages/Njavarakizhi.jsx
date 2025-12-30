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

const Njavarakizhi = () => {
  const plansData = [
    {
      planTitle: "3-Day Rejuvenation Program",
      planDesc: "Mild tissue toning & nourishment",
      days: [
        {
          day: "Day 1",
          activities: [
            "Njavarakizhi rice & milk bolus therapy",
            "Post-therapy herbal steam",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Njavarakizhi therapy",
            "Gentle yoga & physiotherapy",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Njavarakizhi session",
            "Rasayana diet guidance",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Muscle Restoration Program",
      planDesc: "Enhanced post-illness recovery",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Daily Njavarakizhi therapy",
            "Herbal steam & muscle nourishment",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Focused muscle-strengthening Njavarakizhi",
            "Doctor review & physiotherapy",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Extended Njavarakizhi sessions",
            "Strength-building yoga & lifestyle counselling",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Full Rejuvenation Program",
      planDesc: "Complete Rasayana therapy for vitality & glow",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily Njavarakizhi therapy",
            "Tissue nourishment & strength building",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Advanced Rasayana therapies",
            "Post-illness / post-surgery rehabilitation support",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Deep rejuvenation therapy",
            "Long-term vitality & lifestyle guidance",
          ],
        },
      ],
    },
  ];

  const benefits = [
    "Rebuilds muscle & connective tissue",
    "Increases body strength & endurance",
    "Enhances skin texture & complexion",
    "Supports anti-aging & recovery",
    "Aids post-stroke & post-surgery rehabilitation",
  ];

  const includes = [
    "Stay with all meals included",
    "Doctor consultation & assessment",
    "Daily Njavarakizhi therapy (45–60 mins)",
    "Post-therapy herbal steam",
    "Yoga & gentle physiotherapy sessions",
    "Rasayana diet & lifestyle guidance",
  ];

  const timeline = [
    { time: "6:30 – 7:00 AM", activity: "Herbal drink" },
    { time: "7:00 – 8:00 AM", activity: "Gentle yoga" },
    { time: "8:30 – 9:00 AM", activity: "Breakfast" },
    { time: "10:00 – 11:00 AM", activity: "Njavarakizhi therapy" },
    { time: "11:00 – 11:30 AM", activity: "Herbal steam" },
    { time: "12:30 – 2:00 PM", activity: "Lunch & rest" },
    { time: "3:00 – 4:00 PM", activity: "Doctor check / physiotherapy" },
    { time: "4:00 – 4:30 PM", activity: "Herbal tea" },
    { time: "4:30 – 6:00 PM", activity: "Walking / meditation" },
    { time: "6:30 – 7:30 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Evening relaxation" },
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
          title="Njavarakizhi – Rice & Milk Bolus Rejuvenation"
          subtitle="Muscle strengthening, Rasayana therapy & deep nourishment"
          Desc="Njavarakizhi is a specialized Ayurvedic therapy using boluses of Njavara rice cooked in herbal decoctions and milk. It deeply nourishes muscles, strengthens tissues, improves skin tone, and supports recovery after illness, surgery, or neurological conditions."
        />

        <InfoBlock text="Njavarakizhi is ideal for muscle weakness, post-illness recovery, neurological rehabilitation, anti-aging, and overall vitality enhancement." />

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
          <PlanCard title="3-Day Rejuvenation" description="Mild tissue toning & nourishment" />
          <PlanCard title="5-Day Muscle Restoration" description="Enhanced post-illness recovery" />
          <PlanCard
            title="7-Day Full Rejuvenation"
            description="Complete Rasayana therapy for vitality & glow"
            highlight
          />
        </div>

        <DaySchedule
          title="Njavarakizhi Therapy Programs"
          subtitle="Doctor-guided muscle rejuvenation & Rasayana care"
          plans={plansData}
        />

        <SectionHeader title="Daily Sample Timeline" />
        <TimelineTable timeline={timeline} />

      </div>

      <Footer />
    </>
  );
};

export default Njavarakizhi;
