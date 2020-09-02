const appServices = {
    getAllPosts(knex, array){
        return knex
        .select('*')
        .from('posts')
        .where('userID', array)
    },
    insertPost(knex, post){
        return knex
        .insert(post)
        .into('posts')
        .returning('*')
    }
}

module.exports = appServices