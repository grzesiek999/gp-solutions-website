import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import WebsiteLayout from "../layouts/WebsiteLayout/WebsiteLayout.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ContactPage from "../pages/ContactPage/ContactPage.tsx";
import AboutUsPage from "../pages/AboutCompanyPage/AboutUsPage.tsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.tsx";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/services'>
                <Route index element={<ServicesPage />} />
                <Route path='websites' element={null} />
                <Route path='softwares' element={null} />
                <Route path='automation' element={null} />
                <Route path='integration' element={null} />
                <Route path='itcare' element={null} />
                <Route path='cybersecurity' element={null} />
                <Route path='backups' element={null} />
                <Route path='education' element={null} />
            </Route>
            <Route path='about_us' element={<AboutUsPage />} />
            <Route path='contact' element={<ContactPage />} />
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}