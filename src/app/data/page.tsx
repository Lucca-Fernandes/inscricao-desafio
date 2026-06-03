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

export default function DataPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          📊 Desafio Data Analytics - InsightFlow
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Assuma o papel de um analista de dados e transforme um conjunto de dados brutos de e-commerce em insights de negócio acionáveis, realizando um ciclo completo de análise de dados.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
           <Card>
            <CardHeader>
              <CardTitle>📄 Descrição do Projeto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Sua Missão Analítica</h3>
                <p className="text-muted-foreground">
                  Como analista da InsightFlow, você recebeu um conjunto de dados de vendas de uma plataforma de e-commerce. Seu objetivo é explorar esses dados para responder a perguntas de negócio estratégicas, como: Qual o perfil de consumo e segmentação dos clientes? Quais produtos ou categorias têm a maior tendência de crescimento? É possível prever o volume de vendas para o próximo mês?
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Ciclo de Análise de Dados</h3>
                <ul className="list-disc space-y-4 pl-5 text-muted-foreground">
                  <li>
                    <strong>Ingestão e ETL:</strong> O primeiro passo é preparar os dados. Você deverá tratar valores nulos e duplicados, padronizar formatos e carregar o dataset limpo em um banco de dados (SQLite ou PostgreSQL).
                  </li>
                  <li>
                    <strong>Análise Exploratória (EDA):</strong> Com os dados prontos, use estatísticas descritivas e consultas SQL complexas para extrair métricas e entender o comportamento dos dados. Analise correlações, identifique outliers e formule hipóteses.
                  </li>
                  <li>
                    <strong>Visualização e Dashboard:</strong> Crie um dashboard interativo (em Power BI, Tableau ou com bibliotecas Python) para comunicar seus achados. O painel deve incluir KPIs importantes, gráficos de séries temporais e filtros dinâmicos.
                  </li>
                  <li>
                    <strong>Storytelling e Modelo Preditivo:</strong> Implemente um modelo simples de regressão para prever vendas futuras. Por fim, construa uma narrativa (storytelling) documentando seus insights, a metodologia utilizada e as conclusões do projeto em um README detalhado.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
           <Card>
            <CardHeader><CardTitle>📦 Geração e Entrega dos Dados</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Geração de Dados:</h4>
                    <p className="text-muted-foreground text-sm">
                       Crie um arquivo CSV (ex: <code>ecom_data.csv</code>) com no mínimo 5.000 linhas, contendo colunas como <code>ID_Transacao</code>, <code>Data_Venda</code>, <code>ID_Cliente</code>, <code>Nome_Produto</code>, <code>Categoria_Produto</code>, <code>Valor_Unitario</code>, <code>Quantidade</code>, etc.
                    </p>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2">Instruções de Entrega:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Repositório no GitHub/GitLab com scripts, notebooks e o dataset.</li>
                        <li>Arquivo <code>requirements.txt</code> com as dependências.</li>
                        <li>Link público ou arquivo do Dashboard interativo.</li>
                        <li>README explicativo com a metodologia utilizada.</li>
                    </ul>
                </div>
            </CardContent>
          </Card>

        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>🛠️ Requisitos Técnicos</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Componente</TableHead><TableHead>Requisito</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Linguagem</TableCell><TableCell>Python</TableCell></TableRow>
                        <TableRow><TableCell>Bibliotecas de Análise</TableCell><TableCell>Pandas, NumPy</TableCell></TableRow>
                        <TableRow><TableCell>Bibliotecas de Visualização</TableCell><TableCell>Matplotlib/Seaborn ou Plotly</TableCell></TableRow>
                        <TableRow><TableCell>Banco de Dados</TableCell><TableCell>SQLite ou PostgreSQL</TableCell></TableRow>
                        <TableRow><TableCell>Ferramenta de BI</TableCell><TableCell>Power BI, Tableau ou Streamlit/Dash</TableCell></TableRow>
                        <TableRow><TableCell>Versionamento</TableCell><TableCell>Git (GitHub/GitLab)</TableCell></TableRow>
                    </TableBody>
                </Table>
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
                        <TableRow><TableCell>Qualidade do ETL</TableCell><TableCell className="text-right">30%</TableCell></TableRow>
                        <TableRow><TableCell>Análise de Dados</TableCell><TableCell className="text-right">35%</TableCell></TableRow>
                        <TableRow><TableCell>Visualização</TableCell><TableCell className="text-right">25%</TableCell></TableRow>
                        <TableRow><TableCell>Documentação</TableCell><TableCell className="text-right">10%</TableCell></TableRow>
                    </TableBody>
                </Table>
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