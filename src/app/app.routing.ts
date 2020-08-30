//Importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


//import
import {MainComponent} from './component/main/main.component';
import {DetailsComponent} from './component/details/details.component';
import {ListComponent} from './component/list/list.component';
//Array de rutas
const appRoutes:Routes=[
    {path:'',component:ListComponent},
    {path:'details',component:DetailsComponent},
    {path:'app',component:ListComponent},
    {path:'**',component:ListComponent}
]
export const appRoutingProviders: any[]=[];
export const routing1:ModuleWithProviders=RouterModule.forRoot(appRoutes)