import React from "react";
import { useState } from "react";

function Task({category, text}) {
  const [classBlock, setBlock] = useState(true)
  return (
    <div className={classBlock ? "task" : 'none'}>
      <div className="label">{category}</div>
      <div className="text">{classBlock ? text : null}</div>
      <button className="delete" onClick={() => setBlock(!classBlock)}>X</button>
    </div>
  );
}

export default Task;

