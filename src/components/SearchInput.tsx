import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store.ts';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(state => state.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search...'
          variant={'filled'}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
