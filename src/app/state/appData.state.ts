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
  SEARCH_PRODUCT_BY_NAME = "Search Product By Name"
}

export interface ProductActionEvent {
  type : ProductEventEnum,
  payload : any
}
