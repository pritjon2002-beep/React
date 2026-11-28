import React, { useState } from "react";
import { genTicket  , sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n,winCondition}){
    const [ticket , setTicket] = useState(()=> genTicket(n))
    let isWinning = winCondition(ticket);
    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
           <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
           <h3>{isWinning && "Congratulations, you won the lottery!"} </h3>
           <Button action = {buyTicket} />
        </div>
    )
}