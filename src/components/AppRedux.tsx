import React from "react";

import Content from "./Content";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class Main extends React.Component<any,any> {
 
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }



  render() {
    console.log("*****************", this.props);
    const {
      characters: { characters }
    } = this.props;
    return (
      <div className="row">
        
        <div className={"col-md-8"}>
          <Content
            characters={characters}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state
  };
}

function mapDispachToProps(dispatch: any) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
