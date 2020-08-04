import React from "react";

export default function Todo(props) {
  return (
    <div
    onClick={() => props.toggleItem(props.item.id)}
    className={`${props.item.completed ? "completedChore" : ""}`}
  >
    <h2>{props.item.chore}</h2>
  </div>
  );
}
