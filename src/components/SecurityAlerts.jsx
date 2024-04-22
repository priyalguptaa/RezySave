import fire from "../assets/hot-sale.png";
import { useEffect,useState } from "react";
const SecurityAlerts = () => {

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

  return (
    <>


    {
      !isSmallScreen ?
      (<div
        id="onlyAlerts"
        className="w-[99%] h-[auto] min-h-[7.4rem] bg-[pink] border-[1px] border-[red] rounded-lg"
      >
        <div className="flex flex-row items-center justify-between">
          <div
            id="1"
            className="flex flex-row items-center text-[red] gap-1 order-1"
          >
            <img src={fire} alt="" className="w-6 h-6 m-2" />
            <div>Security</div>
            <div className="">Property Name</div>
          </div>
          <div id="alertButtons" className="order-2 gap-1 flex m-1">
            <button className="font-thin bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded w-[70px] h-[40px] justify-center items-center flex">
              NEW
            </button>
            <button className="font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[40px] flex justify-center items-center">
              3 TASKS  
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M0 10C0 5.286 0 2.929 1.464 1.464C2.93 0 5.286 0 10 0C14.714 0 17.071 0 18.535 1.464C20 2.93 20 5.286 20 10C20 14.714 20 17.071 18.535 18.535C17.072 20 14.714 20 10 20C5.286 20 2.929 20 1.464 18.535C0 17.072 0 14.714 0 10Z" fill="white"/>
</svg>
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-row order-1">
            <div id="building" className="text-red-700 ml-2">
              Building-12 Unit-21
            </div>
            <div className="border-dotted border-2 border-red-400 bg-neutral-100 z-99 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600">
              Vacant
            </div>
          </div>

          <div className="order-2 flex flex-row mr-2 items-center gap-2 text-sm text-black-100">
            <div id="date"> 26th march,</div>
            <div id="time" className="font-hairline text-xs text-gray-700">
              9:00 pm
            </div>
          </div>
        </div>
      </div>)

      :

     (
      <div
      id="onlyAlerts2"
      className="w-[99%] h-[auto] min-h-[7.4rem] bg-[pink] border-[1px] border-[red] rounded-lg"
    >
      <div className="flex flex-row items-center justify-between">
        <div
          id="1"
          className="flex flex-row items-center text-[red] gap-1 order-1"
        >
          <img src={fire} alt="" className="w-6 h-6 m-2" />
          <div>Security</div>
          <div className="whitespace-nowrap">Property Name</div>
        </div>
        <div className="order-2 flex flex-col mr-2 items-center  text-sm text-black-100 whitespace-nowrap">
          <div id="date" className="whitespace-nowrap"> 26th march,</div>
          <div id="time" className="font-hairline text-xs text-gray-700">
            9:00 pm
          </div>
        </div>
        
      </div>

     
        <div className="flex flex-row justify-between">
          <div id="building" className="text-red-700 ml-2 order-1">
            Building-12 Unit-21
          </div>
          <div className="order-2 border-dotted border-2 border-red-400 bg-neutral-100 z-99 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600">
            Vacant
          </div>
        </div>


        <div id="alertButtons" className="justify-between gap-1 flex m-1">
          <button className="font-thin bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded w-[70px] h-[40px] justify-center items-center flex">
            NEW
          </button>
          <button className="w-full font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[40px] flex justify-center items-center">
            3 TASKS
          </button>
        </div>

        


        
      
    </div>
     )
    }
          
    </>
  );
};

export default SecurityAlerts;
