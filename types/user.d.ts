declare global {
  interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profilePictureUrl: string;
    bio: string;
    dateOfBirth: string;
    gender: "Male" | "Female" | "Other" | "Prefer not to say";
    pets: Pet;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    role: "User" | "Admin";
    createdAt: string;
    updatedAt: string;
  }
}
