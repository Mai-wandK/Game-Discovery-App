import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";


interface Props{
  onSearch: (searchText: string) => void;

}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);

    }}
    >
      <InputGroup>
        <InputLeftElement>
        <CiSearch />
        </InputLeftElement>
        <Input ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={'filled'}
        />
      </InputGroup>
    </form>

  )
}

export default SearchInput
