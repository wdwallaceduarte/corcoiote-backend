import { type } from "node:os";

export type Customer = {
    id: number;
    name: string;
    status: boolean;
}

export type CreateCustomer = Pick<Customer, 'name'>
