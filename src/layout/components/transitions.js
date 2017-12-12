// Because `react-motion-ui-pack` does not support duration or delay function
// I must use some trick with big number

const WelcomeEnter = {
  opacity: 1,
  translateY: 0,
}

const WelcomeLeave = {
  opacity: 0,
  translateY: -500,
}

const ToEnter = {
  opacity: 1,
  translateX: 0,
}

const ToLeave = {
  opacity: 0,
  translateX: -5800,
}

const AeroEnter = {
  opacity: 1,
}

const AeroLeave = {
  opacity: -3000,
}

const ItsEnter = {
  opacity: 1,
  translateY: 0,
}

const ItsLeave = {
  opacity: 0,
  translateY: 50000,
}

const NiceToEnter = {
  opacity: 1,
  translateY: 0,
}

const NiceToLeave = {
  opacity: 0,
  translateY: 80000,
}

const SeeEnter = {
  opacity: 1,
  translateY: 0,
}

const SeeLeave = {
  opacity: 0,
  translateY: 100000,
}

const YouEnter = {
  opacity: 1,
  translateX: 0,
}

const YouLeave = {
  opacity: -1000,
  translateX: -100000,
}

export {
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
}
