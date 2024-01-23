import React, { useEffect, useRef } from 'react';
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port01.jpg";
import port05 from "../assets/img/port02.jpg";
import port06 from "../assets/img/port03.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const portText = [
  {
    num: "01",
    tit: "TeamACE 포트폴리오",
    link: "http://jok874.dothome.co.kr/main/",
    img: port01,
    desc: "고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인 보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였습니다. 주제는 OTT 사이트로 타 사이트들을 참고하여 디벨롭 시킨 작품이며, 모델 이동욱님이 촬영에 매우 열심히 임해주셔서 좋은 작품으로 탄생시켰습니다."
  },
  {
    num: "02",
    tit: "팀화성 포트폴리오",
    link: "http://kimmina.dothome.co.kr/hwasung/",
    img: port02,
    desc: "MZ세대를 겨냥한 온라인샵으로 다양한 제품을 한 곳에서 볼 수 있도록 디자인 하였으며, 팀원들의 이모지를 만들어 좀 더 다양한 컨텐츠를 보여주는 센스를 보여줬다. 또한 팀원 한명 한명의 실력을 보여줄 수 있는 서브페이지를 제작한 팀 프로젝트 였습니다."
  },
  {
    num: "03",
    tit: "TeamC 포트폴리오",
    link: "http://dongbinhosting.dothome.co.kr/team/",
    img: port03,
    desc: "요즘 웹페이지의 트렌드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한명 한명이 그 트렌드를 하기 위해 많은 노력을 보여주는 작품이다. 또한 요즘 트렌드에 맞게 색상을 활용하여 만들었고, 팀워크가 유달리 나빠서 각 팀원이 힘들었던... 그 중에 수가 가장 많이 반항한 팀이였습니다. 팀장님이 고생했지요...."
  },
  {
    num: "04",
    tit: "TeamACE 포트폴리오",
    link: "http://jok874.dothome.co.kr/main/",
    img: port04,
    desc: "고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인 보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였습니다. 주제는 OTT 사이트로 타 사이트들을 참고하여 디벨롭 시킨 작품이며, 모델 이동욱님이 촬영에 매우 열심히 임해주셔서 좋은 작품으로 탄생시켰습니다."
  },
  {
    num: "05",
    tit: "팀화성 포트폴리오",
    link: "http://kimmina.dothome.co.kr/hwasung/",
    img: port05,
    desc: "MZ세대를 겨냥한 온라인샵으로 다양한 제품을 한 곳에서 볼 수 있도록 디자인 하였으며, 팀원들의 이모지를 만들어 좀 더 다양한 컨텐츠를 보여주는 센스를 보여줬다. 또한 팀원 한명 한명의 실력을 보여줄 수 있는 서브페이지를 제작한 팀 프로젝트 였습니다."
  },
  {
    num: "06",
    tit: "TeamC 포트폴리오",
    link: "http://dongbinhosting.dothome.co.kr/team/",
    img: port06,
    desc: "요즘 웹페이지의 트렌드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한명 한명이 그 트렌드를 하기 위해 많은 노력을 보여주는 작품이다. 또한 요즘 트렌드에 맞게 색상을 활용하여 만들었고, 팀워크가 유달리 나빠서 각 팀원이 힘들었던... 그 중에 수가 가장 많이 반항한 팀이였습니다. 팀장님이 고생했지요...."
  },
]

const Port = () => {
  const horizentalRef = useRef(null);
  //useRef(null) : 변수를 생성하고 초기화 하는 메서드
  const sectionRef = useRef([]);
  //useRef([]) : 변수를 생성하고 빈 배열로 초기화 하는 메서드

  useEffect(() => {
    //useEffect(()=>{}) : 컴퍼넌트가 랜더링 될 때 어떠한 작업을 수행하도록 해야 한다면, 그것을 설정 해주는 hook 명령어
    gsap.registerPlugin(ScrollTrigger)
    //트리거는 특정한 동작에 반응해 자동으로 필요한 동작을 실행하는 것을 말한다. -> ScrollTrigger 플러그인 등록~
    const horizental = horizentalRef.current;
    // .current : 지금 현재 값
    //horizentalRef : 현재 값을 horizental에 대입
    const section = sectionRef.current;
    //sectionsRef : 현재 값 배열요소를 section에 대입

    let scrollTween = gsap.to(section, {
      //section,{},[] : 랜더링 완료 후 한 번 실행
      xPercent: -120 * (section.length - 1),
      scrollTrigger: {
        trigger: horizental,
        start: "top 56px",
        end: () => "+=" + horizental.offsetWidth,
        pin: true,
        scrub: 1,
      },
    });
    return () => {
      scrollTween.kill();
      //스크롤 애니메이션을 제거 / 컴포넌트가 언마운팅 할 때 메모리 누수를 방지해줌
      //마운트 : 화면에 데이터가 보여지는 것을 의미함.
    }
  },[])

  return (
    <section id="port" ref={horizentalRef}>
      <div className="port_inner">
        <div className="port_tit">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <article className={`port_item p${key + 1}`} key={key} ref={(el) => (sectionRef.current[key] = el)}>
              <span className="num">{port.num}</span>
              <a href={port.link} target="_blank" className="img" rel="noopener noreferrer">
                <img src={port.img} alt={port.tit} />
              </a>
              <h3 className="tit">{port.tit}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.link} target="_blank" className="site" rel="noopener noreferrer">사이트 보기</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Port