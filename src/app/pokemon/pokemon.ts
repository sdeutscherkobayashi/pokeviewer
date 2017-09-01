export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  types: TypeContainer[];
}

export class Sprites {
  front_default: string;
  front_shiny_female: string;
}

export class TypeContainer {
  type: Type;
}

export class Type {
  name: string;
}
