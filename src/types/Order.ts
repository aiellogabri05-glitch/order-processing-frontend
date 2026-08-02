export interface Order {
  id: string;
  customerName: string;
  product: string;
  quantity: number;
  status: 'pending' | 'completed' | 'cancelled';
}