import { CookingDefinition } from "./cookingDefinition";
import { CookingLevel } from "./cookingLevel";


export interface Food {

id: number;
name: string;
cookingDefinition: CookingDefinition;
cookingLevel: CookingLevel;
cookingInfo: string;
image_avatar_path: string;

}