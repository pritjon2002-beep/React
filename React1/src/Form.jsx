function handleFormSubmit(){
    console.log("form submitted");    
}

export default function From(){
    return(
        <form action="">
            <button onClick={handleFormSubmit}>Sumbit</button>
        </form>
    )
}