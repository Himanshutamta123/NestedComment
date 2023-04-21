import React from 'react'
import  { useState } from "react";
import Replays from './Replays';


const Allreplay = (props) => {

  const innerData = props.comment.nest;
  const hasChildren = innerData && innerData.length;
    const [doReplay, setDoReplay] = useState('')
    const [wantReplay, setWantReplay] = useState(false)
    const forReplay = () => {
        setWantReplay(!wantReplay);
    }

    const sentReplay = () => {
      const nestedData = {nest: doReplay, anotherNest: []}
      props.comment.nest.push(nestedData);
      setDoReplay('');
    }
  return (
    <>
      <div className="h-auto w-[500px] bg-slate-600 mt-4 rounded-xl">
      <p className="py-1 px-5 m-0">{props.comment.body}</p>
      {wantReplay ? (<div>
        <input className="rounded-xl text-black px-2 ml-6" type="text" onChange={(event) => setDoReplay(event.target.value)} />
        <button className="bg-blue-500 px-4 rounded-xl ml-2" onClick={() => sentReplay()}>Post</button>
      </div>) : ""}
      <div>
        <button className="ml-5 pb-1" onClick={forReplay}>
          replay
        </button>
      </div>
    </div>

    {hasChildren && innerData.map((item) => {
        return(
          <Replays item={item}/>
        )
      })}
    </>
  )
}

export default Allreplay
