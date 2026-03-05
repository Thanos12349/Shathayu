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

const PanchakarmaPage = () => {
    const plansData = [
        {
            planTitle: "3-Day Panchakarma Plan (Sample)",
            planDesc: "Gentle cleansing & relaxation (Good for beginners)",
            days: [
                {
                    day: "Day 1",
                    activities: [
                        "7:00 AM – Herbal detox drink",
                        "8:00 AM – Gentle yoga + pranayama",
                        "9:00 AM – Healing breakfast",
                        "10:00 AM – Abhyanga (oil massage)",
                        "11:00 AM – Swedana (herbal steam)",
                        "12:30 PM – Sattvic lunch",
                        "2:00 PM – Rest",
                        "3:00 PM – Doctor check-in",
                        "4:00 PM – Herbal tea",
                        "4:30 PM – Nature walk",
                        "6:30 PM – Light dinner",
                        "8:00 PM – Meditation for sleep",
                    ],
                },
                {
                    day: "Day 2",
                    activities: [
                        "Virechana (medicated detox)",
                        "Light Panchakarma therapies",
                    ],
                },
                {
                    day: "Day 3",
                    activities: [
                        "Rasayana rejuvenation massage",
                        "Diet reset",
                        "Lifestyle counselling",
                    ],
                },
            ],
        },
        {
            planTitle: "5-Day Panchakarma Plan (Sample)",
            planDesc: "Deep detox & digestive reset",
            days: [
                {
                    day: "Day 1–2",
                    activities: [
                        "Purva Karma preparation",
                        "Oil application (Abhyanga)",
                        "Herbal steam (Swedana)",
                        "Digestive strengthening therapies",
                    ],
                },
                {
                    day: "Day 3",
                    activities: [
                        "Main Panchakarma procedure",
                        "Virechana (as per prakriti)",
                    ],
                },
                {
                    day: "Day 4–5",
                    activities: [
                        "Post-detox rejuvenation therapies",
                        "Special sattvic diet",
                        "Yoga therapy",
                    ],
                },
            ],
        },
        {
            planTitle: "7-Day Panchakarma Plan (Sample)",
            planDesc: "Complete Panchakarma & rejuvenation (Recommended)",
            days: [
                {
                    day: "Day 1–2 (Preparation)",
                    activities: [
                        "Purva Karma",
                        "Abhyanga + Swedana",
                        "Mild cleansing",
                    ],
                },
                {
                    day: "Day 3–4 (Main Therapy)",
                    activities: [
                        "Virechana / Basti / Nasya",
                        "Doctor-guided Panchakarma",
                    ],
                },
                {
                    day: "Day 5–7 (Rejuvenation)",
                    activities: [
                        "Rasayana therapies",
                        "Healing meals",
                        "Meditation & pranayama",
                        "Nutrition counselling",
                    ],
                },
            ],
        },
    ];

    const benefits = [
        "Removes deep-rooted toxins from body & mind",
        "Improves digestion & metabolism",
        "Reduces inflammation & chronic pain",
        "Enhances sleep & mental clarity",
        "Boosts skin glow & rejuvenation",
        "Balances weight & hormones",
        "Strengthens immunity & vitality",
    ];

    const includes = [
        "Doctor consultation & dosha analysis",
        "Sattvic healing meals",
        "Clean & comfortable stay",
        "Daily Panchakarma therapies",
        "Yoga, pranayama & meditation",
        "Herbal medicines",
        "Lifestyle counselling",
    ];

    const timeline = [
        { time: "6:30 – 7:00 AM", activity: "Herbal detox water" },
        { time: "7:00 – 8:00 AM", activity: "Yoga & Pranayama" },
        { time: "8:30 – 9:00 AM", activity: "Sattvic Breakfast" },
        { time: "10:00 – 11:30 AM", activity: "Panchakarma Therapy" },
        { time: "12:30 – 2:00 PM", activity: "Lunch & Rest" },
        { time: "3:00 – 4:00 PM", activity: "Doctor Review" },
        { time: "6:30 – 7:30 PM", activity: "Light Dinner" },
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
                title="Panchakarma – The Complete Ayurvedic Detox"
                subtitle="A doctor-guided healing & rejuvenation program "
                Desc=" It works on the digestive system, blood, tissues, and subtle energy channels, removing deeply accumulated toxins (ama) and restoring balance in Vata, Pitta, and Kapha. 

 This doctor-guided program detoxifies, heals chronic disorders, boosts immunity, resets metabolism, and rejuvenates the mind. "
            />

            <InfoBlock
                text="Panchakarma is Ayurveda’s most powerful cleansing system that detoxifies the body, balances doshas, rejuvenates tissues, and restores overall health."
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
                <PlanCard title="3-Day Mini Detox" description="Gentle cleanse & relaxation" />
                <PlanCard title="5-Day Deep Cleanse" description="Digestive reset & detox" />
                <PlanCard
                    title="7-Day Complete Reset"
                    description="Full Panchakarma & rejuvenation"
                    highlight
                />
            </div>
            <DaySchedule
                title="Detailed Panchakarma Detox Programs"
                subtitle="Doctor-guided Ayurvedic healing & rejuvenation"
                plans={plansData}
            />


            <SectionHeader title="Daily Sample Timeline" />
            <TimelineTable timeline={timeline} />
        </div>
        <Footer/>
        </>
    );
};

export default PanchakarmaPage;
