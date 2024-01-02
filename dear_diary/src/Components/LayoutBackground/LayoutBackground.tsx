// import "./LayoutBackground.css";
import React, { ReactNode } from 'react';

interface LayoutBackgroundProps {
    children: ReactNode; 
  }

function LayoutBackground({ children }: LayoutBackgroundProps) {
  return (
        <div className="layout_bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/BackgroundImage.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position:"relative",
          minHeight: "100%",
          overflow: "auto",
          backgroundRepeat: "no-repeat",

        }}
       
        >
         <div style={{ minHeight: '100vh', overflow: 'auto' }}>
        {children}
      </div>
        
        </div>
  );
}

export default LayoutBackground;