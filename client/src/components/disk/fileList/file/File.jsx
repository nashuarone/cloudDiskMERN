import React from "react";

const File = ({file}) => {
  return (
    <div className="file">
      <i
        className={
          file.type === "dir"
            ? "far fa-folder-open file__img"
            : "far fa-file file__img"
        }
      ></i>
      <div className="file__name">{file.name}</div>
      <div className="file__date">{file.date.slice(0, 10)}</div>
      <div className="file__size">{file.size}</div>
    </div>
  );
}

export default File
