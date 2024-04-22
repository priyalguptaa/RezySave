import fire from ".././assets/Images/fire.png";
import drop from ".././assets/Images/drop.webp";
import { useEffect } from "react";
import { useState } from "react";
import "../CSS/Box.css";
import FilteringNav from "./FilteringNav";
const Box = ({ selectedTab, sampleData }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sampleData.slice(startIndex, endIndex);

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




  useEffect(() => {
    setAnimationClass("animation-slide-left");

    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 700);

    return () => clearTimeout(timer);
  }, [selectedTab]);

  const getButtonTextAndStyle = (item) => {
    console.log(`Received item: ${JSON.stringify(item)}`);
    let buttonText = "";
    let buttonStyle = {};

    if (selectedTab === "Today") {
      if (item.issue === "Fire 911") {
        buttonText = "NEW";
        buttonStyle = { backgroundColor: "darkblue", color: "white" };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "IN Progress";
          buttonStyle = {
            backgroundColor: "lightgreen",
            color: "white",
            width: "auto",
          };
        } else if (item.status === "VACANT") {
          buttonText = "LATE";
          buttonStyle = { backgroundColor: "red", color: "white" };
        }
      }
    } else if (selectedTab === "All") {
      if (item.issue === "Fire 911") {
        buttonText = "NEW";
        buttonStyle = { backgroundColor: "darkblue", color: "white" };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "IN Progress";
          buttonStyle = {
            backgroundColor: "lightgreen",
            color: "white",
            width: "auto",
          };
        } else if (item.status === "VACANT") {
          buttonText = "LATE";
          buttonStyle = { backgroundColor: "red", color: "white" };
        }
      }
    } else if (selectedTab === "New") {
      if (item.issue === "Fire 911") {
        buttonText = "NEW";
        buttonStyle = { backgroundColor: "darkblue", color: "white" };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "NEW";
          buttonStyle = {
            backgroundColor: "darkblue",
            color: "white",
          };
        } else if (item.status === "VACANT") {
          buttonText = "NEW";
          buttonStyle = { backgroundColor: "darkblue", color: "white" };
        }
      }
    } else if (selectedTab === "Flagged") {
      if (item.issue === "Fire 911") {
        buttonText = "FLAGGED";
        buttonStyle = {
          backgroundColor: "orange",
          color: "white",
          width: "auto",
        };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "FLAGGED";
          buttonStyle = {
            backgroundColor: "orange",
            color: "white",
            width: "auto",
          };
        } else if (item.status === "VACANT") {
          buttonText = "FLAGGED";
          buttonStyle = {
            backgroundColor: "orange",
            color: "white",
            width: "auto",
          };
        }
      }
    } else if (selectedTab === "InProgress") {
      if (item.issue === "Fire 911") {
        buttonText = "IN PROGRESS";
        buttonStyle = {
          backgroundColor: "rgba(0, 193, 123, 1)",
          color: "white",
          width: "auto",
        };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "IN PROGRESS";
          buttonStyle = {
            backgroundColor: "rgba(0, 193, 123, 1)",
            color: "white",
            width: "auto",
          };
        } else if (item.status === "VACANT") {
          buttonText = "IN PROGRESS";
          buttonStyle = {
            backgroundColor: "rgba(0, 193, 123, 1)",
            color: "white",
            width: "auto",
          };
        }
      }
    } else if (selectedTab === "Last") {
      if (item.issue === "Fire 911") {
        buttonText = "LAST";
        buttonStyle = { backgroundColor: "red", color: "white", width: "auto" };
      } else if (item.issue === "Leak") {
        if (item.status === "OCCUPIED") {
          buttonText = "LAST";
          buttonStyle = {
            backgroundColor: "red",
            color: "white",
            width: "auto",
          };
        } else if (item.status === "VACANT") {
          buttonText = "LAST";
          buttonStyle = {
            backgroundColor: "red",
            color: "white",
            width: "auto",
          };
        }
      }
    }

    console.log(`Button text: ${buttonText}`);
    console.log(`Button style: ${JSON.stringify(buttonStyle)}`);

    return { buttonText, buttonStyle };
  };

  const getBackgroundColor = (item) => {
    if (item.issue === "Leak" && item.property === "Property Name") {
      return "linear-gradient(190.90deg, #FFEBCC 28.18%, rgba(255, 184, 77, 0.32) 28.19%, #FFEBCC 119.39%)";
    }
    return "linear-gradient(200.93deg, #FFC7C4 47.7%, rgba(255, 83, 73, 0.37) 47.71%, #FFD2CF 121%)";
  };

  const getImageSource = (issue) => {
    if (issue === "Leak") {
      return drop;
    } else {
      return fire;
    }
  };
  const getButtonText = () => {
    switch (selectedTab) {
      case "Today":
        return "Today";
      case "All":
        return "All";
      case "New":
        return "New";
      case "Flagged":
        return "Flagged";
      case "InProgress":
        return "InProgress";
      case "Last":
        return "Last";
      default:
        return "Default";
    }
  };
  return (
  <>

<FilteringNav
        selectedTab={selectedTab}
        currentPage={currentPage}
        totalPages={Math.ceil(sampleData.length / itemsPerPage)}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        sampleData={sampleData}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    <div
    id="container"
    className="grid lg:grid-cols-2 grid-flow-row gap-4 sm:grids-cols-1"   
       style={{
      fontFamily: 'Manrope, sans-serif',
      backgroundColor: 'rgb(240, 240, 240)',
      height: 'auto',
      minHeight:'215px',
      padding: '1rem',
      transition: 'all 0.3s ease-in-out'
      }}
    >


      {!isSmallScreen ?
       sampleData.slice(startIndex, endIndex).map((item, index) => {
        const { buttonText, buttonStyle } = getButtonTextAndStyle(item);

        return (
          <div
            key={index}
            className="w-[100%] h-[7.4rem] border-[1px] border-[red] rounded-lg p-2"
            style={{
              backgroundImage: getBackgroundColor(item),
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center text-red-600 gap-1 order-1">
                <img
                  src={getImageSource(item.issue)}
                  alt={item.issue}
                  className="w-6 h-6 m-2"
                />
                <div>{item.issue}</div>
                <div>{item.property}</div>
              </div>
              <div id="alertButtons" className="order-2 gap-1 flex m-1">
                <button
                  className={`font-thin py-2 px-4 border border-white-300 rounded w-[70px] h-[40px] justify-center items-center flex ${animationClass}`}
                  style={buttonStyle}
                >
                  {buttonText}
                </button>
                <button className="font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[40px] flex justify-center items-center">
                  {item.noOfTasks}
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row order-1">
                <div id="building" className="text-red-700 ml-2">
                  {item.building}
                </div>
                <div
                  className="border-dotted border-2 border-red-400 bg-neutral-100 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600 text-sm"
                  style={{
                    width: "auto",
                    color: item.status === "VACANT" ? "red" : "white",
                    backgroundColor: item.status === "VACANT" ? "white" : "red",
                  }}
                >
                  {item.status}
                </div>
              </div>
              <div className="order-2 flex flex-row mr-2 items-center gap-2 text-sm text-black-100">
                <div id="date">{item.date},</div>
                <div id="time" className="font-hairline text-xs text-gray-700">
                  9:00 pm
                </div>
              </div>
            </div>
          </div>
        );
      })

      :
      sampleData.slice(startIndex, endIndex).map((item, index) => {
        const { buttonText, buttonStyle } = getButtonTextAndStyle(item);

        return (
          <div
            key={index}
            className="w-[100%] h-[auto] border-[1px] border-[red] rounded-lg p-2"
            style={{
              backgroundImage: getBackgroundColor(item),
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center text-red-600 gap-1 order-1">
                <img
                  src={getImageSource(item.issue)}
                  alt={item.issue}
                  className="w-6 h-6 m-2"
                />
                <div>{item.issue}</div>
                <div>{item.property}</div>
              </div>
              <div className="order-2 flex flex-col mr-2 items-center text-sm text-black-100">
                <div id="date">{item.date},</div>
                <div id="time" className="font-hairline text-xs text-gray-700">
                  9:00 pm
                </div>
              </div>
            
            </div>
            <div className="flex justify-between">
             
                <div id="building" className="text-red-700 ml-2">
                  {item.building}
                </div>
                <div
                  className="border-dotted border-2 border-red-400 bg-neutral-100 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600 text-sm"
                  style={{
                    width: "auto",
                    color: item.status === "VACANT" ? "red" : "white",
                    backgroundColor: item.status === "VACANT" ? "white" : "red",
                  }}
                >
                  {item.status}
                </div>  
            </div>

       
            <div id="alertButtons" className="order-2 gap-1 flex m-1 flex flex-row justify-between">
                <button
                  className={`whitespace-nowrap order-1 font-thin py-2 px-4 border border-white-300 rounded w-[70px] h-[40px] justify-center items-center flex ${animationClass}`}
                  style={buttonStyle}
                >
                  {buttonText}
                </button>
                <button className="w-[100%] order-2 font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[40px] flex justify-center items-center">
                  {item.noOfTasks}
                </button>
              </div>

            
          </div>
        );
      })
    
    }
     

       



    </div>
  </>
  );
};
export default Box;
