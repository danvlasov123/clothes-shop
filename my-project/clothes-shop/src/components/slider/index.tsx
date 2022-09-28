import "./index.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowNextIcon, ArrowPrevIcon } from "../icons";
const Slider = ({ children }: any) => {
  const CusttomButtons = (props: any) => {
    const { carouselState, next, previous } = props;

    return (
      <div className="top-[-10px] absolute right-2 flex">
        <button
          disabled={carouselState.currentSlide === 0 ? true : false}
          className="w-12 h-12 rounded-full bg-slate-200 ease-linear flex justify-center items-center hover:bg-slate-400 disabled:bg-slate-100 disabled:text-slate-300"
          onClick={previous}
        >
          <ArrowPrevIcon />
        </button>
        <button
          disabled={
            carouselState.slidesToShow + carouselState.currentSlide ===
            carouselState.totalItems
              ? true
              : false
          }
          className="w-12 h-12 ml-2 rounded-full bg-slate-200 ease-linear flex justify-center items-center hover:bg-slate-400 disabled:bg-slate-100 disabled:text-slate-300"
          onClick={next}
        >
          <ArrowNextIcon />
        </button>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel customButtonGroup={<CusttomButtons />} responsive={responsive}>
      {children}
    </Carousel>
  );
};

export { Slider };
