const Query = {
  like(parent, { url }, { db }, info) {
    return db.findOne({url})
  }
}

export { Query as default }