import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import Favicon from './Assets/vn.png'


render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
