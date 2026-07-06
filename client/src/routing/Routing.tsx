import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath"
import WebsiteLayout from "../layouts/WebsiteLayout/WebsiteLayout.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ContactPage from "../pages/ContactPage/ContactPage.tsx";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route index element={<HomePage />} />
            <Route path={ROUTER_PATH.SERVICES} element={null} />
            <Route path={ROUTER_PATH.ABOUT_COMPANY} element={null} />
            <Route path={ROUTER_PATH.CONTACT} element={<ContactPage />} />
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}