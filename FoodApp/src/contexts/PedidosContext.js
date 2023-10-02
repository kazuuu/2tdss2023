import { createContext, useState } from "react";

export const PedidosContext = createContext();

export function PedidosContextProvider({children}) {
    const [pedidos, setPedidos] = useState([]);

    return (
      <PedidosContext.Provider value={{ pedidos, setPedidos }}>
        {children}
      </PedidosContext.Provider>
    );
};
  