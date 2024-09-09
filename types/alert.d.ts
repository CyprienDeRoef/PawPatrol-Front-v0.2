declare global {
  interface Alert {
    id: number;
    owner: User;
    pet: Pet;
    location: Location;
    type: "lost" | "found";
    description: string;
    imageUrl: string;
    status: "active" | "inactive";
    rewardAmount: number;
    contactMethod: "email" | "phone" | "sms";
    contactDetails: string;
    createdAt: string;
    updatedAt: string;
  }
}
