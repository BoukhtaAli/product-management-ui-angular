//Request Response State Management

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState : DataStateEnum,
  data ?: T,
  errorMessage ?: string
}

//Event State Management

export enum ProductEventEnum {
  GET_PRODUCT= "Get Products",
  GET_AVAILABLE_PRODUCTS = "Get Only Available Products",
  GET_SELECTED_PRODUCTS = "Get Only Selected Products",
  ADD_PRODUCT = "Add New Product",
  SEARCH_PRODUCT_BY_NAME = "Search Product By Name",
  UPDATE_PRODUCT = "Update Existing Product",
  DELETE_PRODUCT = "Delete Existing Product",
  UPDATE_PRODUCT_SELECT = "Update Product Select Data",
  PRODUCT_UPDATED = "Product Updated",
  PRODUCT_ADDED = "Product Added"
}

export interface ProductActionEvent {
  type : ProductEventEnum,
  payload : any
}
