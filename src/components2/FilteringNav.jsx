import  { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Button } from "@material-ui/core";
import scriptImage from '../assets/Images/script.jpg';

const useStyles = makeStyles(() => ({
  filteringContainer: {
    marginLeft: '17px',
    marginRight: '17px',
    backgroundColor: "#f0f0f0",
    padding: "16px"
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
  paginationText: {
    marginRight: "16px",
  },
  paginationButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    margin: "0 4px",
    minWidth: "36px",
  },
}));

function FilteringNav({ selectedTab }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7; 

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={classes.filteringContainer}>
      <div className={classes.navbar}>
        <div style={{display: "flex", alignItems: "center" }}>
      <img 
        src={scriptImage}
        style={{
            width: '1rem',
            height: '1rem',
             marginRight: '8px' // Add margin for spacing between the image and the text
        }} 
        alt="Icon" // Add a description of the image for accessibility
    />
    {/* Display the selected tab text */}
    <span style={{ color: 'darkblue' }}>
        {selectedTab}
    </span>
    </div>
    {/* Add pagination container */}
    <div className={classes.paginationContainer}>
        <span className={classes.paginationText}>
            Showing 4 of 7 items
        </span>
          <IconButton
            size="small"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </IconButton>
          <Button
            variant="contained"
            className={classes.paginationButton}
          >
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
