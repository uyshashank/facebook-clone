import React from "react";
import Story from "./Story";
import styles from "./Story.module.css";
const StoryReel = () => {
  return (
    <>
      <div className={styles.storyReel + " container"}>
        <Story
          profileSrc={`${process.env.PUBLIC_URL}/myavatar.jpg`}
          title="Shashank Yenurkar"
          image={`${process.env.PUBLIC_URL}/reel1.jpg`}
        />
        <Story
          profileSrc={`${process.env.PUBLIC_URL}/avatar2.jpg`}
          title="Adarsh Agarwal"
          image={`${process.env.PUBLIC_URL}/reel2.jpg`}
        />
        <Story
          profileSrc={`${process.env.PUBLIC_URL}/avatar3.jpg`}
          title="Aman Sharma"
          image={`${process.env.PUBLIC_URL}/reel3.jpg`}
        />
        <Story
          profileSrc={`${process.env.PUBLIC_URL}/avatar4.jpg`}
          title="Raj Gupta"
          image={`${process.env.PUBLIC_URL}/reel4.jpg`}
        />
        <Story
          profileSrc={`${process.env.PUBLIC_URL}/avatar5.jpg`}
          title="Kshitij Yenurkar"
          image={`${process.env.PUBLIC_URL}/reel5.jpg`}
        />
      </div>
    </>
  );
};

export default StoryReel;
