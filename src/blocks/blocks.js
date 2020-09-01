import { row, col, css } from '../utils'

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
    const { tag = 'h2', styles = {} } = this.options

    return row(col(`<${tag}>${this.value}</${tag}>`), styles)
  }
}

export class Image extends Block {
  constructor(value = '', options = {}) {
    super(value, options)
  }

  toHTML() {
    const {
      alt = 'picture',
      styles,
      imageStyle = {
        width: '300px',
        height: 'auto',
      },
    } = this.options

    const defaultRowStyle = {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    }

    const rowStyles = Object.keys(styles).length ? styles : defaultRowStyle

    return row(
      `
        <img
          src=${this.value}
          style=${css(imageStyle)}
          alt=${alt}
        />
      `,
      rowStyles,
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
