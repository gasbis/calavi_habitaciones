"""avisos SMS: teléfono de administrador, último aviso por contrato y cerrojo diario

Revision ID: c4e8a1f2b3d5
Revises: a359d5fc06f2
Create Date: 2026-09-26 16:30:00

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel

revision: str = 'c4e8a1f2b3d5'
down_revision: Union[str, Sequence[str], None] = 'a359d5fc06f2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    with op.batch_alter_table('adminaccount', schema=None) as batch_op:
        batch_op.add_column(sa.Column('phone', sqlmodel.sql.sqltypes.AutoString(), nullable=True))

    with op.batch_alter_table('occupancyrecord', schema=None) as batch_op:
        batch_op.add_column(sa.Column('alert_status_sent', sqlmodel.sql.sqltypes.AutoString(), nullable=True))

    op.create_table(
        'alertrun',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('key', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
        sa.Column('run_at', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
    )
    with op.batch_alter_table('alertrun', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_alertrun_key'), ['key'], unique=True)


def downgrade() -> None:
    with op.batch_alter_table('alertrun', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_alertrun_key'))
    op.drop_table('alertrun')

    with op.batch_alter_table('occupancyrecord', schema=None) as batch_op:
        batch_op.drop_column('alert_status_sent')

    with op.batch_alter_table('adminaccount', schema=None) as batch_op:
        batch_op.drop_column('phone')
