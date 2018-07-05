export const LOAD_PRODUCT_SKU = 'LOAD_PRODUCT_SKU'
export const loadProduct = (sku, lang) => ({
  type: LOAD_PRODUCT_SKU,
  sku,
  lang
});

export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS'
export const loadProductSuccess = (product) => ({
  type: LOAD_PRODUCT_SUCCESS,
  product
});

const initialState = {
  product: {}
}

export default (state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_SUCCESS:
      return { ...state, product: action.product}
    default:
      return state;
  }
};
