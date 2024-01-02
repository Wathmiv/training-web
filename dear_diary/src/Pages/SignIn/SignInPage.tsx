import React, { useEffect } from "react";
import { Card,CardContent,CardHeader, TextField, Button,Typography, Grid, Box} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import randomNickname from "../../utility/randomNickname";
import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import { useDispatch, useSelector } from "react-redux";
import { setNickname } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearEntries } from "../../redux/slices/diaryReducer";
import { Diary_Home_PATH } from "../../utility/constants";

function SignInPage() {
  const history = useNavigate()
  const dispatch = useDispatch();
  const [random, setRandom] = useState("")
  
  const handleRandomButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRandom(randomNickname());     
  };

  useEffect(() => {
    return () => {
      dispatch(clearEntries());
    };
  }, [dispatch]);

  const handleContinueButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (random.trim() !== ""){
        dispatch(setNickname(random));
        toast.success("Login Successful!",{autoClose: 2000});
      try{
        localStorage.setItem("userState", JSON.stringify({nickname:random}));
      } catch (error) {
        console.error("Error saving user state to localStorage:", error);
      }
      history(Diary_Home_PATH);
      }    
  };

  return (
    <LayoutBackground>
    <div 
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
    >
      <Card 
      style={{
        maxWidth: "742px",
        alignSelf: "center",
        borderRadius: "6px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)"
      }}
      >
      <CardHeader 

      title={
        <Typography 
        style={{
          fontFamily: "public sans, sans-serif",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "24px",
          textAlign: "left",
        }}
        >
          Dear Diary
        </Typography>
      } 
      style={{
         display: "flex",
          padding: "24px 24px 0px 24px",
          alignItems: "center",
          gap: "12px",
          alignSelf: "stretch",
      }}
      avatar={<Avatar alt="Logo" src="/Logo.png" style={{width: "40px",
        height: "40px"}}/>}
      >
      </CardHeader>

      <CardContent 
      style={{
        padding: "24px",
      }}
      >
      <div 
      style={{
        maxWidth: "694px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}
      >
        <div className="frame1"
        style={{
          minHeight: "39px"
        }}
        >
        <Typography
              className="sign_in_text "
              style={{
                fontFamily: 'Public Sans, sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '24px', 
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#0092DD',
              }}
            >
              Sign In
            </Typography>
        </div>  
        <div className="frame2"
        style={{
          maxWidth: "614px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          padding: "0px 40px 0px 40px"
        }}
        >
          <div className="formContainer"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            maxWidth:"100%",  
          }}
          
          >
            <Grid 
            container direction="row" 
            alignItems="center" 
            justifyContent="center" 
            sx={{ gap: '16px',
            }}>
              <Grid item >
                <div
                style={{
                  maxWidth: "395px",
                }}
                >
              
                  <TextField
                  placeholder="Your Nickname*"
                  fullWidth
                  size="small"
                  sx={{
                    color: "#DBDADE",
                    border: "1px",
                    borderColor: "#DBDADE",
                    borderRadius: "4px",
                    padding: "7px, 10px, 7px, 10px",
                    width: "395px",
                    maxWidth: "100%",
                    '@media (max-width: 395px)': {
                      width: '100%', 
                    },
                  }}
                  value = {random} //set the value of the input to the random state
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRandom(e.target.value)}//set the random state to the value of the input

                  />
                </div>
            </Grid>
        <Grid item  justifyContent="center">
              
            <Button 
              type="button" 
              variant="contained"
              className="submitButton"
              style={{
                textTransform: "none",
                padding: "10px, 20px",
                background: '#0092DD29',
                color: '#0092DD',
              }}
              onClick={handleRandomButtonClick}
              >
                Random
              </Button>
              </Grid>
            </Grid>
           </div>
            
          <div className="continue"
          style={{
            width: "614px",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Button 
            type="button" 
            variant="contained" 
            className="secondButton"
            
            style={{
              textTransform: "none",
              backgroundColor:"#0092DD",
              opacity: random.trim() === "" ? "65%" : "",
            }}
            endIcon={<ArrowForward />}
            onClick={handleContinueButtonClick}
            >
          Continue
          </Button>
          </div>  
        </div>
      </div>
      </CardContent>
    </Card>
    </div>
    </LayoutBackground>
  );
}



export default SignInPage;