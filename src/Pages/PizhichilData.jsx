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

const PizhichilData = () => {
  const plansData = [
    {
      planTitle: "3-Day Nourishment Program",
      planDesc: "Fatigue relief & muscle relaxation",
      days: [
        {
          day: "Day 1",
          activities: [
            "Pizhichil warm oil therapy",
            "Post-therapy herbal steam",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Extended Pizhichil session",
            "Yoga & breathing for relaxation",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Pizhichil therapy",
            "Lifestyle & recovery guidance",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Strength & Vitality Program",
      planDesc: "Deep rejuvenation & tissue nourishment",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Daily Pizhichil therapy",
            "Herbal steam & relaxation",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Intensive Pizhichil session",
            "Doctor-led vitality assessment",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Nourishing oil therapies",
            "Yoga & immunity-strengthening practices",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Anti-Aging & Rasayana Program",
      planDesc: "Nervous system rejuvenation & immunity boost",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily Pizhichil oil bath",
            "Stress & fatigue reduction therapies",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Advanced Rasayana oil treatments",
            "Joint & muscle strengthening",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Anti-aging rejuvenation therapy",
            "Long-term wellness guidance",
          ],
        },
      ],
    },
  ];

  const benefits = [
    "Nourishes muscles, bones & nervous system",
    "Relieves stiffness & muscular spasms",
    "Improves circulation & joint mobility",
    "Reduces fatigue & mental stress",
    "Provides anti-aging & Rasayana benefits",
    "Strengthens immunity & vitality",
  ];

  const includes = [
    "Stay with sattvic meals",
    "Personalized medicated oil selection by doctor",
    "Full Pizhichil therapy (60–90 mins)",
    "Post-therapy herbal steam",
    "Daily yoga & meditation sessions",
    "Lifestyle & wellness guidance",
  ];

  const timeline = [
    { time: "6:30 – 7:00 AM", activity: "Herbal drink" },
    { time: "7:00 – 8:00 AM", activity: "Yoga & stretching" },
    { time: "8:30 – 9:00 AM", activity: "Breakfast" },
    { time: "10:00 – 11:30 AM", activity: "Pizhichil warm oil therapy" },
    { time: "11:30 – 12:00 PM", activity: "Rest & hydration" },
    { time: "12:30 – 2:00 PM", activity: "Lunch & rest" },
    { time: "3:00 – 4:00 PM", activity: "Doctor follow-up" },
    { time: "4:00 – 4:30 PM", activity: "Herbal tea" },
    { time: "4:30 – 6:00 PM", activity: "Gentle walk / meditation" },
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
          title="Pizhichil – Royal Warm Oil Bath Therapy"
          subtitle="Deep nourishment, rejuvenation & nervous system healing"
          Desc="Pizhichil is a luxurious Ayurvedic therapy involving continuous pouring of warm medicated oils over the entire body along with gentle massage. It deeply nourishes muscles, calms the nervous system, rejuvenates tissues, and provides powerful Rasayana benefits."
        />

        <InfoBlock text="Pizhichil is ideal for fatigue, muscle weakness, joint stiffness, nervous system disorders, stress-related conditions, and anti-aging rejuvenation." />

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
          <PlanCard title="3-Day Nourishment" description="Fatigue relief & muscle relaxation" />
          <PlanCard title="5-Day Strength & Vitality" description="Deep rejuvenation & tissue nourishment" />
          <PlanCard
            title="7-Day Anti-Aging & Rasayana"
            description="Nervous system & immunity rejuvenation"
            highlight
          />
        </div>

        <DaySchedule
          title="Pizhichil Therapy Programs"
          subtitle="Doctor-guided royal oil therapy & rejuvenation"
          plans={plansData}
        />

        <SectionHeader title="Daily Sample Timeline" />
        <TimelineTable timeline={timeline} />
      </div>
      <Footer />
    </>
  );
};

export default PizhichilData;
