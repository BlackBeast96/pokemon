import React, { useEffect, useState} from 'react'
import Card from "./comp/card"


function App() {
  const [name,setname]=useState("charizard");
  const [fronts,setfronts]=useState();
  const [frontd,setfrontd]=useState();
  const [backd,setback]=useState();
  const [backs,setbacks]=useState();
  const [pokname,setpokname]=useState();
  const [type,settype]=useState();
  const [type2,settype2]=useState();
  const [ability,setability]=useState();
  const [ability2,setability2]=useState();
  const [moves,setmoves]=useState([]);
  const [moves2,setmoves2]=useState([]);
  const [moves3,setmoves3]=useState([]);
  var rawname;
  function change(e){
   var data=e.target.value;
   rawname=data.toLowerCase();
  }
  function click(e){
    e.preventDefault();
    console.log(name);
    setname(rawname);
    console.log(name);
  }

  useEffect(()=>{
    async function run(){
      var val=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      var data=await val.json();
      setfronts(data.sprites.front_shiny);
      setback(data.sprites.back_default)
      setfrontd(data.sprites.front_default)
      setbacks(data.sprites.back_shiny)
      settype(data.types[0].type.name)
      settype2(data.types[1].type.name)
      setpokname(data.name)
      setability(data.abilities[0].ability.name)
      setability2(data.abilities[1].ability.name)
      console.log(data);
      setmoves([data.stats[5].stat.name]);
      setmoves2([data.stats[1].stat.name]);
      setmoves3([data.stats[2].stat.name]);
    }
    run()
  },[name])


  return (
    <>
    <form className='grid justify-items-center mt-10'>
      <input placeholder='enter pokemon name' className='border-2 border-black md:w-64 w-52 pl-2 rounded-md' onChange={change}/>
      <input type="submit" className="but ml-4 mt-2 border cursor-pointer border-3 bg-black text-white rounded-3xl w-20" onClick={click} value="Search"/>
    </form>
      <Card name={pokname} img={fronts} type={type}/>  
      <Card name={pokname} img={backd} type={ability}/>  
      <Card name={pokname} img={backs} type={ability2}/>
      <Card name={pokname} img={backs} type={type2}/>
      <Card name={pokname} img={backs} type={moves2}/>
      <Card name={pokname} img={frontd} type={moves}/>
      <Card name={pokname} img={backd} type={ability}/>  
      <Card name={pokname} img={backd} type={ability2}/>  
      <Card name={pokname} img={fronts} type={type}/>  
      <Card name={pokname} img={frontd} type={moves}/>
    </>
  );
}

export default App;
