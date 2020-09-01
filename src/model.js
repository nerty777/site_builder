import image from './assets/love.jpg'
import { Title, Image, TextColumns, Text } from './blocks/blocks'

export const model = [
  new Title('Site builder', {
    styles: {
      'background-color': 'green',
      color: '#ffffff',
      'text-align': 'center',
    },
    tag: 'h2',
  }),
  new Image(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
    alt: 'love',
    imageStyle: {
      'max-height': '300px',
      'max-width': '300px',
    },
  }),
]
