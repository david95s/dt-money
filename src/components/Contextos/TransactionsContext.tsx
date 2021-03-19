import React, {createContext, ReactNode} from 'react'; 
import { api } from '../../services/api';


interface TransactionsProviderProps{
  children: ReactNode;
}

interface Transactions{
  id:number;
  title:string;
  type:string;
  category:string;
  amount:number;
  createAt: string;
  hash:number;
}

type TransactionInput = Omit<Transactions, 'id' | 'createAt' | 'hash'>

interface TransactionContextData{
  transaction: Transactions[];
  createTransaction: (transaction:TransactionInput) => Promise<void>;
  removeTransaction: (id:number) => void;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionProvider = ({children}:TransactionsProviderProps)=>{

  const [transaction, setTransaction] = React.useState<Transactions[]>([]);
  
  React.useEffect(()=>{
    const url = `transactions`;    
    api.get(url)
    .then((json) =>  setTransaction(json.data.transactions))
    .then((data)=> {
      const storageTransaction = window.localStorage.getItem('transactionstorage');
      if(storageTransaction){
        setTransaction(JSON.parse(storageTransaction));
      }
    })
  },[]);

  React.useEffect(()=>{
    if(transaction && transaction.length > 0){
      window.localStorage.setItem('transactionstorage', JSON.stringify(transaction));
    }
  },[transaction]);

  async function createTransaction(transactionInput:TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt:new Date(),
      hash:((Math.random() * 17.15) * (transactionInput.amount + 15.75)),
    });
    const data = response.data.transaction;
    setTransaction([...transaction, data]);
  }

  function removeTransaction(hash:number){
    const restOfTransaction = transaction.filter((item)=>{
      return (Number(item.hash) !== hash)
    });
    setTransaction(restOfTransaction);
    window.localStorage.setItem('transactionstorage', JSON.stringify(restOfTransaction));
  }


    return (
      <TransactionContext.Provider value={{transaction, createTransaction, removeTransaction }}>
        {children}
      </TransactionContext.Provider>
      )
}