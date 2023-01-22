import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const formData = [
  {
    placeHolder: "Name",
    type: "input",
    fieldName: "user_name",
  },
  {
    placeHolder: "idk",
    type: "input",
    fieldName: "user_name",
  },
  {
    placeHolder: "Adhaar",
    type: "image",
    fieldName: "adhaar_front",
  },
  {
    placeHolder: "",
    type: "radio",
    Options: ["1", "2"],
  },
];

let fields = [];

for (let i = 0; i < formData.lenth; i++) {
  fields.append(formData[i].fieldName);
}

const initialState = [
  
]
