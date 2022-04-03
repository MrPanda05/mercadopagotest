import express from "express";
import cors from 'cors';
import mercadopago from "mercadopago";
// Adicione as credenciais
//? credencias necessarias para utilizar o mercado pago e acessar as preferencias
mercadopago.configure({
  access_token: 'TEST-5474941639988760-040216-daac2a086656fbbe397276eafcc3e32f-1099548219',
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('nao');
})

app.get('/pay', (req, res) => {
    res.send('pague');
})

//? cria preferencia make up
let preference = {
    items: [
      {
        title: 'Meu produto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  //?cria uma preferencia
  mercadopago.preferences.create(preference)
  .then(function(response){
  // Este valor substituirá a string "<%= global.id %>" no seu HTML
    global.id = response.body.id;
  }).catch(function(error){
    console.log(error);
  });


const port = 5000 || 5000;

app.listen(port, () => {
    console.log('Usando localhost:5000');
})