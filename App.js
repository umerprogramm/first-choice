import Body from './Body/Body';
import './App.css';
import Header from './Header/Header';
import { Switch,Route } from "react-router-dom";
import Contact1 from './Contact1/Contact1';
import Menu from './Menu/Menu';
import About from './About/About';
import Footer from './Footer/Footer';
import Open from './OPen/Open';
import View_card from './Menu/View_card';
import Order_details from './order_details/Order_details';

function App() {
  return (
    <div className="App">
     <Header/>

     <Switch>
     <Route exact path='/' component={Body} />
     <Route path='/contact' component={Contact1}/>
     <Route path='/menu' component={Menu} />
     <Route path='/about' component={About} /> 
     <Route path='/hours' component={Open} />
     <Route path='/view_products' component={View_card}/>
     <Route path='/order_details' component={Order_details}/>
   

     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
