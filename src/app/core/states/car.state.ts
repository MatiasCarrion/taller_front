import { BrandModel } from "../models/brand.model";
import { CarModel } from "../models/car.model";
import { ModelModel } from "../models/model.model";
import { OwnerModel } from "../models/owner.model";

export interface carState {
    loading: boolean,
    cars: CarModel[],
    brands: BrandModel[],
    models: ModelModel[],
    owners: OwnerModel[]
}