export default function PageContainer({ children }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      {children}
    </div>
  );
}