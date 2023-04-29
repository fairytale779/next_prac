"use client";
import { useState } from "react";

export default function List() {
  let grocery = ["Tomato", "Potato", "Orange"];
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {grocery.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={"food" + i + ".png"} className="food-img" width={50} />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i] <= 0
                  ? ((copy[i] = 0), alert("더 줄일 수 없습니다!"))
                  : (copy[i]--, setCount(copy));
              }}
            >
              -
            </button>
            <span> {count[i]} </span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
