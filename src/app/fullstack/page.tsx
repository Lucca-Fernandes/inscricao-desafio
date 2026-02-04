import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, ListChecks } from 'lucide-react';
import SubscribeButton from '@/components/subscribe-button';


export default function FullstackPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          🚀 Desafio Fullstack: Sistema de Gestão de Tarefas
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Neste desafio, você construirá o TaskFlow, um sistema completo de gerenciamento de tarefas, integrando um backend robusto com uma interface de usuário dinâmica para uma solução ponta a ponta.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>📄 Descrição do Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-lg">Autenticação de Usuários</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        A base do sistema é a segurança. Você implementará um fluxo completo de autenticação, permitindo que usuários se cadastrem com nome, e-mail e senha. As senhas devem ser armazenadas de forma segura (usando hash). Após o login, a API gerará um token JWT para proteger as rotas, garantindo que apenas usuários autenticados possam acessar e gerenciar suas próprias tarefas.
                      </p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <ListChecks className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Gerenciamento de Tarefas (CRUD)</h3>
                   <p className="text-muted-foreground text-sm mb-2">
                     O coração do TaskFlow é o gerenciamento de tarefas. Para o usuário autenticado, você desenvolverá um CRUD completo:
                   </p>
                  <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                        <li><b>Criar:</b> Adicionar novas tarefas com título, descrição e data de conclusão.</li>
                        <li><b>Ler:</b> Listar todas as tarefas que pertencem exclusivamente ao usuário logado.</li>
                        <li><b>Atualizar:</b> Editar os detalhes de uma tarefa ou simplesmente marcar seu status como "Pendente" ou "Concluído".</li>
                        <li><b>Deletar:</b> Remover permanentemente uma tarefa do sistema.</li>
                      </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>💡 Modelagem de Dados Sugerida</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">Deverá existir uma relação de 1:N (Um Utilizador possui N Tarefas).</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Tabela: Users</h4>
                        <ul className="list-disc pl-5 text-muted-foreground text-sm">
                            <li>id: UUID ou Serial</li>
                            <li>name: String</li>
                            <li>email: String (Unique)</li>
                            <li>password_hash: String</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-2">Tabela: Tasks</h4>
                        <ul className="list-disc pl-5 text-muted-foreground text-sm">
                            <li>id: UUID ou Serial</li>
                            <li>title: String</li>
                            <li>description: Text</li>
                            <li>status: Boolean / Enum</li>
                            <li>user_id: Foreign Key (ref: Users.id)</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>🛠️ Requisitos Técnicos</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <h4 className="font-semibold mb-2">Stack Obrigatória</h4>
                     <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li><b>Frontend:</b> React.js, Vue.js ou Angular.</li>
                        <li><b>Backend:</b> Node.js (Express/NestJS) ou Python (FastAPI/Django).</li>
                        <li><b>Base de Dados:</b> Relacional (PostgreSQL) ou Não-Relacional (MongoDB).</li>
                        <li><b>Segurança:</b> Autenticação via JSON Web Token (JWT).</li>
                        <li><b>Versionamento:</b> Git (GitHub ou GitLab).</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2">Qualidade</h4>
                     <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Design Responsivo</li>
                        <li>Feedback ao Utilizador (erros/sucesso)</li>
                        <li>Persistência de Dados</li>
                         <li>Clean Code</li>
                    </ul>
                </div>
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
                        <TableRow><TableCell>Backend & API</TableCell><TableCell className="text-right">30%</TableCell></TableRow>
                        <TableRow><TableCell>Segurança & JWT</TableCell><TableCell className="text-right">25%</TableCell></TableRow>
                        <TableRow><TableCell>Frontend & UX</TableCell><TableCell className="text-right">25%</TableCell></TableRow>
                        <TableRow><TableCell>Base de Dados</TableCell><TableCell className="text-right">15%</TableCell></TableRow>
                        <TableRow><TableCell>Documentação</TableCell><TableCell className="text-right">5%</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
          </Card>

           <Card>
            <CardHeader><CardTitle>📦 Entrega</CardTitle></CardHeader>
            <CardContent>
                 <p className="text-sm text-muted-foreground">O código-fonte deve ser alojado num repositório no GitHub e o README.md deve conter:</p>
                 <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                    <li>Link para a aplicação (se houver deploy).</li>
                    <li>Variáveis de ambiente necessárias (<code>.env.example</code>).</li>
                    <li>Comandos para instalação e execução.</li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="mt-16 text-center">
        <h2 className="font-headline text-2xl font-bold mb-4">Pronto para o desafio?</h2>
        <SubscribeButton formUrl="https://forms.gle/xmQyh3vCvorhHnR18" />
      </section>
    </div>
  );
}