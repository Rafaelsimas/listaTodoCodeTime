import { useState } from "react"

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Gerenciador de Tarefas</h1>
        <p className="qtd-tarefas">Você tem (0) tarefas</p>

        <form action="#">
          <input type="text" placeholder="Registre sua tarefa" />
          <input type="text" placeholder="Descreva sua tarefa" />
          <button>Registrar</button>
        </form>

        <ul>
          <li>
            <div className="actions">
              <h2>Estudar React</h2>
              <div className="delet">Deletar</div>
              <div className="edit">Editar</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              nihil in dignissimos maxime optio rem sunt suscipit, aut nemo
              saepe aspernatur, quas perferendis nisi perspiciatis quidem
              numquam. Quas, dolorem nemo?
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}
