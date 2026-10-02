import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type {} from '../schemas/user.schema.ts';
import type { User } from '../types.ts';

export async function findAllUsers(): Promise<User[]> {
	return await prisma.user.findMany();
}

export async function findCustomerById(id: number): Promise<User> {
	const user = await prisma.user.findUnique({ where: { id } });

	if (!user) throw new NotFoundError(`Usuário de id ${id} não encontrado.`);

	return user;
}
