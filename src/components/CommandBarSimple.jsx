import { CommandBar, useCommandBar } from '@beskar-labs/command-bar';

export default function CommandMenu() {
  const commandBar = useCommandBar();
  return (
    <CommandBar.Dialog className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm dark:bg-gray-800/80">
      <CommandBar.Container className="w-full max-w-xl rounded-md border border-gray-200 bg-white drop-shadow-2xl transition-transform dark:border-gray-700 dark:bg-gray-900">
        <CommandBar.Input className="w-full bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-600" />
        <CommandBar.List className="h-full max-h-[25rem] min-h-[15rem] overflow-auto p-4 text-sm text-gray-500 dark:text-gray-400">
          <CommandBar.Empty>Empty State</CommandBar.Empty>
          <CommandBar.Loading />
          <CommandBar.Group
            className="mb-4 space-y-1 last:mb-0"
            heading="Letters"
          >
            <CommandBar.Item className="text-md -mx-2 flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
              a
            </CommandBar.Item>
            <CommandBar.Item className="text-md -mx-2 flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
              b
            </CommandBar.Item>
            <CommandBar.Separator />
            <CommandBar.Item className="text-md -mx-2 flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800">
              c
            </CommandBar.Item>
          </CommandBar.Group>
        </CommandBar.List>
      </CommandBar.Container>
    </CommandBar.Dialog>
  );
}
