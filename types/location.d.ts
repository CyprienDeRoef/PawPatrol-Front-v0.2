declare global {
  interface Location {
    id: number;
    latitude: number;
    longitude: number;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    createdAt: string;
    updatedAt: string;
  }
}
