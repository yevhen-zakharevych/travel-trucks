export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: Form;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Gallery[];
  reviews: Review[];
}

export enum Engine {
  Diesel = 'diesel',
  Hybrid = 'hybrid',
  Petrol = 'petrol',
}

export enum Form {
  Alcove = 'alcove',
  FullyIntegrated = 'fullyIntegrated',
  PanelTruck = 'panelTruck',
}

export interface Gallery {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export enum Transmission {
  Automatic = 'automatic',
  Manual = 'manual',
}
