import "./notFound.css"
import cat from"../../img/cat.png"
export default function NotFound(){
    return(
        <div className="notFound404">
            <h1>How did you get here?</h1>
            <img src={cat} alt="cat 404" />
        </div>
    )
}