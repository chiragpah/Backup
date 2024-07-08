const cards_data = [
  {
    image_url: "url('./asseet/TV.jfif')",
    back_face_content: `<div class="content">
    <div class="heading">TV</div>
    <div class="subheading">A TV</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./asseet/food2.jfif')",
    back_face_content: `<div class="content">
    <div class="heading">Burger</div>
    <div class="subheading">with veggies</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./asseet/food3.jfif')",
    back_face_content: `<div class="content">
    <div class="heading">DOSA</div>
    
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },

];

let counter = 0;

const exec1 = () => {
  setInterval(() => {
    const front_face = document.getElementsByClassName("front_face")[0];
    const back_face = document.getElementsByClassName("back_face")[0];

    front_face.style.backgroundImage = cards_data[counter].image_url;
    back_face.innerHTML = cards_data[counter].back_face_content;

    counter = (counter + 1) % cards_data.length;
  }, 5000);
};

exec1();
