import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import footage from "../assets/footage.png";
import webcam from "../assets/webcam.png";
import graph from "../assets/graph.png";
import { Insights } from "./mockData/Insights";
import { useState,useEffect} from "react";
import SecurityAlerts from "./SecurityAlerts";
const Security = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(Insights.length / itemsPerPage) + 1;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Accordion  style={{    color: 'darkblue',
            borderRadius: '8px',
            marginRight: '1rem',
            marginLeft: '1rem',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
         
        >
          <div
            className="flex flex row justify-between"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flex flex-row gap-[8px] order-1">
              <img className="w-6 h-6" src={webcam} alt="" />

              <div className="text-blue-800">Security</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div id="mainContainer" className="flex lg:flex-row flex-col gap-2">
            <div
              id="footageContainer"
              className="md:w-[100%] lg:w-[50%] sm:w-[100%]"
            >
              <div
                id="navbar"
                className="w-[100%] h-[3rem] bg-blue rounded-lg  flex items-center"
                style={{
                  backgroundColor: "darkblue",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ order: "1" }}
                  className=" mx-1 gap-[1rem] flex items-center"
                >
                  <img className="w-6 h-6" src={webcam} alt="" />
                  <div style={{ color: "white" }} className="">
                    Live Footage
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 color-[white] mr-2"
                  style={{ color: "white", order: "2" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </div>

              <div className=" mt-[4px]" id="footage">
                <img style={{ width: "100%" }} src={footage} alt="" />
              </div>
            </div>
            <div
              style={{ backgroundColor: "#F0F0F0", borderRadius: "8px" }}
              className=" md:w-[100%] lg:w-[50%] sm:w-[100%]"
              id="alertsContainer"
            >
             {!isSmallScreen ? <div
                id="heading"
                className="flex items-center justify-center "
                style={{ justifyContent: "space-between" }}
              >
                <div
                  id="alerts"
                  className="gap-[5px] flex flex-row ml-2 mt-2"
                  style={{ order: "1" }}
                >
                  <img
                    style={{ color: "blue" }}
                    className="h-6 w-6 "
                    src={graph}
                    alt=""
                  />
                  <div>Alerts & Insights</div>
                  <div
                    id="noOfAlerts"
                    className="w-[3.5rem] h-7 bg-white rounded flex justify-center"
                  >
                    {" "}
                    Alert:1
                  </div>
                  <div
                    id="noOfInsights"
                    className="w-[4.5rem] h-7 bg-white rounded flex justify-center"
                  >
                    Insights:{Insights.length}
                  </div>
                </div>

                <div className="flex mt-4" style={{ order: 2 }}>
                  {currentPage == 1 ? (
                    <div className="mx-1 px-2 py-1 ">{`Showing ${
                      Insights.slice(startIndex, endIndex).length + 1
                    } of ${Insights.length + 1} items`}</div>
                  ) : (
                    <div className="mx-1 px-2 py-1 ">{`Showing ${
                      Insights.slice(startIndex, endIndex).length
                    } of ${Insights.length + 1} items`}</div>
                  )}

                  <div className="flex flex-row gap-1 items-center">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="mx-1 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400"
                    >
                      &lt;
                    </button>
                    <div>{currentPage}</div>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="mx-1 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>   :
              <div
              id="heading"
              className="flex items-center justify-center "
              style={{ justifyContent: "space-between" }}
            >
              <div
                id="alerts"
                className="gap-[5px] flex flex-row ml-2 mt-2"
                style={{ order: "1" }}
              >
                <img
                  style={{ color: "blue" }}
                  className="h-6 w-6 "
                  src={graph}
                  alt=""
                />
                <div
                  id="noOfAlerts"
                  className="w-[3.5rem] h-7 bg-white rounded flex justify-center"
                >
                  {" "}
                  Alert:1
                </div>
                <div
                  id="noOfInsights"
                  className="w-[4.5rem] h-7 bg-white rounded flex justify-center"
                >
                  Insights:{Insights.length}
                </div>
              </div>

              <div className="flex mt-4 flex-col items-center " style={{ order: 2 }}>
                {currentPage == 1 ? (
                  <div className="mx-1 px-2 py-1 whitespace-nowrap">{`Showing ${
                    Insights.slice(startIndex, endIndex).length + 1
                  }  items`}</div>
                ) : (
                  <div className="mx-1 px-2 py-1 whitespace-nowrap">{`Showing ${
                    Insights.slice(startIndex, endIndex).length
                  }items`}</div>
                )}

                <div className="flex flex-row gap-1 items-center">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="mx-1 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400"
                  >
                    &lt;
                  </button>
                  <div>{currentPage}</div>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="mx-1 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div> 
              }

              <ul
                id="list"
                className="flex justify-center items-start ml-2 flex-col gap-[1rem] mt-[1rem]"
              >
                {currentPage === 1 && <SecurityAlerts />}
                {Insights.slice(startIndex, endIndex).map((insight, index) => (
                  <>
                    <li
                      id="box"
                      key={insight.id}
                      className="h-[7.4rem] w-[99%] rounded-lg flex"
                      style={{
                        backgroundColor:
                          index == 0
                            ? "rgba(255, 199, 196, 1)"
                            : "rgba(255, 235, 204, 1)",
                      }}
                    >
                      <div id="mainlistholder" className="flex flex-col">
                        <div
                          id="datetime"
                          className="flex flex-row gap-2"
                          style={{ padding: "10px" }}
                        >
                          <div>
                            <svg
                              className="h-6 w-6"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m128 28a100 100 0 1 0 100 100 100.1127 100.1127 0 0 0 -100-100zm0 192a92 92 0 1 1 92-92 92.10478 92.10478 0 0 1 -92 92zm8-136v92a4 4 0 0 1 -8 0v-84.52734l-17.78223 11.84961a4.00018 4.00018 0 0 1 -4.43554-6.65821l24-15.99316a4.00031 4.00031 0 0 1 6.21777 3.3291z" />
                            </svg>
                          </div>
                          <div>{insight.date}</div>
                          <div>{insight.time}</div>
                        </div>
                        <div style={{ marginLeft: "12px" }}>
                          {insight.description}
                        </div>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Security;
