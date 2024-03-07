### 배운 것 정리

1. getFieldState : 특정 양식 필드의 현재 상태를 가져오는 데 사용됨
   이 함수를 사용하면 해당 필드에 대한 값, 에러, 유효성 등의 정보에 접근할 수 있음
   이를 통해 동적으로 상태를 추적하고 UI를 업데이트할 수 있음

2. variant : 버튼의 시각적인 스타일을 지정하는 속성
   일반적인 스타일의 버튼, 윤곽 스타일의 버튼, 다른 테마에 맞게 구성된 버튼 등이 될 수 있음

3. cn : tailwind를 merge할 때 발생할 수 있는 클래스 충돌 문제를 해결해주는 역할을 함

4. isDirty : 이 속성은 사용자가 해당 필드에 입력을 시작했을 때 true가 되며, 즉시 양식 필드의 값이 변경되면 활성화됨
   초기값과 현재 값이 다르다면 isDirty는 true가 됨
   이는 주로 사용자가 양식을 편집하거나 정보를 입력했는지 여부를 추적하는 데 사용됨

5. invalid : 이 속성은 해당 양식 필드의 현재 값이 유효한지 여부를 나타냄
   유효성 검사를 통과하면 true가 되고, 그렇지 않으면 false가 됨
   이를 통해 사용자에게 실시간으로 유효성 상태를 제공하거나, 제출 전에 유효성을 확인할 수 있음

6. trigger : 특정 필드나 전체 폼에 대한 유효성 검사 메소드

7. useRouter VS Link :
   useRouter
   * react-router-dom의 history.push()와 유사
   * 크롤러가 링크를 감지하지 못해 SEO가 좋지 않을 수 있음
   * 외부 URL을 사용할 경우 window.location 혹은 a 태그를 사용해야함
   * useRouter는 로직을 처리한 후 원하는 시점에 전환이 가능

   Link
   * Link는 Client-side navigation으로, javascript로 페이지 전환이 이뤄짐
   * 기본 navigation보다 빠르며 SPA(Single Page Application)의 특성을 유지
   * 클릭 시 바로 페이지가 전환

   결론
   router.push()는 onClick에 사용되는 행동(action)이기 때문에 Link 태그보다 검색에 불리하지만, 로직의 처리에 따라 활용도가 높음
   Nextjs의 장점인 SEO를 원한다면 Link를 사용하는 것이 더 유리
