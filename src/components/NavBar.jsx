import React from "react";
import AppBar from "@mui/material/AppBar";
import {Box, CssBaseline} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "./img/Shopex.png";
import Download from './Download'

const NavBar = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
    <CssBaseline/>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon sx={{ color: "#828282", }} />
              <Download/>
            </Box>

            <Box sx={{display:"flex"}}>
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  boxShadow: " 0 4px 10px 0 rgba(51, 51, 51, 0.04)",
                  padding: " 5px 10px",
                  width: "108px",
                  display:{sm:"flex", xs:"none", md:"flex", lg:"flex"}
                }}
              >
                سجل الان
              </Button>
              {/* <Link color="#f95738" sx={{textDecoration:"none", cursor:"pointer", marginLeft:"10px"}}>
            تسجيل الدخول
        </Link> */}
              <Button color="warning" sx={{ marginLeft: "10px" }}>
                تسجيل الدخول
              </Button>
            </Box>
          </Box>
          <Box>
            <img src={Logo} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
