import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSliderModule } from '@angular/material/slider'

import { KitchenSinkRoutingModule } from './kitchen-sink-routing.module'
import { KitchenSinkComponent } from './kitchen-sink.component'
import { ExampleAdressFormComponent } from './example-adress-form/example-adress-form.component'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ExampleNavigationComponent } from './example-navigation/example-navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { SideBarExampleViewComponent } from './side-bar-example-view/side-bar-example-view.component'
import { LoremParagraphsComponent } from './lorem-paragraphs/lorem-paragraphs.component'
import { ExampleTableComponent } from './example-table/example-table.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { ExampleDashboardComponent } from './example-dashboard/example-dashboard.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatMenuModule } from '@angular/material/menu'
import { ExampleTreeComponent } from './example-tree/example-tree.component'
import { MatTreeModule } from '@angular/material/tree'
import { ExampleDragDropComponent } from './example-drag-drop/example-drag-drop.component'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AutoCompleteExampleComponent } from './auto-complete-example/auto-complete-example.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { BadgeExampleComponent } from './badge-example/badge-example.component'
import { MatBadgeModule } from '@angular/material/badge'
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component'
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example/bottom-sheet-overview-example.component'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component'
import { ExampleButtonToggleComponent } from './example-button-toggle/example-button-toggle.component'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExampleChipsComponent } from './example-chips/example-chips.component' 
import { MatChipsModule } from '@angular/material/chips';
import { ExampleDatepickerComponent } from './example-datepicker/example-datepicker.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { ExampleDialogDialogComponent } from './example-dialog-dialog/example-dialog-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { ExampleExpansionPanelComponent } from './example-expansion-panel/example-expansion-panel.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { ExampleSelectionListComponent } from './example-selection-list/example-selection-list.component'
import { MatProgressBarModule } from '@angular/material/progress-bar' 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExampleRipplesComponent } from './example-ripples/example-ripples.component' 
import { MatRippleModule } from '@angular/material/core';
import { ExampleTogglesComponent } from './example-toggles/example-toggles.component' 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExampleLabaledSliderComponent } from './example-labaled-slider/example-labaled-slider.component';
import { ExampleSnackbarComponent } from './example-snackbar/example-snackbar.component' 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ExampleStepperComponent } from './example-stepper/example-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ExampleTabsComponent } from './example-tabs/example-tabs.component' 
import { MatTabsModule } from '@angular/material/tabs';
import { ExampleToolbarsComponent } from './example-toolbars/example-toolbars.component' 

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
    ExampleDragDropComponent,
    AutoCompleteExampleComponent,
    BadgeExampleComponent,
    BottomSheetExampleComponent,
    BottomSheetOverviewExampleComponent,
    ExampleButtonsComponent,
    ExampleButtonToggleComponent,
    ExampleCheckboxComponent,
    ExampleChipsComponent,
    ExampleDatepickerComponent,
    ExampleDialogComponent,
    ExampleDialogDialogComponent,
    ExampleExpansionPanelComponent,
    ExampleSelectionListComponent,
    ExampleRipplesComponent,
    ExampleTogglesComponent,
    ExampleLabaledSliderComponent,
    ExampleSnackbarComponent,
    ExampleStepperComponent,
    ExampleTabsComponent,
    ExampleToolbarsComponent,
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
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule
  ],
})
export class AngularKitchenSinkModule {}
