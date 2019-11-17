import React from 'react';
import ReactDom from 'react-dom';

class Search extends React.Component {
  render() {
    return <div>search</div>;
  }
}

ReactDom.render(
  <Search/>,
  document.querySelector('#root')
);