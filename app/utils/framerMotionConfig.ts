export const cardVariantsProjects = {
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.7,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    y: 20,
    transition: {
      duration: 0.5,
    },
  },
};

export const cardVariantsExperience = {
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    y: 20,
    transition: {
      duration: 0.5,
    },
  },
};
