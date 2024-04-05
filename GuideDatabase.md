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

### users **(ED)**

- user_id **(PK)**
- email
- first_name
- last_name
- password_hash
- admin

### exercises **(EC)**

- exercise_id **(PK)**
- body_part
- equipment
- gif_url
- name
- target
- secondary_muscles
- instructions

### workout template **(ED)**

- template_id **(PK)**
- user_id **(FK)**
- name

### sets **(ED)**

- set_id **(PK)**
- template_id **(FK)**
- exercise_id **(FK)**
- weight
- repetitions
- type_set


### records **(ED)**

- record_id **(PK)**
- template_name
- user_id **(FK)**
- sets
- duration

## Relaciones

1. Un **Usuario** tiene **Plantillas** (_1 - M_).
1. Una **Plantilla** tiene **Series** (_1 - M_).
1. Una **Serie** tiene **Ejercicio** (_1 - M_).
1. Un **Usuario** tiene **Registros** (_1 - M_).
