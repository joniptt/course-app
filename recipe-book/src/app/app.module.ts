import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListCompComponent } from './shopping-list-comp/shopping-list-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoopingListComponent,
    RecipeBookComponent,RecipeDetailComponent,RecipeItemComponent,RecipeListComponent, ShoppingListEditComponent, ShoppingListCompComponent, 
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
