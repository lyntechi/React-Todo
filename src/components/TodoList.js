// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function ItemList(props) {
  console.log(props);
  return (
    <div className="todo"> 
      {props.choresList.map((item) => {
        return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
}
