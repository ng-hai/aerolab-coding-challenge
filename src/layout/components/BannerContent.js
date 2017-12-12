import React from 'react'
import styled, { keyframes } from 'styled-components'
import Transition from 'react-motion-ui-pack'

import { Typography } from '../../components'
import {
  WelcomeEnter,
  WelcomeLeave,
  ToEnter,
  ToLeave,
  AeroEnter,
  AeroLeave,
  ItsEnter,
  ItsLeave,
  NiceToEnter,
  NiceToLeave,
  SeeEnter,
  SeeLeave,
  YouEnter,
  YouLeave,
} from './transitions'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  animation: 1s ${FadeIn};
`

const Welcome = styled(Typography.Title).attrs({ children: 'Welcome' })`
  color: white;
  font-weight: bold;
  letter-spacing: 0.2rem;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
`

const To = styled(Typography.Title).attrs({ children: 'to' })`
  color: white;
  font-weight: bold;
  position: absolute;
  top: 10.95rem;
  left: 3.8rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
`

const Aero = To.extend.attrs({ children: 'aero' })`
  color: #ff6600;
  background: white;
  padding: 0 0.5rem;
  top: 15rem;
`

const Its = styled(Typography.Title).attrs({ children: `It's` })`
  color: white;
  font-weight: bold;
  font-size: 3.8rem;
  font-family: 'Roboto', sans-serif;
  margin: 3rem 1rem 0;
`

const NiceTo = Its.extend.attrs({ children: `nice to` })`
  margin: -2.5rem 1rem 0;
`

const See = NiceTo.extend.attrs({ children: 'see' })`
`

const You = Aero.extend.attrs({ children: 'you' })`
  text-transform: lowercase;
  font-size: 3.8rem;
  top: 27.25rem;
  line-height: 0.9;
  left: 7.5rem;
`

export default function BannerContent () {
  return (
    <Content>
      {withTransition(<Welcome key='Welcome' />, WelcomeEnter, WelcomeLeave)}
      {withTransition(<To key='To' />, ToEnter, ToLeave)}
      {withTransition(<Aero key='Aero' />, AeroEnter, AeroLeave)}
      {withTransition(<Its key='Its' />, ItsEnter, ItsLeave)}
      {withTransition(<NiceTo key='NiceTo' />, NiceToEnter, NiceToLeave)}
      {withTransition(<See key='See' />, SeeEnter, SeeLeave)}
      {withTransition(<You key='You' />, YouEnter, YouLeave)}
    </Content>
  )
}

function withTransition (component, enterTransition, leaveTransition) {
  return (
    <Transition
      runOnMount
      component={false}
      enter={enterTransition}
      leave={leaveTransition}
      children={component}
    />
  )
}
