import React from "react";
import { Grid, Box, Paper, Typography,Divider,Button,Skeleton  } from "@mui/material";
import Delivery from "./img/svgexport-6 (8).png";
import Pasta from "./img/Images.png";
import Bage from "./img/svgexport-10 1.png";
import Reserve from "./img/Frame 1000001966.png";



const Kindes = () => {
  return (
    <>
      <Grid
        container
        sx={{
          marginLeft:"0",
          backgroundColor: "rgba(249, 87, 56, 0.1)",
          padding:{lg:"3rem 7rem", xl:"3rem 7rem", sm:"1rem", md:"1rem",xs:"1rem"},
          paddingRight:"10rem",
          marginTop: "100px",
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
          width:"100%"
        }}
        spacing={2}
      >
        <Grid item lg={5} xs={12} sm={12} md={12} sx={{display:"flex",justifyContent:{sm:"center",md:"center",xs:"center",lg:"flex-start",xl:"flex-start"} }}>
          <Paper
            sx={{
              backgroundColor: "#fae053",
              width: "250px",
              height: "45vh",
              position: "relative",
              marginLeft: "0",
              borderRadius: "15px",
              display: "flex",
            }}
          >
            <Paper
              sx={{
                width: "190px",
                height: "41vh",
                position: "absolute",
                left: "-18px",
                top: "35px",
                borderRadius: "17px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
                <img src={Pasta} style={{width:"10rem",marginTop:"-30px"}} />
                <Box>
                  <Skeleton animation="false" height={10} colo="#f2f2f2" sx={{width:"150px",}} />
                
                  <Skeleton  animation="false" height={10} colo="#f2f2f2" sx={{width:"150px",}} />
                
                  <Skeleton  animation="false" height={10} colo="#f2f2f2" sx={{width:"80px"}} />
                  <br/>
                </Box>
                <Button variant="contained" color="error" sx={{ borderRadius:"100px",width:"150px"}}>
                    Order now
                </Button>

            </Paper>















            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                right: "-28px",
                top: "60px",
              }}
            >
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <img src={Delivery} style={{ width: "55px" }} />
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15px",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <img src={Bage} style={{ width: "55px" }} />
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <img src={Reserve} style={{ width: "55px" }} />
              </Paper>
            </Box>
          </Paper>
        </Grid>

        <Grid item lg={7} xs={12} sm={12} md={12}>
          <Box sx ={{display: "flex",
                            flexDirection: "column",
                            justifyContent: {sm:"center",md:"center",xs:"center",lg:"flex-start",xl:"flex-start"},
                            alignItems: {sm:"center",md:"center",xs:"center",lg:"flex-end",xl:"flex-end"},
                            textAlign:{sm:"center",md:"center",xs:"center",lg:"right",xl:"right"},
                            paddingTop:{lg:"3rem 4rem", xl:"3rem 4rem", sm:"3rem", md:"3rem",xs:"3rem"}
                            

                            }}
                            
                            >
            <Typography variant="h4" color="#37474f" sx={{ fontSize: "32px",
                                fontFamily: "Cairo",
                                fontWeight: "bold",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.25",
                                letterSpacing: "normal",
                                textAlign: "center",}}>
              انواع مختلفة للطلبات - توصيل او استلام او حجز
            </Typography>
            <Typography variant="h6" color="#828282" sx={{ fontSize: "24px",
                                fontFamily: "Cairo",
                                fontWeight: "600",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.33",
                                letterSpacing: "normal",
                                textAlign: "center",}}>
              تابع طلبات وحجوزات عملائك بسهولة من خلال لوحة تحكم واحدة <br />
              اوصل لعملاء اكثر في مناطق اكبر
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Kindes;
