import { createContext, useState } from "react";
import { db, auth } from '../configs/firebaseConfig';
import { ref, onValue, push, child, set, query, orderByChild, equalTo } from 'firebase/database';

export const PedidosContext = createContext();

export function PedidosContextProvider({children}) {
  const [pedidos, setPedidos] = useState([]);
  const [page, setPage] = useState(0);

  const initPedidos = async () => {

    const dataQuery = query(ref(db, 'pedidos'), orderByChild('userId'), equalTo(auth.currentUser.uid));

    onValue(dataQuery, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        console.log("initPedidos", data)
        Object.values(data).map((item) => {
          setPedidos(oldArray => [...oldArray, item])
        });
      }
    });
  } 

  const addPedido = async (pedido) => {

    pedido = {
      ...pedido, 
      idCart: new Date().getTime(),
      userId: auth.currentUser.uid
    }

    console.log("addPedido", pedido);

    const id = push(child(ref(db), 'pedidos')).key;
    console.log("addPedidos 2", id);

    set(ref(db, `/pedidos/${id}`), pedido)
    .catch((err) => { console.log('addPedido error', err);})
  } 

  const removePedido = async (pedidoId) => {
    remove(ref(db, `/pedidos/${pedidoId}`))
    .catch((err) => { alert(error);})
  } 

  const alterarPedido = async (pedido) => {
    update(ref(db, `/pedidos/${pedido.id}`), pedido)
    .catch((err) => { alert(error);})
  } 

  const nextPage = async () => {
    return;
    setPage(page + 1);
    console.log("Next Page", page);
    await setPedidos(oldArray => [...oldArray, ...oldArray])
  } 


  return (
    <PedidosContext.Provider value={{ pedidos, initPedidos, addPedido, removePedido, alterarPedido, nextPage }}>
      {children}
    </PedidosContext.Provider>
  );
};


  