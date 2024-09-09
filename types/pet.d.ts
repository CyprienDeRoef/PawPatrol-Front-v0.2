declare global {
  interface Pet {
    id: number;
    name: string;
    owner: User;
    species: "Dog" | "Cat" | "Bird" | "Reptile";
    breed: string;
    age: number;
    description: string;
    color: string;
    weight: number;
    height: number;
    photoUrl: string;
    createdAt: string;
    updatedAt: string;
  }
}
