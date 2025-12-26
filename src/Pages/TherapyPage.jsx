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

const TherapyPage = ({ therapyData }) => {
  const {
    title,
    subtitle,
    desc,
    infoText,
    benefits,
    includes,
    durationOptions,
    plans,
    timeline
  } = therapyData;

  return (
    <>
      <Header />
      <PropHeroSection
        title="Advanced Physiotherapy & Wellness Care"
        description="Personalized physiotherapy programs designed to restore mobility, reduce pain, and improve your quality of life."
        image="/images/banner-1-scaled.jpg"
      />
      <div className="panchakarma-page">
        <SectionHeader title={title} subtitle={subtitle} Desc={desc} />

        {infoText && <InfoBlock text={infoText} />}

        {benefits?.length > 0 && (
          <>
            <SectionHeader title="Key Benefits" />
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <BenefitCard key={i} benefit={b} />
              ))}
            </div>
          </>
        )}

        {includes?.length > 0 && (
          <>
            <SectionHeader title="What’s Included" />
            <ListSection items={includes} />
          </>
        )}

        {durationOptions?.length > 0 && (
          <>
            <SectionHeader title="Duration Options" />
            <div className="plan-grid">
              {durationOptions.map((d, i) => (
                <PlanCard
                  key={i}
                  title={d.title}
                  description={d.description}
                  highlight={d.highlight}
                />
              ))}
            </div>
          </>
        )}

        {plans?.length > 0 && (
          <DaySchedule
            title={`${title} Programs`}
            subtitle={`Doctor-guided ${title.toLowerCase()} therapy`}
            plans={plans}
          />
        )}

        {timeline?.length > 0 && (
          <>
            <SectionHeader title="Daily Sample Timeline" />
            <TimelineTable timeline={timeline} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TherapyPage;
