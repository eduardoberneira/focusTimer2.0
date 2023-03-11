import Elements from "./elements.js"
export default function Theme() {
  
  const elements = Elements()

  function switchTheme() {
    elements.body.classList.toggle('darkTheme')
    elements.lightMode.classList.toggle('hide')
    elements.darkMode.classList.toggle('hide')
    elements.card.map((el) => {
      if(elements.lightMode.classList.contains('hide')) {
        toggleCard(el)
      } else if(elements.darkMode.classList.contains('hide')){
        toggleCard(el)
      }
    })
  }
  
  function toggleCard(el) {
    el.classList.toggle('cardLight')
    el.classList.toggle('cardDark')
    if(el.classList.contains('cardOnLight')) {
      el.classList.remove('cardOnLight')
      el.classList.add('cardOnDark')
    } else if(el.classList.contains('cardOnDark')) {
      el.classList.add('cardOnLight')
      el.classList.remove('cardOnDark')
    }
  }

  function resetCards(el1, el2, el3) {
    el1.classList.remove('cardOnLight', 'cardOnDark')
    el2.classList.remove('cardOnLight', 'cardOnDark')
    el3.classList.remove('cardOnLight', 'cardOnDark')
  }

  return {
    switchTheme,
    resetCards
  }
}