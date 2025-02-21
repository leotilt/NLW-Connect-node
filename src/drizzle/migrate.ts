import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { db } from './client'

async function runMigrations() {
  console.log('Iniciando migrações...')
  
  try {
    await migrate(db, {
      migrationsFolder: 'dist/drizzle/migrations'
    })
    
    console.log('Migrações concluídas com sucesso!')
    process.exit(0)
  } catch (error) {
    console.error('Erro ao executar migrações:', error)
    process.exit(1)
  }
}

runMigrations() 