import React from "react";
import faker from "faker";
import { MultiImageProductCard } from "components/core/Cards/MultiImageProductCard";
import { OneImageProductCard } from "components/core/Cards/OneImageProductCard";
import { Carousel } from "components/core/Carousel/Carousel";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <OneImageProductCard
          title="Up to 70% off | Clearance store"
          image={faker.image.sports()}
          ctaText="See more"
          ctaLink="/"
        />

        <MultiImageProductCard
          title="Up to 70% off | Clearance store"
          subProductImage={[
            {
              image: faker.image.sports(),
              ctaLink: "/",
              title: faker.lorem.words(2),
            },
            {
              image: faker.image.sports(),
              ctaLink: "/",
              title: faker.lorem.words(2),
            },
            {
              image: faker.image.sports(),
              ctaLink: "/",
              title: faker.lorem.words(2),
            },
            {
              image: faker.image.sports(),
              ctaLink: "/",
              title: faker.lorem.words(2),
            },
          ]}
          ctaText="See more"
          ctaLink="/"
        />
      </div>

      <div
        style={{
          marginBlock: "8px",
        }}
      >
        <Carousel
          title="Up to 45% off | Handpicked furniture collection from local shops"
          ctaText="See all offers"
          ctaLink="/"
          productItems={[
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "login",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.animals(),
              contentType: "image",
              ctaLink: "",
            },
            {
              productName: faker.lorem.lines(1),
              productResouceLink: faker.image.city(),
              contentType: "image",
              ctaLink: "",
            },
          ]}
        />
      </div>

      <div>
        <h1>WIP - Work in Progress</h1>
        <p>
          This project is in work in progress, please visit after few weeks to
          see changes here...Thanks!
        </p>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <strong
            style={{
              fontSize: "18px",
            }}
          >
            Current development Status:
          </strong>{" "}
          <p>Sprint 5 - Tickets: 8, Ongoing: 1, Finished: 3</p>
        </span>
      </div>
    </>
  );
};

export default Home;
