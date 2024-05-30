import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*-_=+[]{}~`"

    for(let i = 1; i<= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += char;
    }
    setPassword(pass)

  },  [length, number, character, setPassword])

  return (
    <>
      <h1 className="text-4xl text-center">
        Password Generator
      </h1>
    </>
  )
}

export default App
