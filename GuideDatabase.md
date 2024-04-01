1. Identificar las entidades del sistema.
1. Identificar los atributos de las entidades.
1. Identificar las llaves primarias y foráneas.
1. Asignar una nomenclatura adeacuada a las entidades y sus atributos.
1. Identificar las entidades pivote del sistema.
1. Identificar los catálogos del sistema.
1. Identificar los tipos de relaciones del sistema.
1. Crear el Modelo Entidad-Relación del sistema.
1. Crear el Modelo Relacional de la base de datos del sistema.
1. Identificar los tipos de dato de los atributos de las entidades el sistema.
1. Identificar los atributos que puedan ser únicos en el sistema.
1. Identificar las reglas de negocio (Operaciones CRUD) del sistema

## Listado de Entidades

### Usuarios **(ED)**

- user_id **(PK)**
- email
- first_name
- last_name
- password_hash
- admin

### Ejercicios **(EC)**

- exercise_id **(PK)**
- body_part
- equipment
- gif_url
- name
- target
- secondary_muscles
- instructions

### Plantilla de entrenamiento **(ED)**

- template_id **(PK)**
- user_id **(FK)**
- name
- exercises

### Ejercicios

- exercise_id **(PK)**
- exercise_name **(FK)**
- sets

### Series **(ED)**

- set_id **(PK)**
- template_id **(FK)**
- exercise_name
- weight
- repetitions
- type_serie

## Relaciones

1. Un **Usuario** tiene **Plantilla** (_1 - M_).
1. Una **Plantilla** tiene **Ejercicios** (_1 - M_).
1. Una **Ejercicio** tiene **Series** (_1 - M_).
