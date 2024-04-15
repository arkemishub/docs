import Preview from "@/components/ui/preview";
import {
    Command,
    CommandInput,
    CommandItem,
    CommandEmpty,
    CommandGroup,
    CommandSeparator,
    CommandShortcut,
    CommandList
} from "@/components/ui/command";
import {CalendarIcon, RocketIcon} from "lucide-react";

export default function CommandPreview(){
    return(
        <Preview>
            <div className="w-[50%]">
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <RocketIcon className="mr-2 h-4 w-4" />
                                <span>Launch</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                    </CommandList>
                </Command>
            </div>
        </Preview>
    )
}
