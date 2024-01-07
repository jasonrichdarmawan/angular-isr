import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'isr',
        loadChildren: () => import("./features/isr/isr.module").then(m => m.ISRModule),
    },
    {
        path: 'angular17',
        loadChildren: () => import("./features/angular17/angular17.module").then(m => m.Angular17Module),
    }
];
