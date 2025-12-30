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

const DetoxPanchakarmaPage = () => {

  const benefits = [
    "Eliminates toxins (Ama) from the body",
    "Boosts digestion & metabolism",
    "Enhances immunity & energy levels",
    "Improves skin and gut health",
    "Reduces inflammation",
    "Balances mind, body & emotions",
  ];

  const includes = [
    "Stay + sattvic meals included",
    "Full doctor consultation",
    "Daily Ayurvedic therapies",
    "Yoga, pranayama & meditation",
    "Herbal teas & detox juice blends",
    "Follow-up diet & lifestyle plan",
  ];

  const plansData = [
    {
      planTitle: "3-Day Detox Program",
      planDesc: "Gentle cleansing & relaxation",
      days: [
        {
          day: "Therapies",
          activities: [
            "Abhyanga (oil massage)",
            "Swedana herbal steam",
            "Shirodhara (optional as per diagnosis)",
            "Light detox diet",
            "Breathwork & slow yoga",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Detox Program",
      planDesc: "Deep cleansing & metabolic reset",
      days: [
        {
          day: "Includes everything in 3-Day +",
          activities: [
            "Udwarthana (herbal scrub)",
            "Potli massage",
            "Nasya (nasal detox)",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Complete Panchakarma",
      planDesc: "Complete detox & rejuvenation",
      days: [
        {
          day: "Includes everything in 5-Day +",
          activities: [
            "Pizhichil warm oil bath",
            "Njavarakizhi rice therapy",
            "Deep digestive reset",
            "Customized herbal medicines",
          ],
        },
      ],
    },
  ];

  const timeline = [
    { time: "6:30 – 7:00 AM", activity: "Herbal detox water" },
    { time: "7:00 – 8:00 AM", activity: "Yoga & pranayama" },
    { time: "8:00 – 9:00 AM", activity: "Sattvic breakfast" },
    { time: "10:00 – 11:30 AM", activity: "Main therapy (Abhyanga / Potli / Udwarthana)" },
    { time: "11:30 – 12:00 PM", activity: "Steam therapy (Swedana)" },
    { time: "1:00 – 2:00 PM", activity: "Lunch" },
    { time: "3:00 – 4:00 PM", activity: "Rest & herbal tea" },
    { time: "4:00 – 5:00 PM", activity: "Second therapy / Shirodhara" },
    { time: "6:00 – 7:00 PM", activity: "Meditation walk" },
    { time: "7:30 PM", activity: "Light sattvic dinner" },
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
          title="Detox & Panchakarma Program"
          subtitle="A complete Ayurvedic cleansing & rejuvenation experience"
          Desc="A deep Ayurvedic detox program designed to remove toxins, reset digestion, balance doshas, and restore natural vitality. It combines classical Panchakarma therapies, sattvic meals, herbal support, and mindful lifestyle routines."
        />

        <InfoBlock text="This doctor-guided Panchakarma program works on the digestive system, tissues, and subtle energy channels to eliminate toxins (Ama) and restore balance in Vata, Pitta, and Kapha." />

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
          <PlanCard title="3-Day Detox" description="Light cleansing & relaxation" />
          <PlanCard title="5-Day Detox" description="Deep cleansing & metabolic reset" />
          <PlanCard title="7-Day Panchakarma" description="Complete detox & rejuvenation" highlight />
        </div>

        <DaySchedule
          title="Detox Program Details"
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

export default DetoxPanchakarmaPage;
