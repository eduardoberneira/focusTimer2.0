import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Theme from "./theme.js"
import Elements from "./elements.js"

Elements()
Theme()
Sounds({
  resetCards: Theme.resetCards
})
const timer = Timer()
const controls = Controls({
  hold: timer.hold,
  resetControls: timer.resetControls
})

Elements().buttonPlayOn.addEventListener('click', controls.pauseControl)
Elements().buttonPlayOff.addEventListener('click', timer.countdown)
Elements().buttonPlus.addEventListener('click', controls.moreFive)
Elements().buttonMinus.addEventListener('click', controls.minusFive)
Elements().buttonStop.addEventListener('click', timer.resetDisplay)
Elements().buttonTheme.addEventListener('click', Theme().switchTheme)

