export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style, display: "none"}}
    onClick={onClick}></div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style, display: "none"}}
    onClick={onClick}></div>
  );
}

export const settingsImage = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  slidesToShow: 2.9,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1.9,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 0.9,
        slidesToScroll: 1,
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: "-20px",
        slidesToShow: 1,
        slidesToScroll: 1,
       
      }
    }
  ]
};


export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [ 
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };