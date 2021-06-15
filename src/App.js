import { StrictMode } from "react";
import { render } from "react-dom";
import Header from "./features/Header";
import Banner from "./features/Banner";
import Popular from "./features/Popular";

const App = () => {
  const imgBanner = require("./assets/img/banner-stranger.jpg");
  const imgBannerTitle = require("./assets/img/stranger-things-logo.png");
  const subBanner =
    "Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério.";

  return (
    <div>
      <Header />
      <Banner
        imgBanner={imgBanner}
        imgBannerTitle={imgBannerTitle}
        subBanner={subBanner}
      />
      <Popular />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
