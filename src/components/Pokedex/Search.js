import React, { Component } from "react";
class SlideBar extends Component {
    constructor() {
        super();
        this.state = {
          keyword: ''
        };
      }
      onChange = (event) => {
        this.setState({
          keyword : event.target.value
        });
      };
      onSearch = () => {
        this.props.onSearch(this.state.keyword);
      };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                         <div className="input-group mt-3">
                                <input type="text" value={this.state.keyword} onChange={this.onChange} 
                                 className="form-control" placeholder="Enter Pokemon name ..." />
                                <div className="input-group-append">
                                    <button  onClick={this.onSearch} className="btn btn-success" type="submit">Search</button>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideBar;