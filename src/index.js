import './styles/main.css'
import { model } from './model'
import { Site } from './site/site'
import { Sidebar } from './sidebar/sidebar'

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#sidebar', updateCallback)
site.render(model)
