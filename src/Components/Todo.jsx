import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export const Todo = () => {
  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        <div
          className="todo_container d-flex justify-content-between align-items-center px-2"
          style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}
        >
          <li style={{ listStyle: "none" }}>React</li>
          <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-item-centre">
            <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
            <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
            <RemoveRedEyeIcon style={{ color: "#1dd1a1", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
};
