import { CommandBar, useCommandBar } from '@haydenbleasel/command-bar';

export default function CommandMenu() {
    const commandBar = useCommandBar();
    return(
        <CommandBar.Dialog className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CommandBar.Container className="w-full max-w-xl transition-transform bg-white border border-gray-200 rounded-md drop-shadow-2xl dark:border-gray-700 dark:bg-gray-900">
                <CommandBar.Input className="w-full py-3 text-gray-900 bg-transparent outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-600" />
                <CommandBar.List className="h-full max-h-[25rem] min-h-[15rem] overflow-auto p-4 text-sm text-gray-500 dark:text-gray-400">
                    <CommandBar.Empty>Empty State</CommandBar.Empty>
                    <CommandBar.Loading />
                    <CommandBar.Group
                    className="mb-4 space-y-1 last:mb-0"
                    heading="Letters"
                    >
                    <CommandBar.Item className="flex items-center justify-between gap-2 p-2 -mx-2 rounded-sm cursor-pointer text-md aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
                        a
                    </CommandBar.Item>
                    <CommandBar.Item className="flex items-center justify-between gap-2 p-2 -mx-2 rounded-sm cursor-pointer text-md aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
                        b
                    </CommandBar.Item>
                    <CommandBar.Separator />
                    <CommandBar.Item className="flex items-center justify-between gap-2 p-2 -mx-2 rounded-sm cursor-pointer text-md aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
                        c
                    </CommandBar.Item>
                    </CommandBar.Group>
                </CommandBar.List>
            </CommandBar.Container>
        </CommandBar.Dialog>
    )
}