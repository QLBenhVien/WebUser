import React, { useState } from "react";
import "./Login.css"; // Import CSS file
import logo from "../../images/logo.png";
import doctor from "../../images/doctor.png";
import backgroundImage from "../../images/background_img.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false); // Trạng thái để mở hoặc đóng Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Lưu tin nhắn của Snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Đặt mức độ của Snackbar (success, error)

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = async () => {
    console.log(
      `email: ${email} | password: ${password} | username: ${username}`
    );
    try {
      const response = await axios.post("http://localhost:8080/register", {
        email: email,
        password: password,
        username: username,
        role: "KH",
      });

      console.log(response);
      localStorage.setItem("registerSuccess", "true");

      navigate("/login");
    } catch (error) {
      console.log(error);

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
        <h2 className="WelcomeText">Vui lòng đăng ký</h2>
        <div className="LoginBox">
          <h2>Đăng Ký</h2>
          <input
            type="text"
            placeholder="Nhập email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Nhập username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
              <button
                className="linkButton"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Trở lại đăng nhập?
              </button>

              <button className="linkButton">Quên mật khẩu?</button>
            </div>

            <button onClick={handleRegister} className="button">
              Đăng Ký
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

export default Register;
