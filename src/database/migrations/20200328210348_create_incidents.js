
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
         table.increments();
         table.string('titulo',50).notNullable();
         table.string('descricao',150).notNullable();
         table.decimal('valor',50).notNullable();
         
         table.string('ong_id').notNullable();

         table.foreign('ong_id').references('id').inTable('ongs')
        
       })
   
 };
 
 exports.down = function(knex) {
     return knex.schema.dropTable('incidents');
   
 };
 