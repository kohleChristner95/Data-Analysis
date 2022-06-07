import * as React from "react";
import * as ReactDOM from "react-dom";

function render() {
  ReactDOM.render(
    <div id="monthly-goal" className="section">
      <h1>Monthly Goal</h1>
      <div id="progress-bar" className="center"></div>
    </div>,
    document.body
  );
}

render();
