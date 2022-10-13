import { Food } from './ResponseApi.interface';

export class Menu {
  items: Food[] = [];

  constructor() {}

  // TODO: Encontrar una forma para evitar repetir lógica

  public totalPrice(): number {
    if (this.items.length > 0)
      return this.items
        .map((item) => item.pricePerServing)
        .reduce((acc, item) => (acc += item));
    else return 0;
  }

  public healthScore(): number {
    if (this.items.length > 0)
      return this.items
        .map((item) => item.healthScore)
        .reduce((acc, item) => (acc += item));
    else return 0;
  }

  public addToMenu(item: Food): void {
    if (this.items.length <= 3 && item.vegan) {
      const veganPlates = this.items.filter((itemOnMenu) => itemOnMenu.vegan);
      if (veganPlates.length <= 1) this.items.push(item);
    } else if (this.items.length <= 3) this.items.push(item);
  }

  public removeFromMenu(id: number): void {
    this.items = this.items.filter((item) => item.id != id);
  }

  get getItems(): Food[] {
    return this.items;
  }
}
