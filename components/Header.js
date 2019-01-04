import Link from 'next/link'

const getPosts = () => [
  {id: 'men', href: '/men'},
  {id: 'women', href: '/women'},
  {id: 'children', href: '/children'},
  {id: 'sales', href: '/sales'},
]

export default () => (
  <div className="flex-container">
    <div className="head-logo">
      <Link href="/">
        <a>ANSESTA</a>
      </Link>
    </div>
    <ul className="head-nav">
      {getPosts().map(post => (
        <li key={post.id}>
          <Link href={post.href}>
            <a>{post.id}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .flex-container {
        display: flex;
      }

      .flex-container > * {
        width: 33.33333333%;
      }

      .head-nav {
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)
