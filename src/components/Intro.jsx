import React from 'react'
import about from '../assets/img/about.jpg'

const introText={
  tittle:'port developer',
  desc:["talent is","found at the end of the","effort"]
}

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_inner">
        <h1 className='intro_tit'>{introText.tittle}</h1>
        <div className="intro_lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro_txt">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="코트 입은 수" />
          </div>
        </div>
        <div className="intro_lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Intro
