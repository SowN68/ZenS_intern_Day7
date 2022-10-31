import { useState } from "react";
import Card from "../../UI/Card";
import "./Footer.css"
const actionBtn = ["All", "Active", "Complete"]
const Footer = (props) => {
  const [type, setType] = useState("All")
  return (
    <Card>
      <div className="todo-footer-container">
        <p className="todo-count">{props.count} items </p>
        <div>
          {
            actionBtn.map((tab, index) => (
              <button key={index} onClick={() => {
                setType(tab)
                props.onFilterTodo(tab)
              }} className={type === tab ? "todo-menus active" : "todo-menus"}>
                {tab}
              </button>
            ))
          }
        </div>
      </div>
    </Card>
  )
}
export default Footer;