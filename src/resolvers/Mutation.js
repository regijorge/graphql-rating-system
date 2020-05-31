const Mutation = {
  async addLike(parent, { url }, { db }, info) {
    const document = await db.findOneAndUpdate(url, {
        $inc: {'count': 1}
      }, {
        upsert: true,
        new: true
      }
    )
    return document
  }
}

export { Mutation as default }