import { About, Main, Profile } from "@/pages";
import { RouteObject } from "react-router-dom";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.PROFILE]: '/profile'
}

export const RouteConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        Component: Main
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        Component: About
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}/:id`,
        Component: Profile
    }
}
