import React from "react";
import { useState } from "react";
import Replays from "./Replays";
import Allreplay from "./Allreplay";


const Comment = () => {
  const [input, setInput] = useState('');
  const [datas, setDatas] = useState([])
  const [count,setCount] = useState(1)
  const ClickHandle = () => {
    setCount(count +1)
    const newComment = {id:count,body: input,nest:[]};
    datas.push(newComment);
    console.log(datas)
    setDatas([...datas])
    setInput('')
  };


  return (
    <>
      <div className="bg-black-200 h-16 w-96 mt-5 p-4 rounded-md">
        <input
          className="p-1 w-60 rounded-xl pl-3 text-black"
          type="text"
          placeholder="Comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-4 bg-blue-500 p-1 rounded-xl px-2"
          onClick={() => ClickHandle()}
        >
          Comment
        </button>
      </div>
      <div>
        {datas.map((item ) => {
          return <Allreplay comment={item}/>;
        })}
      </div>
    </>
  );
};

export default Comment;
