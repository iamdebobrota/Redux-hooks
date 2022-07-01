import React, { useState } from "react";
import { useSelector } from "react-redux";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state);
  const { name, email, password } = user;
  const [showpassword, setShowPassword] = useState(false);

  if (!user) {
    return <Navigate to="/register" />;
  }
  return (
    <div className="shadow-md w-1/3 m-auto mt-20 px-10">
      <div>
        <h2 className="text-center text-2xl font-semibold mb-5">Profile</h2>
        <div className="border-red-2 rounded-full bg-red-500 w-14 h-14 m-auto mb-4">
          <h1 className="text-white text-3xl pt-2">{name.substring(0, 1)}</h1>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <div>
            Name <span>&#10140;</span>
          </div>
          <div>{name}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div>
            Email <span>&#10140;</span>
          </div>
          <div>{email}</div>
        </div>
        <div className="flex justify-between">
          <div>
            Password <span>&#10140;</span>
          </div>
          <div className="mb-20">
            <input
              type={showpassword ? "text" : "password"}
              value={password}
              readOnly
            />
            {!showpassword && (
              <VisibilityOffIcon
                style={{
                  fontSize: "18px",
                  marginLeft: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(!showpassword)}
              />
            )}
            {showpassword && (
              <RemoveRedEyeIcon
                style={{
                  fontSize: "18px",
                  marginLeft: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(!showpassword)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
