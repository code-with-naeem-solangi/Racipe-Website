import React from "react";
import "./index.css";
import { Rate } from "antd";

const ExpolorRacipeComponant = () => {
  const allCard = [
    {
      Image: "first card.jpeg",
      Title: "Green Goddess Wrap Is a Light & Simple",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image: "second card.jpeg",
      Title: "Strawberry and Walnut Spinach Salad",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image: "thard card.jpeg",
      Title: "Copycat California Pizza Kitchen BBQ Chicken",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/e7ad/d25d/bfe9782224839620ebe368a4d107220b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0moJX8eFx9JfPA9uoFNQHYVH0tkXn6xdwPzOQqGBKYgsdrSl4psPHBkviD~vjLktYrrK0FnUhoWLOcRDE9-Y2iNlQtnNPy721eSa-0Q65X~jaZIzo49oQul0eM-T~kW9D5M0skbHaEnHv0Tty0UnvVT8HEcBxWKnGWyr-VRDK6rvg1Z~dRREwP~1n-yfa8lvTA6SQh2wRZ66zefbyCF3UvXtgph5j6ho8V-p60KZs98zmv1QfbaqfGgKtU420ON1y~0gZ~TUIQ-paF1OTIKkDFWPYN~YSULjKjXVvHww87p5-3X3zXjwZj1AcaqcpkFAZ4FzJPsLObSnqCsFnT0tQ__",
      Title: "Cherry-Berry Smoothie Bowl",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image:
        "https://s3-alpha-sig.figma.com/img/aa6e/2966/f29dbf25623eae92056ee2677ea7ff49?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DedAuaz5JHvXTkKFxwVr-1yigOZFUp0Pm2nHpI~I-yb513HY6nMXamtS10Tvylu4UOcJ0RmFh9ZKhoEOJszKgKM~xsUDpFH3xQS5N2DeyndvFt9vWcUFasiBEGOP3n1YutBWFOTiJLzLcE7E64wUgnIGbDxVkQoq55Bnspu8nrjGSFsVJ319S0Vyy6zofBXpGwozgNxVbk9164N2HCUAxrOc-nArIvyO91aRvRSyGLTqQZbRpSOoOqs~mJ0iQkdrpOzA3Ry5ri2RKW-egP4WJxXwkR8WFcxhIKqzcGcRsBnpHtcI7rznGOGuil5N9xU9s2ofbnkHUfoQJQFr7IXyKg__",
      Title: "Green smoothie",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image: "six card.jpeg",
      Title: "Grilled Red Snapper",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
  ];
  const tabShowCard = [
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/6141/59dc/e3532b14940e07807271a4f6a105cccf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ezGSwIqU5SOXKY-NU5WTE~TPRtqbFC39j0HF3kxAXhTafxFEJrC0FQwmcDIgky6l-PHXuW2-j763zEpL0CBILfp7YqWhQezVKBb4DVDiWcE7LBl0v72b6jMYsvvxoWSg2rwzjrQA9MblNptzotLteFU3AYkDQzr5SJBHbtxbZtSaGQcXLlPnCIPeTll6ZFl1TvnjwB29QaF8iBCvgk9EadpDClXytIrSTsc~sbkCcPRoTb8dU-bBVHxJwF~SfTFifJZPVKsPuy4o0LRXKcfbnvJU9QxaPVF6BFRYnyvduY~KEyiYyF7uYs1FKN2nUhk5ULegcYFRZ5y~BUM524yNIg__",
      Title: "fish and chips",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image:
        "https://s3-alpha-sig.figma.com/img/b83f/f04c/dd1bd178e4690bc4ca28c8464bb6fd57?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEgJap~13VBbrhwZkdU~2sxWC8DoN3kK1UwdDhmNGoChxFUVdmDDpMDJaU8VRUwT~BNE2tezU~uW3Gaa65FJ~BRXSHcsff9rdPQVgTkN5fA-RPhE9S4kUhZ9prd7YULT7qCpJ9~xB4e8kK0T69-vLRcc22GdQ~UitVlJBHJBt304RxbbNZT6q11rcboXfIvZt4Q1ZvPCWOY5pZGwtk-w-DG6lwdcaJhWaZ0d7fV~CetDczjgrTaD--LOMwdt0aFrWYgNkCLN9uXAfsQW6j3CmdDqmh55lrjHTJxr3vNP0OmOipJ1O9YKI1~wReNNZXhczuXTWgvFYYoShavKF-MOvQ__",
      Title: "Tuna Mex Tuna Salad ",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/3627/1074/9ec82cec7c3f9df46152f0e17c9c611d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ur-a2vC38jfAqq2Aok46T-aNMYFWSIs~bXXdQ3LKae4Q0jnP8QSbmRQdr9Dvs3gep-lDX~KOhM9Ajpi5n5iAx4fUduEd6fs8TB73T~olW1s55ULxR0kLotzHZ49k8K2zBptPLreUieLLN8kuBn6z5SmTgIYQCdbt4zR9vOxVknH0b9mXLtXq4FWkhIMn5sqUuolK5ID91nVhv1qNw6UzhSxGypIjnQHnwKsnOwRHiIIpi2g7MN~M3~or-FkjvYmo95x2secJ2xcAhfZ9z4LWjmFLV2ve15vyxILd4sbYOEOprvi8hXZ-9NA9mmWY3dvwp6RQS0muyTsDAJaVeOTDXQ__",
      Title: "Strawberry and Walnut Spinach Salad",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/e7ad/d25d/bfe9782224839620ebe368a4d107220b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0moJX8eFx9JfPA9uoFNQHYVH0tkXn6xdwPzOQqGBKYgsdrSl4psPHBkviD~vjLktYrrK0FnUhoWLOcRDE9-Y2iNlQtnNPy721eSa-0Q65X~jaZIzo49oQul0eM-T~kW9D5M0skbHaEnHv0Tty0UnvVT8HEcBxWKnGWyr-VRDK6rvg1Z~dRREwP~1n-yfa8lvTA6SQh2wRZ66zefbyCF3UvXtgph5j6ho8V-p60KZs98zmv1QfbaqfGgKtU420ON1y~0gZ~TUIQ-paF1OTIKkDFWPYN~YSULjKjXVvHww87p5-3X3zXjwZj1AcaqcpkFAZ4FzJPsLObSnqCsFnT0tQ__",
      Title: "Cherry-Berry Smoothie Bowl",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image:
        "https://s3-alpha-sig.figma.com/img/aa6e/2966/f29dbf25623eae92056ee2677ea7ff49?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DedAuaz5JHvXTkKFxwVr-1yigOZFUp0Pm2nHpI~I-yb513HY6nMXamtS10Tvylu4UOcJ0RmFh9ZKhoEOJszKgKM~xsUDpFH3xQS5N2DeyndvFt9vWcUFasiBEGOP3n1YutBWFOTiJLzLcE7E64wUgnIGbDxVkQoq55Bnspu8nrjGSFsVJ319S0Vyy6zofBXpGwozgNxVbk9164N2HCUAxrOc-nArIvyO91aRvRSyGLTqQZbRpSOoOqs~mJ0iQkdrpOzA3Ry5ri2RKW-egP4WJxXwkR8WFcxhIKqzcGcRsBnpHtcI7rznGOGuil5N9xU9s2ofbnkHUfoQJQFr7IXyKg__",
      Title: "Green smoothie",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image: "six card.jpeg",
      Title: "Grilled Red Snapper",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
  ];
  const mblShowCard = [
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/6141/59dc/e3532b14940e07807271a4f6a105cccf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ezGSwIqU5SOXKY-NU5WTE~TPRtqbFC39j0HF3kxAXhTafxFEJrC0FQwmcDIgky6l-PHXuW2-j763zEpL0CBILfp7YqWhQezVKBb4DVDiWcE7LBl0v72b6jMYsvvxoWSg2rwzjrQA9MblNptzotLteFU3AYkDQzr5SJBHbtxbZtSaGQcXLlPnCIPeTll6ZFl1TvnjwB29QaF8iBCvgk9EadpDClXytIrSTsc~sbkCcPRoTb8dU-bBVHxJwF~SfTFifJZPVKsPuy4o0LRXKcfbnvJU9QxaPVF6BFRYnyvduY~KEyiYyF7uYs1FKN2nUhk5ULegcYFRZ5y~BUM524yNIg__",
      Title: "fish and chips",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image:
        "https://s3-alpha-sig.figma.com/img/3627/1074/9ec82cec7c3f9df46152f0e17c9c611d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ur-a2vC38jfAqq2Aok46T-aNMYFWSIs~bXXdQ3LKae4Q0jnP8QSbmRQdr9Dvs3gep-lDX~KOhM9Ajpi5n5iAx4fUduEd6fs8TB73T~olW1s55ULxR0kLotzHZ49k8K2zBptPLreUieLLN8kuBn6z5SmTgIYQCdbt4zR9vOxVknH0b9mXLtXq4FWkhIMn5sqUuolK5ID91nVhv1qNw6UzhSxGypIjnQHnwKsnOwRHiIIpi2g7MN~M3~or-FkjvYmo95x2secJ2xcAhfZ9z4LWjmFLV2ve15vyxILd4sbYOEOprvi8hXZ-9NA9mmWY3dvwp6RQS0muyTsDAJaVeOTDXQ__",
      Title: "Strawberry and Walnut Spinach Salad",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },

    {
      Image: "six card.jpeg",
      Title: "Grilled Red Snapper",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/aa6e/2966/f29dbf25623eae92056ee2677ea7ff49?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DedAuaz5JHvXTkKFxwVr-1yigOZFUp0Pm2nHpI~I-yb513HY6nMXamtS10Tvylu4UOcJ0RmFh9ZKhoEOJszKgKM~xsUDpFH3xQS5N2DeyndvFt9vWcUFasiBEGOP3n1YutBWFOTiJLzLcE7E64wUgnIGbDxVkQoq55Bnspu8nrjGSFsVJ319S0Vyy6zofBXpGwozgNxVbk9164N2HCUAxrOc-nArIvyO91aRvRSyGLTqQZbRpSOoOqs~mJ0iQkdrpOzA3Ry5ri2RKW-egP4WJxXwkR8WFcxhIKqzcGcRsBnpHtcI7rznGOGuil5N9xU9s2ofbnkHUfoQJQFr7IXyKg__",
      Title: "Green smoothie",
      avatar:
        "https://s3-alpha-sig.figma.com/img/635c/dba5/389d3affcb8a64530e85cf8f1e664cf1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUYezSpNCgLtmga3FulO30BCsMxV7gLIv43QinaCnRX5eo2q0qzohMex0ud3xAf7bIqSwAVw2pF4TsyNDxwda51KC8BUqkHkzoRJ6fKKcdZeUeJBVj-W387gxbmQrpyTPcXI9-j9ic6WQ0TY0dBp9yQNXOHnR0neNe3ofnLrVMOK1UPqX~9ITXdGyTBtgguXbVb~Y7MylrScdoV8i3oGVyyfoc-7US1nHP3~soN9~ivkg9aHc0JoY7aSdJrqDLoKJJYnLXopBV82BjJIVUBsqq6y2eJStV2uG3kFhDataEtFyOzmVURUyFS0tY2iy~7IIeXZ859KNgrywkC3Z8q68w__",
      description: "Alex Martin",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "left", marginLeft: "50px" }}>
          Expolor Recipe
        </h1>
        <h2 className="mobile-hide">
          <a href="">View more</a>{" "}
        </h2>
        <div className="cards-lap">
          {allCard.map((t, index) => (
            <div className="card-lap" key={index}>
              <img src={t.Image} alt="images" className="per-img-lap" />
              <Rate style={{ marginLeft: "20px", marginTop: "10px" }} />
              <h2 style={{ marginLeft: "20px" }}>{t.Title}</h2>
              <div className="mbl-hide">
                <img src={t.avatar} alt="avataers" className="AVATAR-lap" />
                <p style={{ marginLeft: "10px" }}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cards-tab">
          {tabShowCard.map((t, index) => (
            <div className="card-tab" key={index}>
              <img src={t.Image} alt="images" className="per-img-tab" />
              <Rate style={{ marginLeft: "20px", marginTop: "10px" }} />
              <h2 style={{ marginLeft: "20px" }}>{t.Title}</h2>
              <div className="mbl-hide">
                <img src={t.avatar} alt="avataers" className="AVATAR-tab" />
                <p style={{ marginLeft: "10px" }}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cards-mbl">
          {mblShowCard.map((t, index) => (
            <div className="card-mbl" key={index}>
              <img src={t.Image} alt="images" className="per-img-mbl" />
              <Rate style={{ marginLeft: "20px", marginTop: "10px" }} />
              <h2 style={{ marginLeft: "20px" }}>{t.Title}</h2>
              <div className="mbl-hide">
                <img src={t.avatar} alt="avataers" className="AVATAR-mbl" />
                <p style={{ marginLeft: "10px" }}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpolorRacipeComponant;
