import React from "react";
import styles from "../styles/Projects.module.css";
import Carousel from "react-multi-carousel";
import classNames from "classnames";
import "react-multi-carousel/lib/styles.css";

const projects = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // const games = new Set(["1", "2", "3", "4"]);

  // games.add("5");
  // console.log(games);
  // console.log(games.values());

  // const iterator = games.values();
  // console.log(iterator.next());
  // console.log(iterator.next());

  // for (const game of games) {
  //   console.log(game);
  // }

  return (
    <>
      <div className={styles.main_container}>
        <h1 className={styles.main_title}>
          Projects <span style={{ color: "#FD7013" }}>|</span> Creative Outcomes
        </h1>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={true}
        className={classNames(styles.project_carousel, "hide")}
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/final.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>My Mentor online mentoring platform</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/mnec.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Mutasim Nimir Centre for Environmental Culture</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/eccs_logo.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>European Chamber of Commerce in Sudan</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/eit.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Eptikar IT Solutions Website</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/Savannah-yellow.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Savannah innovation labs</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img src="/civilEd.png" style={{ padding: "10px" }} />
          </div>
          <h3>CivilEd online learning platform</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        {/* <div className={styles.project_card}>
          <div className={styles.overlay}></div>
          <div className={styles.project_card_img}>
            <img
              src="/DamanCashIcon-Circle.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Daman cash landing page</h3>
          <button className={styles.project_button}>View project</button>
        </div> */}
      </Carousel>
      <div className={classNames(styles.projects, "hide_desktop")}>
        <div className={styles.project_card}>
          {/* <div className={styles.overlay}></div> */}
          <div className={styles.project_card_img}>
            <img
              src="/final.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>My Mentor online mentoring platform</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          {/* <div className={styles.overlay}></div> */}
          <div className={styles.project_card_img}>
            <img
              src="/mnec.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Mutasim Nimir Centre for Environmental Culture</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          {/* <div className={styles.overlay}></div> */}
          <div className={styles.project_card_img}>
            <img
              src="/eccs_logo.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>European Chamber of Commerce in Sudan</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          <div className={styles.project_card_img}>
            <img
              src="/eit.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Eptikar IT Solutions Website</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          {/* <div className={styles.overlay}></div> */}
          <div className={styles.project_card_img}>
            <img
              src="/Savannah-yellow.png"
              style={{ backgroundColor: "#EEE", padding: "10px" }}
            />
          </div>
          <h3>Savannah innovation labs</h3>
          <button className={styles.project_button}>View project</button>
        </div>
        <div className={styles.project_card}>
          {/* <div className={styles.overlay}></div> */}
          <div className={styles.project_card_img}>
            <img src="/civilEd.png" style={{ padding: "10px" }} />
          </div>
          <h3>CivilEd online learning platform</h3>
          <button className={styles.project_button}>View project</button>
        </div>
      </div>
    </>
  );
};

export default projects;
