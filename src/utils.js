export const row = function (content, styles = '') {
  return `
    <div class="row" style=${Object.entries(styles)
      .map(([key, value]) => key + ':' + value)
      .join(';')}
    >
      ${content}
    </div>
    `
}

export const col = function (content) {
  return `<div class="col-sm">${content}</div>`
}
