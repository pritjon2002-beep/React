function handleFormSubmit(event){
    console.log("form submitted");   
    event.preventDefault(); 
}

export default function From(){
    return(
        <form action="" onSubmit={handleFormSubmit}>
            <button >Sumbit</button>
        </form>
    )
}