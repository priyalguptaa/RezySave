import fire from '../assets/hot-sale.png'
const SecurityAlerts = () => {
  return (
   <>
     <div
          id="onlyAlerts"
          className="w-[99%] h-[7.4rem] bg-[pink] border-[1px] border-[red] rounded-lg"
        >
          <div className="flex flex-row items-center justify-between">
            <div
              id="1"
              className="flex flex-row items-center text-[red] gap-1 order-1"
            >
              <img src={fire} alt="" className="w-6 h-6 m-2" />
              <div>Security</div>
              <div>Property Name</div>
            </div>
            <div id="alertButtons" className="order-2 gap-1 flex m-1">
              <button className="font-thin bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded w-[70px] h-[40px] justify-center items-center flex">
                NEW
              </button>
              <button className="font-thin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-300 rounded h-[40px] flex justify-center items-center">
                3 TASKS
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-row order-1">
            <div id="building" className="text-red-700 ml-2">Building-12 Unit-21</div>
            <div className="border-dotted border-2 border-red-400 bg-neutral-100 z-99 w-[5rem] border-red-500 ml-2 rounded items-center justify-center flex text-red-600" >Vacant</div>
            </div>

          <div className="order-2 flex flex-row mr-2 items-center gap-2 text-sm text-black-100">
          <div id="date"> 26th march,</div>
            <div id="time" className="font-hairline text-xs text-gray-700">9:00 pm</div>
            
          </div>
          </div>
        </div>
   </>
  )
}

export default SecurityAlerts