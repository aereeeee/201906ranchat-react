import React, { Component } from 'react';
import './App.scss'
import { hot } from 'react-hot-loader'
import { Navigation, Intro, Background, Footer} from './components'
import { observer } from './utils'


const contents = [
  {
    text:
    ``
  },
  {
    text:`SBS 데이터저널리즘팀 <마부작침>은 청소년 성매매의 창구로 지목된 '랜덤채팅앱'에 들어가 낯선 사람들과 직접 채팅을 해봤습니다. 다운로드 수 10만 명 이상 채팅앱 4곳에서 5일 동안 채팅했습니다. '16살 여중생'에게 접근해 온 1,034명의 채팅 내용을 분석해 공개합니다.`
  },
  {
    text:`랜덤채팅앱 별로 설정할 수 있는 가장 어린 나이로 프로필을 설정했고,
    1:1 채팅방에서 대화를 나누는 과정에서 청소년 성매매 피해자 평균 연령으로 조사된 ‘16살 여중생’이라고 밝혔습니다.
    대화명은 ‘가나다라’ 같이 아무런 의미가 없는 단어를 사용했고
    먼저 대화를 걸지 않고, 상대방이 걸어온 대화에만 응답했습니다.<br>
    <br>
    ※ 대화 내용을 바탕으로 상대방의 목적을 크게 다섯 가지로 분류했습니다.<br> 
    ▲성매수 ▲성적 목적 만남 ▲성적 목적 채팅 ▲단순 만남 ▲단순 채팅`
  },
  {
    text:`대화를 걸어온 1,034명 가운데 성적인 목적이 확인되지 않은 사람은 375명으로 전체의 36.3%입니다.<br>
    <br>
    뚜렷한 목적이 드러나지 않거나 대화 단절이 포함된 ‘단순 채팅’ 313명(30.3%), <br>
    만나서 영화를 보자거나 저녁을 먹자는 등 ‘단순 만남’ 요구는 59명(5.7%)입니다.`
  },
  {
    text:`랜덤채팅앱에서 접근해 온 1,034명 가운데 659명(63.7%)은
    ‘▲성매수 ▲성적 목적 만남 ▲성적 목적 채팅’이 목적으로 성적인 목적으로 접근해왔습니다.`
  },
  {
    text:`<마부작침>과 랜덤채팅앱에서 대화한 1,034명 가운데
    노골적으로 성매수를 제안한 건 265명(25.6%)이었습니다.
    대가를 약속하고 성관계 등을 요구한 사람들입니다.`
  },
  {
    text:`<마부작침>은 성매수를 제안한 265명에게
    먼저 ‘16살 여중생’이라고 나이를 명확하게 밝혔습니다.
    <br>
    이 가운데 80%인 212명은 '상관없다', '괜찮다'면서 성매수를 집요하게 제안했습니다.
    성매수 시도를 중단한 사람은 고작 53명이었습니다.`
  },
  {
    text:`미성년자인줄 알면서도 집요하게 성매수로 유인하는 사람들.
    이번엔 ‘안 하겠다’고 거절 의사를 분명히 했습니다.<br>
    <br>
    거절 의사를 밝혔음에도 135명은 끝까지 포기하지 않았습니다.
    “돈을 더 주겠다”, “수위를 낮춰서 하겠다”는 등의 대화를 이어가며
    끝까지 청소년의 성을 사겠다는 제안을 했습니다.`
  },
  {
    text:`<마부작침>이 닷새 동안 채팅한 상대는 1,034명입니다.<br>
    ‘16살 여중생’이라고 나이를 분명히 밝혔는데도
    포기하지 않고 계속 성매수를 시도한 사람들은 212명이나 됐습니다.`
  }

];

class App extends Component {
  state = {
    contents:contents,
  }

  componentDidMount(){
    const boxes= document.querySelectorAll('div.textbox');

      boxes.forEach((wrap)=>{
      observer.observe(wrap)
    })
    
  }

  render() {
    const { contents } =  this.state;
    return (
      <div>
        <Background/>
        <Navigation/>
        {/* <Intro/> */}
        {contents.map((content, index ) =>(
          <div 
          key={index}
          className='wrapper'
          // style={}
          >
              <div className='textbox' id={'box'+index}
                 dangerouslySetInnerHTML={ {__html: content.text} }
              >
                {/* {content.text} */}
              </div>                   
          </div>
        ))}
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);