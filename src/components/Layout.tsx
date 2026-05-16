import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout(): JSX.Element {
  return (
    <div className="relative min-h-screen md:min-h-[110vh] bg-background text-main flex flex-col items-center selection:bg-brand selection:text-background transition-colors duration-300 overflow-x-hidden">
      {/* Subtle Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>

      <Nav />

      <main className="relative z-20 w-full max-w-2xl px-6 py-48 md:py-64">
        <Outlet />
      </main>

      <footer className="relative z-20 py-20 text-center space-y-4">
        <a
          href="https://clh.lol"
          target="_blank"
          rel="noreferrer"
          className="block text-[8px] uppercase tracking-[0.3em] text-dim/10 hover:text-brand transition-colors duration-700 font-medium"
        >
          Made by Charlie
        </a>
      </footer>
    </div>
  );
}
