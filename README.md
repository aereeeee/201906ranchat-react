## TODO
- scss
```scss
 &.red {
      // .red 클래스가 .box 와 함께 사용 됐을 때
      background: $red;
      @include square(1);
    }
```
- ~~classname bind하기~~
- 저번 코드리뷰 체크
- observer 이렇게 써도되나

---
## commit convention
#### type  
- build: npm package등 바꿀떄
- docs: 문서만 바꿀떄
- `feat`: new feature
- fix: 버그수정
- perf: 성능향상
- refactor: 아무것도 해당안되지만 코드 변화
- style: 코드 포맷팅
- chore: 잡일들
  
```
type(선택사항 scope ex)로그인 어떤 컨텍스트인지):한칸띄고 간략한 설명  
    
자세한설명 필요하면 두칸띄고,, 브레이킹 체인지 있으면 무조건 여기 작성 BREAKING CHANGE: 자세한 내용
    
마지막줄은 closes issue #12 - 이슈 자동 클로즈
```
---