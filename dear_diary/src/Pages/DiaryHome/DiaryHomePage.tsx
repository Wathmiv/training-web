import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import SearchBar from "./SearchBar/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from "../../redux/store";



function DiaryHomePage() {
  const user = useSelector((state: RootState) => state.user.nickname);

  useEffect(() => {
    if (user === "") {
      window.alert("User not found");
    }
  }, [user]);

  if (!user) {
    return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding:"50px",
    }}
    >Please set a user before using the app.</div>);
  }
  else{
  
  return (
    <LayoutBackground>
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
    >
          <ToastContainer autoClose={false}
          className="Toastify__toast-container,Toastify__toast,Toastify__toast-body"
          
          closeButton={false}
          style={{
            display: "flex",
            width: "434px" ,  
            flexDirection: "column",
            padding: "0px",
            minHeight: "40px important!",
             }}
          />

          <HeaderComponent/>
          <SearchBar/>
    </div>
    </LayoutBackground>
  );
}
}
export default DiaryHomePage;
