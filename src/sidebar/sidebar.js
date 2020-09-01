import { Text, Title, Image } from '../blocks/blocks'
import { cssToObj } from '../utils'

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector)
    this.update = update
    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
  }

  addBlock(event) {
    event.preventDefault()
    const { target } = event
    const type = target.name
    const value = target.value.value
    const styles = target.styles.value

    let Constructor
    switch (type) {
      case 'title':
        Constructor = Title
        break
      case 'image':
        Constructor = Image
        break
      default:
        Constructor = Text
    }
    const newBlock = new Constructor(value, { styles: cssToObj(styles) })
    this.update(newBlock)

    target.value.value = ''
    target.styles.value = ''
  }

  get template() {
    return [block('title'), block('text'), block('image')].join('')
  }
}

const block = type => {
  let title = ''
  let value = 'значення'
  switch (type) {
    case 'image':
      title = 'Зображення'
      value = 'url'
      break
    case 'title':
      title = 'Заголовок'
      break
    default:
      title = 'Текст'
  }

  return `
    <form name="${type}">
      <h5>${title}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder=${value}>
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="стиль CSS">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Додати</button>
    </form>
    <hr />
  `
}
