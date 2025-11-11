import { useState } from 'react';

export const Task = () => {
  const [activeTab, setActiveTab] = useState<'task' | 'api' | 'example'>('task');

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.badge}>Interview Task</div>
          <h1 style={styles.title}>Умный поиск с фильтрацией</h1>
          <p style={styles.subtitle}>
            React Developer • 30-45 минут
          </p>
        </div>
      </header>

      <div style={styles.tabsContainer}>
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
              ...(activeTab === 'api' ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab('example')}
          >
            Пример работы
          </button>
        </div>
      </div>

      <main style={styles.content}>
        {activeTab === 'task' && <TaskTab />}
        {activeTab === 'api' && <ApiTab />}
        {activeTab === 'example' && <ExampleTab />}
      </main>
    </div>
  );
};

const TaskTab = () => (
  <div style={styles.tabContent}>
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Описание задачи</h2>
      <p style={styles.text}>
        Необходимо реализовать компонент поиска пользователей с живой
        фильтрацией, debouncing и корректным управлением состоянием.
      </p>
    </section>

    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Требования</h2>

      <div style={styles.requirementBlock}>
        <h3 style={styles.requirementTitle}>Обязательная функциональность</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Поисковая строка с debounce (300ms)
          </li>
          <li style={styles.listItem}>
            Фильтр по домену email (gmail.com, yahoo.com, outlook.com, все)
          </li>
          <li style={styles.listItem}>
            Фильтр по статусу (active, inactive, все)
          </li>
          <li style={styles.listItem}>
            Список пользователей с карточками
          </li>
          <li style={styles.listItem}>
            Обработка состояний: loading, error, empty state
          </li>
          <li style={styles.listItem}>Счетчик найденных результатов</li>
        </ul>
      </div>

      <div style={styles.requirementBlock}>
        <h3 style={styles.requirementTitle}>Дополнительно</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Сохранение фильтров в URL query parameters
          </li>
          <li style={styles.listItem}>
            Пагинация или infinite scroll
          </li>
          <li style={styles.listItem}>
            Кеширование предыдущих запросов
          </li>
          <li style={styles.listItem}>
            Оптимизация ре-рендеров (React.memo, useMemo, useCallback)
          </li>
        </ul>
      </div>
    </section>

    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Критерии оценки</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Архитектура</h4>
          <ul style={styles.cardList}>
            <li>Разделение логики и UI</li>
            <li>Использование custom hooks</li>
            <li>Композиция компонентов</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Производительность</h4>
          <ul style={styles.cardList}>
            <li>Корректный debouncing</li>
            <li>Оптимизация рендеров</li>
            <li>Обработка race conditions</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Качество кода</h4>
          <ul style={styles.cardList}>
            <li>TypeScript types</li>
            <li>Читаемость и структура</li>
            <li>Error handling</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>React знания</h4>
          <ul style={styles.cardList}>
            <li>Правила хуков</li>
            <li>Side effects</li>
            <li>Жизненный цикл</li>
          </ul>
        </div>
      </div>
    </section>

    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Рекомендуемый план</h2>
      <ol style={styles.orderedList}>
        <li style={styles.orderedItem}>
          <strong>Базовая структура</strong> — создайте компоненты и hooks
        </li>
        <li style={styles.orderedItem}>
          <strong>Поиск</strong> — реализуйте input с debounce
        </li>
        <li style={styles.orderedItem}>
          <strong>Фильтры</strong> — добавьте dropdown и чекбоксы
        </li>
        <li style={styles.orderedItem}>
          <strong>Состояния</strong> — обработайте loading/error/empty
        </li>
        <li style={styles.orderedItem}>
          <strong>Оптимизация</strong> — улучшите производительность
        </li>
      </ol>
    </section>
  </div>
);

