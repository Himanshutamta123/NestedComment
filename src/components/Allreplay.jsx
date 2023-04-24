import React from 'react'
import  { useState } from "react";



const Allreplay = (props) => {
  const [text, setText] = useState('');
    const [wantReplay, setWantReplay] = useState(false)
    const forReplay = () => {
        setWantReplay(!wantReplay);
    }

    const sentReplay = () => {
      const newdata = {name: text, items: []}
      props.item.items.push(newdata);
      setText('');
      setWantReplay(false)
    }

    const hasChildren = props.item.items;
  return (
    <>
      <div className="h-auto w-[500px] bg-slate-600 mt-4 rounded-xl">
      <p className="py-1 px-5 m-0">{props.item.name}</p>
      {wantReplay ? (<div>
        <input className="rounded-xl text-black px-2 ml-6" type="text" onChange={(event) => setText(event.target.value)} />
        <button className="bg-blue-500 px-4 rounded-xl ml-2" onClick={() => sentReplay()}>Post</button>
      </div>) : ""}
      <div>
        <button className="ml-5 pb-1" onClick={forReplay}>
          replay
        </button>
      </div>
    </div>

    {hasChildren &&  props.item.items.map((item) => {
        return(
          <div className='ml-5'>
          <Allreplay item={item}/>
          </div>
        )
      })}
    </>
  )
}

export default Allreplay
