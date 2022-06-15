import React from "react";

type monthlyProps = {
  title: string;
  currency: number;
  percentage: number;
};

const MonthlyGoalSections = ({ title, currency, percentage }: monthlyProps) => {
  return (
    <div className="monthly-goal-section">
      <div>{title}</div>
      <div>{percentage}%</div>
      <div>💲{currency}</div>
    </div>
  );
};

export default MonthlyGoalSections;
