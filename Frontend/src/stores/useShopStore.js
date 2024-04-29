import { create } from 'zustand'
import { products } from "../content/ShopData"

const useShopStore = create(set => ({
  TemplatesData: products.templates
}))

export default useShopStore;