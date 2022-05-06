import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { KitchenSinkRoutingModule } from './kitchen-sink-routing.module';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { ExampleAdressFormComponent } from './example-adress-form/example-adress-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleNavigationComponent } from './example-navigation/example-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideBarExampleViewComponent } from './side-bar-example-view/side-bar-example-view.component';
import { LoremParagraphsComponent } from './lorem-paragraphs/lorem-paragraphs.component';
import { ExampleTableComponent } from './example-table/example-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExampleDashboardComponent } from './example-dashboard/example-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ExampleTreeComponent } from './example-tree/example-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { ExampleDragDropComponent } from './example-drag-drop/example-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    KitchenSinkComponent,
    ExampleAdressFormComponent,
    ExampleNavigationComponent,
    SideBarExampleViewComponent,
    LoremParagraphsComponent,
    ExampleTableComponent,
    ExampleDashboardComponent,
    ExampleTreeComponent,
    ExampleDragDropComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    KitchenSinkRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ]
})
export class KitchenSinkModule { }
