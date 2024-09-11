import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Example() {
  return (
    <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
        <MenuItem disabled>
          <a className="block data-[disabled]:opacity-50" href="/invite-a-friend">
            Invite a friend (coming soon!)
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default Example