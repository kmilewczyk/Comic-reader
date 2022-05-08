import { Component, OnInit } from '@angular/core';
import { ConfigApiActions } from '@app/store/config/config.actions';
import { selectConfig, StoreConfigSlice } from '@app/store/config/config.selectors';
import { Store } from '@ngrx/store';
import { Theme } from '../enums';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
})
export class AppContainerComponent implements OnInit {
  Theme = Theme;

  selectConfig$ = this.store.select(selectConfig);

  constructor(private store: Store<StoreConfigSlice>) { }

  ngOnInit(): void {
  }

  setTheme(theme: Theme) {
    this.store.dispatch(ConfigApiActions.ChangeConfig({ 'ui.theme': theme }))
  }
}
