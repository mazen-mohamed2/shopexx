import React from "react";
import Analayss from "./img/Group 1000001965.png";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Analays = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    marginTop: "100px",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: {
                        sm: "column-reverse",
                        xs: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                        lx: "row",
                    },
                }}
            >
                <Grid item xs={12} sm={12} lg={6} xl={6} md={12}>
                    <Box
                        sx={{
                            textAlign: {
                                sm: "center",
                                xs: "center",
                                md: "center",
                                lg: "right",
                                lx: "right",
                            },

                            marginRight: "3rem",
                            marginBottom: "3rem",
                            width: {
                                sm: "100%",
                                xs: "100%",
                                md: "100%",
                                lg: "80%",
                                lx: "80%",
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="#37474f"
                            sx={{
                                fontSize: "32px",
                                fontFamily: "Cairo",
                                fontWeight: "bold",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.25",
                                letterSpacing: "normal",
                            }}
                        >
                            تقارير تحليلية عن المبيعات والمنتجات
                            <br /> والموظفين ... الخ
                        </Typography>
                        <Typography variant="h5" color="#828282" sx={{
                             fontSize: "24px",
                                fontFamily: "Cairo",
                                fontWeight: "600",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.33",
                                letterSpacing: "normal",
                        }}>
                            راجع تقارير متجرك واي فرع بكل مرونة في اي وقت
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} lg={6} xl={6} md={12}>
                    <img src={Analayss} alt="img" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </>
    );
};

export default Analays;
