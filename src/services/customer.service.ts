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

export function insertCustomer(name:string) {
    const id = customers[customers.length -1].id

    const customer: Customer = {
        id: id + 1,
        name,
        status: true
    }

    customers.push(customer)

    return customer
}