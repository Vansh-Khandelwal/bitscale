import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, FileSearchCornerIcon, EyeIcon, UserPlusIcon, SearchIcon } from 'lucide-react'
import FilterAccordion from './filter-accordion'

type Props = {}

export default function FindPeopleSidebar({ }: Props) {
    return (
        <div className="find-people-sidebar w-1/4">
            <div className="sidebar-title flex max-md:flex-col gap-2 items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Find People</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center bg-gray-200 rounded px-1 text-[0.6rem]">
                        <ChevronDown className="w-4" /> Saved Search
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Search 1</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="sidebar-content flex flex-col gap-4 overflow-hidden">
                <div className="search-container flex flex-col gap-3">
                    <div className="label flex items-center gap-2 text-xs">
                        <UserPlusIcon size="1rem"/> People Keyword
                    </div>
                    <div className="search flex items-center gap-2 border-b border-gray-300 pb-2">   
                        <SearchIcon  size="0.9rem"/>
                        <input type="text" placeholder="Enter single keyword here..." className="outline-none text-sm"/>
                    </div>
                </div>
                <div className="filter-container overflow-y-hidden overflow-x-hidden">
                    <FilterAccordion />
                </div>
            </div>
            <div className="sidebar-footer flex max-md:flex-col gap-2 mt-6">
                <Button variant="secondary" size="sm" className="max-md:w-full w-1/2 max-md:text-[0.5rem] text-xs px-1">
                    <FileSearchCornerIcon />Saved Search
                </Button>
                <Button variant="default" size="sm" className="max-md:w-full w-1/2 max-md:text-[0.5rem] text-xs px-1">
                    <EyeIcon />Preview Result
                </Button>
            </div>
        </div>
    )
}