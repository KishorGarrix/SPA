import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent} from './brand/brand.component';
import { ModelComponent} from './model/model.component';
import { ColorComponent} from './color/color.component';
import { MainComponent}  from './main/main.component';




const routes: Routes = [
  { path: 'brand', component:BrandComponent },
 { path: 'model', component: ModelComponent},
 { path: 'color', component: ColorComponent},
 {path:'brand/:name',component:ModelComponent},
 {path:'model/:name',component:ColorComponent},
 { path:'color/:name',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
