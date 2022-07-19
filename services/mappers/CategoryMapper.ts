import Category from "Models/CategoryModel";

const mapToCategory = (category: any): Category => {
  return {
    id: category.id,
    name: category.attributes.CategoryName,
    description: category.attributes.CategoryDescription,
  } as Category;
};

const mapToCategoryList = (categories: any): Category[] => {
  const categoryList: Category[] = [];
  categories.map((category: any) => {
    categoryList.push(mapToCategory(category));
  });
  return categoryList;
};

export { mapToCategory, mapToCategoryList };
