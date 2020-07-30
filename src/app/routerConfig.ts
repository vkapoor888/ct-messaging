import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';

const appRoutes: Routes = [
  { path: 'list',
    component: ProductListComponent
  },
  {
    path: 'purchase',
    component: ProductPurchaseComponent
  }
];
export default appRoutes;
