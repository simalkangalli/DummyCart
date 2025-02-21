import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "type"; // ✅ Doğru yoldan import ettiğinden emin ol

// ✅ Sepetteki ürünler için yeni bir tip oluşturuyoruz
interface CartProduct extends ProductType {
  quantity: number;
}

// ✅ Redux Store'un tipini tanımlıyoruz
interface InitialState {
  cart: CartProduct[]; // 🔹 `quantity` içeren yeni tip kullanıldı
  favourite: ProductType[];
  userInfo: null;
}

// ✅ Başlangıç durumu (Initial State)
const initialState: InitialState = {
  cart: [],
  favourite: [],
  userInfo: null,
};

export const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    // 🔹 Ürünü sepete ekleme fonksiyonu
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // 🔹 Mevcut ürün varsa `quantity` artır
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // 🔹 Yeni ürünü ekle
      }
    },
    increaseQuantity: (state, action) => {
        const existingProduct = state?.cart?.find(
          (item) => item?.id === action.payload
        );
        if (existingProduct) {
          existingProduct.quantity! += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const existingProduct = state?.cart?.find(
          (item) => item?.id === action.payload
        );
        if (existingProduct) {
          existingProduct.quantity! -= 1;
        }
      },
  },
});

export const { addToCart } = dummySlice.actions;
export default dummySlice.reducer;
