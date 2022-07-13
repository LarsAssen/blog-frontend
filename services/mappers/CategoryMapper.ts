import Category from "Models/CategoryModel";

const mapToCategory = (category: any): Category => {
  return {
    id: category.id,
    name: category.attributes.CategoryName,
    description: category.attributes.CategoryDescription,
  } as Category;
};

export default mapToCategory;
