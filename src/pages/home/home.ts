import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Food } from '../../data/food';
import { DetailsPage } from '../details/details';
import { CookingLevel} from '../../data/cookingLevel';
import { CookingDefinition} from '../../data/cookingDefinition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  cookingDefinitions = CookingDefinition;
  cookingObjname = name;
  cookingObjDef = CookingDefinition;



  constructor(public navCtrl: NavController ) {
    
  }

  cookingObj: Food[] =[
    {id: 1 , name: 'Egg', cookingDefinition: CookingDefinition.Boiled, cookingLevel: { level1: 'soft', time1: 120,level2: 'medium', time2: 120,level3: 'hard', time3: 120 } , cookingInfo: 'Put the eggs in boiling water to cook', image_avatar_path: 'assets/imgs/cookingpan.png'},
    {id: 2 , name: 'Egg - Omlet', cookingDefinition: CookingDefinition.PanFryed, cookingLevel: { level1: 'soft', time1: 120,level2: 'medium', time2: 120,level3: 'hard', time3: 120 } , cookingInfo: 'Put the eggs in boiling water to cook', image_avatar_path: 'assets/imgs/fryingpan.png'},
    {id: 3, name: 'Egg - Sunny side up', cookingDefinition: CookingDefinition.PanFryed, cookingLevel: { level1: 'soft', time1: 120,level2: 'medium', time2: 120,level3: 'hard', time3: 120 } , cookingInfo: 'Put the eggs in boiling water to cook', image_avatar_path: 'assets/imgs/fryingpan.png'},
    {id: 4, name: 'Egg - Poached', cookingDefinition: CookingDefinition.PanFryed, cookingLevel: { level1: 'soft', time1: 120,level2: 'medium', time2: 120,level3: 'hard', time3: 120 } , cookingInfo: 'Put the eggs in boiling water to cook', image_avatar_path: 'assets/imgs/cookingpan.png'},
  
    
  ];

  goToDetailsPage(newCookingObj: Food) {
    this.navCtrl.push ('DetailsPage', {
      objView: newCookingObj
    });
  }

}
