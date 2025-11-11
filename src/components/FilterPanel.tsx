import { getEmailDomains } from '../backend';

interface FilterPanelProps {
  emailDomain: string;
  onEmailDomainChange: (domain: string) => void;
  status: string;
  onStatusChange: (status: string) => void;
}

export const FilterPanel = ({
                              emailDomain,
                              onEmailDomainChange,
                              status,
                              onStatusChange,
                            }: FilterPanelProps) => {
  const domains = getEmailDomains();

  return (
    <div style={styles.container}>
      <div style={styles.filter}>
        <label style={styles.label}>Email домен</label>
        <select
          value={emailDomain}
          onChange={(e) => onEmailDomainChange(e.target.value)}
          style={styles.select}
        >
          <option value="all">Все</option>
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.filter}>
        <label style={styles.label}>Статус</label>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="all"
              checked={status === 'all'}
              onChange={(e) => onStatusChange(e.target.value)}
              style={styles.radio}
            />
            <span>Все</span>
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={(e) => onStatusChange(e.target.value)}
              style={styles.radio}
            />
            <span>Активные</span>
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={(e) => onStatusChange(e.target.value)}
              style={styles.radio}
            />
            <span>Неактивные</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
  },
  filter: {},
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  },
  select: {
    width: '100%',
    padding: '0.625rem 0.75rem',
    fontSize: '0.875rem',
    color: '#111827',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    outline: 'none',
    cursor: 'pointer',
  },
  radioGroup: {
    display: 'flex',
    gap: '1rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#374151',
    cursor: 'pointer',
  },
  radio: {
    cursor: 'pointer',
  },
};