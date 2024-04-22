import { useState } from "react";
import AlertSummary from "../components2/AlertSummary";
import AlertTabs from "../components2/AlertTabs";
import FilteringNav from "../components2/FilteringNav";
import Box from "../components2/Box";
import { sampleData } from "../components2/Data";
function NewComponent() {
  const [selectedTab, setSelectedTab] = useState("All");
  
  const handleTabChange = (event, index) => {
    const tabNames = ["Today", "All", "New", "Flagged", "InProgress", "Last"];
    setSelectedTab(tabNames[index]);
  };
  return (
    <>
      <div
        id="component2container"
        className="mb-6"
        style={{ backgroundColor: "white" }}
      >
        <AlertSummary />
        <AlertTabs value={selectedTab} handleChange={handleTabChange} />
     
        <Box selectedTab={selectedTab} sampleData={sampleData} />
      </div>
    </>
  );
}

export default NewComponent;
