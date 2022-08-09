import React from 'react';
import Sort from './Sort';
import Search from './Search';

export class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAdd = () => {
    this.props.onClickAdd();
  }
  handleClose = () => {
    this.props.onClickAdd();
  }

  render() {
    let form = this.props.showForm;
    let elmShowForm = null;
    let {orderBy, orderDif} = this.props;
    if (form === false) {
      elmShowForm = <button type="button" className="btn btn-info btn-block" onClick={this.handleAdd}>Add Task</button>
    } else if (form === true) {
      elmShowForm = <button onClick={this.handleClose} type="button" className="btn btn-outline-warning my-2 my-sm-0 btn-block" data-toggle="modal" data-target="#exampleModal">Close</button>
    }
    return (
     
        <div className="row ">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">    
       
          <Search onClickGo={this.props.onClickSearch}/>
          <Sort 
            onClickSort={this.props.onClickSort}
            orderBy={orderBy}
            orderDif={orderDif}
          />
        </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {elmShowForm}
          </div>
        </div>
    )
  }
};

export default Controller;