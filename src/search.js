import React from 'react';
import ReactDom from 'react-dom';
import './search.less'


class Search extends React.Component {
  render() {
    return <div className='searchWrapper'><span>search</span></div>;
  }
}

ReactDom.render(
  <Search/>,
  document.querySelector('#root')
);