import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Controller } from './components/Controller';
import { Form } from './components/Form';
import { List } from './components/List';


import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
import uuid from 'react-uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemSelected: null, 
      showForm: false,
      strSearch: "",
      orderDif: "asc"
    }
  }

  UNSAFE_componentWillMount() {
    let items = JSON.parse(localStorage.getItem("task")) || [];
    this.setState({
      items: items
    })
  }

  handleToggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      itemSelected: null
    })
  }

  handleCancel = () => {
    this.setState({
      showForm: false
    })
  }

  handleSearch = (value) => {
    this.setState({
      strSearch: value
    })
  }

  handleSort = (orderBy, orderDif) => {
    this.setState({
      orderBy: orderBy,
      orderDif: orderDif
    })
  }

  handleDelete = (id) => {
    let items = this.state.items;
    remove(items, (item) => {
      return item.id === id;
    });
    this.setState({
      items: this.state.items
    })
    
    localStorage.setItem("task", JSON.stringify(items));
  }

  handleSubmit = (item) => {
    let {items} = this.state;
    let id = null;

    if (item.id !== '') {
      // edit
      items = reject(items, {id: item.id});
      id = item.id;

      // items.forEach((elm,key) => {
      //   if (elm.id === item.id) {
      //     items[key].name = item.name;
      //     items[key].level = +item.level;
      //   }
      // })
    } else {
      // add
      id = uuid();
    }
    
    items.push({
      id: id,
      name: item.name,
      level: +item.level,
      time: +item.time,
      status: +item.status
    })

    this.setState({
      items: items, 
      showForm: false
    })

    localStorage.setItem("task", JSON.stringify(items));
  }

  handleEdit = (item) => {
    this.setState({
      itemSelected: item,
      showForm: true
    })
  }
  
  render() {
    let itemsOrigin = (this.state.items !== null) ? [...this.state.items] : [];
    let items = [];
    let elmForm = null;
    let {orderBy, orderDif, showForm, strSearch, itemSelected} = this.state;

    // Search
    items = filter(itemsOrigin, (item) => {
      return includes(item.name, strSearch);
    });

    // Order
    items = funcOrderBy(items, [orderBy], [orderDif]);


    if (showForm === true) {
      elmForm = <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.handleCancel}/>
    }
    return (
      <div className="App">
      <div className="container">
        {/* TITLE : START */}
        <div className="page-header">
        <Header />
        </div>
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <div className="row">
        <Controller
                orderBy={orderBy}
                orderDif={orderDif}
                onClickSort={this.handleSort}
                onClickSearch={this.handleSearch}
                onClickAdd={this.handleToggleForm} 
                showForm={showForm}
              />
        
              {elmForm}

              
              <List 
                onClickEdit={this.handleEdit}
                items={items}
                onClickDelete={this.handleDelete}
              />
        </div>
        </div>
      </div>
    )
  }
};

export default App;
