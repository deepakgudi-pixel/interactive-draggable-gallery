const hero = document.querySelector(".section__one"),
  wrapper = hero.querySelector(".wrapper");
frames = hero.querySelectorAll(".frame");
frameImages = hero.querySelectorAll(".frame_figure_img");

let isActive = false;

const init = () => {
  gsap.from(frames, {
    duration: 1.8,
    scale: 0,
    ease: "expo.inOut",
    onComplete: drag,
    stagger: 0.08,
  });
};

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

window.onload = () => {
  init();
};
