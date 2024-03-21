import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Main, NotFound } from "@/pages";
import { RouteConfig } from "./routeConfig";
import { Protected } from "./Protected";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                Component: Main
            },
            {
                Component: Protected,
                children: Object.values(RouteConfig).slice(1).map(({
                    Component,
                    path
                }) => ({
                    path: path,
                    Component: Component
                }))
            }
        ]
    }
])