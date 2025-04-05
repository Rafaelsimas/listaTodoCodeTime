import { Link } from "react-router-dom"
import "./style.css"
export default function Login() {
  return (
    <div className="container-login">
      <div className="box-login">
        <div className="title-section">ToDo-List</div>

        <Link to="/gerenciador" className="btn-enter">
          Entrar
        </Link>
      </div>
    </div>
  )
}
