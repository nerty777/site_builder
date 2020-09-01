import { row, col } from '../utils'

class Block {
  constructor(value, options = {}) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('no toHTML method')
  }
}

export class Title extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag, styles } = this.options

    return row(col(`<${tag}>${this.value}</${tag}>`), styles)
  }
}

export class Image extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { alt, styles, imageStyle } = this.options

    return row(
      `
        <img
          style="${Object.entries(imageStyle)
            .map(([key, value]) => key + ':' + value)
            .join(';')}"
          src=${this.value}
          alt=${alt}
        />
      `,
      styles,
    )
  }
}

export class Text extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), this.options.styles)
  }
}

export class TextColumns extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map(el => col(el))

    return row(html.join(''), this.options.styles)
  }
}
