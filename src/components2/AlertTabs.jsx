import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import iwinboxImage from ".././assets/Images/iwinbox.jpeg";
import outlineImage from ".././assets/Images/outline.png";
import ultraImage from ".././assets/Images/ultra.png";
import okImage from ".././assets/Images/OK.jpeg";
import smaImage from ".././assets/Images/sma.webp";
import lastImage from ".././assets/Images/last.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 16px",
        borderRadius: "0.7rem",
        color: "black",
        marginTop: '17px',
        overflowY: 'scroll',
    },
    tab: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        cursor: "pointer",
        transition: "background-color 2s, color 2s",
        width: "310px",
        height: "88px",
        marginTop: "2rem",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
    },
    activeTab: {
        backgroundColor: "#F0F0F0",
    },
    icon: {
        fontSize: "2rem",
    },
    label: {
        fontSize: "0.9rem",
        marginLeft: "8px",
        transition: "color 0.3s",
    },
    count: {
        fontSize: "0.9rem",
        marginLeft: "8px",
        color: "blue",
        fontWeight: "bold",
        transition: "color 0.3s",
    },
    verticalLine: {
        width: "2px",
        height: "54%",
        marginTop: "-5.3rem",
        marginLeft: "-1px",
        backgroundColor: "#f0f0f0",
        transition: "background-color 0.3s",
    },
    tabAnimation: {
        animation: 'fadeIn 0.5s ease-in-out',
    },
}));

function AlertTabs({ value, handleChange }) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(value);

    const handleTabClick = (newTab, index) => {
        handleChange(null, index);
        setActiveTab(newTab);
    };

    const tabs = [
        {
            icon: null,
            image: iwinboxImage,
            label: "Today",
            count: "03",
        },
        {
            icon: null,
            image: outlineImage,
            label: "All",
            count: "07",
        },
        {
            icon: null,
            image: ultraImage,
            label: "New",
            count: "03",
        },
        {
            icon: null,
            image: okImage,
            label: "Flagged",
            count: "03",
        },
        {
            icon: null,
            image: smaImage,
            label: "InProgress",
            count: "07",
        },
        {
            icon: null,
            image: lastImage,
            label: "Last",
            count: "07",
        },
    ];
    
    const lineIndices = [1, 2, 3, 4, 5];

    return (
        <div className={classes.container}>
            {tabs.map((tab, index) => (
                <div key={index} style={{ position: "relative" }}>
                    <div
                        className={`${classes.tab} ${
                            activeTab === tab.label ? classes.activeTab : ""
                        } ${activeTab === tab.label ? classes.tabAnimation : ""}`}
                        onClick={() => handleTabClick(tab.label, index)}
                    >
                        {tab.icon ? (
                            <FontAwesomeIcon icon={tab.icon} className={classes.icon} />
                        ) : (
                            <img
                                src={tab.image}
                                alt={tab.label}
                                style={{ width: "3rem", height: "3rem" }}
                            />
                        )}
                        <div>
                            <span className={classes.label}>{tab.label}</span>
                            {tab.count > 0 && (
                                <h1
                                    style={{
                                        color: "blue",
                                        fontSize: "1.9rem",
                                        marginLeft: "1rem",
                                    }}
                                    className={classes.count}
                                >
                                    {tab.count}
                                </h1>
                            )}
                        </div>
                    </div>
                    {lineIndices.includes(index) && activeTab !== tab.label && (
                        <div className={classes.verticalLine} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default AlertTabs;
