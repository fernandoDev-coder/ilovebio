import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-xl text-ink-800/80">
        La página que buscas no existe o se ha movido.
      </p>
      <div className="mt-6">
        <Link className="underline" href="/">
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
}

