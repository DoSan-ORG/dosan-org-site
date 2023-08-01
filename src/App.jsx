import './main.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/css/theme.min.css'
import './assets/vendor/bootstrap/bootstrap.bundle.min.js'
import './assets/vendor/rellax/rellax.min.js'
import RootLayout from './pages/Root'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App(){
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#0b0f19' : 'white';
  }, [theme]);

  return <RootLayout />
}

export default App
