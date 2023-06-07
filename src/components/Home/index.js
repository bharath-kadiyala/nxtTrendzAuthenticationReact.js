import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-con">
        <Header />
        <div className="home-textAndImg-con">
          <div className="home-text-con">
            <h1 className="home-head-sty">Clothes That Get You Noticed</h1>
            <p className="home-decs-sty">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="home-btn-sty">
              Shop Now
            </button>
          </div>
          <img
            className="home-img-sty"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    )
  }
}

export default Home
