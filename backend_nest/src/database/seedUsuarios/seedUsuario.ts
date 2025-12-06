import { DataSource } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

export async function seedUsuarios(dataSource: DataSource) {
  const usuarioRepo = dataSource.getRepository(Usuario);

  const usuarioExistente = await usuarioRepo.findOneBy({
    correo: 'admin@example.com',
  });

  if (usuarioExistente) {
    console.log('Usuario ya existe, saltando seed.');
    return;
  }

  const usuario = usuarioRepo.create({
    nombre: 'Fernando',
    apellidoPaterno: 'Nina',
    apellidoMaterno: 'Quispe',
    correo: 'favio5449@gmail.com',
    contrasena: 'zawszeinlove3',
    ci: '14156883',
    telefono: '78852075',
    verificado: true,
  });

  await usuarioRepo.save(usuario);

  console.log('Usuario seed creado exitosamente!');
}
