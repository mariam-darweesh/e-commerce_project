export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 py-10 ${className}`}>
      {children}
    </div>
  );
}