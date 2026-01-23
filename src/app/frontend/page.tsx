import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from 'next/link';

export default function FrontendPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          🛍️ Desafio Frontend - Catálogo de Produtos (React)
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Desenvolva uma aplicação de e-commerce interativa e responsiva com React, focando em consumo de API, gerenciamento de estado e componentização para criar uma experiência de usuário rica e fluida.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
           <Card>
            <CardHeader>
              <CardTitle>📄 Descrição do Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">O que você vai construir?</h3>
                <p className="text-muted-foreground">
                  Você criará um portal de compras completo. A aplicação permitirá que os usuários naveguem por uma lista de produtos, filtrem por categorias, vejam detalhes de itens específicos e gerenciem um carrinho de compras. O projeto utilizará a <Link href="https://fakestoreapi.com/docs" target="_blank" className="text-primary underline">Fake Store API</Link> para simular dados de um e-commerce real, permitindo que você se concentre totalmente nas habilidades de frontend.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Funcionalidades a Implementar</h3>
                <ul className="list-disc space-y-4 pl-5 text-muted-foreground">
                  <li>
                    <strong>Estrutura e Listagem de Produtos:</strong> Configure a base do seu projeto React e crie a página inicial, que exibirá um grid responsivo de produtos. Cada item no grid deve ser um card componentizado mostrando imagem, título e preço formatado.
                  </li>
                  <li>
                    <strong>Navegação e Páginas de Detalhes:</strong> Implemente roteamento para que, ao clicar em um produto, o usuário seja redirecionado para uma página de detalhes. Esta página deve buscar e exibir informações completas sobre o item selecionado.
                  </li>
                  <li>
                    <strong>Filtro por Categorias:</strong> Adicione uma funcionalidade de filtro (como um menu ou sidebar) que permita aos usuários visualizar apenas produtos de categorias específicas (ex: "electronics", "jewelery").
                  </li>
                  <li>
                    <strong>Gerenciamento do Carrinho:</strong> Utilize uma solução de gerenciamento de estado global (como Context API ou Redux/Zustand) para implementar um carrinho de compras funcional. O usuário deve poder adicionar, remover, e alterar a quantidade de itens. O valor total deve ser calculado e exibido em tempo real.
                  </li>
                  <li>
                    <strong>Experiência do Usuário e Finalização:</strong> Melhore a UX com indicadores de loading durante as chamadas de API e tratamento de erros. Organize o código em uma arquitetura de pastas limpa (components, hooks, services). Por fim, utilize <code>localStorage</code> para persistir os dados do carrinho e crie um README.md completo.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>🧱 Tecnologias e API</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">A stack principal é React, com liberdade de escolha para estilização.</p>
                <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                    <li>React</li>
                    <li>Vite (para setup)</li>
                    <li>React Router</li>
                    <li>CSS / Styled Components / Tailwind</li>
                    <li>Fetch API / Axios</li>
                </ul>
                <div className="pt-4">
                    <h4 className="font-semibold">API de Apoio</h4>
                    <p className="text-muted-foreground text-sm">Utilizaremos a <Link href="https://fakestoreapi.com/docs" target="_blank" className="text-primary underline">Fake Store API</Link> para simular um e-commerce real.</p>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>⭐ Extras (Opcionais)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Barra de busca com debounce</li>
                <li>Animações de transição de página</li>
                <li>Dark Mode toggle</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>📝 Critérios de Avaliação</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Critério</TableHead>
                            <TableHead className="text-right">Peso</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Consumo de API & Hooks</TableCell><TableCell className="text-right">30%</TableCell></TableRow>
                        <TableRow><TableCell>Funcionalidades do Carrinho</TableCell><TableCell className="text-right">40%</TableCell></TableRow>
                        <TableRow><TableCell>Organização e Componentização</TableCell><TableCell className="text-right">20%</TableCell></TableRow>
                        <TableRow><TableCell>UX/Interface & Entrega</TableCell><TableCell className="text-right">10%</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader><CardTitle>⚠️ Regras e Entrega</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Regras Gerais:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Projeto individual.</li>
                        <li>Permitido consultar documentação oficial.</li>
                        <li>Não é permitido copiar projetos prontos.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2">Entrega:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Repositório no GitHub.</li>
                        <li>Projeto funcionando localmente.</li>
                        <li>Documentação acessível via navegador.</li>
                    </ul>
                </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}