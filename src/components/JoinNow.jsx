import React from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import Laptop from "./img/Macbook Pro.png";
const JoinNow = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: "#fffcea", height: "360.9px" }}>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    sx={{ display: { lg: "flex", md: "none", sm: "none", xs: "none" } }}
                >
                    <Paper
                        sx={{
                            background:
                                " linear-gradient(45deg, #f8d374 0%, #FDEDCF 38%, #F9D0C7 100%)",
                            width: "100%",
                            height: "360.9px",
                            flexGrow: "0",
                            borderRadius: "1px",
                        }}
                    >
                        <img src={Laptop} style={{ width: "94%", margin: "65px 8px" }} />
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={8} md={12} sm={12}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "240px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            gap: "10px",
                            textAlign: "right",
                            paddingRight: {sm:"2rem", xs:"1rem", md:"4rem", lg:"10"},
                            paddingTop: "9rem",
                            
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="#37474f"
                            
                            sx={{
                                fontSize: "42px",
                                fontWeight: "bold",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.90",
                                letterSpacing: "normal",
                                textAlign: "right",
                                fontFamily: "cairo",
                            }}
                        >
                            انضم الان للتجار وضاعف ارباحك
                        </Typography>

                        <Typography
                            variant="h6"
                            color="#4f4f4f"
                            gutterBottom
                            sx={{
                                
                                fontFamily: "cairo",
                                fontSize: "20px",
                                fontWeight: "normal",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight:"1.4",
                                letterSpacing:"normal",
                                textAlign: "right",
                            }}
                        >
                            انضم الينا لادارة  اعمالك بسهولة ويسر <br /> قم يتخصيص متجرك ليناسب
                            إحتياجاتك في بضع دقائق وتحكم في إدارة <br/> طلبات وحجوزات متجرك وزود
                            عملائك الحاليين
                        </Typography>
                        <Button
                            color="secondary"
                            variant="contained"
                            sx={{
                                borderRadius: "8px",
                                boxShadow: " 0 4px 10px 0 rgba(51, 51, 51, 0.04)",
                                padding: " 9px 27px",
                                width: "108px",
                            }}
                        >
                            سجل الان
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

//  left: 10px;
//     position: absolute;
//     top: 30%;
//     width: 28%;

export default JoinNow;
