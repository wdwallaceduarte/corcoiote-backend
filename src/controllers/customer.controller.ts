import type { Request, Response } from "express";
import { findAllCustomers } from "../services/customer.service.ts";

export function getAllCustomers( 
    _request: Request, 
    response: Response 
) {
    const customers = findAllCustomers()

    response.status(200).json(customers)
}