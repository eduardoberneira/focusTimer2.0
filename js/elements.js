export default function Elements() {
  const buttonStop = document.querySelector('.stop')
  const buttonPlus = document.querySelector('.plus')
  const buttonMinus = document.querySelector('.minus')
  const buttonPlayOn = document.querySelector('.playOn')
  const buttonPlayOff = document.querySelector('.playOff')
  const buttonTheme = document.querySelector('.theme')

  const body = document.querySelector('body')
  const lightMode = document.querySelector('.light')
  const darkMode = document.querySelector('.dark')

  const card = [...document.querySelectorAll('.sounds button')]
  const forestButton = document.querySelector('.forest')
  const rainButton = document.querySelector('.rain')
  const coffeeShopButton = document.querySelector('.coffeeShop')
  const fireplaceButton = document.querySelector('.fireplace')
  
  const forestSound = new Audio('./sounds/Floresta.wav')
  const rainSound = new Audio('./sounds/Chuva.wav')
  const coffeeShopSound = new Audio('./sounds/Cafeteria.wav')
  const fireplaceSound = new Audio('./sounds/Lareira.wav')
  const inputSounds = [...document.querySelectorAll('.sounds input')]
  const volumeSlider = [...document.querySelectorAll('.volumeSlider')]

  return {
    buttonMinus,
    body,
    buttonPlayOff,
    buttonPlayOn,
    buttonPlus,
    buttonStop,
    buttonTheme,
    lightMode,
    darkMode,
    card,
    forestButton,
    forestSound,
    rainButton,
    rainSound,
    coffeeShopButton,
    coffeeShopSound,
    fireplaceButton,
    fireplaceSound,
    volumeSlider,
    inputSounds
  }
}