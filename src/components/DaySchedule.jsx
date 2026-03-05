import "../Styles/DaySchedule.css"
const DaySchedule = ({ title, subtitle, plans }) => {
  return (
    <section className="pk-wrapper">
      <div className="pk-title-wrapper">
 

        <h2 className="pk-title">{title}</h2>
        {subtitle && <p className="pk-subtitle">{subtitle}</p>}
      </div>
      {plans.map((plan, index) => (
        <div className="pk-plan" key={index}>
          <div className="pk-title-wrapper">
          <h3 className="pk-plan-title">{plan.planTitle}</h3>
          {plan.planDesc && (
            <p className="pk-plan-desc">{plan.planDesc}</p>
          )}
          </div>

          <div className="pk-days">
            {plan.days.map((day, i) => (
              <div className="pk-day-card" key={i}>
                <h4 className="pk-day-title">{day.day}</h4>

                <ul className="pk-activity-list">
                  {day.activities.map((activity, j) => (
                    <li key={j}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DaySchedule;
