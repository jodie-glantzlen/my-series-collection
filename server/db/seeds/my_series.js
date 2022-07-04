/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('series').del()
  await knex('series').insert([
    {id: 1, title: 'Breaking Bad', author: 'Vince Gilligan'},
    {id: 2, title: 'Better Call Saul', author: 'Vince Gilligan'},
    {id: 3, title: 'Naruto', author: 'Masashi Kishimoto'}
  ]);
};
