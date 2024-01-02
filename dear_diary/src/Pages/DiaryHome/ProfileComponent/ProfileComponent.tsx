import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNickname } from '../../../redux/slices/userSlice';


function ProfileComponent(){
    const dispatch = useDispatch();
    const nickname = useSelector((state: RootState) => state.user.nickname);

    useEffect(()=>{
        if(nickname === ""){
            try {
                const storedState = localStorage.getItem("userState");
                if (storedState) {
                    const name = (JSON.parse(storedState)).nickname;
                    dispatch(setNickname(name));
                }
              } catch (error) {
                console.error("Error loading user state from localStorage:", error);
              }
        }
    },[]);

    return(
        <div 
        className="profile"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            
        }}
        >
            <div 
            className="profile-pic"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
            }}
            >
                <Box>
                    <img 
                    src="/Avatar.png" 
                    alt="icon" 
                    className="profile-icon"
                    style={{
                        maxWidth: "72px",
                        maxHeight: "72px",
                        borderRadius: "100px",
                    }}
                    />
                </Box>
            </div>

            <div className="profile-name">
                    <div 
                    className="name"
                    style={{
                        color: "#4B465C",
                        fontFamily: "Public Sans, sans-serif",
                        fontFeatureSettings: "clig off, liga off",
                        fontSize: "17px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "22px",
                        letterSpacing: "0.43px",
                    }}>
                    {nickname}
                    </div>
            </div>
        </div>
    );
}
export default ProfileComponent
