export class Product {
   public name: string;
   public epics: Epic[];
}

export class Epic {
   public name: string;

   public stories: Story[];
}

export class Story {
   public name: string;
   public tasks: Task[];
}

export class Task {
   public name: string;
}

const product = new Product();
product.name = "My shiny product"

export { product }