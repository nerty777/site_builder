import './styles/main.css'
import { model } from './model'

const siteHtml = () => {
  let html = ''
  model.forEach(block => (html += block.toHTML()))

  return html
}

const site = document.querySelector('#site')
site.insertAdjacentHTML('beforeend', siteHtml())
