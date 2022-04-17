
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import {AuthContextProvider} from './context/AuthContextProvider'
ReactDOM.render(
   <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </Provider>,
  document.getElementById('root')
);
