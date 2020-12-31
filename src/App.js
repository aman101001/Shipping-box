import{BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ShippingForm from './views/shippingform';
import ListShippings from './views/Listshipping';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar navLink={{path:"/orders",Lable:"View Orders"}}/>
            <ShippingForm />
          </Route>
          <Route path="/orders">
            <Navbar navLink={{path:"/",Lable:"Home"}}/>
            <ListShippings/>
          </Route>
        </Switch>
      </Router>
     </div> 
  );
}

export default App;
