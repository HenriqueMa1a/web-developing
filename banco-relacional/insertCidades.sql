select * from estados

insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 21)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 15)

insert into cidades (nome, area, estado_id)
values (
    'Caruaru',
    795,
    (select id from estados where sigla = 'PE')
)

insert into cidades
    (nome, area, estado_id)
values (
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla= 'CE')
)

select * from cidades


