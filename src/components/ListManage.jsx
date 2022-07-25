import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import Boxs from "./img/Group 10078.png";
import Ramin from "./img/ramin.png";

const ListManage = () => {
    return (
        <>
        <Grid container>
        <Grid item lg={12} md={12} xs={12} sm={12}>
                    <Box
                        sx={{
                            marginTop: "100px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            marginBottom: "40px",
                            marginRight: "100px",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="#37474f"
                            sx={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "normal",
                                letterSpacing: "1px",
                                fontFamily: "cairo",
                                textAlign: "center",
                            }}
                        >
                            مالذي تقدمه لك <span style={{ color: "#f95738" }}>شوبيكس</span>؟{" "}
                        </Typography>

                        <Typography
                            variant="h6"
                            color="#37474f"
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.33",
                                letterSpacing: "normal",
                                textAlign: "center",
                                fontFamily: "cairo",
                            }}
                        >
                            تنفرد شوبيكس بالعديد من المميزات التي تساعد في نمو أعمالك بسرعة
                            واحترافية
                        </Typography>
                    </Box>
                </Grid>

        </Grid>
            <Grid container spacing={8} sx={{ flexDirection:{sm:"column-reverse", md:"column-reverse", xs:"column-reverse",lg:"row"},display:"flex"}} >
               

                <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "96px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: {sm:"center",md:"center",xs:"center",lg:"flex-start",xl:"flex-start"},
                            alignItems: {sm:"center",md:"center",xs:"center",lg:"flex-end",xl:"flex-end"},
                            gap: "24px",
                            marginTop: "10rem",
                            
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="#37474f"
                            gutterBottom
                            sx={{
                                fontSize: "32px",
                                fontFamily: "Cairo",
                                fontWeight: "bold",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.25",
                                letterSpacing: "normal",
                                textAlign: "center",
                            }}
                        >
                            إدارة قوائم الطعام والمنتجات
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            color="#828282"
                            sx={{
                                fontSize: "24px",
                                fontFamily: "Cairo",
                                fontWeight: "600",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                lineHeight: "1.33",
                                letterSpacing: "normal",
                                textAlign: "center",
                            }}
                        >
                            تحكم في إدراة قوائم الطعام والمنتجات الخاصة بمتجرك
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6} md={12} sm={12} xl={6} sx={{display:"flex", justifyContent:"center"}} >
                    <Paper
                        sx={{
                            position: "relative",
                            backgroundColor: "rgba(250, 224, 83, 0.53)",
                            width: "360px",
                            height: "350px",
                            margin: "0 66px 72.4px 97.3px",
                            borderRadius: "14.5px",
                            
                        }}
                    >
                        {/* img ramin */}
                        <Box  >
                            <Paper
                                sx={{
                                    boxShadow: "0 4.5px 9px 0 rgba(0, 0, 0, 0.12)",
                                    width: "300px",
                                    height: "300px",
                                    position: "absolute",
                                    left: "-85px",
                                    top: "7rem",
                                    borderRadius: "15px",
                                    padding: "178px 40px 52.5px 40.3px;",
                                }}
                            >
                                <img
                                    src={Ramin}
                                    alt="ime"
                                    style={{
                                        position: "absolute",
                                        bottom: "10rem",
                                        width: "213px",
                                    }}
                                />
                                <Box sx={{ marginBottom: "20px" }}>
                                    <Typography
                                        variant="h5"
                                        color="#4f4f4f"
                                        sx={{
                                            textAlign: "center",
                                            fontFamily: "Barlow",
                                            fontSize: "23.5px",
                                            fontWeight: "500",
                                            fontStretch: "normal",
                                            lineHeight: "1.3",
                                            letterSpacing: "normal",
                                        }}
                                    >
                                        Spicy seasoned <br /> seafood noodles
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            marginTop: "5px",
                                            fontFamily: "Barlow",
                                            fontSize: "23.5px",
                                            fontWeight: "normal",
                                            fontStretch: "normal",
                                            lineHeight: "1.4",
                                            letterSpacing: "normal",
                                        }}
                                        color="#4f4f4f"
                                    >
                                        80 SAR
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>

                        {/* ime boxes */}
                        <Box>
                            <img
                                alt="ime"
                                src={Boxs}
                                style={{
                                    position: "absolute",
                                    right: "-67px",
                                    top: "5.5rem",
                                    objectFit: "contain",
                                    width: "180px",
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default ListManage;
