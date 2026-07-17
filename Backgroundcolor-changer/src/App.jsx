import { useState } from "react"; 

const App = () => {
  const [color, setColor] = useState("olive"); 

  return (
    // 1. Main screen: H-screen acts as the canvas. No flex centering here so child items don't get crushed.
    <div className="w-full h-screen transition-colors duration-300" style={{ backgroundColor: color }}>
      
      {/* Optional: If you want text centered on the screen, do it in its own container */}
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-white text-3xl font-bold bg-black/20 px-4 py-2 rounded-md">
          Background Changer
        </h1>
      </div>

      {/* 2. Floating Menu: Fixed layout entirely separated from the center text layer */}
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-6 py-3 rounded-2xl border border-gray-100">
          <button className="bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-xl text-white font-medium shadow-md" onClick={() => setColor("red")}>Red</button>
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-xl text-white font-medium shadow-md" onClick={() => setColor("blue")}>Blue</button>
          <button className="bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 rounded-xl text-white font-medium shadow-md" onClick={() => setColor("green")}>Green</button>
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 rounded-xl text-black font-medium shadow-md" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded-xl text-white font-medium shadow-md" onClick={() => setColor("purple")}>Purple</button>
          <button className="bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-xl text-white font-medium shadow-md" onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>

    </div>
  );
};

export default App;