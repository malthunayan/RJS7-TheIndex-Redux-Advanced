import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

class App extends Component {
  getView = () => {
    if (this.props.authorsLoading || this.props.booksLoading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
          <Route
            path="/books/:bookColor?"
            render={props => <BookList {...props} />}
          />
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authorsLoading: state.rootAuthors.loading,
    booksLoading: state.rootBooks.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));
