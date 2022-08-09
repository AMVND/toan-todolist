import React from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleDelete = (id) => {
    this.props.onClickDelete(id);
  }

  handleEdit = (item) => {
    this.props.onClickEdit(item);
  }

  render() {
    const { item } = this.props;
    const { index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
              <span >{this.showElmLevel(item.level)}</span>
            </td>
        <td>
          <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
          <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }


  showElmLevel(level) {
    let elmLevel = <span className="label label-default">Low</span>;
    if (level === 1) {
      elmLevel = <span className="label label-primary">Medium</span>;
    } else if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    }
    return elmLevel;
  }
};

export default Task;