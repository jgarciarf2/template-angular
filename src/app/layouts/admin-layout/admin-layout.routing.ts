import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {
        //Saltos de rutas
        path: 'theaters',
        children: [
            {
                path: '',
                loadChildren: () => import('src/app/pages/theaters/theaters.module').then(m => m.TheatersModule)
            },

            // {
            //     path: 'list',
            //     loadChildren: () => import('src/app/pages/theaters/list/list.component').then(m => m.ListComponent)
            // },
            // {
            //     path: 'manage',
            //     loadChildren: () => import('src/app/pages/theaters/manage/manage.component').then(m => m.ManageComponent)
            // },
        ],

    },
    {
        path: 'seats',
        children: [
            {
                path: '',
                loadChildren: () => import('src/app/pages/seats/seats.module').then(m => m.SeatsModule)
            },
        ]
    }
];
