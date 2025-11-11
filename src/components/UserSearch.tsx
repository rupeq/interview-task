import { SearchInput } from './SearchInput';
import { FilterPanel } from './FilterPanel';
import { UserList } from './UserList';
import { useUserSearch } from '../hooks/useUserSearch';

export const UserSearch = () => {
  const {
    users,
    total,
    loading,
    error,
    query,
    setQuery,
    emailDomain,
    setEmailDomain,
    status,
    setStatus,
    page,
    setPage,
    totalPages,
  } = useUserSearch();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SearchInput value={query} onChange={setQuery} />
        <FilterPanel
          emailDomain={emailDomain}
          onEmailDomainChange={setEmailDomain}
          status={status}
          onStatusChange={setStatus}
        />
      </div>

      {loading && <LoadingState />}
      {error && <ErrorState error={error} />}
      {!loading && !error && users.length === 0 && <EmptyState />}
      {!loading && !error && users.length > 0 && (
        <>
          <ResultsCounter total={total} />
          <UserList users={users} />
          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};

const LoadingState = () => (
  <div style={styles.state}>
    <div style={styles.spinner}></div>
    <p style={styles.stateText}>Загрузка...</p>
  </div>
);

const ErrorState = ({ error }: { error: string }) => (
  <div style={styles.errorContainer}>
    <p style={styles.errorText}>⚠️ {error}</p>
  </div>
);

const EmptyState = () => (
  <div style={styles.state}>
    <p style={styles.stateText}>Пользователи не найдены</p>
    <p style={styles.stateSubtext}>Попробуйте изменить параметры поиска</p>
  </div>
);

const ResultsCounter = ({ total }: { total: number }) => (
  <div style={styles.counter}>
    Найдено: <strong>{total}</strong> {getPlural(total)}
  </div>
);

const Pagination = ({
                      page,
                      totalPages,
                      onPageChange,
                    }: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div style={styles.pagination}>
    <button
      style={{
        ...styles.paginationButton,
        ...(page === 1 ? styles.paginationButtonDisabled : {}),
      }}
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
    >
      ← Назад
    </button>
    <span style={styles.paginationText}>
      Страница {page} из {totalPages}
    </span>
    <button
      style={{
        ...styles.paginationButton,
        ...(page === totalPages ? styles.paginationButtonDisabled : {}),
      }}
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
    >
      Вперёд →
    </button>
  </div>
);

function getPlural(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'пользователей';
  }
  if (lastDigit === 1) {
    return 'пользователь';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'пользователя';
  }
  return 'пользователей';
}

const styles: Record<string, React.CSSProperties> = {
  container: {},
  header: {
    marginBottom: '2rem',
  },
  state: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  stateText: {
    fontSize: '1rem',
    color: '#6b7280',
    margin: '0.5rem 0',
  },
  stateSubtext: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    margin: '0.25rem 0',
  },
  spinner: {
    width: '40px',
    height: '40px',
    margin: '0 auto 1rem',
    border: '3px solid #e5e7eb',
    borderTop: '3px solid #111827',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  errorContainer: {
    padding: '1rem',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
  },
  errorText: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#991b1b',
  },
  counter: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '2rem',
    padding: '1rem 0',
  },
  paginationButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  paginationButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  paginationText: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
};