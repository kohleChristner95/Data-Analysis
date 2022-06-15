import * as React from "react";
import * as ReactDOM from "react-dom";
import MonthlyGoalSections from "./Components/MonthlyGoalSections";

function render() {
  ReactDOM.render(
    <div id="monthly-goal" className="section">
      <h1>Monthly Goal</h1>
      <div id="progress-bar" className="center"></div>
      <MonthlyGoalSections title={"Goal"} currency={5500} percentage={80} />
      <MonthlyGoalSections
        title={"Gifts Started"}
        currency={4518}
        percentage={82}
      />
      <MonthlyGoalSections
        title={"Commitments"}
        currency={4518}
        percentage={82}
      />
      <MonthlyGoalSections
        title={"Below Goal"}
        currency={982}
        percentage={18}
      />
    </div>,
    document.body
  );
}

render();
