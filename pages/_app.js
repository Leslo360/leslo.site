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
      transition={{ type: "spring" }}
      variants={{
        hidden: { x: 0, y: -300 },
        enter: { x: 0, y: 0 },
        exit: { x: 0, y: 0 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
