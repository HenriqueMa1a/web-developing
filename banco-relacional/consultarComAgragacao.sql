select
    regiao as 'Região',
    sum(populacao) as 'Total',
from estados
GROUP BY regiao
order by 'Total' desc

SELECT
    sum(populacao) as 'Total'
from estados

-- Retornando a média da população -> Total/(tuplas, que são os estados) -> AVG
-- SELECT
--     avg(populacao) as 'Total'
-- from estados
