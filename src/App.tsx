import React, { useState,useContext } from 'react';
import './App.scss';
import { useNavHook } from './services/hooks/useNavHook';
import { iconBasket,loaderLoading } from './constant';
import { Components } from './components/Components/Components';
import { Basket } from './components/Basket/Basket';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { RuleType } from './type';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from './ducks/listComponents/selectors' 
import { AuthContext } from './context/AuthContext'; 
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';
import {Auth} from './components/Auth/Auth'

function App(): React.ReactElement {
  const contextAuth = useContext(AuthContext);
  const [component, setComponent] = useState<string>('');
  const [contentBasket, setContentBasket] = useState<Array<RuleType>>([]);
  const [handleClick] = useNavHook(setComponent);
  const isLoading: boolean = useSelector(isLoadingSelector);
  const ComponentsWithProps = function () {
    return <Components  component={component} setContentBasket={setContentBasket} />
  }
  const BasketWitProps = function () { 
    return <Basket  contentBasket={contentBasket} component={component} setContentBasket={setContentBasket}/>
  }
 
  
  return (
    <Router>
      
      <nav>
        <Link id='div' onClick={handleClick} to='/'>Blocks</Link>
        <Link id='input' onClick={handleClick} to='/'>Inputs</Link>
        <Link id='button' onClick={handleClick} to='/'>Buttons</Link>
        <Link to='/basket'   className='wrapper__basket'>
        <img className='basket' src={String(iconBasket)} alt='basket' />
        <span className='basket__amount'> {contentBasket.length}  </span>
        </Link>
      </nav>
      
      <Switch>
        <Route path='/register' component={Auth}/>
        <PrivateRoute path='/' exact component={ComponentsWithProps} />
        <PrivateRoute path='/basket' component={BasketWitProps} />
      </Switch>
       {isLoading && <img className="loader" src={loaderLoading} alt="loading" />}
    </Router>
  )
}
export default App;