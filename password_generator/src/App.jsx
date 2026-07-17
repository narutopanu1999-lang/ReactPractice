import { useState, useCallback,useEffect,useRef} from 'react'

function App() {
  const [lengths, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
   let pass = "";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

   if(numberAllowed) str += "0123456789";
   if(characterAllowed) str += "!@#$%^&*()_+";

   for(let i = 1;i<=lengths;i++){
    let char = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char);
   }
   setPassword(pass);
  },[lengths,numberAllowed,characterAllowed, setPassword])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect(() => {
  passwordGenerator();
},[lengths,numberAllowed,characterAllowed, setPassword])

  return (
    <>
       <div className= "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className = "text-white text-center my-3">Password Generator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type = "text"
          value = {password}
          className = "w-full text-center bg-white text-gray-500 py-4 text-xl font-bold rounded-lg"
          placeholder = "Your Password"
           ref = {passwordRef}
          />
          <button onClick ={copyPassword} className = "bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-2 px-4 rounded-lg">copy</button>
        </div>
        <div className = "flex text-sm gap-x-2">
         <div classNamee = "flex items-center gap-x-1">
        <input
        type = "range"
        min = "8"
        max = "20"
        value = {lengths}
        className = "w-full cursor-pointer accent-orange-500"
        onChange={(e) =>{setLength(e.target.value)}}
        />
        <label> Length : {lengths}</label>
         </div>
        <div>
          <input
            type = "checkbox"
            checked = {numberAllowed}
            onChange = {(e) => setNumberAllowed(e.target.checked)}
          />
          <label className = "text-white ml-2">Include Numbers</label>
        </div>
        <div>
          <input
            type = "checkbox"
            checked = {characterAllowed}
            onChange = {(e) => setCharacterAllowed(e.target.checked)}
          />
          <label className = "text-white ml-2">Include Characters</label>
        </div>
        </div>
       </div>
    </>
  )
}

export default App;
