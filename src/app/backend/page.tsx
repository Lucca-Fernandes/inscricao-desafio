import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SubscribeButton from '@/components/subscribe-button';

export default function BackendPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          📘 Desafio Backend: Banco de Dados + CRUD
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Neste desafio, seu objetivo é desenvolver uma API REST completa para um sistema de gestão educacional, aprendendo a conectar o backend a um banco de dados relacional e a implementar as operações fundamentais de CRUD (Create, Read, Update, Delete).
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
                  Você criará um Sistema de Cadastro de Alunos e Cursos. A API deverá permitir o cadastro de alunos e cursos, além de possibilitar a matrícula de um aluno em um ou mais cursos. Este projeto é focado nos conceitos essenciais de desenvolvimento backend.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Etapas do Desenvolvimento</h3>
                <ul className="list-disc space-y-4 pl-5 text-muted-foreground">
                  <li>
                    <strong>Estrutura do Banco de Dados:</strong> Comece modelando e criando as tabelas necessárias: <code>alunos</code> (com id, nome, email), <code>cursos</code> (com id, titulo), e uma tabela associativa <code>matriculas</code> para relacioná-los (com id, aluno_id, curso_id).
                  </li>
                  <li>
                    <strong>CRUD de Alunos:</strong> Implemente os endpoints da API para realizar o ciclo completo de operações com os alunos: criar, listar todos, buscar por ID, atualizar e deletar.
                  </li>
                  <li>
                    <strong>Gerenciamento de Matrículas:</strong> Crie os endpoints para matricular um aluno em um curso, listar todos os cursos de um aluno específico e listar todos os alunos de um determinado curso.
                  </li>
                  <li>
                    <strong>Regras de Negócio:</strong> Adicione lógica para validar as operações, como impedir que um aluno se matricule duas vezes no mesmo curso e garantir que alunos e cursos existam antes de criar uma matrícula. A API deve retornar códigos de erro apropriados (400, 404).
                  </li>
                  <li>
                    <strong>Organização e Finalização:</strong> Refatore seu código, organizando-o em uma estrutura de pastas clara (ex: controllers, services, routes). Finalize o projeto com uma documentação de API funcional (usando Swagger ou similar) e um arquivo README.md detalhado.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>🧱 Tecnologias</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">Linguagem e framework de sua preferência, desde que:</p>
              <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                <li>O backend seja uma API REST.</li>
                <li>Utilize um banco de dados relacional.</li>
                <li>Possua documentação dos endpoints.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>⭐ Extras (Opcionais)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Paginação simples nas listagens</li>
                <li>Ordenação por nome</li>
                <li>Soft delete</li>
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
                  <TableRow><TableCell>Banco de dados</TableCell><TableCell className="text-right">30%</TableCell></TableRow>
                  <TableRow><TableCell>CRUD funcionando</TableCell><TableCell className="text-right">40%</TableCell></TableRow>
                  <TableRow><TableCell>Organização do código</TableCell><TableCell className="text-right">20%</TableCell></TableRow>
                  <TableRow><TableCell>Entrega final</TableCell><TableCell className="text-right">10%</TableCell></TableRow>
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
                  <li>O projeto deve ser feito individualmente.</li>
                  <li>É permitido consultar documentação oficial.</li>
                  <li>Não é permitido copiar projetos prontos.</li>
                  <li>O código deve ser autoral e compreendido pelo aluno.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Entrega:</h4>
                <ul className="list-disc pl-5 text-muted-foreground text-sm">
                  <li>Repositório no GitHub.</li>
                  <li>Projeto funcionando na Web.</li>
                  <li>Documentação acessível via navegador.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <section className="mt-16 text-center">
        <h2 className="font-headline text-2xl font-bold mb-4">Pronto para o desafio?</h2>
        <SubscribeButton formUrl="https://forms.gle/wuimHR7upW4j3hax7" />
      </section>
    </div>
  );
}