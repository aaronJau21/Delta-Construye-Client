import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useCookie } from "#app";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export const useShoppingStore = defineStore("shoppingStore", () => {
  const itemsCart = ref<CartItem[]>([
    {
      id: 1,
      name: "Cemento Sol",
      price: 10,
      quantity: 1,
      image: "/img/home/products/cemento_sol_2.jpg",
    },
  ]);

  const addToCart = (item: CartItem) => {
    console.log(item);
    const existingItem = itemsCart.value.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      itemsCart.value.push({
        ...item,
        quantity: item.quantity || 1,
      });
    }

    saveCart();
  };

  const removeFromCart = (itemId: number) => {
    itemsCart.value = itemsCart.value.filter((item) => item.id !== itemId);
    saveCart();
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    const item = itemsCart.value.find((item) => item.id === itemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        removeFromCart(itemId);
      } else {
        saveCart();
      }
    }
  };

  const clearCart = () => {
    itemsCart.value = [];
    saveCart();
  };

  const totalPrice = computed(() => {
    return itemsCart.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  });

  const totalItems = computed(() => {
    return itemsCart.value.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  });

  const saveCart = () => {
    const cartCookie = useCookie("shopping-cart", {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    cartCookie.value = JSON.stringify(itemsCart.value);
  };

  const loadCart = () => {
    const cartCookie = useCookie("shopping-cart");
    if (cartCookie.value) {
      try {
        const cookieValue = cartCookie.value as string;
        if (cookieValue && cookieValue.trim() !== "") {
          itemsCart.value = JSON.parse(cookieValue);
        } else {
          console.warn("Empty cart cookie found");
          itemsCart.value = [];
        }
      } catch (e) {
        console.error("Error parsing cart data:", e);
        cartCookie.value = null;
        itemsCart.value = [];
      }
    }
  };

  if (process) {
    loadCart();
  }

  return {
    itemsCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
  };
});
