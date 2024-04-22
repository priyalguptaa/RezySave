import { useState ,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Button } from "@material-ui/core";
import scriptImage from "../assets/Images/script.jpg";

const useStyles = makeStyles(() => ({
  filteringContainer: {
 
    backgroundColor: "#f0f0f0",
    padding: "16px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  leftText: {
    fontWeight: "bold",
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
  },


  paginationButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    margin: "0 4px",
    minWidth: "36px",
  },
}));

function FilteringNav({ selectedTab, currentPage, totalPages, setCurrentPage,itemsPerPage,sampleData,startIndex,endIndex }) {
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };




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

  const classes = useStyles();



  return (
    <div className={classes.filteringContainer}>
      <div className={classes.navbar}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={scriptImage}
            style={{
              width: "1rem",
              height: "1rem",
              marginRight: "8px",
            }}
            alt="Icon"
          />
          <span style={{ color: "darkblue" }}>{selectedTab}</span>
        </div>
        <div className={classes.paginationContainer}>
        {
  !isSmallScreen ? (
    <span className='whitespace-nowrap'>
      {`Showing ${Math.min(sampleData.slice(startIndex, endIndex).length, itemsPerPage)} of ${sampleData.length} items`}
    </span>
  ) : (
    <span className='whitespace-nowrap'>Showing {sampleData.slice(startIndex, endIndex).length} items</span>
  )
}

          <IconButton
            size="small"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </IconButton>
          <Button variant="contained" className={classes.paginationButton}>
            {currentPage}
          </Button>
          <IconButton
            size="small"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {">"}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default FilteringNav;
