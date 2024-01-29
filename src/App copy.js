//import logo from './logo.svg';
import './App.css';
import ChangeBg from './components/ChangeBg';
import Counter from './components/Counter';
import FunCounter from './components/FunCounter';
import Input from './components/Input';
import Product from './components/Product';
import ProductLists from './components/ProductLists';
import "rsuite/dist/rsuite.min.css";  
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

 

function App() {
 let prod1={
    id:'1',
    name:'dani',
    salary:12000
  }
  return (
    <div className="App">
      <Todo/>
       <ChangeBg></ChangeBg>
      <FunCounter></FunCounter>
    <Counter></Counter> 
    <Input/>
    <ProductLists></ProductLists>
    {/*<Product id={prod1.id} name={prod1.name}></Product> replace this code with  spread operator*/ }
    <Product {...prod1}></Product>    
    
    </div>
  );
}

export default App;
