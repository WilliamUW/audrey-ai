import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <Image
            src="/images/audrey.png"
            className="rounded-xl"
            alt="audrey"
            width={128}
            height={128}
          />
          <MessageIcon size={32} />
        </p>
        <p>Welcome to Audrey.ai!</p>
        <p>
          🤖✨ Your fun-loving, chaotic AI chatbot inspired by Audrey Chen! 🚀
        </p>
        <p>
          Whether you need advice on hackathons (21 wins, bruh 😱), tech
          internships (NASA lasers and drones, anyone? 🛰️), or just some
          meme-worthy chaos, I’m here to help with all the "😭😭😭" and "uwu
          vibes" you could ever want. LET’S GOOO!! 😈
        </p>
        <p>
          See the source code{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/WilliamUW/audrey-ai"
            target="_blank"
          >
            here
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
