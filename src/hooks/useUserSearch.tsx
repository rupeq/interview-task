// src/hooks/useUserSearch.ts
import { useState, useEffect } from 'react';
import { searchUsers, type SearchResponse } from '../backend';
import { useDebounce } from './useDebounce';

export const useUserSearch = () => {
  const [query, setQuery] = useState('');
  const [emailDomain, setEmailDomain] = useState('all');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);

  const [users, setUsers] = useState<SearchResponse['users']>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    let cancelled = false;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await searchUsers({
          query: debouncedQuery,
          emailDomain,
          status: status as 'active' | 'inactive' | 'all',
          page,
          limit: 9,
        });

        if (!cancelled) {
          setUsers(result.users);
          setTotal(result.total);
          setTotalPages(result.totalPages);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : 'Произошла ошибка при загрузке'
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, emailDomain, status, page]);

  // Сбрасываем страницу при изменении фильтров
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, emailDomain, status]);

  return {
    users,
    total,
    totalPages,
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
  };
};