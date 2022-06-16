export const upDownvariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transtition: { duration: 1.5 }
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: { duration: 1 }
    }
};

export const downUpvariant = {
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        transtition: { duration: 1.5 }
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: { duration: 1 }
    }
};