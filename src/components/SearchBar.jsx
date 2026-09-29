import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      setValidationError('Enter a city or region to search.');
      return;
    }
    setValidationError('');
    onSearch(trimmed);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label htmlFor="city-input" className="search-bar-label">Location</label>
      <div className="search-bar-row">
        <div className="search-bar-input-wrap">
          <Search size={16} className="search-bar-icon" aria-hidden="true" />
          <input
            id="city-input"
            type="text"
            className="search-bar-input"
            placeholder="Search city or region…"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (validationError) setValidationError('');
            }}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button
          type="submit"
          className="search-bar-button"
          disabled={loading}
        >
          {loading ? 'Searching…' : 'Search'}
        </button>
      </div>
      {validationError && (
        <p className="search-bar-error" role="alert">{validationError}</p>
      )}
    </form>
  );
}
