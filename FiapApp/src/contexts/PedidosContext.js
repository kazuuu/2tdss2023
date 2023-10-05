import { createContext, useState } from "react";
import { db } from '../configs/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export const PedidosContext = createContext();

export function PedidosContextProvider({children}) {
  const [pedidos, setPedidos] = useState([]);

  const initPedidos = async () => {
    onValue(ref(db, '/pedidos'), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((item) => {
          setPedidos(oldArray => [...oldArray, item])
        });
      }
    });
  } 

  const addPedido = async (pedido) => {
    const id = push(child(ref(db), 'pedidos')).key;

    set(ref(db, `/pedidos/${id}`), pedido)
    .catch((err) => { alert(error);})
  } 

  const removePedido = async (pedidoId) => {
    remove(ref(db, `/pedidos/${pedidoId}`))
    .catch((err) => { alert(error);})
  } 

  const alterarPedido = async (pedido) => {
    update(ref(db, `/pedidos/${pedido.id}`), pedido)
    .catch((err) => { alert(error);})
  } 

  return (
    <PedidosContext.Provider value={{ pedidos, initPedidos, addPedido, removePedido, alterarPedido }}>
      {children}
    </PedidosContext.Provider>
  );
};


  