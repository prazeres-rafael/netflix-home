const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.imgBanner})` }}
    >
      <img
        className="banner-title"
        src={props.imgBannerTitle}
        alt="Logo do título em destaque"
      />
      <p className="banner-sub">{props.subBanner}</p>
    </div>
  );
};

export default Banner;
