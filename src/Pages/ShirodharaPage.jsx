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

const ShirodharaPage = () => {
  const benefits = [
    "Reduces stress, anxiety & mental exhaustion",
    "Improves sleep quality & combats insomnia",
    "Stabilizes mood & emotional imbalance",
    "Relieves headaches & migraines",
    "Supports hormone balance",
    "Enhances focus & mental clarity",
    "Stimulates the Ajna (third-eye) chakra",
  ];

  const includes = [
    "Stay included",
    "Sattvic meals & herbal teas",
    "Doctor assessment & oil selection",
    "Full Shirodhara therapy (45–60 mins)",
    "Head & shoulder massage (pre-session)",
    "Follow-up relaxation therapy",
    "Yoga & pranayama sessions",
    "Sleep ritual guidance",
  ];

  const plansData = [
    {
      planTitle: "3-Day Shirodhara Plan (Sample)",
      planDesc: "Quick mental relaxation & better sleep",
      days: [
        {
          day: "Day 1",
          activities: ["Head massage + 30-min Shirodhara"],
        },
        {
          day: "Day 2",
          activities: ["60-min Shirodhara + guided breathwork"],
        },
        {
          day: "Day 3",
          activities: [
            "Shirodhara therapy",
            "Trataka meditation",
            "Diet reset",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Shirodhara Plan (Sample)",
      planDesc: "Deep calming & nervous system balance",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Shirodhara therapy",
            "Grounding pranayama",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Mental release techniques",
            "Herbal head pack",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Extended Shirodhara",
            "Hot oil head massage",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Shirodhara Sleep Program (Sample)",
      planDesc: "Chronic stress, anxiety & insomnia solution",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily Shirodhara therapy",
            "Stress-release yoga",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Sleep therapy",
            "Emotional detox rituals",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Rasayana therapies",
            "Brain rejuvenation treatments",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "6:30 AM", activity: "Herbal drink" },
    { time: "7:00 AM", activity: "Slow yoga" },
    { time: "8:30 AM", activity: "Breakfast" },
    { time: "10:00–11:00 AM", activity: "Shirodhara session" },
    { time: "11:00–11:30 AM", activity: "Rest in darkness" },
    { time: "12:30 PM", activity: "Lunch" },
    { time: "3:00 PM", activity: "Doctor review" },
    { time: "4:00 PM", activity: "Herbal tea" },
    { time: "5:00 PM", activity: "Meditation / journaling" },
    { time: "7:00 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Sleep ritual" },
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
          title="Shirodhara – Forehead Oil Therapy"
          subtitle="A deeply calming Ayurvedic therapy for mind & nervous system"
        />

        <InfoBlock
          text="Shirodhara is one of Ayurveda’s most soothing therapies where a gentle, continuous stream of warm oil is poured on the forehead (Ajna Chakra). It calms the mind, reduces stress hormones, improves sleep, balances the nervous system, and is deeply effective for anxiety and emotional overload."
        />

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
          <PlanCard
            title="3-Day Calm Reset"
            description="Quick mental relaxation & better sleep"
          />
          <PlanCard
            title="5-Day Mind De-stress Therapy"
            description="Deep calming & nervous system balance"
          />
          <PlanCard
            title="7-Day Shirodhara Sleep Program"
            description="Stress, anxiety & insomnia solution"
            highlight
          />
        </div>

        <DaySchedule

          title="Detailed Shirodhara Therapy Programs"
          subtitle="Personalized, doctor-guided Ayurvedic healing"
          plans={plansData}
        />

        <SectionHeader title="Daily Timeline (Standard)" />
        <TimelineTable timeline={timeline} />
      </div>

      <Footer />
    </>
  );
};

export default ShirodharaPage;
