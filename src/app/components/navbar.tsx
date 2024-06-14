import Link from 'next/link';

const navItems = {
  '/resume': {
    name: '/resume',
  },
  '/contact': {
    name: '/contact',
  },
  '/snips': {
    name: '/snips',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="layout flex h-14 items-center justify-between"
          id="nav"
        >
          <Link
            key='/'
            href='/'
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 text-xl"
          >
            ajfuto.com
          </Link>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}