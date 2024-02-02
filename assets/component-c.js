import confetti from 'canvas-confetti'

class ComponentC extends HTMLElement {
  constructor () {
    super()

    document.addEventListener('components:confetti-time', () => {
      console.log('Confetti Time!')
    })
  }

  connectedCallback () {
    this.querySelector('button[data-confetti-time]').addEventListener('click', () => this.confettiTime())
    this.confettiTime()
  }

  confettiTime () {
    confetti()
    this.dispatchEvent(
      new CustomEvent('components:confetti-time', {
        bubbles: true
      })
    )
  }
}

customElements.define('component-c', ComponentC)
