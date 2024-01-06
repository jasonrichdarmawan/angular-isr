import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'isr',
        loadChildren: () => import("./features/isr/isr.module").then(m => m.ISRModule),
    }
];
