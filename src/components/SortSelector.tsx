import { Menu, MenuButton, Button, MenuList, MenuItem} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder}: Props) => {
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'},
  ]

  const currentSortOrder = sortOrders.find((order)=> order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order)=>
        <MenuItem
        key={order.value} value={order.value}
        onClick={()=>onSelectSortOrder(order.value)}
        >
          {order.label}
        </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
