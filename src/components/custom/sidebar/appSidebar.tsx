import * as React from "react"

import {
    AudioWaveform,
    BookIcon,
    BookOpenIcon,
    Command,
    GalleryVerticalEnd,
    LayoutDashboardIcon,
    SettingsIcon,
    SquaresIntersectIcon,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavOthers } from "./nav-others"
import { NavUser } from "./nav-user"
import { SpaceSwitcher } from "./space-switcher"
import { Separator } from "@/components/ui/separator"

// This is sample data.
const data = {
    spaces: [
        {
            name: "GTM Spaces",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "ABC Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "XYZ Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "My Dashboard",
            url: "#",
            icon: LayoutDashboardIcon,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Playbooks",
            url: "#",
            icon: BookIcon,
            disabled: true,
        },
        {
            title: "Integrations",
            url: "#",
            icon: SquaresIntersectIcon,
        },
    ],
    others: [
        {
            name: "Documentation",
            url: "#",
            icon: BookOpenIcon,
        },
        {
            name: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
    ],
    user: {
        name: "User",
        email: "user@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="logo px-4 py-1">Bitscale</div>
                <Separator />
                <SpaceSwitcher spaces={data.spaces} />
                <Separator />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavOthers others={data.others} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
