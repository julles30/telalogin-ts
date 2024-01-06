const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Conexão bem-sucedida!');
    
    // Tente buscar todos os usuários para testar a conexão
    const users = await prisma.movies.findMany();
    console.log(`Encontrados ${users.length} usuários no banco de dados.`);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
