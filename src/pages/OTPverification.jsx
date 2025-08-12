// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPverification({ setUser }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOTP = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      console.log("User signed in:", result.user);

      // Save user details in localStorage
      localStorage.setItem("user", JSON.stringify({
        uid: result.user.uid,
        phone: result.user.phoneNumber,
        profilePicture: result.user.photoURL || "https://via.placeholder.com/40"
      }));

      // ✅ Set user as logged in
      setUser(true);

      navigate("/dashboard");
    } catch (error) {
      console.error("Invalid OTP:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
}
