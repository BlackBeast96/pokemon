import React from 'react'

function Card(props){
    return(
        <>
        <main className='mt-14 ml-5 xl:ml-20 xl:mt-28'>
            <div className='float-left ml-8 pr-2 xl:ml-8 xl:mr-8 mb-8 bg-gradient-to-tr  from-pink-500 rounded-xl to-yellow-500 w-32 h-52 '>
                <div className='grid'>
                    <img className='w-52 h-auto justify-self-center' src={props.img}/>
                    <h1 className='font-bold justify-self-center font-mono text-md mt-1'>{props.type}</h1>
                    <h1 className='justify-self-center font-extrabold text-sky-400 font-serif text-xl '>{props.name}</h1>
                </div>
            </div>
        </main>
        </>
    )
}

export default Card;