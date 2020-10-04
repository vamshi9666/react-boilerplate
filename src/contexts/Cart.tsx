/* eslint-disable camelcase */
import React, { createContext, useEffect, useState } from 'react';
import { Dishes, Dish_Images, Users } from '../generated/graphql';

export type CartVariant = {
  id: string;
  name: string;
  count: number;
  price: number;
};
export type CartDish = Pick<Dishes, 'id' | 'name' | 'isVegetarian'> & {
  variants: Array<CartVariant>;
  images: Array<Pick<Dish_Images, 'path'>>;
  chef: Pick<Users, 'id'>;
};

type addToCartInput = { dish: CartDish; varName: string; varPrice?: number };

type removeFromCartInput = { dish: CartDish; varName: string };

type CartActionTypes = {
  addToCart: (arg: addToCartInput) => void;
  removeFromCart: (arg: removeFromCartInput) => any;
  clearCart: () => void;
};
export const CartContext = createContext<Array<CartDish>>([]);
export const CartActionsContext = createContext<CartActionTypes>({
  addToCart: (i: addToCartInput) => ({}),
  removeFromCart: (i: removeFromCartInput) => ({}),
  clearCart: () => null,
});
const useCreateCartItems = () => {
  const [cartItems, setCartItems] = useState<Array<CartDish>>([]);

  useEffect(() => {
    const stringifiedCart: any = localStorage.getItem('cart') || [];

    try {
      const parsedResult = JSON.parse(stringifiedCart);
      setCartItems(parsedResult);
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      const currentCart = JSON.stringify(cartItems);
      localStorage.setItem('cart', currentCart);
    }
  }, [cartItems]);
  const addToCart = ({ dish, varName, varPrice }: addToCartInput) => {
    const ifAlreadyDish = cartItems.find((cartItem) => cartItem.id === dish.id);

    const isDishIncluded = ifAlreadyDish !== undefined;
    if (isDishIncluded) {
      const newCart = cartItems.map((cartItem) => {
        if (cartItem.id === dish.id) {
          const ifVarIncluded = ifAlreadyDish?.variants.find(
            (v: any) => v.name === varName,
          );

          const isVarIncluded = ifVarIncluded !== undefined;
          if (isVarIncluded) {
            const newVariants = ifAlreadyDish?.variants.map((v: any) => {
              if (v.name === varName) {
                return {
                  ...v,
                  count: v.count + 1,
                };
              }
              return v;
            });
            return {
              ...cartItem,
              variants: newVariants,
            };
          }
          if (varPrice) {
            return {
              ...cartItem,
              variants: [
                ...dish.variants,
                {
                  count: 1,
                  name: varName,
                  price: varPrice,
                  duration: 120,
                },
              ],
            };
          }
          console.log(' var price not passed ');
        }
        return cartItem;
      });
      // @ts-ignore
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, dish]);
    }
  };

  const removeFromCart = ({ dish, varName }: removeFromCartInput) => {
    console.log('input check ', dish, varName);
    const ifAlreadyDish = cartItems.find((cartItem) => cartItem.id === dish.id);

    const isDishIncluded =
      ifAlreadyDish !== null && ifAlreadyDish !== undefined;
    if (isDishIncluded) {
      if (varName === '') {
        const withOutNulls = cartItems.filter((i) => i.id !== dish.id);
        setCartItems(withOutNulls);
      } else {
        const newCart = cartItems.map((cartItem) => {
          if (cartItem.id === dish.id) {
            const ifVarIncluded = ifAlreadyDish?.variants.find(
              (v: any) => v.name === varName,
            );
            const isVarIncluded =
              ifVarIncluded !== undefined && ifVarIncluded !== undefined;
            if (isVarIncluded) {
              const newVariants = ifAlreadyDish?.variants.map((v) => ({
                ...v,
                count: v.name === varName ? v.count - 1 : v.count,
              }));
              return {
                ...cartItem,
                variants: newVariants,
              };
            }

            return cartItem;
          }
          return cartItem;
        });
        // @ts-ignore
        setCartItems(newCart);
      }
    } else {
      console.log(' this dish is not included with specifc variant');
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export const CartProvider = ({ children }: { children: any }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCreateCartItems();
  return (
    <CartContext.Provider value={cartItems}>
      <CartActionsContext.Provider
        value={{
          addToCart,
          removeFromCart,
          clearCart,
        }}
      >
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};
