import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialClassList = [];

export default function Home() {
  const [classList, setClassList] = useState(initialClassList);

  useEffect(() => {
    axiosWithAuth()
      .get("https://anywhere-fitness-tt42.herokuapp.com/api/classes")
      .then((res) => {
        setClassList(res.data);
        console.table(res.data, "list of classes");
      })
      .catch((err) => {
        console.log(err, "error getting classes");
      });
  }, []);

  return (
    <div className="classCardContainer">
      {classList.map((item) => {
        return <Cards details={item} key={item.class_id} />;
      })}
    </div>
  );
}
