const db = require('../services/db');
const config = require('../config');

// page = 1
function getList() {
    //   const offset = (page - 1) * config.listPerPage;
    // SELECT * FROM tbl_category LIMIT ?,?`, [offset, config.listPerPage]
    const data = db.query(`SELECT * FROM tbl_category`,[]);
    //   const meta = {page};

    //   return {
    //     data,
    //     meta
    //   }

    return { data }
}

function getDhammaList(category_id) {
    const data = db.query(`select * from tbl_dhamma where category_id=?`, [category_id])
    const meta = {category_id};
    return {
        data,
        meta    
    }
}

module.exports = {
    getList, getDhammaList
}