import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-10 brutalist-border border-l-0 border-r-0 border-t-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            ALEXANDRE <span className="brutalist-accent">FERRARI</span>
          </h1>
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-8">
          <Link href="#about" className="font-mono text-lg hover:brutalist-accent uppercase hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#work" className="font-mono text-lg hover:brutalist-accent uppercase hover:underline underline-offset-4">
            Work
          </Link>
          <Link href="#vision" className="font-mono text-lg hover:brutalist-accent uppercase hover:underline underline-offset-4">
            Vision
          </Link>
          <Link href="#contact" className="font-mono text-lg hover:brutalist-accent uppercase hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 