export default function SystemGrid({ variant = 'dark' }) {
  return (
    <div
      className={`system-grid system-grid--${variant}`}
      aria-hidden="true"
    />
  );
}