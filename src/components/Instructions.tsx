import { useState } from 'react';

export const Instructions = () => {
  const [activeTab, setActiveTab] = useState<'task' | 'api' | 'hints'>('task');

  return (
    <div>
      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'task' ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab('task')}
        >
          Задание
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'api' ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab('api')}
        >
          API Reference
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'hints' ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab('hints')}
        >
          Подсказки
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === 'task' && <TaskTab />}
        {activeTab === 'api' && <ApiTab />}
        {activeTab === 'hints' && <HintsTab />}
      </div>
    </div>
  );
};

const TaskTab = () => (
  <div>
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Описание задачи</h2>
      <p style={styles.text}>
        Необходимо реализовать компонент поиска пользователей с живой
        фильтрацией, debouncing и корректным управлением состоянием.
      </p>
    </section>

    <section style={styles.section}>
      <h3 style={styles.subTitle}>Обязательная функциональность</h3>
      <ul style={styles.list}>
        <li>Поисковая строка с debounce (300ms)</li>
        <li>Фильтр по домену email</li>
        <li>Фильтр по статусу</li>
        <li>Список пользователей с карточками</li>
        <li>Обработка состояний: loading, error, empty</li>
        <li>Счетчик результатов</li>
      </ul>
    </section>

    <section style={styles.section}>
      <h3 style={styles.subTitle}>Дополнительно</h3>
      <ul style={styles.list}>
        <li>URL query parameters</li>
        <li>Pagination</li>
        <li>Кеширование</li>
        <li>Оптимизация ре-рендеров</li>
      </ul>
    </section>
  </div>
);

const ApiTab = () => (
  <div>
    <section style={styles.section}>
      <h3 style={styles.subTitle}>searchUsers(params)</h3>
      <div style={styles.codeBlock}>
        <pre style={styles.code}>{`import { searchUsers } from './backend';

const result = await searchUsers({
  query: 'александр',
  emailDomain: 'gmail.com',
  status: 'active',
  page: 1,
  limit: 10
});`}</pre>
      </div>
    </section>
  </div>
);

const HintsTab = () => (
  <div>
    <section style={styles.section}>
      <h3 style={styles.subTitle}>Debouncing</h3>
      <div style={styles.codeBlock}>
        <pre style={styles.code}>{`useEffect(() => {
  const timer = setTimeout(() => {
    // fetch data
  }, 300);
  return () => clearTimeout(timer);
}, [searchQuery]);`}</pre>
      </div>
    </section>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '2rem',
  },
  tab: {
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  activeTab: {
    color: '#111827',
    borderBottomColor: '#111827',
  },
  content: {},
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    margin: '0 0 1rem 0',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
  },
  subTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
  },
  text: {
    lineHeight: '1.75',
    color: '#374151',
    margin: '0.5rem 0',
  },
  list: {
    margin: '0.5rem 0',
    paddingLeft: '1.5rem',
    lineHeight: '1.75',
    color: '#374151',
  },
  codeBlock: {
    margin: '1rem 0',
    padding: '1rem',
    backgroundColor: '#fafafa',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    overflow: 'auto',
  },
  code: {
    margin: 0,
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#111827',
    fontFamily: 'monospace',
  },
};