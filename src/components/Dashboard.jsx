import { useState } from "react";

const Dashboard = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="card">
        <h3>Slider</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p>Value: {value}</p>
      </div>

      <div className="card-grid">
        <div className="card">Users: 120</div>
        <div className="card">Orders: 45</div>
        <div className="card">Revenue: ₹25K</div>
      </div>
    </div>
  );
};

export default Dashboard;
