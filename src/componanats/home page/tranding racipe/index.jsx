import React from "react";
import "./index.css";
import {  Rate } from "antd";

const TradingRecipeComponant = () => {
  const allCard = [
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/4353/704c/8feb6af6f8a587654d86d606435911f3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vsy2pMdCCO8hFfXq6SbTwJo-HOIcVUiXZW1ahKWpzm30YjOXcI2f7tqwjjBMFdvnkrHc244gKMati06RYAGAJSeKadbCip9BTiZJwAlGl8YEq-P1KolXjkkoWA974VbGo2fwKRgY-0HsQocShHV9dgk8GrsRMRJgpL0CTaAAzsB2c0l65ZoeeNssdeNmHdODqH~yj43CoVEwbIJsPPPbt-aPC2YsgsAkXDht00ljRvB9xq9Nk0iKK2fhSXE0CmWaY2AQiMibV~huTptbl~GO31OygWkTH20d6ZJ3h4O5pVryl-JOtzimnI2BNRNLTo8jLp-GjnT~5AK5LX4yqo51bw__",
      Title: "onion rings",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/4c1d/6d85/bc6d6251212d07d7c69e3a54f179531b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5QgVk-iTNlWPkHLwpM-f5WkcNVZmyTdjkRIPncL58GeDNaAouXkqJZseM4G5KiWVshwNQ16SPefUX9xj4TTMJQq3IR2wYyB0I6pPxnqyQV3Lr2C8l37GJ93BU6OZ2E7YfEhmx3Lz10j~YZG6p5bFYwLifwezvUysHUfU14paOJv5fhspg2d9LOpzwNQ1Jeqndv6W4sEARp47On~t1rK0itHbJqvaf6K2989Ap9xNtMBi6rWgxOSdJLmFAeVbaJttaUuihT39LJXlJ8VwfjjjsmGR2PV9m9eeOL4v5nJS-kojbRMLwOmYqpyftRmGwlBbrJ9~k13~VP1M7yXr86Gqg__",
      Title: "Toast with Tomato, Onion, & Hummus",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/8061/dc61/9ef61f3063e147914fd0f8eb069e8b3b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Akr~BECkq4lQrPJ331quhm2hORoh9c~6WWyCJkrbhh483Ii1RdrMAQUrN6CMUfdcZYK4qFhignA480wSg65Jvgoj0Ttu-jOYQp7gpotV30XW~eyHYNokv95S7JbLfQPZs~EBTjCTf06B1shZUAq-2ll39gqs~FErFGZ5~mPGy5AUcvlGUlcip45B-OfevxgQ9hMgYbCSSK7BZbcsivVaDyfy9weJWzzt8yWWcQr-rjB3tKfJx0kgtjXFvHlO3e-vvo1N1h31sY91z4g1sYTWimfDV0An4Iu6Or-tnwmovDboS8gL3Lesux9HMSBCTpcnc3GaatlmjF27yLgTIkq-pw__",
      Title: "Ham, Egg, and Spinach Roll-Ups",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:"https://s3-alpha-sig.figma.com/img/a764/2c83/ba60702cc41c626d0dcb6616c4fa1a46?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDZFXiRQ8KTMoeQt9TMeeE0D8ddO19L~wBK1vuel-qxFthoIUOkNJ9tR5CiMgwKugyzvCJUccT4UiakBU0P~vtruCJoSpE1TgsAtBOi9CixBBT6bqmDH16JYCv73zsj0jX7s8bdH-PIRqSfcZKjX5ZOxd~RcIjFCHS17qdIqYFi-ACbpQMve99PgoJBQshJu2aDWSRpBfSEs91nzGIzcOsIEvBOPaWsApvlnzB2xai41QCGb9OkVD0wnfAZhRDy0ySWclzr6cEoEWsmTdt2zuhy~jM-itJD2gFbmGBIylm1Q8yeMg-Fr65twMjJMniCw6n~~2IK8H3Z9eho7fHMIqw__",
      Title: "Chicken Ranch Wrap",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image:
        "https://s3-alpha-sig.figma.com/img/5bb8/b2ae/7b559fb1640b09585306e9cb3964afd8?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aC2OOobOuwfHQK12uJWOTt9mwDXUnMAILZojuPNxrEtlbhpPEGjRoyOHvnaxJDnmKjIc~6sfdUvvnPa~9UzZeS4utuI9DVD5WO3eUPFs0HjusH8rwafqQ1e~ntQpgM1~81SrBKy3MjiUqqeg5aXhS5FWwRwxL-lZd-fF~WsvHtILJuy-DG1oXrEjfpc1cpYjsBB8ieZWfEfjk7Xqxo4~XF5~8~Dj7XPd~YBDIP9zhlp97MRlrmate1vQC1dhIePGw~C6jpMh7GlGnSk7VTT9Mx44s3eTBJaNwVmcClVrBhIJn5BOtZsC0FuB~5qwWUFIDAUkYfmRF7Rf5mJPGfWP8w__",
      Title: "Tuna Mex Tuna Salad",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/28d3/ea4e/aa1ebae5e90733a6cd60726e053ef481?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVnfYUEyhRYs4yrq5lHjj8hRX6OJfLqLwUHwWbvi5fLDMJvHe0Lk54YtS6LoZzwz8UX9Vr6ASve81vDtN32qDCdMvy6kRDRVsVO3smgxCU4FnXUGL4PQj9~7ZccsXtCmQNGHhrTL4k8mp9v-WMy8mUqdZodNsepunApNcQQaCK0wISot1iXgcRWqcsUPdI-VMjPzZCN6bNAN2yJJhD3pqQhVceXdvWAmk40w9LPIG5Q4j4WjfX69ILi-Z46wWhQU9obqyVODQdg01QPOYgROgdfjBi3vab5e9k~FPTXZ4JHlIiL0gyrBCGwB2QCbxB~oquKOCRARGrvYeHd~1YM9kQ__",
      Title: "Strawberry and Cherry pancake",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "left", marginLeft: "50px" }}>
          Trending Recipe
        </h1>
        <h2 className="mobile-hide">
          <a href="">View more</a>{" "}
        </h2>
        <div className="cards">
          {allCard.map((t, index) => (
            <div className="card" key={index}>
              <img src={t.Image} alt="images" className="per-img" />
              <Rate style={{marginLeft:"20px",marginTop:"10px"}}/>
              <h2 style={{marginLeft:"20px"}}>{t.Title}</h2>
              <div className="mbl-hide">
              <img src={t.avatar} alt="avataers"  className="AVATAR"/>
              <p style={{marginLeft:"10px"}}>{t.description}</p>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TradingRecipeComponant;
