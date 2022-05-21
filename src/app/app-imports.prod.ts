import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppContainerModule } from "./core/app-container/app-container.module";
import { EffectsModule } from '@ngrx/effects';

export const appImports = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppContainerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
]
