import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath"


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={null} >
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