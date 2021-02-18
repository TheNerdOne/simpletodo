import React, { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Todos from "../components/Task/Todos";
import About from "../components/common/About";
import { Route, Switch } from "react-router-dom";
import Nav from "../components/common/Nav";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav /> {/* just an example of HOC */}
        <div className="rtl d-flex justify-content-center container">
          <div className="col-md-8">
            <div className="card-hover-shadow-2x mb-3 card p-card">
              <Switch>
                <Route exact path="/simpletodo" component={Todos} />
                <Route
                  path="/about"
                  render={() => <About developerName="poooriiich" />}
                />
              </Switch>
            </div>
          </div>
        </div>
        <ToastContainer rtl />
      </Fragment>
    );
  }
}

export default App;
