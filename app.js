const hero = document.querySelector(".section__one"),
  wrapper = hero.querySelector(".wrapper");
frames = hero.querySelectorAll(".frame");
frameImages = hero.querySelectorAll(".frame_figure_img");


const drag = () => {
  Draggable.create(wrapper, {
    type: "x, y",
    bounds: window,
    onDragStart: function () {
      gsap.to(frames, {
        duration: 0.2,
        scale: 1.1,
        ease: "power1.out",
      });
    },
    onDragEnd: function () {
      gsap.to(frames, {
        duration: 0.2,
        scale: 1,
        ease: "power1.out",
      });
    },
  });
};


drag();

