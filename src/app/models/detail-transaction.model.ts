export interface DetailTransaction {
    id: number,
    cantidad: number,
    costo_unitario: number,
    observacion: string,
    transaccion_id: number,
    service_id: number,
    createdAt: Date,
    updatedAt: Date
}