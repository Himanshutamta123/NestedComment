import React from "react";
import { useState } from "react";
import Allreplay from "./Allreplay";


const Comment = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState('');
  const ClickHandle = () => {
    const newComment = {name:inputs, items:[]};
    data.push(newComment);
    console.log(data)
    setData([...data])
    setInputs('')
  };

  return (
    <>
      <div className="bg-black-200 h-16 w-96 mt-5 p-4 rounded-md">
        <input
          className="p-1 w-60 rounded-xl pl-3 text-black"
          type="text"
          placeholder="Comment..."
          value={inputs}
          onChange={(event) => setInputs(event.target.value)}
        />
        <button
          className="ml-4 bg-blue-500 p-1 rounded-xl px-2"
          onClick={() => ClickHandle()}
        >
          Comment
        </button>
      </div>
      <div>
        {data.map((item) => {
          return <Allreplay className="ml-6" item={item}/>;
        })}
      </div>
    </>
  );
};

export default Comment;
