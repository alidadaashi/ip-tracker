export interface Result {
    ip: string;
    isp: string;
    location: Location;
}

interface Location {
    city: string,
    country: string,
    geonameId: number,
    lat: number,
    lng: number,
    postalCode: string,
    region: string,
    timezone: string
}