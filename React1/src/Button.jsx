function clicks(){
    console.log("Clicked");
    
}
export default function Button(){
    return(
        <div>
            <button onClick={clicks}>Click Me </button>
        </div>
    )
}