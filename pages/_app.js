import { motion } from "framer-motion";
import "../styles/globals.css";
import "../styles/main.css";
import "../styles/social-icon.css";
import "../styles/navbar.css";
import "../styles/about.css";
import "../styles/projects.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      variants={{
        hidden: { opacity: 0, x: -300, y: -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 1, x: 0, y: 0 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
