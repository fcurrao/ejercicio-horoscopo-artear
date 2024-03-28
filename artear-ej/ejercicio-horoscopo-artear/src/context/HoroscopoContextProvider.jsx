import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const HoroscopoContext = createContext(null);

// Creamos el provider
export const HoroscopoContextProvider = ({ children }) => { 
  
const [valueViewBy, setValueViewBy] = useState("grilla")
const [valueOrderBy, setValueOrderBy] = useState("today")
const [searchHoroscopo, setSearchHoroscopo] = useState("")
//   const [totalItems, setTotalItems] = useState(0);
//   const [total, setTotal] = useState(0);

//   const addItem = (item, quantity) => {
//     // Copia del cart
//     const cartCopy = [...cart];
//     // Verificamos si el item ya se encuentra en el carrito
//     const index = cartCopy.findIndex((product) => product.id === item.id);

//     if (index != -1) {
//       cartCopy[index].quantity = cartCopy[index].quantity + quantity;
//       cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;
//       setCart(cartCopy);
//     } else {
//       // Si da -1 es por que el producto no se encuentra en el carrito

//       // Armamos el objeto del item para guardar en el cart
//       const newItem = {
//         ...item,
//         quantity,
//         subTotal: item.price * quantity,
//       };

//       // Hacemos una copia del cart actual y agregamos el nuevo item
//       setCart([...cart, newItem]);
//     }
//   };

//   const removeItem = (id) => {
//     // Quitar un producto del carrito

//     const cartFilter = cart.filter((item) => item.id !== id);
//     setCart(cartFilter);
//   };

//   const clearCart = () => {
//     // Limpiar el carrito
//     setCart([]);
//   };

//   const handleTotalItems = () => { 
//     const newTotalItems = cart.reduce( (acum, item) => acum + item.quantity, 0 );
//     setTotalItems(newTotalItems);

//    }

//    const handleTotal = () => { 
//       const newTotal = cart.reduce((acum, item) => acum + item.price * item.quantity, 0);
//       setTotal(newTotal);
//     }

//    useEffect( () => { 
//     handleTotalItems();
//     handleTotal();
//     }, [cart] )
   useEffect( () => {  
    }, [] )

  const objectValues = {
    valueViewBy,
    setValueViewBy,
    valueOrderBy,
    setValueOrderBy,
    setSearchHoroscopo,
    searchHoroscopo,
  };

  return <HoroscopoContext.Provider  value={objectValues}>  {children} </HoroscopoContext.Provider>;
};