export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style, display: "none", background: "green" }}
    onClick={onClick}></div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style, display: "none", background: "green" }}
    onClick={onClick}></div>
  );
}


export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };