import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const links = [
  { href: '/settings', label: 'Settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
]

function Example() {
  return (
    <Menu>
      <MenuButton className="data-[active]:bg-blue-200">My account</MenuButton>
      <MenuItems anchor="bottom">
        {links.map((link) => (
          <MenuItem key={link.href}>
            <div className="block data-[focus]:bg-blue-100">
              <a href={link.href}>{link.label}</a>
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

export default Example