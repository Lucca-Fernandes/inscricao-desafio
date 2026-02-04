import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SubscribeButton from '@/components/subscribe-button';

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    hint: string;
  };
};

const findImage = (id: string) => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) {
    // Fallback for safety, though it should always be found
    return {
      src: 'https://picsum.photos/seed/default/600/400',
      alt: 'Placeholder image',
      hint: 'placeholder',
    };
  }
  return {
    src: img.imageUrl,
    alt: img.description,
    hint: img.imageHint,
  };
}

const projects: Project[] = [
  {
    id: 'frontend',
    title: 'Trilha Frontend',
    description: 'Crie uma interface de e-commerce interativa com React, consumindo uma API real e gerenciando o estado do carrinho de compras.',
    href: '/frontend',
    image: findImage('frontend'),
  },
  {
    id: 'backend',
    title: 'Trilha Backend',
    description: 'Desenvolva uma API REST para um sistema educacional, conectando a um banco de dados relacional e implementando operações CRUD.',
    href: '/backend',
    image: findImage('backend'),
  },
  {
    id: 'fullstack',
    title: 'Trilha Fullstack',
    description: 'Construa um sistema completo de gestão de tarefas com autenticação JWT, do backend ao frontend.',
    href: '/fullstack',
    image: findImage('fullstack'),
  },
  {
    id: 'data',
    title: 'Trilha de Dados',
    description: 'Transforme dados brutos de e-commerce em insights, criando um pipeline de análise e um dashboard interativo.',
    href: '/data',
    image: findImage('data'),
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center mb-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Bem-vindo ao Desafio Final
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore os desafios e escolha o projeto que mais se alinha com suas habilidades e interesses. Cada trilha foi desenhada para aprimorar suas competências em desenvolvimento de software.        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    data-ai-hint={project.image.hint}
                  />
                </div>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button asChild variant="secondary">
                  <Link href={project.href}>Ver Projeto</Link>
                </Button>
                <SubscribeButton formUrl={
                  project.id === 'frontend' ? 'https://forms.gle/rYwLi6LmNBsSQtyG9' :
                  project.id === 'backend' ? 'https://forms.gle/niqLYCFsy5w7EH838' :
                  project.id === 'fullstack' ? 'https://forms.gle/xmQyh3vCvorhHnR18' :
                  'https://forms.gle/uF3mNbLKnw5T2Zq49'
                } />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
