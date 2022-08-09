import React from 'react';

export class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSort = (orderBy, orderDif) => {
    this.props.onClickSort(orderBy, orderDif);
  }

  render() {
    let {orderBy, orderDif} = this.props;
    if (orderBy === "status") {
      if (orderDif === "asc") {
        orderDif = "not done"
      } else if (orderDif === "desc") {
        orderDif = "done"
      }
    }
    let strSort = orderBy + ' - ' + orderDif;
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
            <a onClick={()=>this.handleSort("Name", "ASC")} className="dropdown-item" href="#/">Name ASC</a>
            </li>
            <li>
            <a onClick={()=>this.handleSort("Name", "DESC")} className="dropdown-item" href="#/">Name DESC</a>
            </li>
            <li role="separator" className="divider" />
            <li>
            <a onClick={()=>this.handleSort("Level", "ASC")} className="dropdown-item" href="#/">Level ASC</a>
            </li>
            <li>
            <a onClick={()=>this.handleSort("Level", "DESC")} className="dropdown-item" href="#/">Level DESC</a>
            </li>
          </ul>
          <span className="label label-success label-medium">{strSort}</span>
        </div>
      </div>
    )
  }
};

export default Sort;