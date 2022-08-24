const db = require('../services/db');
const config = require('../config');

function getCategoryList() {
    const data = db.query(`SELECT * FROM tbl_category`,[]);
    return { data }
}

function getCategory(id) {
    const data = db.query(`SELECT * FROM tbl_category where id =? `,[id]);
    const meta = {id};
    return { data, meta }
}


function getDhammaByPage(page) {
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`SELECT * FROM tbl_dhamma order by id LIMIT ?,?`,[offset, config.listPerPage]);
    const meta = {page};
    return { data, meta }
}

function getDhammaList(category_id) {
    const data = db.query(`select * from tbl_dhamma where category_id=?`, [category_id])
    const meta = {category_id};
    return {
        data,
        meta    
    }
}

function getDhamma(id) {
    const data = db.query(`select * from tbl_dhamma where id=?`, [id])
    const meta = {id};
    return {
        data,
        meta    
    }
}

module.exports = {
    getCategoryList, getCategory, getDhammaList, getDhamma, getDhammaByPage
}