// interface ICategoryItems {
//   Ethnic: Array<string>;
//   Formals: Array<string>;
//   Casuals: Array<string>;
//   Activewear: Array<string>;
//   Accessories: Array<string>;
//   [key: string]: Array<string>; // Allow string indexing
// }

interface IHomeCategories {
  Furniture: string[];
  Decor: string[];
  Kitchen: string[];
  Bedding: string[];
  Bath: string[];
}

interface IBeautyCategories {
  Makeup: string[];
  Skincare: string[];
  Haircare: string[];
  Fragrance: string[];
  Tools: string[];
}

interface ICategoryItems {
  [key: string]: string[];
}
