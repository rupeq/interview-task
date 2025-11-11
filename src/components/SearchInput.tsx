import { useState, useEffect } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setLocalValue('');
    onChange('');
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Поиск</label>
      <div style={styles.inputWrapper}>
        <span style={styles.icon}>🔍</span>
        <input
          type="text"
          value={localValue}
          onChange={handleChange}
          placeholder="Введите имя, email или компанию..."
          style={styles.input}
        />
        {localValue && (
          <button style={styles.clearButton} onClick={handleClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: '0.875rem',
    fontSize: '1rem',
    opacity: 0.5,
  },
  input: {
    width: '100%',
    padding: '0.625rem 2.5rem 0.625rem 2.5rem',
    fontSize: '0.875rem',
    color: '#111827',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    outline: 'none',
    transition: 'border-color 0.15s',
  },
  clearButton: {
    position: 'absolute',
    right: '0.75rem',
    padding: '0.25rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0.25rem',
  },
};