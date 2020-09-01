export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = ''

    let html = ''
    model.forEach(block => (html += block.toHTML()))

    this.$el.insertAdjacentHTML('beforeend', html)
  }
}
