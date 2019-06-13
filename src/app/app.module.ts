import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EntryComponent } from './components/todo-list/entry/entry.component';
import { ListComponent } from './components/todo-list/list/list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { LhsComponent } from './components/communications/lhs/lhs.component';
import { RhsComponent } from './components/communications/rhs/rhs.component';
import { CommunicationsService } from './components/communications/communications.service';
import { HttpClientModule } from '@angular/common/http';
import { TodosDataService } from './components/todo-list/todo-data-service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterComponent } from './components/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter-effects';
import { ShoppingModule } from './features/shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EntryComponent,
    ListComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    LhsComponent,
    RhsComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [CommunicationsService, TodosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
