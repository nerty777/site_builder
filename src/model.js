import image from './assets/love.jpg'
import { Title, Image, TextColumns, Text } from './block/block'

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
    },
    alt: 'love',
    imageStyle: {
      'max-height': '300px',
      'max-width': '300px',
    },
  }),
  new Text('lorem1', {}),
  new TextColumns(['text1', 'text2', 'text3'], {
    styles: {
      padding: '1rem',
    },
  }),
]
