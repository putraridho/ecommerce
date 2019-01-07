import Link from 'next/link'

export default (props) => (
  <li>
    <Link href={props.post.href}>
      <a>{props.post.name}</a>
    </Link>
    <style jsx>{`
      li {
        margin: 0 10px;
      }
    `}</style>
  </li>
)