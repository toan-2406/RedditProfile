import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputField/Input";
import { addPost } from "../../Redux/postSlice";
import "./makepost.css";

const MakePost = ({ setOpen }) => {
  const tags = [
    "None",
    "NSFW",
    "Movie",
    "Music",
    "Food",
    "Sports",
    "Travel",
    "Fashion",
    "Art",
    "Technology",
    "Gaming",
    "Books",
    "Others",
  ];

  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add a description");
  const [tagsSelected, setTagsSelected] = useState([]);

  const dispatch = useDispatch();

  const HandlePost = () => {
    console.log(title, desc, tagsSelected);
    setOpen(false);
    const newPost = {
      title: title,
      desc: desc,
      tagsSelected: tagsSelected,
    };
    dispatch(addPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-post" onClick={HandlePost}>
          Post
        </p>
      </div>
      <div className="makepost-content">
        <Input
          inputType="textarea"
          placeholder={title}
          row="2"
          classStyle="input-about"
          label="Title"
          setData={setTitle}
        />
        <Input
          inputType="textarea"
          placeholder={desc}
          row="4"
          classStyle="input-about"
          label="Description"
          setData={setDesc}
        />
        <label>Tags</label>
        <div className="tag-container">
          {tags.map((tag, idx) => {
            return (
              <button
                key={idx}
                className={`btn-tag btn-tag__${tag} ${
                  tagsSelected.includes(tag) ? "active" : ""
                }`}
                onClick={() => {
                  if (tagsSelected[idx] !== idx) {
                    setTagsSelected([...tagsSelected, tags[idx]]);
                  }
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MakePost;
