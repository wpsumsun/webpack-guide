import React from "react";
import ReactDom from "react-dom";
import "./search.less"
import Logo from "../images/test.jpeg"
import Input from "./input"


class Index extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    }
  }
  loadComponent() {
    console.log(1);
    import("./Text.js").then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render() {
    const { Text } = this.state;
    return <div className='searchWrapper'>
      { Text ? <Text/> : "" }
      <Input/>
      本地<input type="text"/>
      <span>search</span>
      <img src={ Logo } alt='logo' onClick={ this.loadComponent.bind(this) }/>
    </div>;
  }
}

ReactDom.render(
  <Index/>,
  document.querySelector("#root")
);
if (module.hot) {
  console.log("test if css file contenthash change")
}