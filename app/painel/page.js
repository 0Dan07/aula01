export default function Painel(){
    const Usuarios = [
        {
            id: 0,
            nome: "Danilo",
            idade: 15
        },
        {
            id: 1,
            nome: "Maria",
            idade: 20
        },
        {
            id: 2,
            nome: "Danilo2",
            idade: 12
        },
        {
            id: 3,
            nome: "teste",
            idade: 17
        }
    ]

    const Produtos = [
        {
            id:0,
            nome: "Blusa",
            Preço: 39.99,
            estoque: 50
        },
        {
            id:1,
            nome: "Calça",
            Preço: 39.99,
            estoque: 0
        },
        {
            id:2,
            nome: "Camisa",
            Preço: 39.99,
            estoque: 50
        }
    ]

    return(
        <div>
            <h1>Painel do adm</h1>
            <hr/>
            <h2>Lista de usuarios</h2>
            <ul>
                {
                    Usuarios.map(u => {
                        return <li>Nome: {u.nome}, Idade: {u.idade} anos  </li>
                    })
                }
                {/* <li>Nome: {Usuarios[0].nome}, idade:{Usuarios[0].idade}</li>
                <li>Nome: {Usuarios[1].nome}, idade:{Usuarios[1].idade}</li>
                <li>Nome: {Usuarios[2].nome}, idade:{Usuarios[2].idade}</li> */}
            </ul>
            <div>
                <hr/>
                <h1>Lista de produtos</h1>
                <ul>
                    {
                        Produtos.map(p => {
                            return<li>
                                    <p>{p.nome}</p>
                                    <p> R$ {p.Preço} </p>
                                    {
                                        p.estoque > 0 ?
                                        <p>{p.estoque} Disponivel - <button>Comprar</button></p>
                                        
                                    :
                                        <p>NAO TEM</p>
                                    }
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}