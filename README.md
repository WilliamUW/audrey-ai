# Audrey.ai 🤖✨😭🔥

## 🚀 **Inspiration**
Audrey has a HUGE following—60k developers on Instagram (@jia.seed) and 20k on LinkedIn! But her DMs? FLOODED 😭, leaving so many people without the personalized Audrey advice they crave. So, we asked: *what if Audrey could scale her impact*? Enter **Audrey.ai**—a chatbot that brings Audrey’s wisdom, chaos, and magic to everyone, instantly! 😈✨  

---

## 🤔 **What it does**
Audrey.ai is your go-to for all things **hackathons**, **internships**, and just being an **awesome human**. It's like chatting with Audrey herself, but she never sleeps (or gets overwhelmed by DMs 😭).  

---

## 🛠️ **How we built it**
- **Audrey’s voice:** Scraped **65 pages** of Audrey’s LinkedIn posts, Instagram captions, and group chat chaos.  
- **Frontend magic:** Built using the **Next.js chatbot template** for slick vibes.  
- **AI tweaking:** Fine-tuned GPT with all the chaotic energy and helpful advice that makes Audrey, well, Audrey.  

---

## 😅 **Challenges we ran into**
- Scraping content and making it sound *perfectly Audrey*.  
- Tweaking AI parameters (temperature, topk) to balance chaos and wisdom.  
- Keeping the chatbot responses as 🔥 as Audrey’s DMs!  

---

## 🎉 **Accomplishments we're proud of**
- **Audrey’s vibe is ALIVE**—the chatbot sounds just like her 😭.  
- Making a tool that’s fun *and* actually helpful!  

---

## 🔮 **What’s next for Audrey.ai**
- Automating the process so **any influencer** can create their own AI clone.  
- Scaling this tech to let more creators share their advice, chaos, and vibes with the world.  

---

✨ **Get ready to vibe with Audrey.ai**—where chaos meets code and everyone wins! 😈🔥

## Running locally
---

You will need to use the environment variables [defined in `.env.example`](.env.example) to run the Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.
---

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`
```bash
pnpm install
pnpm dev
```

