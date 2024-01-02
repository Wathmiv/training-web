import Box from '@mui/material/Box';
import ProfileComponent from "../ProfileComponent/ProfileComponent";

function HeaderComponent() {
  return (
    <div 
      style={{
        position: "absolute",
        top: "60px",
        left: "60px",
        right:"60px",
        // padding: "24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
        justifyContent: "space-between",
      }}
    >
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
      }}
      >
      <Box>
      <img src="/Logo.png" alt="icon" className="logo" />
      </Box>

      <div className="title"
      style={{
        color: "#4B465C",
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontFamily: "Public Sans, sans-serif",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "24px",
        fontStyle: "normal",
       }}
      
      >
        Dear Diary
      </div>
      </div>
      <ProfileComponent/>
    </div>
  );
}

export default HeaderComponent;