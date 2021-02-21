import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "../helpers/getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    getColors()
      /*  axiosWithAuth()
      .get(`/colors`) */
      .then((res) => {
        console.log("this is res.data ---> ", res.data);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(`This is the error message from the API ${err}`);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
// ✔️ 1. Make an axios call to retrieve all color data and push to state on mounting.
