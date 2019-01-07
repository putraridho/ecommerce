import Header from './Header'
import GlobalStyle from './GlobalStyle'

export default props => (
  <div>
    <GlobalStyle />
    <Header />
    {props.children}
  </div>
)