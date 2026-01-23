import Logo from '../../public/logo.png';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img src={Logo.src} className="h-6" alt="Logo" />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Projeto Desenvolve. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
