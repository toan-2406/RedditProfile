import React from "react";

const Input = ({ classStyle, inputType, label, setData, placeholder, row }) => {
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          className={classStyle}
          onChange={(e) => setData(e.target.value)}
          rows={row}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
