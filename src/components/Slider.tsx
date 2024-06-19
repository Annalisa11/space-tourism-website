import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

// install swiper modules
SwiperCore.use([Navigation, Pagination]);

export type SliderType = {
  name: string;
};

type Props<T extends SliderType> = {
  data: T[];
  onSlideChange: (index: number) => void;
  imageFolder: string;
  type: BulletType;
  imageType?: ImageType;
  jpg?: boolean;
};

export type BulletType = "bullets" | "names";
export type ImageType = "landscape" | "portrait";

const Slider = <T extends SliderType>({
  data,
  onSlideChange,
  imageFolder,
  type,
  imageType,
  jpg,
}: Props<T>) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        type: "bullets",
        bulletElement: type === "bullets" ? undefined : "span",
        renderBullet:
          type === "bullets"
            ? undefined
            : function (index, className) {
                return (
                  '<span class="' +
                  type +
                  " " +
                  className +
                  '">' +
                  data[index].name +
                  "</span>"
                );
              },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={({ realIndex }) => {
        console.log("slide change", realIndex);
        onSlideChange(realIndex);
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide>
            <img
              src={require(
                `../assets/${imageFolder}/image-${item.name.toLowerCase().replace(" ", "-")}${imageType ? "-" + imageType : ""}.${jpg ? "jpg" : "png"}`,
              )}
              alt={item.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
