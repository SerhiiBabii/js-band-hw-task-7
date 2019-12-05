import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import MainPage from './components/MainPage/MainPage';
import filetrForAll from './additionalFunctions/filetrForAll';
import onToggleProperty from './additionalFunctions/onToggleProperty';
import searchItems from './additionalFunctions/searchItems';

let maxCount = 2;

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      status: 'all',
      priority: 'all',
      modalShow: false,
      currentId: '',
      currentTitle: '',
      currentDescription: '',
      currentPriority: 'high',
      currentStatus: '',
      todoList: [
        {
          id: 1,
          title: '123',
          description: 'klsjfd sldk fjsadlf!',
          priority: 'high',
          status: true,
        },
      ],
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.showModalArea = this.showModalArea.bind(this);
    this.setCurrentId = this.setCurrentId.bind(this);
    this.setCurrentFields = this.setCurrentFields.bind(this);
    this.clearModalField = this.clearModalField.bind(this);
  }

  onToggleDone(id) {
    this.setState(({ todoList }) => {
      return {
        todoList: onToggleProperty(todoList, id),
      };
    });
  };

  setCurrentId(id) {
    this.setState({
      currentId: id,
    })
  }

  setCurrentFields(id) {
    const {todoList} = this.state;
    const index = todoList.findIndex((el) => el.id === id);
    const currentItem = todoList[index];
    this.setState({
      currentId: id,
      currentTitle: currentItem.title,
      currentDescription: currentItem.description,
      currentPriority: currentItem.priority,
      modalShow: true,
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((el) => el.id === id);
      const newArr = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ];
      return {
        todoList: newArr,
        currentId: '',
        currentTitle: '',
        currentDescription: '',
        currentPriority: 'high',
        modalShow: false,
      };
    });
  };

  addItem(title, description, priority, id) {
    if(id) {
      const {todoList} = this.state;
      const index = todoList.findIndex((el) => el.id === id);
      const oldItem = todoList[index];
      const newItem = {
        ...oldItem,
        title,
        description,
        priority,
      };
      this.setState({
        todoList: [...todoList.slice(0, index), newItem, ...todoList.slice(index + 1)],
        currentId: '',
        currentTitle: '',
        currentDescription: '',
        currentPriority: 'high',
        modalShow: false,
      })
    } if(!id) {
      maxCount+=1;
      const newItem = {id: maxCount, title, description, priority, status: false};
      this.setState(({ todoList }) => {
        const newArr = [...todoList, newItem];
        return {
          todoList: newArr,
          currentId: '',
          currentTitle: '',
          currentDescription: '',
          currentPriority: 'high',
          modalShow: false,
        };
      });
    }
  };

  handleSelect(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  };

  showModalArea() {
    this.setState({
      modalShow: true,
    })
  }

  clearModalField() {
    this.setState({
      currentId: '',
      currentTitle: '',
      currentDescription: '',
      currentPriority: 'high',
      modalShow: false,
    })
  }

  render() {
    const {
      search,
      status,
      priority,
      todoList,
      modalShow,
      currentId,
      currentTitle,
      currentDescription,
      currentPriority,
      currentStatus,
    } = this.state;
    const visibleItems = searchItems(
      filetrForAll(todoList, priority, status),
      search,
    );
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/todos" />
            </Route>
            <Route
              exact
              path="/todos"
              render={() => (
                <MainPage
                  search={search}
                  status={status}
                  priority={priority}
                  currentId={currentId}
                  currentDescription={currentDescription}
                  currentTitle={currentTitle}
                  currentPriority={currentPriority}
                  currentStatus={currentStatus}
                  modalShow={modalShow}
                  todoList={visibleItems}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                  clearModalField={this.clearModalField}
                  handleSelect={this.handleSelect}
                  onToggleDone={this.onToggleDone}
                  setCurrentId={this.setCurrentId}
                  setCurrentFields={this.setCurrentFields}
                  showModalArea={this.showModalArea}
                />
              )}
            />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;