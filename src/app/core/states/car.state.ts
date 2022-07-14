import { CarModel } from "../models/car.model";

export interface carState {
    loading: boolean,
    cars: ReadonlyArray<CarModel>
}