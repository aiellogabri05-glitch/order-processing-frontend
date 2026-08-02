import type { Order } from '../types/Order';

export async function getOrders(): Promise<Order[]> {
  return [
    {
      id: '1',
      customerName: 'John Smith',
      product: 'Laptop',
      quantity: 2,
      status: 'pending',
    },
    {
      id: '2',
      customerName: 'Alice Brown',
      product: 'Keyboard',
      quantity: 1,
      status: 'completed',
    },
    {
      id: '3',
      customerName: 'Michael Johnson',
      product: 'Mouse',
      quantity: 3,
      status: 'pending',
    },
  ];
}