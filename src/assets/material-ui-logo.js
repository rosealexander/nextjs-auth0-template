import {motion} from 'framer-motion';

const MaterialUiLogo = () => {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg"
                    fill="#764ABC"
                    viewBox="0 0 600 476"
                    width="100%"
                    height="100%"
        >
            <motion.path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                         fill="#00b0ff"
                         initial={{
                             opacity: 0,
                         }}
                         animate={{
                             opacity: 1,
                         }}
                         transition={{
                             duration: 0.4,
                             delay: 0.2,
                         }}
            />
            <motion.path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                         fill="#0081cb"
                         initial={{
                             opacity: 0,
                         }}
                         animate={{
                             opacity: 1,
                         }}
                         transition={{
                             duration: 0.4,
                             delay: 0.4,
                         }}
            />
            <motion.path d="M225 303.1v86.6l150 86.6v-86.6z"
                         fill="#00b0ff"
                         initial={{
                             opacity: 0,
                         }}
                         animate={{
                             opacity: 1,
                         }}
                         transition={{
                             duration: 0.4,
                             delay: 0.8,
                         }}
            />
            <motion.path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                         fill="#0081cb"
                         initial={{
                             opacity: 0,
                         }}
                         animate={{
                             opacity: 1,
                         }}
                         transition={{
                             duration: 0.4,
                             delay: 1,
                         }}
            />
        </motion.svg>
    );
}

export default MaterialUiLogo;
