import Link from 'next/link'
import HeadNav from './HeadNav.js'

const getPosts = () => [
  {id: 1, name: 'men', href: '/men'},
  {id: 2, name: 'women', href: '/women'},
  {id: 3, name: 'children', href: '/children'},
  {id: 4, name: 'sales', href: '/sales'},
]

export default () => (
  <header className="flex-container cell-item">
    <div className="head-logo">
      <Link href="/">
        <a>ANSESTA</a>
      </Link>
    </div>
    <ul className="head-nav">
      {getPosts().map(post => (
        <HeadNav post={post} key={post.id}/>
      ))}
    </ul>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        align-items: center;
        background: white;
        z-index: 90;
      }

      header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: linear-gradient(to right, #555, #BBB)
      }

      header > * {
        width: 33.33333333333%;
        padding: 0 15px;
      }

      .head-logo a {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: .2em;
      }

      .head-nav {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </header>
)
