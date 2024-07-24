import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Dropdown() {
  return (
    <div className="dropdown">
      <DropdownMenu>
        <DropdownMenuTrigger>Drop</DropdownMenuTrigger>
        <DropdownMenuContent>
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
