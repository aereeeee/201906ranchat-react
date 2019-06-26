### scss

```scss
 &.red {
      // .red 클래스가 .box 와 함께 사용 됐을 때
      background: $red;
      @include square(1);
    }
```

- ~~classname bind하기~~
- 저번 코드리뷰 체크

---

## intersection observer AIP
[참조1](https://github.com/codepink/codepink.github.com/wiki/%EB%84%88%EB%8A%94-%EB%82%98%EB%A5%BC-%EB%B3%B8%EB%8B%A4:-%EC%A7%80%EC%97%B0-%EB%B0%A9%EB%B2%95,-%EB%A0%88%EC%9D%B4%EC%A7%80-%EB%A1%9C%EB%93%9C%EC%99%80-IntersectionObserver%EC%9D%98-%EB%8F%99%EC%9E%91)
[참조2](http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/)


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