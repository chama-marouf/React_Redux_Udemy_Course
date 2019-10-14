import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};

    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    }

    onFromSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

        // make sure we call callback from parent component
    }

     render(){
         return(
              <div className="ui segment search-bar">
                  <form onSubmit={this.onFromSubmit} className="ui form" action="">
                      <div className="ui field">
                          <label className="ui" htmlFor="">Video Search</label>
                          <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                          />
                      </div>
                  </form>
                  
              </div>
         );
     }
}
export default SearchBar;