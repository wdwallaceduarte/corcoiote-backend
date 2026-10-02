import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type {
	CreateInvoice,
	UpdateInvoice,
} from '../schemas/invoice.schema.ts';
import type { Invoice, Page } from '../types.ts';

const PAGE_SIZE = 10;

export async function findAllInvoices({ page }: Page): Promise<Invoice[]> {
	return await prisma.invoice.findMany({
		include: { customer: true },
		orderBy: { createdAt: 'desc' },
		skip: (page - 1) * PAGE_SIZE,
		take: PAGE_SIZE,
	});
}

export async function findInvoiceById(id: number): Promise<Invoice> {
	const invoice = await prisma.invoice.findUnique({ where: { id } });

	if (!invoice) throw new NotFoundError('Fatura não encontrada.');

	return invoice;
}

export async function insertInvoice({
	amount,
	status,
	date,
	customerId,
}: CreateInvoice): Promise<Invoice> {
	return await prisma.invoice.create({
		data: {
			amount,
			status,
			date,
			customer: { connect: { id: customerId } },
		},
		include: { customer: true },
	});
}

export async function modifyInvoice(
	id: number,
	data: UpdateInvoice,
): Promise<Invoice> {
	await findInvoiceById(id);

	return await prisma.invoice.update({
		where: { id },
		data,
		include: { customer: true },
	});
}

export async function removeInvoice(id: number): Promise<void> {
	await findInvoiceById(id);

	await prisma.invoice.delete({ where: { id } });
}
