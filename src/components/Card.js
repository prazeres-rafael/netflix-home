import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Card = (props) => {
  const { imdb_id, title } = props;
  const [img, setImg] = useState(require("../assets/img/card-padrao.jpg"));

  console.log(img);
  useEffect(() => {
    getImg();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getImg() {
    const res = await fetch(
      `https://data-imdb1.p.rapidapi.com/movie/id/${imdb_id}/`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3f3b6c3a54msh8638430a53898abp134a43jsnaea9a46de60f",
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        },
      }
    );

    const json = await res.json();
    setImg(json[title].image_url);
  }

  return (
    <Router>
      <Link to="/" className="item">
        <img className="card-img" src={img} alt="Imagem do Card" />
      </Link>
    </Router>
  );
};

export default Card;
