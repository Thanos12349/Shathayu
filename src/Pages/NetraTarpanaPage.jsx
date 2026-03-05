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

const NetraTarpanaPage = () => {
  const plansData = [
    {
      planTitle: "3-Day Eye Revive Program",
      planDesc: "Reduces eye strain & improves relaxation",
      days: [
        {
          day: "Day 1",
          activities: [
            "Netra Tarpana therapy (20–30 mins)",
            "Pre-therapy eye massage",
          ],
        },
        {
          day: "Day 2",
          activities: ["Eye rejuvenation therapy", "Yoga & meditation"],
        },
        {
          day: "Day 3",
          activities: ["Netra Tarpana therapy", "Vision & relaxation guidance"],
        },
      ],
    },
    {
      planTitle: "5-Day Vision Rejuvenation Program",
      planDesc: "Improves eye health & clarity",
      days: [
        {
          day: "Day 1–2",
          activities: ["Daily Netra Tarpana therapy", "Eye exercises & relaxation"],
        },
        {
          day: "Day 3",
          activities: ["Focused eye therapy", "Doctor consultation & guidance"],
        },
        {
          day: "Day 4–5",
          activities: ["Netra Tarpana continuation", "Meditation & eye care routine"],
        },
      ],
    },
    {
      planTitle: "7-Day Complete Eye Care Program",
      planDesc: "Chronic strain relief & optic nerve nourishment",
      days: [
        {
          day: "Day 1–3",
          activities: ["Daily Netra Tarpana therapy", "Eye strengthening exercises"],
        },
        {
          day: "Day 4–5",
          activities: ["Advanced eye rejuvenation therapy", "Relaxation & vision guidance"],
        },
        {
          day: "Day 6–7",
          activities: ["Full eye care therapy", "Lifestyle & vision maintenance guidance"],
        },
      ],
    },
  ];

  const benefits = [
    "Relieves dry eyes & eye strain",
    "Strengthens optic nerves & improves focus",
    "Reduces digital eye fatigue",
    "Enhances vision & concentration",
    "Supports relaxation & mental clarity",
  ];

  const includes = [
    "Stay & Sattvic meals",
    "Doctor consultation & ghee selection",
    "Eye therapy session (20–30 mins)",
    "Pre-therapy eye massage",
    "Yoga & meditation",
    "Evening relaxation",
  ];

  const timeline = [
    { time: "6:30 AM", activity: "Herbal drink" },
    { time: "7:00–8:00 AM", activity: "Yoga & eye exercises" },
    { time: "8:30 AM", activity: "Breakfast" },
    { time: "10:00–10:30 AM", activity: "Netra Tarpana therapy" },
    { time: "11:00–11:30 AM", activity: "Rest" },
    { time: "12:30–2:00 PM", activity: "Lunch" },
    { time: "3:00–4:00 PM", activity: "Meditation / doctor check" },
    { time: "4:00–4:30 PM", activity: "Herbal tea" },
    { time: "4:30–6:00 PM", activity: "Nature walk / journaling" },
    { time: "6:30–7:30 PM", activity: "Dinner" },
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
          title="Netra Tarpana – Eye Rejuvenation Therapy"
          subtitle="Rejuvenate your eyes, improve focus, and relieve strain"
          Desc="Netra Tarpana is a therapy where warm medicated ghee is held over the eyes to nourish optic nerves, reduce strain, and improve vision-related fatigue."
        />

        <InfoBlock text="Netra Tarpana helps relieve dry eyes, eye fatigue, digital strain, and supports overall relaxation and mental clarity." />

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
          <PlanCard title="3-Day Eye Revive" description="Reduces eye strain & improves relaxation" />
          <PlanCard title="5-Day Vision Rejuvenation" description="Improves eye health & clarity" />
          <PlanCard
            title="7-Day Complete Eye Care"
            description="Chronic strain relief & optic nerve nourishment"
            highlight
          />
        </div>

        <DaySchedule
          title="Netra Tarpana Programs"
          subtitle="Doctor-guided eye rejuvenation therapy"
          plans={plansData}
        />

        <SectionHeader title="Daily Sample Timeline" />
        <TimelineTable timeline={timeline} />
      </div>
      <Footer />
    </>
  );
};

export default NetraTarpanaPage;
