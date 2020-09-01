export const row = (content, styles) => {
  return `
    <div class="row" style=${css(styles)}>
      ${content}
    </div>
    `
}

export const col = content => {
  return `<div class="col-sm">${content}</div>`
}

export const css = (styles = {}) => {
  const toString = key => `${key}:${styles[key]}`

  return Object.keys(styles).map(toString).join(';')
}

export const cssToObj = (string = '') => {
  const result = {}
  string
    .split(';')
    .filter(el => el !== '')
    .map(el => el.trim().split(':'))
    .map(([key, value]) => (result[key] = value))

  return result
}
