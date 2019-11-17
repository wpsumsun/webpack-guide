import React from 'react';
import ReactDom from 'react-dom';
import './search.less'
import Logo from './images/test.jpeg'


class Search extends React.Component {
  render() {
    return <div className='searchWrapper'>
      <span>search</span>
      <img src={ Logo } alt='logo'/>
    </div>;
  }
}

ReactDom.render(
  <Search/>,
  document.querySelector('#root')
);