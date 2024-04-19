

import { useState } from "react";
import AlertSummary from '../components2/AlertSummary';
import AlertTabs from '../components2/AlertTabs';
import FilteringNav from '../components2/FilteringNav';
import Box from "../components2/Box";
import { sampleData } from "../components2/Data";
function NewComponent() {
  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState("All");
  // Function to handle tab changes in AlertTabs
  const handleTabChange = (event, index) => {
    const tabNames = ["Today", "All", "New", "Flagged", "InProgress", "Last"];
    setSelectedTab(tabNames[index]);
  };
  return (
    <>
      <div id="component2container" className="mb-6" style={{backgroundColor:'white'}}>
        <AlertSummary />
        {/* Pass the selectedTab and handleTabChange props to AlertTabs */}
        <AlertTabs value={selectedTab} handleChange={handleTabChange} />
        <FilteringNav selectedTab={selectedTab} />
        <Box selectedTab={selectedTab} sampleData={sampleData} />
      </div>
    </>
  );
}

export default NewComponent;
