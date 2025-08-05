import React from 'react';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';

const posts = [
  {
    title: 'DEVCONVERGE -LATAM 2025',
    date: '2025-07-31',
    summary: 'A Oracle vai receber em sua casa as comunidades Quarkus Club , SouJava, Java Meetup SP...',
    link: 'https://www.linkedin.com/posts/luisfabriciodellamas_java-python-kotlin-activity-7355013627667460096-acjc?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'Hackathon Senac',
    date: '2025-07-28',
    summary: 'Hackathon Senac – Mural de Empreendedorismo Social Tive a oportunidade de participar de um Hackathon...',
    link: 'https://www.linkedin.com/posts/vilander-costa_hackathon-senac-tecnologia-activity-7355583779584851968-MzuF?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'ERP Summit 2025',
    date: '2025-05-25',
    summary: 'Estive presente na ERP Summit 2025...',
    link: 'https://www.linkedin.com/posts/vilander-costa_na-ultima-segunda-estive-presente-na-erp-activity-7310655493436321792-Om93?utm_source=share&utm_medium=member_desktop'
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="container my-5" style={{paddingTop: '8rem'}}>
        <h1 className="mb-4 text-center">Blog</h1>
        {posts.map((post, index) => (
          <article className="post mb-5" key={index}>
            <header>
              <h2><a href={post.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{post.title}</a></h2>
              <time dateTime={post.date} className="text-muted">{new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
            </header>
            <p>{post.summary}</p>
            <Button href={post.link} target="_blank" rel="noopener noreferrer" variant="primary">Leia mais</Button>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;