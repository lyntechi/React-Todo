import React from "react";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm";

const choresList = [
  {
    id: 1,
    chore: "laundry",
    completed: false,
  },
  {
    id: 2,
    chore: "dishes",
    completed: false,
  },
  {
    id: 3,
    chore: "lawn",
    completed: false,
  },
  {
    id: 4,
    chore: "vacuuming",
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      choresList: choresList,
    };
  }

  toggleItem = (id) => {
    this.setState({
      choresList: this.state.choresList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      }),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      chore: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      choresList: [...this.state.choresList, newItem],
    });
  };

  clearItemList = () => {
    this.setState({
      choresList: [],
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Lyn Techi's To-Do-List</h1>
          <TodoForm addItem={this.addItem} />
        </div>

        <div>
          <TodoList
            choresList={this.state.choresList}
            toggleItem={this.toggleItem}
          />
          <button className="clear" onClick={this.clearItemList}>
            Clear List
          </button>
        </div>
      </div>
    );
  }
}

export default App;
