import Layout from '../components/Layout.js'
import Link from 'next/link'

const Index = () => (
  <div>
    <Layout>
      <div className="container cell-item">
        <div className="banner-wrapper cell-item">
          <div className="banner">
            <img src="../static/images/banner.png" />
          </div>
          <div className="banner-title">
            <h1>NEW ARRIVALS</h1>
            <p>Brand new collection 2018</p>
            <Link href="/new">
              <button>DISCOVER NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
    <style jsx>{`
      .banner-wrapper {
        position: relative;
        height: calc(100vh - 50px);
        padding-bottom: ${100 / 768 * 100}vh;
      }

      .banner {
        height: 100%
      }

      .banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .banner-title {
        background: white;
      }
    `}</style>
  </div>
)

export default Index