import { myUtil } from 'scripts/helpers/utils'

class ComponentB extends HTMLElement {
  constructor () {
    super()
    myUtil()
  }
}

customElements.define('component-b', ComponentB)
