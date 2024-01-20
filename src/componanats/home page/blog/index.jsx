import React from "react";
import "./index.css";


const BlogComponanat = () => {
  const BlogCards = [
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/a9cf/2e6f/5edb54003f20dae8ce73cbf25853c0e8?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzDot0S4rAlTopMzrUQNNGykamjU0NXAedPGCQ5mBQPspztcSfx-3vcAh5pOzNhSt6U7fEKhFyrnpk6oJPvQuitzDrwM8iY4bESfzEmoxUCMk2NSizTv0N~v334rXbyk3AmsK6y2ryAxINovPt-mJc~KfLBeI1HmEeMbCigH79fIRmBMW2A0ANrlArOwzIt0srYFAKRvy9qfK92SFiB6F9pjtbVtbQdcWe3Zh04vPAMNNtgCz908j1Oew0R63apitceqXbytNZ-xHJVRsUWyXarol6zxOSpi0Rpx9UUSES1~BcdTLWaPKeSXum~sombI4TfC--bVWpDT-HHSNnQqrw__",
      title: "Unlocking the Benefits of Intermittent Fasting for ",
      discription:
        "Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health Weight   ...",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/eb9b/369b/bbbaea7c9d2f4da875032b68f327a30e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dYb4NF6HYPxg0AhpXfiGWkuFr0UzQFD3FJs6-XFlHvZefwtbn6D8jfD5U-0OcAHaoFTQskMzI1KnmspQUj87ZrDmSduXyYI7xqQuFUGfdAENNLw7RFoYGaSAZDPwIL4n2TzoJa9VLTnLHnjagYeS5P65cA1RPYcjvSzuanxx~e0S1sIoS0B2fRz4gyd4e0VnQmojbCHQxdTdaOj26A7sh9ZTkSsVhdi0ngbBPGbZANMn76pdTiZBt0Umw4WA~OV-BL1di-YkJWPCWCoIbm4KZMqTo3pDd6YgDbq6DEhwNYH-cf5~wOaHQhqz1TGpO7BRrUqEcczgjy-8tqgj~33JmA__",
      title: "The Impact of Sugar Consumption on Your Health ",
      discription:
        "Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers ....",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "left", marginLeft: "50px" }}>Blog</h1>
        <h2 className="mobile-hide">
          <a href="">View more</a>
        </h2>
        <div className="cards-specl">
       {
        BlogCards.map((t,index)=>(
            <div className="card-specl" key={index}>
              <img src={t.Image} className="image" />
              <h2>{t.title}</h2>
              <p className="pdg">{t.discription}</p>
            </div>
        ))
    }
    </div>
      </div>
    </>
  );
};

export default BlogComponanat;
