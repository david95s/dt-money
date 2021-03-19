import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({
  models:{
    transaction: Model,
  },
  
  seeds(server){
    server.db.loadData({
      transactions:[
      /*DESCOMENTE PARA INICIAR COM DADOS PADRÃO
        {
          id:1,
          title:"Frela",
          hash:1.5,
          type:"deposit",
          category:"Dev",
          amount:6000,
          createAt: new Date("2021-02-12 09:00:12"),
        },
        {
          id:2,
          title:"Aluguel",
          type:"withdraw",
          hash:0.85,
          category:"Casa",
          amount:1100,
          createAt: new Date("2021-02-14 12:00:12"),
        }
        */
      ]
    })
  },

  routes(){
    this.namespace = "api";
    this.get('/transactions', ()=>{
     return this.schema.all('transaction')
    }) 
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
