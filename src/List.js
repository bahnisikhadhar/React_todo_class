import React from "react";

class List extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index} className="list">
                            {item}
                            <button className="button_delete" onClick={this.props.deleteTask.bind(this, index)}>Remove</button>
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}

export default List;