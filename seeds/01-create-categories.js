
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
  },{
    id: 3,
    title: "Life",
    url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_153081592_970647970450075_79973.jpg"
  },{
    id: 4,
    title: "Funny",
    url: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },{
    id: 5,
    title: "Friendship",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUyq274IZsNFB6s0NePECOO1NqwRnKDJ346g&usqp=CAU"
  },{
    id: 6,
    title: "Love",
    url: "https://miro.medium.com/max/12000/0*-Q_T1f-fRp-n0JhA"
    // url: "https://media.swncdn.com/cms/BST/67912-gettyimages-817147678-kieferpix.1200w.tn.jpg"
  },{
    id: 7,
    title: "Success",
    url: "https://cdn.lifehack.org/wp-content/uploads/2020/01/road-to-success.jpeg"
  }])
};
