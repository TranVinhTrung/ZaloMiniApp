export type CategoryId =
  | "Nike"
  | "Adidas"
  | "Puma"
  | "Mizuno"
  | "Asics"
  | "Kamito"
  | "Zocker";

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}
