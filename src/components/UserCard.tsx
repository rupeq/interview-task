import type { User } from '../backend';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={user.avatar} alt={user.name} style={styles.avatar} />
        <div style={styles.info}>
          <h3 style={styles.name}>{user.name}</h3>
          <p style={styles.role}>{user.role}</p>
        </div>
        <span
          style={{
            ...styles.status,
            ...(user.status === 'active'
              ? styles.statusActive
              : styles.statusInactive),
          }}
        >
          {user.status === 'active' ? '●' : '○'}
        </span>
      </div>

      <div style={styles.details}>
        <div style={styles.detail}>
          <span style={styles.detailLabel}>Email</span>
          <span style={styles.detailValue}>{user.email}</span>
        </div>
        <div style={styles.detail}>
          <span style={styles.detailLabel}>Компания</span>
          <span style={styles.detailValue}>{user.company}</span>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    padding: '1.25rem',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    transition: 'box-shadow 0.15s',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #e5e7eb',
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    margin: '0 0 0.25rem 0',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
  },
  role: {
    margin: 0,
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  status: {
    fontSize: '1.25rem',
  },
  statusActive: {
    color: '#10b981',
  },
  statusInactive: {
    color: '#9ca3af',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e5e7eb',
  },
  detail: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
  },
  detailLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  detailValue: {
    fontSize: '0.75rem',
    color: '#111827',
    fontWeight: '500',
    textAlign: 'right',
  },
};