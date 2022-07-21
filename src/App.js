import './utils/reset.scss';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { Header } from './Components/Header';
import { CardList } from './Components/CardList';
import { Form } from './Components/Form';
import { PopUp } from './Components/PopUp';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <PopUp />
          <Header />
          <CardList /> 
          <Form />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
