import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import axios from 'axios';
import { Helmet } from "react-helmet";


function App() {
  const mercadopago = useMercadopago.v2('TEST-5a061339-6f59-4e59-aeca-94990d31f319', {
    locale: 'pt-BR'
  });
  useEffect(() => {
    const test = async() => {
      try {
        const { data } = await axios.get(`/api/pay`)
      } catch (err) {
        
      }
    }
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
                id: 'YOUR_PREFERENCE_ID'
            },
            render: {
                container: '.cho-container',
                label: 'Pay',
            }
        })
    }
}, [mercadopago])
  return (
    <div className="App">
      <Helmet>
      <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Helmet>
      <div className='cho-container'>

      </div>
    </div>
  );
}

export default App;
