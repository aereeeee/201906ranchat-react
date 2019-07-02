import React, { Component } from 'react';
import './App.scss'
import { hot } from 'react-hot-loader'
import { Navigation, Article, Background, Footer} from './components'
import { observer } from './utils'


const contents = [
  {
    text:
    `<h5>2019 청소년 성매매 리포트</h5><h1>'16살 여중생'에게 접근한 1천명</h1>`
  },
  {
    text:`SBS 데이터저널리즘팀 <마부작침>은 청소년 성매매의 창구로 지목된 
    '랜덤채팅앱'에 들어가 낯선 사람들과 직접 채팅을 해봤습니다. 
    다운로드 수 10만 명 이상 채팅앱 4곳에서 5일 동안 채팅했습니다. 
    '16살 여중생'에게 접근해 온 <span>1,034명</span>의 채팅 내용을 분석해 공개합니다.`
  },
  {
    text:`랜덤채팅앱 별로 설정할 수 있는 가장 어린 나이로 프로필을 설정했고,
    1:1 채팅방에서 대화를 나누는 과정에서 청소년 성매매 피해자 평균 연령으로 조사된 ‘16살 여중생’이라고 밝혔습니다.
    대화명은 ‘가나다라’ 같이 아무런 의미가 없는 단어를 사용했고
    먼저 대화를 걸지 않고, 상대방이 걸어온 대화에만 응답했습니다.<br>`
  },
  {
    text:`※ 대화 내용을 바탕으로 상대방의 목적을 크게 다섯 가지로 분류했습니다.<br> 
  <span class='red'>▲성매수<br> ▲성적 목적 만남<br> ▲성적 목적 채팅<br></span><span class='blue'>▲단순 만남<br> ▲단순 채팅</span>`
  },
  {
    text:`대화를 걸어온 1,034명 가운데 성적인 목적이 확인되지 않은 사람은 <span class="blue">375명</span>으로 전체의 36.3%입니다.
    뚜렷한 목적이 드러나지 않거나 대화 단절이 포함된 ‘단순 채팅’ 313명(30.3%),
    만나서 영화를 보자거나 저녁을 먹자는 등 ‘단순 만남’ 요구는 59명(5.7%)입니다.`
  },
  {
    text:`랜덤채팅앱에서 접근해 온 1,034명 가운데 <span class="red">659명</span>(63.7%)은
    ‘▲성매수 ▲성적 목적 만남 ▲성적 목적 채팅’이 목적으로 <span class="red">성적인 목적</span>으로 접근해왔습니다.`
  },
  {
    text:`<마부작침>과 랜덤채팅앱에서 대화한 1,034명 가운데
    노골적으로 <span class="red">성매수</span>를 제안한 건 <span class="red">265명</span>(25.6%)이었습니다.
    대가를 약속하고 성관계 등을 요구한 사람들입니다.`
  },
  {
    text:`<마부작침>은 성매수를 제안한 265명에게
    먼저 <span>‘16살 여중생’</span>이라고 나이를 명확하게 밝혔습니다.
    이 가운데 80%인 <span class="red">212명</span>은 '상관없다', '괜찮다'면서 성매수를 집요하게 제안했습니다.
    성매수 시도를 중단한 사람은 고작 53명이었습니다.`
  },
  {
    text:`미성년자인줄 알면서도 집요하게 성매수로 유인하는 사람들.
    이번엔 <span>‘안 하겠다’</span>고 거절 의사를 분명히 했습니다.
    거절 의사를 밝혔음에도 <span class="red">135명</span>은 끝까지 포기하지 않았습니다.
    “돈을 더 주겠다”, “수위를 낮춰서 하겠다”는 등의 대화를 이어가며
    끝까지 청소년의 성을 사겠다는 제안을 했습니다.`
  },
  {
    text:`<마부작침>이 닷새 동안 채팅한 상대는 1,034명입니다.
    ‘16살 여중생’이라고 나이를 분명히 밝혔는데도
    포기하지 않고 계속 성매수를 시도한 사람들은 <span class="red">212명</span>이나 됐습니다.`
  },
  {
    text:`
      <div class='chat righta'><span>33살 남</span><p>오전에 봐요, 두 번 40</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>저 학생인데요</p></div>

      <div class='chat righta'><span>33살 남</span><p>네~~~시간 괜찮아요? 
          아, 안 되시는 건가요?</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p class='special'>저 미성년잔데…</p></div>

      <div class='chat righta'><span>33살 남</span><p>네, 저 지금 운전 중이라 바로 갈 수 있어요.</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p class='special'>죄송해요 안 할게요…</p></div>

      <div class='chat righta'><span>33살 남</span><p>왜요? 비용이 적어서? 
          아님 한 번 30으로?? 
          빠르게 한번 봐요~~
          그리고 서로 매너해서,, 괜찮으면 월요일 아침마다 봐도 좋고요.
          답장좀요~~~ 안 되면 운동가려고요</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>죄송해요. 안 할래요</p></div>

      <div class='chat righta'><span>33살 남</span><p>아,,,, 혹시 이유를 물어봐도?
          텔 가는거 불편하면 차에서 하고 30 받아가시지...</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>무섭네요 죄송합니다</p></div>

      <div class='chat righta'><span>33살 남</span><p>아, 그러니까요. 그러니까 차에서
            어디예요? 제가 지금 갈게요. 쉬는 날이라.
            178/71 매너도 성격도 좋은 그냥 평범한 강사!!!
            음, 차에서 30분, 그리고 30만원? 어때여? 
            답장 한 번요, 그래도 무섭고 그러면 그냥 운동갈게요, 생각 한 번~~</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>그냥 운동가세요</p></div>

      <div class='chat righta'<span>33살 남</span><p>네 알겠어요ㅠ 아쉽네요
          혹시라도 생각 바뀌면 톡 주세요</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>네</p></div>

      <div class='chat righta'><span>33살 남</span><p>ㅠㅠㅠㅠㅠㅠㅠㅠㅠ 안전한데</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>죄송합니다</p></div>

      <div class='chat righta'><span>33살 남</span><p>ㅠㅠㅠ 그냥 아쉬워서요. 
          저도 딱 한분 찾으려고 아침에 어플 시작해서</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>원래 이 앱이 그런 앱이에요?</p></div>

      <div class='chat righta'><span>33살 남</span><p>그렇다고 해요. 친구놈이.
          아, 혹시, 드라이브나 커피 마셔보고 결정할래요?</p></div>

      <div class='chat leftb'><span>16살 여중생</span><p>아니에요. 운동가세요</p></div>

      <div class='chat righta'><span>33살 남</span><p>아ㅋ 연락주세요,
          결정만 하면, 금전적으로 여유있게 살게 해 줄게요</p></div>

    `
  }

];


class App extends Component {
  state = {
    loading:0,
    contents:contents,
  }
  handleimage = () => {
    this.setState({
      loading: this.state.loading+1,
    })
  }
  componentDidMount(){
    const boxes= document.querySelectorAll('div.textbox');
      boxes.forEach((wrap)=>{
      observer.observe(wrap)
    })
    
  }

  render() {
    const { contents,loading } =  this.state;
    return (
      <div>
        {loading <= 11 && (
          <div className='loading'>loading</div>
        )}
        <Background
          loading={loading}
          handleimage={this.handleimage}
        />
        <Navigation/>
        {/* <Intro/> */}
        {contents.map((content, index ) =>(
          <div 
          key={index}
          className='wrapper'
          id={'wrap'+index}
          >
              <div className='textbox' id={'box'+index}
                 dangerouslySetInnerHTML={ {__html: content.text} }
              >
              </div>                   
          </div>
        ))}
        <Article/>
        <Footer/>
      </div>
    );
  }
}

export default hot(module)(App);