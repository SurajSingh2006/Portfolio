export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 mt-20 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 text-center text-foreground/60">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} John Doe. Designed with a futuristic anti-gravity aesthetic.
        </p>
      </div>
    </footer>
  );
}
