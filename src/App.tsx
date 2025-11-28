import './App.css'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { AppSidebar } from './components/custom/sidebar/appSidebar'
import Header from './components/custom/header'
import Home from './pages/home'

function App() {

  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <div className="main-container w-full">
                <Header />
                <Home />
            </div>
        </SidebarProvider>
    </>
  )
}

export default App
