import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DrHomeComponent } from './DevRouter/dr-home/dr-home.component';
import { CgHomeComponent } from './CSSGenie/cg-home/cg-home.component';
import { CgEditorComponent } from './CSSGenie/cg-editor/cg-editor.component';

const routes: Routes = [
  // DevRoutes
  { path: 'DevRouter', component: DrHomeComponent },

  // CssGenie
  { path: 'CGHome', component: CgHomeComponent },
  { path: 'CGEditor', component: CgEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
