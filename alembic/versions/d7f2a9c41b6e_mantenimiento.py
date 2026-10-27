"""mantenimiento: tareas, ubicaciones y última fecha de realización

Crea las tablas del control de mantenimiento y las carga con los datos
de la hoja "GestionCALAVI - Mantenimiento" (octubre 2026). Una celda
vacía en la hoja = la tarea no aplica en esa ubicación.

Revision ID: d7f2a9c41b6e
Revises: c4e8a1f2b3d5
Create Date: 2026-10-27 11:30:00

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel

revision: str = 'd7f2a9c41b6e'
down_revision: Union[str, Sequence[str], None] = 'c4e8a1f2b3d5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


# (nombre, planta) en el orden de la hoja
_LOCATIONS = [
    ('Hab. 1', 'Planta baja'), ('Hab. 2', 'Planta baja'), ('Hab. 3', 'Planta baja'),
    ('Puertas acceso y pasillo', 'Planta baja'), ('Cocina', 'Planta baja'),
    ('Comedor', 'Planta baja'), ('Hab. 5', 'Planta 1'), ('Hab. 6', 'Planta 1'),
    ('Hab. 7', 'Planta 1'), ('Hab. 8', 'Planta 1'), ('Pasillos', 'Planta 1'),
    ('Cocina-Salón', 'Planta 1'), ('Baños', 'Planta 1'), ('Terraza', 'Planta 1'),
]

# Plazo inicial: 12 meses para todas
_TASKS = ['Engrase cerraduras y mecanismos', 'Limpieza filtro Split', 'Lavado cortinas']

# (nº tarea, nº ubicación, última fecha) — índices desde 1 sobre las listas de arriba
_ITEMS = [
    (1, 1, '30-09-2024'), (1, 2, '30-09-2024'), (1, 3, '08-10-2026'),
    (1, 4, '02-04-2026'), (1, 5, '30-09-2024'), (1, 6, '30-09-2024'),
    (1, 7, '30-04-2025'), (1, 8, '23-08-2026'), (1, 9, '02-04-2026'),
    (1, 10, '01-08-2026'), (1, 11, '01-08-2026'), (1, 12, '30-09-2024'),
    (1, 13, '01-08-2026'), (1, 14, '30-09-2024'),
    (2, 1, '30-07-2024'), (2, 2, '30-07-2024'), (2, 3, '08-10-2026'),
    (2, 6, '02-04-2026'), (2, 7, '30-07-2024'), (2, 8, '23-08-2026'),
    (2, 9, '02-04-2026'), (2, 10, '01-08-2026'), (2, 12, '02-04-2026'),
    (3, 1, '30-09-2024'), (3, 2, '30-09-2024'), (3, 6, '30-09-2024'),
    (3, 7, '30-01-2026'), (3, 8, '23-08-2026'), (3, 11, '23-08-2026'),
]


def upgrade() -> None:
    op.create_table(
        'maintenancelocation',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('floor', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('sort_order', sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_table(
        'maintenancetask',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('period_months', sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_table(
        'maintenanceitem',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('task_id', sa.Integer(), nullable=False),
        sa.Column('location_id', sa.Integer(), nullable=False),
        sa.Column('last_done', sqlmodel.sql.sqltypes.AutoString(), nullable=True),
        sa.ForeignKeyConstraint(['task_id'], ['maintenancetask.id']),
        sa.ForeignKeyConstraint(['location_id'], ['maintenancelocation.id']),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('task_id', 'location_id', name='uq_maintenanceitem_task_location'),
    )
    with op.batch_alter_table('maintenanceitem', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_maintenanceitem_task_id'), ['task_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_maintenanceitem_location_id'), ['location_id'], unique=False)

    # ---- Datos iniciales ----
    bind = op.get_bind()
    loc_t = sa.table('maintenancelocation', sa.column('id', sa.Integer), sa.column('name', sa.String),
                     sa.column('floor', sa.String), sa.column('sort_order', sa.Integer))
    task_t = sa.table('maintenancetask', sa.column('id', sa.Integer), sa.column('name', sa.String),
                      sa.column('period_months', sa.Integer))
    item_t = sa.table('maintenanceitem', sa.column('task_id', sa.Integer),
                      sa.column('location_id', sa.Integer), sa.column('last_done', sa.String))

    loc_ids = {}
    for n, (name, floor) in enumerate(_LOCATIONS, start=1):
        bind.execute(loc_t.insert().values(name=name, floor=floor, sort_order=n))
        loc_ids[n] = bind.execute(sa.select(loc_t.c.id).where(loc_t.c.name == name)).scalar_one()

    task_ids = {}
    for n, name in enumerate(_TASKS, start=1):
        bind.execute(task_t.insert().values(name=name, period_months=12))
        task_ids[n] = bind.execute(sa.select(task_t.c.id).where(task_t.c.name == name)).scalar_one()

    for t, l, last_done in _ITEMS:
        bind.execute(item_t.insert().values(task_id=task_ids[t], location_id=loc_ids[l], last_done=last_done))


def downgrade() -> None:
    with op.batch_alter_table('maintenanceitem', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_maintenanceitem_location_id'))
        batch_op.drop_index(batch_op.f('ix_maintenanceitem_task_id'))
    op.drop_table('maintenanceitem')
    op.drop_table('maintenancetask')
    op.drop_table('maintenancelocation')
