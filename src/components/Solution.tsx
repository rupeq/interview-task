// src/App.tsx
import { useState } from 'react';
import { UserSearch } from './components/UserSearch';
import { Instructions } from './components/Instructions';

export const Solution = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerTop}>
            <div>
              <div style={styles.badge}>Interview Task</div>
              <h1 style={styles.title}>
                {showInstructions ? 'Инструкция' : 'Поиск пользователей'}
              </h1>
              <p style={styles.subtitle}>
                React Developer • Middle/Middle+ • 30-45 минут
              </p>
            </div>
            <button
              style={styles.toggleButton}
              onClick={() => setShowInstructions(!showInstructions)}
            >
              {showInstructions ? '👁️ Показать пример' : '📋 Показать задание'}
            </button>
          </div>
        </div>
      </header>

      <main style={styles.content}>
        {showInstructions ? <Instructions /> : <UserSearch />}
      </main>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    borderBottom: '1px solid #e5e7eb',
    padding: '2rem 1rem',
    backgroundColor: '#ffffff',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#374151',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '9999px',
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  toggleButton: {
    padding: '0.625rem 1.25rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
};