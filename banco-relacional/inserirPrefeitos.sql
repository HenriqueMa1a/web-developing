select * from cidades;

insert into prefeitos
    (nome, cidade_id)

values
    ('Rodrigo Neves', 2),
    ('Raquel Lira', 3),
    ('Zenaldo Coutinho', null);


insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null);

-- Não vai deixar
-- insert into prefeitos
--     (nome, cidade_id)
-- values
--     ('Rodrigo Pinheiro', 3);