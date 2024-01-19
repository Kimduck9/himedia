import React from 'react'

const siteTxt = [
  {
    text: ["make", "site compliant whit", "webstandard"],
    tittle: "1. 웹 표준을 준수한 사이트 사이트 제작",
    site: "https://github.com/hohyenho/hi2",
    info: ["site code", "produiction period : two days", "use stack : html5/css javascript..."]
  },
  {
    text: ["make", "site compliant whit", "webstandard"],
    tittle: "2. 웹 표준을 준수한 사이트 사이트 제작",
    site: "https://github.com/hohyenho/hi2",
    info: ["site code", "produiction period : two days", "use stack : html5/css javascript..."]
  },
  {
    text: ["make", "site compliant whit", "webstandard"],
    tittle: "3. 웹 표준을 준수한 사이트 사이트 제작",
    site: "https://github.com/hohyenho/hi2",
    info: ["site code", "produiction period : two days", "use stack : html5/css javascript..."]
  },
  {
    text: ["make", "site compliant whit", "webstandard"],
    tittle: "4. 웹 표준을 준수한 사이트 사이트 제작",
    site: "https://github.com/hohyenho/hi2",
    info: ["site code", "produiction period : two days", "use stack : html5/css javascript..."]
  },
]

const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <div className="site_tit">
          Site coding <em>작품들</em>
        </div>
        <div className="site_wrap">
          {siteTxt.map((site, key) => (
            <article className={`site_item s${key + 1}`} key={key}>
              <span className='num'>0{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className='tittle'>{site.tittle}</h3>
              <div className="btn">
                <a href="{site.site}">code</a>
                <a href="{site.site}">view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Site
