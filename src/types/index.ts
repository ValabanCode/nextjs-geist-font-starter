export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email?: string;
  direccion?: string;
  fechaRegistro: Date;
}

export interface Proveedor {
  id: string;
  nombre: string;
  telefono: string;
  email?: string;
  direccion?: string;
  contacto?: string;
}

export interface Pieza {
  id: string;
  referencia: string;
  descripcion: string;
  precio: number;
  proveedorId: string;
}

export interface PiezaPedido {
  id: string;
  piezaId: string;
  pieza: Pieza;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface Pedido {
  id: string;
  clienteId: string;
  cliente: Cliente;
  piezas: PiezaPedido[];
  proveedor: Proveedor;
  fechaPedido: Date;
  fechaEntregaEstimada?: Date;
  estado: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
  pagado: boolean;
  montoTotal: number;
  montoSena?: number;
  notas?: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'empleado';
  fechaCreacion: Date;
}

export type EstadoPago = 'pagado' | 'pendiente' | 'parcial';

export interface FiltrosPedidos {
  cliente?: string;
  telefono?: string;
  proveedor?: string;
  estado?: string;
  fechaDesde?: Date;
  fechaHasta?: Date;
}
