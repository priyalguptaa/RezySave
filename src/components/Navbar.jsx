import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from '@mui/icons-material/Home';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const isSmallScreen = window.innerWidth < 768; 

  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'darkblue', fontFamily: "Roboto, Helvetica, Arial, sans-serif",position:'fixed',top:0,height:'60px'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "flex" }} // Updated display condition
          >
            Home
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            
          {isSmallScreen ? (
      <div className="relative">
      <input type="text" placeholder="Search..." className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500" />
      <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2m-.8-.8a8 8 0 10-4.8 4.8M15 9a6 6 0 11-12 0 6 6 0 0112 0z"></path>
      </svg>
    </div>
    
      ) : (
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      )}
            <IconButton size="medium" color="inherit">
              <Badge color="error">
                <MarkChatUnreadIcon />
              </Badge>
            </IconButton>

            <IconButton size="medium" color="inherit">
              <Badge
                overlap="circular"
                badgeContent=" "
                variant="dot"
                sx={{
                  color: "white",
                  "& .MuiBadge-dot": {
                    backgroundColor: "white",
                  },
                }}
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
