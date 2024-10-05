export interface ProductInterface {
  total:     number;
  productos: Producto[];
}

export interface Producto {
  _id:        string;
  nombre:     string;
  state:      boolean;
  precio:     number;
  descripcion: string;
  img?:       string;
}
