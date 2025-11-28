import './App.css'
import { SidebarProvider } from './components/ui/sidebar'
import { AppSidebar } from './components/custom/sidebar/appSidebar'
import Header from './components/custom/header'
import Home from './pages/home'

function App() {

    return (
        <SidebarProvider className='overflow-hidden h-screen'>
            <AppSidebar collapsible='none' />
            <div className="main-container w-full overflow-hidden">
                <Header />
                <Home />
            </div>
        </SidebarProvider>
    )
}

export default App
