import * as prismic from '@prismicio/client';

// Reemplaza con tu URL de Prismic
// Ejemplo: 'https://tu-repositorio.prismic.io/api/v2'
const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || '';

// Si tienes un token de acceso, úsalo aquí
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || '';

export function getPrismicClient() {
  const client = prismic.createClient(repositoryName, {
    accessToken,
  });

  return client;
}

