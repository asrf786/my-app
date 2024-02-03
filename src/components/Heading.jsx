import React from "react";

function Heading() {
  return (
    <div className="heading">
      <h1>Note keeper</h1>
    </div>
  );
}

export default Heading;

//
// import React from "react";

// let greeting = "";
// let imgSrc = "";
// const randomNumber = Math.floor(Math.random() * 24 + 1);
// const customStyle = {
//   color: "",
//   borderBottom: "5px solid Black",
// };

// if (randomNumber < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "Black";
//   imgSrc =
//     "https://miro.medium.com/v2/resize:fit:1080/1*_og5FpnbzGxkTJI1iGDzBg.jpeg";
// } else if (randomNumber < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "Orange";
//   imgSrc =
//     "https://assets-global.website-files.com/61fc0c2112cbac7ae9d13e0a/620ebb326dc6315d3bab7c72_6209fffba73003441322fe3f_tired-woman-sleeping-while-holding-a-cup-of-coffee.jpeg";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "Blue";
//   imgSrc =
//     "https://morninglif.com/wp-content/uploads/2023/06/Good-Nature-image-01.jpeg";
// }

// function Heading() {
//   return <h1 style={customStyle}>{greeting}</h1>;
// }
// export default Heading;
// export { randomNumber, imgSrc };
