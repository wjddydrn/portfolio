import { useEffect } from 'react'
import './App.css'

const profileSections = [
  { id: 'interest', label: '관심사' },
  { id: 'strengths', label: '잘하는 것과 배우는 것' },
  { id: 'works', label: '활동과 작품' },
  { id: 'goals', label: '앞으로의 목표' },
]

function App() {
  useEffect(() => {
    document.title = '정용구 | 나의 소개'
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="정용구 소개 페이지 처음으로">
            <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
            <span>정용구<span className="brand-period">.</span></span>
          </a>
          <nav className="main-nav" aria-label="소개 메뉴">
            {profileSections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MY INTRODUCTION</p>
            <h1 id="hero-title">게임 개발을 배우며<br />아이디어를 키우는<br /><span>정용구</span>입니다<span className="title-period">.</span></h1>
            <p className="hero-description">게임 개발에 필요한 코딩을 배우고 싶어요.</p>
            <a className="button button-primary" href="#interest">나를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="pixel pixel-one" />
            <div className="pixel pixel-two" />
            <div className="code-card">
              <div className="code-card-bar"><i /><i /><i /><span>IDEA → GAME</span></div>
              <div className="code-card-content">
                <span className="code-comment">// 나의 다음 도전</span>
                <p><span>learn</span><b>(</b><em>coding</em><b>)</b></p>
                <p><span>grow</span><b>(</b><em>ideas</em><b>)</b></p>
                <div className="code-cursor" />
              </div>
            </div>
            <span className="art-caption">CURIOSITY / 01</span>
          </div>
        </section>

        <div className="section-rule page-width" aria-hidden="true"><span>ABOUT ME</span><span>↓</span></div>

        <section className="profile-section page-width" id="interest" aria-labelledby="interest-title">
          <div className="section-heading">
            <p className="eyebrow">01 / WHAT I LIKE</p>
            <h2 id="interest-title">요즘 관심 있는 것<span>.</span></h2>
          </div>
          <article className="info-card interest-card">
            <span className="card-icon" aria-hidden="true">✳</span>
            <div>
              <p className="card-kicker">MY INTEREST</p>
              <h3>게임 개발</h3>
              <p>게임 개발에 관심이 있어요.</p>
            </div>
            <span className="card-index" aria-hidden="true">01</span>
          </article>
        </section>

        <section className="profile-section skills-section" id="strengths" aria-labelledby="strengths-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">02 / LEARNING</p>
              <h2 id="strengths-title">잘하는 것과 배우는 것<span>.</span></h2>
            </div>
            <div className="skill-grid">
              <article className="info-card skill-card">
                <span className="card-kicker">I'M GOOD AT</span>
                <span className="skill-symbol" aria-hidden="true">✳</span>
                <h3>아이디어 내기</h3>
                <p>새로운 생각을 떠올리는 것을 잘해요.</p>
              </article>
              <article className="info-card skill-card learning-card">
                <span className="card-kicker">I'M LEARNING</span>
                <span className="skill-symbol" aria-hidden="true">&lt;/&gt;</span>
                <h3>코딩</h3>
                <p>게임 개발에 필요한 코딩을 배우고 싶어요.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="profile-section page-width" id="works" aria-labelledby="works-title">
          <div className="section-heading">
            <p className="eyebrow">03 / THINGS I'VE TRIED</p>
            <h2 id="works-title">활동과 작품<span>.</span></h2>
          </div>
          <div className="empty-work-card">
            <span className="empty-work-icon" aria-hidden="true">+</span>
            <div>
              <h3>소개할 활동이나 작품을 준비 중이에요.</h3>
              <p>나중에 직접 해본 활동이나 만든 작품을 여기에 추가할게요.</p>
            </div>
            <span className="card-index" aria-hidden="true">COMING LATER</span>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goals-title">
          <div className="goal-inner page-width">
            <div>
              <p className="eyebrow"><span className="status-dot" /> MY NEXT STEP</p>
              <h2 id="goals-title">앞으로의 목표<span>.</span></h2>
              <p className="goal-text">게임 개발에 필요한 코딩을 배우고 싶어요.</p>
            </div>
            <div className="goal-decoration" aria-hidden="true">
              <span className="goal-bracket">&lt;</span>
              <span className="goal-progress"><i /></span>
              <span className="goal-bracket">/&gt;</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home" aria-label="처음으로">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>정용구<span className="brand-period">.</span></span>
        </a>
        <p>게임 개발을 배우며 아이디어를 키우고 싶어요.</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
