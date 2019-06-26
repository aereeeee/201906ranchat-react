import React, { Component } from 'react';
import './App.scss'
import { hot } from 'react-hot-loader'
import { Navigation, Intro, Background, Footer} from './components'


const contents = [
  {
    text:`실험소개, 파티클 1034개 불켜짐`
  },
  {
    text:`단순채팅과 단순만남 색상켜기`
  },
  {
    text:`단순채팅과 단순만남 불끄고 성적목적 접근 불켜기`
  },
  {
    text:`음란채팅, 음란만남 색상켜기`
  },
  {
    text:'음란채팅, 음란만남 불끄고 성매수 불켜기'
  },
  {
    text:'미성년자다-no불끄기'
  },
  {
    text:'거절한다-no불끄기'
  },
  {
    text:'최종 성매수남 결론내기'
  }
];

class App extends Component {
  state = {
    contents:contents,
  }
  render() {
    const { contents } =  this.state;
    return (
      <div>
        <Background/>
        <Navigation/>
        <Intro/>
        {contents.map((content, index ) =>(
          <div 
          key={index}
          className='wrapper'
          // style={}
          >
              <div className='textbox'>
                {content.text}
              </div>                   
          </div>
        ))}
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);