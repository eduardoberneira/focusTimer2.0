import Elements from "./elements.js"
import Theme from "./theme.js"
export default function Sounds() {

  const el = Elements()
  
  el.inputSounds.map((e) => {
    e.addEventListener('input', () => {
      el.forestSound.volume = e.value
      el.rainSound.volume = e.value
      el.coffeeShopSound.volume = e.value
      el.fireplaceSound.volume = e.value
    })
  })

  el.forestButton.addEventListener('click', () => {
    playSound(el.forestButton, el.forestSound, el.rainSound, el.coffeeShopSound, el.fireplaceSound)
    Theme().resetCards(el.rainButton, el.coffeeShopButton, el.fireplaceButton)
  })

  el.rainButton.addEventListener('click', () => {
    playSound(el.rainButton, el.rainSound, el.forestSound, el.coffeeShopSound, el.fireplaceSound)
    Theme().resetCards(el.forestButton, el.coffeeShopButton, el.fireplaceButton)
  })

  el.coffeeShopButton.addEventListener('click', () => {
    playSound(el.coffeeShopButton, el.coffeeShopSound, el.rainSound, el.forestSound, el.fireplaceSound)
    Theme().resetCards(el.rainButton, el.forestButton, el.fireplaceButton)
  })

  el.fireplaceButton.addEventListener('click', () => {
    playSound(el.fireplaceButton, el.fireplaceSound, el.rainSound, el.coffeeShopSound, el.forestSound)
    Theme().resetCards(el.rainButton, el.coffeeShopButton, el.forestButton)
  })
  
  el.volumeSlider.map((e) => {
    e.addEventListener('click', (event) => {
      event.stopPropagation()
    })
  })
  
  function playSound(e, soundOn, soundOff1, soundOff2, soundOff3) {
    if(el.darkMode.classList.contains('hide')) {
      e.classList.toggle('cardOnLight')
    }else if(el.lightMode.classList.contains('hide')) {
      e.classList.toggle('cardOnDark')
     } 

    if(e.classList.contains('cardOnLight') || e.classList.contains('cardOnDark')) {
      soundOn.play()
      soundOff1.pause()
      soundOff2.pause()
      soundOff3.pause()  
    } else {
      soundOn.pause()
    }
  }

}