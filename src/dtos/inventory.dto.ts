export interface InventoryResponseDTO {
    sku: string;
    name: string;
    count: number;
    blocked: number;
    booked: number;
    missing: number;
    available: number;
  }
  