const ApiTab = () => (
  <div style={styles.tabContent}>
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Backend API</h2>
      <p style={styles.text}>
        Моковый бэкенд находится в <code style={styles.inlineCode}>src/backend.ts</code>
      </p>
    </section>

    <section style={styles.section}>
      <div style={styles.alert}>
        <h4 style={styles.alertTitle}>Важно</h4>
        <ul style={styles.alertList}>
          <li>API имитирует сетевую задержку 300-800ms</li>
          <li>5% запросов случайно завершаются ошибкой</li>
          <li>Необходимо учитывать race conditions</li>
        </ul>
      </div>
    </section>

    <section style={styles.section}>
      <h3 style={styles.apiMethodTitle}>searchUsers</h3>
      <p style={styles.text}>
        Основной метод для поиска и фильтрации пользователей.
      </p>

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

      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <div style={styles.tableCell}>Параметр</div>
          <div style={styles.tableCell}>Тип</div>
          <div style={styles.tableCell}>Описание</div>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.tableCell}>
            <code style={styles.inlineCode}>query</code>
          </div>
          <div style={styles.tableCell}>string</div>
          <div style={styles.tableCell}>
            Поиск по имени, email, компании
          </div>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.tableCell}>
            <code style={styles.inlineCode}>emailDomain</code>
          </div>
          <div style={styles.tableCell}>string</div>
          <div style={styles.tableCell}>
            gmail.com | yahoo.com | outlook.com | all
          </div>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.tableCell}>
            <code style={styles.inlineCode}>status</code>
          </div>
          <div style={styles.tableCell}>string</div>
          <div style={styles.tableCell}>active | inactive | all</div>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.tableCell}>
            <code style={styles.inlineCode}>page</code>
          </div>
          <div style={styles.tableCell}>number</div>
          <div style={styles.tableCell}>Номер страницы (default: 1)</div>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.tableCell}>
            <code style={styles.inlineCode}>limit</code>
          </div>
          <div style={styles.tableCell}>number</div>
          <div style={styles.tableCell}>Записей на страницу (default: 10)</div>
        </div>
      </div>

      <h4 style={styles.subTitle}>Ответ</h4>
      <div style={styles.codeBlock}>
        <pre style={styles.code}>{`{
  users: User[],
  total: number,
  page: number,
  totalPages: number
}`}</pre>
      </div>
    </section>

    <section style={styles.section}>
      <h3 style={styles.apiMethodTitle}>getEmailDomains</h3>
      <p style={styles.text}>
        Возвращает список доступных email доменов.
      </p>
      <div style={styles.codeBlock}>
        <pre style={styles.code}>{`import { getEmailDomains } from './backend';

const domains = getEmailDomains();
// ['gmail.com', 'outlook.com', 'yahoo.com']`}</pre>
      </div>
    </section>

    <section style={styles.section}>
      <h3 style={styles.apiMethodTitle}>User Type</h3>
      <div style={styles.codeBlock}>
        <pre style={styles.code}>{`interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: 'active' | 'inactive';
  company: string;
  role: string;
}`}</pre>
      </div>
    </section>
  </div>
);

const ExampleTab = () => {
  return (
    <div style={styles.tabContent}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Пример работы готового приложения</h2>
        <video src="example.mov" controls={true} style={{"width":"100%"}} />
      </section>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    borderBottom: '1px solid #e5e7eb',
    padding: '3rem 1rem',
  },
  headerContent: {
    maxWidth: '900px',
    margin: '0 auto',
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
    marginBottom: '1rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    margin: 0,
    fontSize: '1rem',
    color: '#6b7280',
    fontWeight: '400',
  },
  tabsContainer: {
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  },
  tabs: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    gap: '0.5rem',
    padding: '0 1rem',
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
    position: 'relative',
  },
  activeTab: {
    color: '#111827',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  tabContent: {},
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    margin: '0 0 1rem 0',
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.025em',
  },
  text: {
    lineHeight: '1.75',
    color: '#374151',
    margin: '0.5rem 0',
    fontSize: '1rem',
  },
  requirementBlock: {
    marginTop: '1.5rem',
  },
  requirementTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
  },
  list: {
    margin: '0.5rem 0',
    paddingLeft: '1.5rem',
    lineHeight: '1.75',
  },
  listItem: {
    marginBottom: '0.5rem',
    color: '#374151',
  },
  orderedList: {
    margin: '1rem 0',
    paddingLeft: '1.5rem',
    lineHeight: '1.75',
  },
  orderedItem: {
    marginBottom: '1rem',
    color: '#374151',
    paddingLeft: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  card: {
    padding: '1.25rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#fafafa',
  },
  cardTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  cardList: {
    margin: 0,
    paddingLeft: '1.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#6b7280',
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
    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  },
  inlineCode: {
    padding: '0.125rem 0.375rem',
    fontSize: '0.875em',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '0.25rem',
    color: '#111827',
    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  },
  apiMethodTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
  },
  subTitle: {
    margin: '1.5rem 0 0.5rem 0',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827',
  },
  table: {
    margin: '1rem 0',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr',
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr',
    borderBottom: '1px solid #e5e7eb',
  },
  tableCell: {
    padding: '0.75rem',
    fontSize: '0.875rem',
    color: '#374151',
  },
  alert: {
    padding: '1rem',
    backgroundColor: '#fef3c7',
    border: '1px solid #fcd34d',
    borderRadius: '0.5rem',
  },
  alertTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#92400e',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  alertList: {
    margin: 0,
    paddingLeft: '1.25rem',
    fontSize: '0.875rem',
    color: '#78350f',
    lineHeight: '1.6',
  },
  hintTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
  },
};