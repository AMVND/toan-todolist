import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    }
  }
  
  handleSearch = () => {
    this.props.onClickGo(this.state.strSearch);
  }

  handleClear = () => {
    this.setState({
      strSearch: ''
    });
    this.props.onClickGo('');
  }
  
  handleChange = (event) => {
    this.setState({
      strSearch: event.target.value
    })
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
        <input value={this.state.strSearch} onChange={this.handleChange} className="form-control" type="search" placeholder="Search for" aria-label="Search"/>
          <span className="input-group-btn">
          <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
          </span>
        </div>
      </div>
    )
  }
};

export default Search;