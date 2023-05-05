import React, { useEffect, useLayoutEffect, useState } from "react";
import ProductCarousel from "../../Components/Banner/Carousel/Carousel";
import CardBanner from "../../Components/Banner/Card/Card";
import Widget from "../../Components/Widget/Widget";
import bannerService from "../../Manager/Service/bannerService";

export default function HomePage() {
  const [carousel,setCarousel] = useState(null);
  const [card, setCard] = useState(null);
  const cardBannerArray = [
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty795/pimWidgetApi/mobile_20230325150605_ErkekGiyimdeInfluencerSecimleri2300980mobile.jpg",
      buttonText: "Alışverişe Başla",
      text: "Avva",
    },
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty797/campaign/banners/original/619943/bdeb26ec85_2.jpg",
      buttonText: "Alışverişe Başla",
      text: "Trendyol Man",
    },
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty795/pimWidgetApi/mobile_20230325181158_ErkekGiyimdeCokAlAzOde2300981mobile.jpg",
      buttonText: "Alışverişe Başla",
      text: "Erkek Giyimde Çok Al Az Öde",
    },
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty796/pimWidgetApi/mobile_20230325180729_AltinyildizSuperMart2299262mobile.jpg",
      buttonText: "Alışverişe Başla",
      text: "Altınyıldız",
    },
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty797/pimWidgetApi/mobile_20230325180349_adidasPumaReebokSuperMart2305436mobile.jpg",
      buttonText: "Alışverişe Başla",
      text: "Adidas",
    },
    {
      imgUrl:
        "https://cdn.dsmcdn.com/ty796/pimWidgetApi/mobile_20230325180840_AvvaSuperMart2299261mobile.jpg",
      buttonText: "Alışverişe Başla",
      text: "Avva",
    },
  ];

  const widgets = [
    {
      color: "#38cf58",
      text: "Ramadan Özel",
      imgUrl:
        "https://n11scdn.akamaized.net/a1/org/23/03/18/56/25/78/18/76/90/92/14/52/08503626643481539969.png",
    },
    {
      color: "#d429f2",
      text: "En Çok Öne Çıkanlar",
      imgUrl:
        "https://n11scdn.akamaized.net/a1/org/23/01/17/73/31/57/15/18/55/53/85/16/86586927247158628177.png",
    },
    {
      color: "#ff4f78",
      text: "Flaş İndirimler",
      imgUrl:
        "https://n11scdn.akamaized.net/a1/org/23/01/17/74/00/75/82/25/30/42/53/87/82066922147261756076.png",
    },
  ];
  useLayoutEffect(() => {
    fethData();
  },[])
  
  const fethData =async () => {
    const result = await bannerService.getActiveBanners();
    console.log(result);
    let carousel = result?.data.filter((item) => {return item.bannerType === 0})
    setCarousel(carousel);
    let card = result?.data.filter((item) => {return item.bannerType === 2})
    setCard(card);
  }
  return (
    <div>
      <ProductCarousel carousel={carousel} />
      <div className="grid">
        <div className="col-12 p-3">
          <Widget widgets={widgets} />
        </div>
      </div>
      <div className="grid">
        {card?.map((banner, index) => {
          return (
            <div key={index} className="col-12 xl:col-4 lg:col-6 p-3">
              <CardBanner banner={banner}  />
            </div>
          );
        })}
      </div>
    </div>
  );
}
