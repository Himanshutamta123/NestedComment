import React, { useState } from "react";

const Replays = (props) => {
  const takeData = props.item;
    const [wantReplay, setWantReplay] = useState(false)
    const forReplay = () => {
        setWantReplay(!wantReplay);
    }
  return (
    <div className="h-auto w-[500px] mt-4 ml-14 bg-slate-600 rounded-xl">
      <p className="ml-5 p-1">{takeData.nest}</p>
      {wantReplay ? (<div>
        <input className="rounded-xl text-black px-2" type="text"  />
        <button className="bg-blue-500 px-4 rounded-xl ml-2">Post</button>
      </div>) : ""}
      
      <div>
        <button className="ml-6 pb-1" onClick={forReplay}>
          replay
        </button>
      </div>
    </div>
  );
};

export default Replays;
