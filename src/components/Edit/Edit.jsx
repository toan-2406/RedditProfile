import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/apiRequest";
import Input from "../InputField/Input";
import "./edit.css";

const Edit = ({ setIsEdit }) => {
  const avaUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];

  //useSelector để lấy dữ liệu(State) từ redux
  const user = useSelector((state) => state.user);

  //useDispatch để gửi dữ liệu(Action) tới redux
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [ava, setAva] = useState(user.ava);
  const [theme, setTheme] = useState("#dd572e");

  //State khi chọn avatar
  const [isAvatarIdx, setIsAvatarIdx] = useState(0);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEdit(false);
    console.log("Save");
    const NewUser = {
      name: name,
      age: age,
      about: about,
      avaURL: ava,
      theme: theme,
    };
    //Truyền dữ liệu(Action) tới redux
    updateUser(NewUser, dispatch);
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <section className="edit-container">
          <button type="submit" className="edit-button">
            <box-icon name="save" color="#fff"></box-icon>
          </button>

          <div className="edit-profile">Edit profile</div>
          <div className="input-container">
            <Input label="Display name" placeholder={name} setData={setName} />
            <Input label="Age" placeholder={age} setData={setAge} />
            <Input
              label="About"
              inputType="textarea"
              classStyle="input-about"
              setData={setAbout}
              row="3"
              placeholder={about}
            />
            <label>Profile picture</label>
            <div className="input-image-container">
              {avaUrl.map((url, index) => {
                return (
                  <div
                    className={`image-item ${
                      index === isAvatarIdx ? "active" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={url}
                      alt="Avatar"
                      onClick={(e) => {
                        setAva(e.target.src);
                        setIsAvatarIdx(index);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Edit;
