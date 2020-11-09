
exports.seed = async knex => {
  await knex('categories').del()
  await knex('categories').insert([{
    id: 1,
    title: "Inspirational",
    url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_615524918_379849.jpg"
  },{
    id: 2,
    title: "Motivational",
    url: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F982740466%2F960x0.jpg%3Ffit%3Dscale"
  }])
};
