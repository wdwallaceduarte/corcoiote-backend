import customers from "../mocks/customer.mock.ts";
import type { Customer } from "../types.ts";

export function findAllCustomers(): Customer [] {
    return customers
}

export function findCustomerById(id: number) {
    const customer = customers.find(
        (customer) => customer.id === id
    )

    if (!customer) {
        throw new Error(`Cliente de id ${id} não encontrado.`)
    }

    return customer
}