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

const NasyaPage = () => {
  const plansData = [
    {
      planTitle: "3-Day Refresh Program",
      planDesc: "Head & sinus detox",
      days: [
        {
          day: "Day 1",
          activities: [
            "Nasya therapy (15–30 mins)",
            "Head, neck & shoulder massage",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Nasya detox therapy",
            "Yoga & pranayama for respiration",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Nasya therapy",
            "Mental clarity & lifestyle guidance",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Nervous System Balance Program",
      planDesc: "Calming therapy & sleep support",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Daily Nasya therapy",
            "Relaxation & breathing practices",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Focused Nasya for nervous balance",
            "Doctor consultation & meditation",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Nasya therapy continuation",
            "Sleep ritual & stress management guidance",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Complete Head Detox Program",
      planDesc: "Chronic sinus, headache & stress relief",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily Nasya therapy",
            "Sinus cleansing & head detox",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Advanced Nasya procedures",
            "Migraine & headache relief practices",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Complete head & neck detox",
            "Long-term respiratory & lifestyle guidance",
          ],
        },
      ],
    },
  ];

  const benefits = [
    "Clears nasal passages & sinuses",
    "Reduces migraines, headaches & sinusitis",
    "Improves mental clarity & focus",
    "Balances hormonal & nervous systems",
    "Enhances sleep quality",
    "Detoxifies head & neck region",
  ];

  const includes = [
    "Stay with meals included",
    "Doctor consultation & oil selection",
    "Nasya therapy (15–30 mins)",
    "Head, neck & shoulder massage (pre-therapy)",
    "Yoga & pranayama sessions",
    "Post-therapy rest & herbal tea",
  ];

  const timeline = [
    { time: "6:30 AM", activity: "Herbal drink" },
    { time: "7:00 – 8:00 AM", activity: "Gentle yoga" },
    { time: "8:30 – 9:00 AM", activity: "Breakfast" },
    { time: "10:00 – 10:30 AM", activity: "Nasya therapy" },
    { time: "11:00 – 11:30 AM", activity: "Relaxation & rest" },
    { time: "12:30 – 2:00 PM", activity: "Lunch & rest" },
    { time: "3:00 – 4:00 PM", activity: "Doctor check / meditation" },
    { time: "4:00 PM", activity: "Herbal tea" },
    { time: "4:30 – 6:00 PM", activity: "Nature walk / journaling" },
    { time: "6:30 – 7:30 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Evening ritual" },
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
          title="Nasya – Ayurvedic Nasal Detox Therapy"
          subtitle="Head cleansing, nervous system balance & mental clarity"
          Desc="Nasya involves administering medicated oils or herbal liquids through the nostrils. It clears toxins from the head region, improves respiration, enhances mental clarity, balances the nervous system, and supports overall emotional and hormonal health."
        />

        <InfoBlock text="Nasya is highly effective for sinus congestion, migraines, headaches, hormonal imbalance, stress, anxiety, and sleep disorders." />

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
          <PlanCard title="3-Day Refresh" description="Head & sinus detox" />
          <PlanCard title="5-Day Nervous System Balance" description="Calming therapy & sleep support" />
          <PlanCard
            title="7-Day Complete Head Detox"
            description="Chronic sinus, headache & stress relief"
            highlight
          />
        </div>

        <DaySchedule
          title="Nasya Therapy Programs"
          subtitle="Doctor-guided nasal detox & nervous system healing"
          plans={plansData}
        />

        <SectionHeader title="Daily Sample Timeline" />
        <TimelineTable timeline={timeline} />
      </div>
      <Footer />
    </>
  );
};

export default NasyaPage;
