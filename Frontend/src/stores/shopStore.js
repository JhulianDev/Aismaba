import { create } from 'zustand'
import { products } from "../content/ShopData"

const useStore = create(set => ({
  // Acciones y estados
  TemplatesData: products.templates
}))

export default useStore;