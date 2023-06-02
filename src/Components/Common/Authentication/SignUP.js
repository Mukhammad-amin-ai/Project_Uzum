import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import InputMask from "react-input-mask";

export default function SignUP({ closLog,backFunc,cantremember }) {
  return (
    <Box
      sx={{
        width: "420px",
        height: "480px",
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ width: "85%", height: "90%" }}>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#f1f1f2",
              borderRadius: "50%",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
            onClick={backFunc}
          >
           <i class='bx bx-left-arrow-alt'></i>
          </button>
          <button
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#f1f1f2",
              borderRadius: "50%",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
            onClick={closLog}
          >
            <i class="bx bx-x"></i>
          </button>
        </Box>
        <Box
          component="form"
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box sx={{width:"100%"}}>
          <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
            {" "}
            Войти по паролю
          </Typography>

          </Box>


          <InputMask mask="+999 (99) 999-99-99" maskChar=" ">
            {() => (
              <TextField
                label="Tелефон"
                variant="outlined"
                fullWidth
              />
              )}
          </InputMask>
          <TextField
            id="outlined-basic"
            label="Пароль"
            variant="outlined"
            fullWidth
          />
          <Button
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#7000ff",
              ":hover": { backgroundColor: "#7000ff" },
            }}
          >
            <Typography sx={{ color: "white" }}> Войти</Typography>
          </Button>
          <Button onClick={cantremember} sx={{background:"transparent"}} >
            <Typography sx={{ fontSize: "14px" }}>Забыли пароль?</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
