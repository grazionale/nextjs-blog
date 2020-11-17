import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <strong>Engenheiro de Software</strong> graduado pela Universidade
          Tecnológica Federal do Paraná. <br />
          <br />
          Amante do <strong>desenvolvimento web</strong>, atualmente atuo como
          <strong>tech lead desenvolvedor full stack</strong>, participando da
          concepção e construção de novos produtos de software, buscando unir
          tecnologia com entrega de valor. <br />
          <br />
          Em minha trajetória, tive a oportunidade de trabalhar com diversas
          tecnologias, empresas e clientes. Construindo softwares para setores
          como varejo, fabril, transporte e financeiro. <br />
          <br />
          Abaixo segue algumas das tecnologias que mais tenho experiência:
          <br />
          <br />
          <strong>Backend:</strong>
          <ul>
            <li>.Net Framework - NodeJs (NestJs)</li>
            <li>.Net Core</li>
            <li>Java (Spring Boot)</li>
            <li>PHP</li>
          </ul>
          <strong>Frontend:</strong>
          <ul>
            <li>ReactJs</li>
            <li>JavaScript/TypeScript</li>
            <li>AngularJs</li>
            <li>Angular 7</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
          <strong>Mobile:</strong>
          <ul>
            <li>React Native</li>
            <li>Ionic</li>
          </ul>
          <strong>Banco de Dados:</strong>
          <ul>
            <li>SQLServer</li>
            <li>Postgres</li>
            <li>MySql</li>
            <li>Oracle</li>
            <li>MongoDb</li>
          </ul>
          <strong>Ferramentas, metodologias e outras tecnologias:</strong>
          <ul>
            <li>WordPress</li>
            <li>Magento</li>
            <li>Git</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Jest</li>
            <li>RabbitMq</li>
            <li>Redis</li>
            <li>AWS</li>
            <li>Scrum</li>
            <li>Jira</li>
            <li>Microsoft Application Insights</li>
          </ul>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experiência</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, start_date, end_date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={start_date} />
                  {` - `}
                  {end_date ? (
                    <Date dateString={end_date}></Date>
                  ) : (
                    <span>Atualmente</span>
                  )}
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
