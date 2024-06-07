import "./style.css"
import Link from "next/link";

export default function Login(){
    return(
        <div id="login" >
            <div className="p-10">
                <h1 className="bg-zinc-500"  >Página de Login</h1>
                < Link href="./" > Voltar para Home </Link>
            </div>
        </div>
    )
}