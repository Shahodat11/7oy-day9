import {create} from 'zustand';

const useStore = create(set => ({
  products: [],
  fetchProducts: async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    set({ products: data.products });
  }
}));

export default useStore;
