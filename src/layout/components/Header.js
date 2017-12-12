import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Parallax, Background } from 'react-parallax'

import banner from '../../assets/banner.jpg'
import BannerContent from './BannerContent'

const Banner = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 620px;
  transition: all 1s ease-out;
  opacity: 1;
  background-image: linear-gradient(
    to right,
    #febd37 0%,
    #edba59 50%,
    #c5974d 75%,
    #e3a02b 100%
  );

  ${({ loaded }) => loaded && `opacity: 0`};

  @media (min-width: 1400px) {
    height: 850px;
  }
`

class Header extends PureComponent {
  state = {
    bannerLoaded: false,
  }

  onBannerLoaded = () => {
    this.setState({ bannerLoaded: true })
  }

  render () {
    return (
      <Parallax strength={200}>
        <Background>
          <img src={banner} alt='Banner' onLoad={this.onBannerLoaded} />
        </Background>
        <Banner loaded={this.state.bannerLoaded} />
        {this.state.bannerLoaded && <BannerContent />}
      </Parallax>
    )
  }
}

export default Header
