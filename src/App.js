import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
function App() {
 const  showcart = useSelector(state => state.ui.cartisvisible)
  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
