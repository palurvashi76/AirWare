export function formatTemperature(value) {
  if (value == null) return '—';
  return `${Math.round(value)}°C`;
}

export function formatPollutantValue(value) {
  if (value == null) return null;
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

export function formatWindSpeed(value) {
  if (value == null) return '—';
  return `${Math.round(value)} km/h`;
}

export function formatHumidity(value) {
  if (value == null) return '—';
  return `${Math.round(value)}%`;
}

export function formatLocationName(location) {
  if (!location) return '';
  const parts = [location.name];
  if (location.admin1) parts.push(location.admin1);
  if (location.country) parts.push(location.country);
  return parts.join(', ');
}

export function formatShortLocation(location) {
  if (!location) return '';
  const parts = [location.name];
  if (location.country) parts.push(location.country);
  return parts.join(', ');
}

export function formatRelativeTime(isoString) {
  if (!isoString) return '';
  const now = Date.now();
  const date = new Date(isoString).getTime();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function formatDayLabel(dateString, index) {
  if (!dateString) return `Day ${index + 1}`;
  const date = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((date - today) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
