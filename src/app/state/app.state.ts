import { ActionReducerMap } from "@ngrx/store";
import { carState } from "src/app/core/states/car.state";
import { carsReducer } from "./reducers/cars.reducer";

export interface AppState {
    carsList: carState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    carsList: carsReducer
}