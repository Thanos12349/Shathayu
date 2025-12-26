import { useState, useEffect, useRef } from "react";
import "../Styles/TimelineTable.css";

const TimelineTable = ({ timeline }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRefs = useRef([]);

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline">
      {timeline.map((item, index) => (
        <div
          className={`timeline-row ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() =>
            setActiveIndex(index === activeIndex ? null : index)
          }
          ref={(el) => (timelineRefs.current[index] = el)}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-time">{item.time}</span>
            <p className="timeline-activity">{item.activity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineTable;
