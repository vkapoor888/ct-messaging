import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToasterComponent } from './toaster/toaster.component';
import { Tabs } from './tabs/tabs.component';
import { Tab } from './tab/tab.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksPurchaseComponent } from './books-purchase/books-purchase.component';
// import { AboutComponent } from './about/about.component';//
// import { DashboardComponent } from './dashboard/dashboard.component';
//HomeComponent, AboutComponent, DashboardComponent
@NgModule({
  declarations: [AppComponent, SidebarComponent, ToasterComponent, Tabs, Tab, ProductListComponent, ProductPurchaseComponent, BooksListComponent, BooksPurchaseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
