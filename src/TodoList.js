import React from "react";
import List from "./List";
import "./App.css"

class TodoList extends React.Component {

    constructor(){
        super();
        this.state = {
            term : "",
            items: []
        }
    }

   onChangeHandler = (e) => {
    this.setState({
        term : e.target.value
    })
   }

   onFormHandler = (e) => {
    e.preventDefault();
    this.setState({
        term : "",
        items : [...this.state.items, this.state.term]
    })
   }

   onDeleteHandler = (index) => {
     const deleteTask = [...this.state.items];
     deleteTask.splice(index,1);
     this.setState({
        items : deleteTask
     });
   }

    render(){
        return(
            <div className="container">
                <div className="form_container">
                <form>
                <input 
                type = "text" 
                value = {this.state.term} 
                placeholder = "Enter Things to do"
                required
                className="todo_input"
                onChange={this.onChangeHandler}
                />
                <button onClick={this.onFormHandler} className="add_btn"> Add</button>
            </form>
            <List deleteTask = {this.onDeleteHandler} items = {this.state.items}/>
            </div>
         </div>
        )
    }
}

export default TodoList;