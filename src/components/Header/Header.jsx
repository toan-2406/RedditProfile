import React from "react";
import "boxicons";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = ({ setIsEdit }) => {
  const user = useSelector((state) => state.user);

  const handleEdit = () => {
    setIsEdit(true);
    console.log("Edit");
  };
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.theme}`,
          backgroundImage: `linear-gradient(180deg,${user.theme} 2%, ${user.theme} 55%,#181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit">
            <box-icon
              name="edit"
              color="#fff"
              size="sm"
              onClick={handleEdit}
            ></box-icon>
          </div>
          <div className="info-avatar">
            <img src={user.avaURL} alt="Avatar" />
          </div>
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age} year old</div>
          <div className="info-about">
            <p>{user.about}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
