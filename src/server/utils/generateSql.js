import { valuesPlaceholder } from './queryHelpers';


const generateSqlInsert = (table, insertKeys) => {
  const placeholder = valuesPlaceholder(insertKeys);

  const insert = `INSERT INTO ${table}(${insertKeys})`;
  const values = `VALUES${placeholder} RETURNING *`;

  const insertSql = `${insert} ${values}`;
  return insertSql;
};

export default generateSqlInsert;
