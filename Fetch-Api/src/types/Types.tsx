export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  gender: string;
  date_of_birth: string;
  address: {
    city: string;
    country: string;
  };
}
