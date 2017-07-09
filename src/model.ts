export class Image {
   public id: number;
   public url: string;
}

export class Product {
   public name: string;
   public epics: Epic[];
}

export class Epic {
   public id: number;
   public name: string;
   public description: string;
   public images: Image[] = [];
   public stories: Story[];

   public addImage(url: string) {
      const image = new Image();
      image.url = url;
      this.images.push(image);
   }
}

export class Story {
   public id: number;
   public name: string;
   public tasks: Task[];
}

export class Task {
   public id: number;
   public text: string;
}

export class Release {
   id: number;
   tasks: number[];
   name: string;
}

const product = new Product();
product.name = "My shiny product"

export { product }