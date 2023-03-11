export default function Controls({
  resetControls,
  hold
}) {

  function pauseControl() {
    resetControls()
    hold()
  }
  
  function moreFive() {
    if(minutes.textContent < 95) {
      minutes.textContent = Number(minutes.textContent) + 5
      minutes.textContent = String(minutes.textContent).padStart(2, 0)
    }
  }

  function minusFive() {
    if(minutes.textContent > 5) {
      minutes.textContent = Number(minutes.textContent) - 5
      minutes.textContent = String(minutes.textContent).padStart(2, 0)
    }
  }

  return {
    minusFive,
    moreFive,
    pauseControl,
  }
}