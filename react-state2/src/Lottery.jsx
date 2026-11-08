import { useState } from "react";

export default function Lottery(){
    const [num , setNum] = useState(null);
    const [check , setCheck] = useState(num);

  let lotteryNumber =  ()=>{
    setNum(()=>{
        return Math.floor(Math.random() * 900 ) + 100 ;
    })  
    }

    let lotteryCheck = ()=>{
        setCheck(check + 1);
        console.log(check + 1);
        
    }
    

    
    return(
        <div>
            <button onClick={lotteryNumber}>Generate Ticket</button>
                        <p > {num} </p>
                        <button onClick={lotteryCheck}>View Result : {check} </button>
        </div>
    )
}