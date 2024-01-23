import React from 'react'

const contactText = [
  {
    link : "https://www.naver.com/",
    tit : "KAKAO : ID 입력!"
  },
  {
    link : "https://www.naver.com/",
    tit : "E-mail : mail 주소 입력!"
  },
]

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_inner">
        <h2 className="contact_tit"> Contact</h2>
        <div className="contact_lines top" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact_txt">
          <div className="txt">
            {contactText.map((contactText,key)=>(
               <div key={key}>
               <a href={contactText.link} target="_blank" rel="noopener noreferrer">{contactText.tit}</a>
             </div>
            ))}
          </div>
        </div>
        <div className="contact_lines bottom" aria-hidden="true">
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

export default Contact
