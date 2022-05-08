import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SideNavContainerComponent } from "../side-nav-container/side-nav-container.component";

const routes: Route[] = [
  {
    path: '',
    component: SideNavContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppContainerRoutingModule {}
