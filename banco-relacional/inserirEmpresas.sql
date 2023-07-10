alter table empresas modify cnpj VARCHAR(14);

insert into empresas
(nome, cnpj)
values
('Bradesco', 11111111111111),
('Vale', 22222222222222),
('Cielo', 33333333333333);

DESC empresas;
DESC prefeitos;

insert into empresas_unidades
(empresa_id, cidade_id, sede)
values
(1, 1, 1),
(1, 2, 0),
(2, 1, 0),
(2, 2, 1);