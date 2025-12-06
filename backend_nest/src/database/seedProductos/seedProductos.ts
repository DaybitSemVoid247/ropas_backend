import { DataSource } from 'typeorm';
import { Producto } from '../../productos/productosEntities/producto.entity';
import { SubcategoriaProducto } from '../../productos/productosEntities/subcategoriaProductos.entity';

export async function productoSeed(dataSource: DataSource) {
  const productoRepo = dataSource.getRepository(Producto);
  const subcategoriaRepo = dataSource.getRepository(SubcategoriaProducto);

  const hombre = await subcategoriaRepo.findOne({
    where: { nombre: 'hombre' },
  });
  const mujer = await subcategoriaRepo.findOne({ where: { nombre: 'mujer' } });

  if (!hombre || !mujer) {
    console.log('Las subcategorías necesarias no están creadas.');
    return;
  }

  const productos = [
    {
      nombre: 'Camisa Casual',
      descripcion: 'Camisa de algodón para uso diario',
      precio: 10,
      disponibilidad: 50,
      subcategoria: hombre,
      activo: true,
      imagen: '/uploads/productos/camisacasual.jpg',
    },
    {
      nombre: 'Jeans Clásico',
      descripcion: 'Pantalones vaqueros de corte recto',
      precio: 15,
      disponibilidad: 50,
      subcategoria: hombre,
      activo: true,
      imagen: '/uploads/productos/pantalon.jpg',
    },
    {
      nombre: 'Blusa Elegante',
      descripcion: 'Blusa de seda para ocasiones especiales',
      precio: 12,
      disponibilidad: 30,
      subcategoria: mujer,
      activo: true,
      imagen: '/uploads/productos/blusa.jpg',
    },
  ];

  for (const prod of productos) {
    const existe = await productoRepo.findOne({
      where: { nombre: prod.nombre },
    });

    if (!existe) {
      await productoRepo.save(productoRepo.create(prod));
    }
  }

  console.log('✔ Productos creados correctamente');
}
