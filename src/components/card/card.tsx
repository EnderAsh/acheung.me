// SVGs are special: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties } from "react";

function SliderArrow(props: {
  right?: boolean;
  currentSlide?: number;
  slideCount?: number;
}) {
  const { right, currentSlide, slideCount, ...remainingProps } = props;
  return (
    <button
      {...remainingProps}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <ArrowLeft
        style={{
          transform: right ? "rotate(0.5turn)" : undefined,
        }}
      />
    </button>
  );
}

export function Card(props: {
  name: string;
  date: string;
  details: string;
  images: JSX.Element[];
  variant: "small-1pic" | "small-2pic" | "large";
  style?: CSSProperties;
}) {
  const { name, date, details, images, variant } = props;

  let extra = [];
  if (variant === "large") {
    var sliderSettings = {
      dots: true,
      infinite: true,
      slidesToShow: Math.min(3, images.length),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(2, images.length),
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    extra.push(
      <div className="card__carousel">
        <Slider
          {...sliderSettings}
          prevArrow={<SliderArrow />}
          nextArrow={<SliderArrow right={true} />}
        >
          {images}
        </Slider>
      </div>
    );
  } else {
    extra.push(<div className="card__img1">{images[0]}</div>);
    if (variant === "small-2pic") {
      extra.push(<div className="card__img2">{images[1]}</div>);
    }
  }

  return (
    <div className={`card card__${variant}`} style={props.style}>
      <div className="card__header">
        <h2 className="card__name">{name}</h2>
        <h3 className="card__date">{date}</h3>
      </div>
      <p className="card__details">{details}</p>
      {extra}
    </div>
  );
}
