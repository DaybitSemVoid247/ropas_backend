import { DataSource } from 'typeorm';
import { CategoriaProducto } from '../../productos/productosEntities/categoriaProducto.entity';
import { SubcategoriaProducto } from '../../productos/productosEntities/subcategoriaProductos.entity';

export async function subcategoriaSeed(dataSource: DataSource) {
  const categoriaRepo = dataSource.getRepository(CategoriaProducto);
  const subcategoriaRepo = dataSource.getRepository(SubcategoriaProducto);

  const hombre = await categoriaRepo.findOne({ where: { nombre: 'Hombre' } });
  const mujer = await categoriaRepo.findOne({ where: { nombre: 'Mujer' } });

  if (!hombre || !mujer) {
    console.log('Las categorías principales no están creadas.');
    return;
  }

  const subcategorias = [
    { nombre: 'Hombre', descripcion: '', categoria: hombre },
    { nombre: 'Mujer', descripcion: '', categoria: mujer },
  ];

  for (const sub of subcategorias) {
    const existe = await subcategoriaRepo.findOne({
      where: { nombre: sub.nombre },
    });

    if (!existe) {
      await subcategoriaRepo.save(
        subcategoriaRepo.create({
          nombre: sub.nombre,
          descripcion: sub.descripcion,
          categoria: sub.categoria,
          activo: true,
        }),
      );
    }
  }

  console.log('Subcategorías creadas correctamente');
  const lista = await subcategoriaRepo.find({ relations: ['categoria'] });
  console.log('Lista final de subcategorías:', lista);
}
