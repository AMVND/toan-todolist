import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0,
    }
  };

  UNSAFE_componentWillMount() {    
    this.updateItem(this.props.itemSelected)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateItem(nextProps.itemSelected)
  }

  updateItem(item) {
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level,
      })
    }
  }

  handleCancel = () => {
    this.props.onClickCancel();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level,
    }
    this.props.onClickSubmit(item);
    event.preventDefault();
  }

  render() {  
    return (
      <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input value={this.state.task_name} onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select value={this.state.task_level} onChange={this.handleChange} name="task_level" className="form-control">
              <option value={0}>Low</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-default" onClick={this.handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
    )
  }
};

export default Form;