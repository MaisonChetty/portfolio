import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import {MoreVertical} from "lucide-react"

function Dropdown() {
  return (
    <div className="dropdown m-0">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className='h-4 w-4 text-indigo-600 m-0'/>
          </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-opacity-50">
          <DropdownMenuLabel>
            <Link href="./">Home</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <Link href="/project">Project</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/skills">Skills</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
