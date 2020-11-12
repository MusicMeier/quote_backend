
exports.seed = async knex => {
  await knex('categories').del()
  await knex('categories').insert([{
    title: "Inspirational",
    url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_615524918_379849.jpg"
  },{
    title: "Motivational",
    url: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F982740466%2F960x0.jpg%3Ffit%3Dscale"
  },{
    title: "Life",
    url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_153081592_970647970450075_79973.jpg"
  },{
    title: "Funny",
    url: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },{
    title: "Friendship",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUyq274IZsNFB6s0NePECOO1NqwRnKDJ346g&usqp=CAU"
  },{
    title: "Love",
    url: "https://media.swncdn.com/cms/BST/67912-gettyimages-817147678-kieferpix.1200w.tn.jpg"
  },{
    title: "Success",
    url: "https://cdn.lifehack.org/wp-content/uploads/2020/01/road-to-success.jpeg"
  }])
};
