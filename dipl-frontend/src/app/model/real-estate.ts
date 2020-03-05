import { CityPart } from './city-part';
import { User } from './user';
import { City } from './city';

export class RealEstate {
    id: string;
    name: string;
    price: string;
    squareMeters: string;
    type: string;
    service: string;
    city: City;
    cityPart: CityPart;
    heating: string;
    floor: string;
    description: string;
    additionalInfo: string;
    user: User;
}
