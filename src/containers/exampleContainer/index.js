import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as exampleActions from "actions/example-actions";

class Example extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getExample();
  }

  addExample = () => {};

  render() {
    const { example } = this.props;
    const { payload } = example;
    if (example.status && example.status === "SUCCESS") {
      return (
        <>
          <button onClick={this.addExample}>增加示例</button>
          <ul>
            {payload.data.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </>
      );
    }
    return "loading";
  }
}

function mapStateToProps(state) {
  return {
    example: state.example,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...exampleActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
