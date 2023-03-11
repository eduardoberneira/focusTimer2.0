export default function Timer() {

  let timerTimeOut
  let seconds = document.querySelector('#seconds')
  let minutes = document.querySelector('#minutes')
  const buttonPlayOn = document.querySelector('.playOn')
  const buttonPlayOff = document.querySelector('.playOff')

  function countdown() {
    if(minutes.textContent > 0) {
      buttonPlayOn.classList.remove('hide')
      buttonPlayOff.classList.add('hide')
    }
    timerTimeOut = setTimeout(function() {
        
      if(minutes.textContent <= 0 && seconds.textContent <=0) {
        resetDisplay()
        return
      }
      if(seconds.textContent <= 0) {
        seconds.textContent = 60
        --minutes.textContent
      } 
      
      --seconds.textContent
      minutes.textContent = String(minutes.textContent).padStart(2, 0)
      seconds.textContent =  String(seconds.textContent).padStart(2, 0)
      countdown()
    } ,1000)
  }
  
  function hold() {
    clearTimeout(timerTimeOut)
  }
  
  function resetDisplay() {
    minutes.textContent = String(25).padStart(2, 0)
    seconds.textContent =  String(0).padStart(2, 0)
    resetControls()
    hold()
  }

  function resetControls() {
    buttonPlayOn.classList.add('hide')
    buttonPlayOff.classList.remove('hide')
  }

  return {
    countdown,
    hold,
    resetControls,
    resetDisplay
  } 
}