import { useState } from "react"



function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#9c1111")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#9c1111"}}
          >RCB</button>
          <button
          onClick={() => setColor("#481780")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#481780"}}
          >KKR</button>
          <button
          onClick={() => setColor("#0c2dcf")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#0c2dcf"}}
          >MI</button>
          <button
          onClick={() => setColor("#cf610c")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#cf610c"}}
          >SRH</button>
          <button
          onClick={() => setColor("#57c9be")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#57c9be"}}
          >LSG</button>
          <button
          onClick={() => setColor("#07a2f0")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#07a2f0"}}
          >DC</button>
          <button
          onClick={() => setColor("#d1084b")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#d1084b"}}
          >PBKS</button>
          <button
          onClick={() => setColor("#081129")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#081129"}}
          >GT</button>
          <button
          onClick={() => setColor("#e3d730")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#e3d730"}}
          >CSK</button>
          <button
          onClick={() => setColor("#e65ac0")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#e65ac0"}}
          >RR</button>
        </div>
      </div>
    </div>
  )
}

export default App