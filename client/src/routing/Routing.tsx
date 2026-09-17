import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import WebsiteLayout from "../layouts/WebsiteLayout/WebsiteLayout.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import ContactPage from "../pages/ContactPage/ContactPage.tsx";
import AboutUsPage from "../pages/AboutCompanyPage/AboutUsPage.tsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.tsx";
import ServicesWebsitesPage from "../pages/ServicesWebsitesPage/ServicesWebsitesPage.tsx";
import ServicesAutomationPage from "../pages/ServicesAutomationPage/ServicesAutomationPage.tsx";
import ServicesIntegrationPage from "../pages/ServicesIntegrationPage/ServicesIntegrationPage.tsx";
import ServicesItCarePage from "../pages/ServicesItCarePage/ServicesItCarePage.tsx";
import ServicesCybersecurityPage from "../pages/ServicesCybersecurityPage/ServicesCybersecurityPage.tsx";
import ServicesBackupsPage from "../pages/ServicesBackupsPage/ServicesBackupsPage.tsx";
import ServicesEducationPage from "../pages/ServicesEducationPage/ServicesEducationPage.tsx";
import ServicesSystemsPage from "../pages/ServicesSystemsPage/ServicesSystemsPage.tsx";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/services'>
                <Route index element={<ServicesPage />} />
                <Route path='websites' element={<ServicesWebsitesPage />} />
                <Route path='systems' element={<ServicesSystemsPage />} />
                <Route path='automation' element={<ServicesAutomationPage />} />
                <Route path='integration' element={<ServicesIntegrationPage />} />
                <Route path='itcare' element={<ServicesItCarePage />} />
                <Route path='cybersecurity' element={<ServicesCybersecurityPage />} />
                <Route path='backups' element={<ServicesBackupsPage />} />
                <Route path='education' element={<ServicesEducationPage />} />
            </Route>
            <Route path='about_us' element={<AboutUsPage />} />
            <Route path='contact' element={<ContactPage />} />
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}