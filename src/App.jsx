import { Home } from './pages/home/Home'
import { CartDrawer } from './components/organisms/CartDrawer/CartDrawer'

export default function App() {
  return (
    <div>
      <CartDrawer />
      <Home />
    </div>
  )
}