import React from 'react';
import ReactDom from 'react-dom';
import './search.less'
import Logo from '../images/test.jpeg'
import Input from './input'


class Index extends React.Component {
  render() {
    return <div className='searchWrapper'>
      <Input/>
      本地<input type="text"/>
      <span>search</span>
      <img src={ Logo } alt='logo'/>
    </div>;
  }
}

ReactDom.render(
  <Index/>,
  document.querySelector('#root')
);
if (module.hot) {
  console.log('test if css file contenthash change')
}