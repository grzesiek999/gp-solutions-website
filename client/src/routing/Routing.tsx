import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath"
import WebsiteLayout from "../layouts/WebsiteLayout/WebsiteLayout.tsx";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route index element={null} />
            <Route path={ROUTER_PATH.SERVICES} element={null} />
            <Route path={ROUTER_PATH.ABOUT_COMPANY} element={null} />
            <Route path={ROUTER_PATH.CONTACT} element={null} />
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}