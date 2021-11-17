import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPage,
  previousPage,
  fillList,
} from "../store/starwarsReducer/starwarsReducer";
import CharInfo from "./CharInfo";
import { size } from "lodash";
import "./characters.css";

export default function Characters() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list);
  const [charToDisplay, setCharToDisplay] = useState(null);
  const backColor = "red";

  useEffect(() => {
    dispatch(fillList(page));
  }, [page, dispatch]);

  const handleClick = (index) => {
    setCharToDisplay(index);
  };

  return (
    <div className="starwarsNames">
      {size(list)
        ? list.map((elem, index) => (
            <div className="divGeneralText">
              <div
                onClick={() => handleClick(index)}
                style={{
                  backgroundColor: charToDisplay === index ? backColor : "",
                }}
                className="starwarsDivNames"
                value={elem.name}
              >
                {elem.name}
              </div>
              <div>
                {Number.isInteger(charToDisplay) && index === charToDisplay && (
                  <CharInfo info={elem} />
                )}
              </div>
            </div>
          ))
        : "loading"}
      <div className="btnChangePageDiv">
        <button
          className="btnChangePages btnPrevious"
          onClick={() => dispatch(previousPage())}
        >
          previous
        </button>
        <button className="btnChangePages" onClick={() => dispatch(nextPage())}>
          next
        </button>
      </div>
    </div>
  );
}
