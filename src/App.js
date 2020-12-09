import logo from './hotdog.svg';
import './App.css';
import CardSection from './cardsection';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51H2htrE2SPswZ34tG1bckfmrCvdSgABV6Hwdq0yNlfUowcO7EMYG9DSgFszEyPqtXRQpYwaMhbM4N3KI3xNdwafR00KzYTr01F");


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Get a dope hotdog pin for $12 
        </p>
      </header>
      <body>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
      </body>
    </div>
  );
}

export default App;
