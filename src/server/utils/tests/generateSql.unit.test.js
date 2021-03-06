import generateSqlInsert from '../generateSql';

describe('generateSqlInsert', () => {
  it('should make sql insert text w/ 1 value', () => {
    const key = 'email';
    const table = 'test_table'
    const sql = `INSERT INTO ${table}(${key}) VALUES($1) RETURNING *`
    expect(generateSqlInsert(table, key)).toBe(sql);
  })
  it('should make sql insert text w/ multiple value', () => {
    const key = 'email,username,password';
    const table = 'test_table'
    const insert = `INSERT INTO ${table}(${key})`;
    const values = `VALUES($1,$2,$3) RETURNING *`;
    const sql = `${insert} ${values}`
    expect(generateSqlInsert(table, key)).toBe(sql);
  })
})
