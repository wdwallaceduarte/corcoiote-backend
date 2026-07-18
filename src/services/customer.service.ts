import customers from "../mocks/customer.mock.ts";
import type { Customer } from "../types.ts";

export function findAllCustomers(): Customer [] {
    return customers
}