import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {IntroComponent} from './intro/intro.component';

const routes: Routes = [
  {path:"skills", component: SkillsComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"intro", component: IntroComponent},
  // {path:"contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
