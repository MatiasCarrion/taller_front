import { BrandModel } from "./brand.model"
import { ModelModel } from "./model.model"
import { OwnerModel } from "./owner.model"

export interface CarModel {
    id: number,
    patente: string,
    año: number,
    marca_id: number,
    marca: BrandModel,
    modelo: ModelModel,
    propietario: OwnerModel,
    modelo_id: number,
    propietario_id: number,
    createdAt: Date,
    updatedAt: Date
}