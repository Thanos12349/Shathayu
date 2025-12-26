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
import '../Styles/panchakarma.css'

const KizhiPage = () => {
  const plansData = [
    {
      planTitle: "3-Day Pain Relief Program",
      planDesc: "Mild pain alleviation & muscle relaxation",
      days: [
        {
          day: "Day 1",
          activities: [
            "Full-body Kizhi (Potli) massage",
            "Herbal steam therapy",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Targeted Potli massage for joints",
            "Yoga & stretching guidance",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Kizhi therapy",
            "Physiotherapy guidance",
            "Diet counselling",
          ],
        },
      ],
    },
    {
      planTitle: "5-Day Joint & Muscle Therapy",
      planDesc: "Deep tissue healing & improved mobility",
      days: [
        {
          day: "Day 1–2",
          activities: [
            "Full-body Potli massage",
            "Herbal steam (Swedana)",
          ],
        },
        {
          day: "Day 3",
          activities: [
            "Focused Kizhi on pain areas",
            "Joint mobility exercises",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Extended Kizhi therapy",
            "Yoga & physiotherapy sessions",
          ],
        },
      ],
    },
    {
      planTitle: "7-Day Comprehensive Kizhi Program",
      planDesc: "Chronic pain management & nervous system rejuvenation",
      days: [
        {
          day: "Day 1–3",
          activities: [
            "Daily full-body Kizhi massage",
            "Inflammation reduction therapies",
          ],
        },
        {
          day: "Day 4–5",
          activities: [
            "Joint strengthening techniques",
            "Physiotherapy-assisted movement",
          ],
        },
        {
          day: "Day 6–7",
          activities: [
            "Rejuvenation therapies",
            "Lifestyle & long-term pain management counselling",
          ],
        },
      ],
    },
  ];

  const benefits = [
    "Reduces joint and muscle pain",
    "Relieves arthritis and sciatica discomfort",
    "Enhances blood circulation",
    "Reduces inflammation and swelling",
    "Loosens stiff muscles",
    "Improves mobility and flexibility",
  ];

  const includes = [
    "Comfortable stay",
    "All meals (Sattvic cuisine)",
    "Doctor consultation & personalized herbal poultice selection",
    "60-min full-body Kizhi / Potli massage",
    "Herbal steam therapy (Swedana)",
    "Yoga & physiotherapy guidance",
    "Lifestyle & diet counselling",
  ];

  const timeline = [
    { time: "6:30 – 7:00 AM", activity: "Herbal detox drink" },
    { time: "7:00 – 8:00 AM", activity: "Yoga & stretching" },
    { time: "8:30 – 9:00 AM", activity: "Breakfast" },
    { time: "10:00 – 11:00 AM", activity: "Kizhi / Potli massage" },
    { time: "11:00 – 11:30 AM", activity: "Herbal steam therapy" },
    { time: "12:30 – 2:00 PM", activity: "Lunch & rest" },
    { time: "3:00 – 4:00 PM", activity: "Doctor review / physiotherapy" },
    { time: "4:00 – 4:30 PM", activity: "Herbal tea" },
    { time: "4:30 – 6:00 PM", activity: "Nature walk / journaling" },
    { time: "6:30 – 7:30 PM", activity: "Dinner" },
    { time: "8:00 PM", activity: "Evening meditation" },
  ];

  return (
    <>
    <Header/>
           <PropHeroSection
  title="Advanced Physiotherapy & Wellness Care"
  description="Personalized physiotherapy programs designed to restore mobility, reduce pain, and improve your quality of life."
  image="/images/banner-1-scaled.jpg"
/>
    <div className="panchakarma-page">
         <SectionHeader
        title="Kizhi / Potli Massage – Herbal Poultice Therapy"
        subtitle="Deep relief for joints, muscles & chronic pain"
        Desc="Kizhi, also known as Potli Massage, is an Ayurvedic therapy where warm herbal poultices are applied over the body to relieve stiffness, reduce inflammation, and improve circulation. It is highly effective for joint pain, muscle stiffness, arthritis, sciatica, and chronic fatigue."
      />

  

      <InfoBlock text="Kizhi therapy penetrates deep into muscles and joints, helping reduce pain, inflammation, and stiffness while restoring mobility and strength." />

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
        <PlanCard title="3-Day Pain Relief" description="Mild pain alleviation & relaxation" />
        <PlanCard title="5-Day Joint & Muscle Therapy" description="Deep tissue healing & mobility improvement" />
        <PlanCard
          title="7-Day Comprehensive Kizhi"
          description="Chronic pain management & rejuvenation"
          highlight
        />
      </div>

      <DaySchedule
        title="Kizhi Therapy Programs"
        subtitle="Doctor-guided joint & muscle healing"
        plans={plansData}
      />

      <SectionHeader title="Daily Sample Timeline" />
      <TimelineTable timeline={timeline} />
        </div>
     
      <Footer/>
    </>
  );
};

export default KizhiPage;
