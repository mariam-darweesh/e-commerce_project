export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velora. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms
          </a>
          <a href="#" className="hover:text-blue-600">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}