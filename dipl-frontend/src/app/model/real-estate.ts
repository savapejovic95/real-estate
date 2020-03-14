import { CityPart } from './city-part';
import { User } from './user';

export class RealEstate {
    id: string;
    name: string;
    price: string;
    squareMeters: string;
    rooms: string;
    type: string;
    service: string;
    cityPart: CityPart;
    address: string;
    heating: string;
    floor: string;
    description: string;
    additionalInfo: string;
    user: User;
    convertedImage: string;
}
