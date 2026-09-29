import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorState({ title, message, onRetry }) {
  return (
    <div className="error-state" role="alert">
      <AlertCircle size={20} className="error-state-icon" aria-hidden="true" />
      <div className="error-state-content">
        <p className="error-state-title">{title || 'Something went wrong'}</p>
        {message && <p className="error-state-message">{message}</p>}
      </div>
      {onRetry && (
        <button className="error-state-retry" onClick={onRetry} aria-label="Try again">
          <RefreshCw size={14} aria-hidden="true" />
          Try again
        </button>
      )}
    </div>
  );
}
