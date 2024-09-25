import React, { useEffect, useState } from "react";
import "./Login.css"; // Import CSS file
import logo from "../../images/logo.png";
import doctor from "../../images/doctor.png";
import backgroundImage from "../../images/background_img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false); // Trạng thái để mở hoặc đóng Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Lưu tin nhắn của Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Đặt mức độ của Snackbar (success, error)

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    console.log("check token");
    if (localStorage.getItem("token")) {
      navigate("/trangchu");
    }
    const isRegisterSuccess = localStorage.getItem("registerSuccess");

    if (isRegisterSuccess === "true") {
      setSnackbarMessage("Tạo tài khoản thành công !");
      setSnackbarSeverity("success");
      setOpen(true);

      // Xóa cờ đăng nhập thành công sau khi hiển thị thông báo
      localStorage.removeItem("loginSuccess");
    }
  }, [navigate]);

  const handleLogin = async () => {
    console.log(`email: ${email} | password: ${password}`);
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });

      console.log(response);
      // Hiển thị thông báo thành công
      // setSnackbarMessage("Đăng nhập thành công!");
      // setSnackbarSeverity("success");
      // setOpen(true);

      // Lưu token vào localStorage
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("loginSuccess", "true");
      // Điều hướng sau khi đăng nhập thành công
      navigate("/trangchu");
    } catch (error) {
      console.log(error);

      // Hiển thị thông báo lỗi
      setSnackbarMessage(error.response.data.errorMessage);
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };

  return (
    <div
      className="AppContainer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      <div className="LeftContainer">
        <div className="Header">
          <img
            src={logo}
            alt="Logo"
            className="Logo"
            onClick={() => {
              navigate("/trangchu");
            }}
          />
        </div>
        <h2 className="WelcomeText">Vui lòng đăng nhập</h2>
        <div className="LoginBox">
          <h2>Đăng Nhập</h2>
          <input
            type="text"
            placeholder="Nhập email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className="boxbutton">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button className="linkButton" onClick={handleRegister}>
                Đăng ký?
              </button>

              <button className="linkButton">Quên mật khẩu?</button>
            </div>

            <button onClick={handleLogin} className="button">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
      <div className="RightContainer">
        <img src={doctor} alt="Doctor" className="DoctorImage" />
      </div>
    </div>
  );
};

export default Login;
