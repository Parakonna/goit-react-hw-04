import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (searchValue === "") {
        toast.error("Please enter a search term!");
        return;
    }
        onSubmit(searchValue);
        setSearchValue("");
    }
  return (
    <header>
  <form onSubmit={handleSubmit}>
              <input
                  onChange={(ev) => setSearchValue(ev.target.value)}
      type="text"
      autoComplete="off"
      autoFocus
                  placeholder="Search images and photos"
                  value={searchValue}
    />
    <button type="submit">Search</button>
          </form>
          <Toaster toastOptions={{
    position: 'top-center',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
</header>
  )
}

export default SearchBar