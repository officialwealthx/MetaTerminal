"use client";

import { motion } from "framer-motion";
import { Heart, MessageSquare, Share2, ShieldCheck } from "lucide-react";

const POSTS = [
  {
    author: "James K.",
    handle: "@jamesfx",
    initials: "JK",
    avatarColor: "bg-accent-teal",
    verified: true,
    score: 87,
    time: "2h ago",
    content:
      "Finally cracked the NY session code. Key: only trade the first 30 min of London/NY overlap. Been using MetaTerminal's session analytics and my win rate jumped from 41% → 67% in 3 weeks.",
    tag: "ANALYSIS",
    stats: { likes: 234, comments: 48, shares: 23 },
  },
  {
    author: "Amara M.",
    handle: "@amaratrades",
    initials: "AM",
    avatarColor: "bg-accent-green",
    verified: true,
    score: 92,
    time: "4h ago",
    content:
      "My Discipline Score went from 52 → 88 in one month. MetaAI caught that I was breaking my stop loss rules every Friday. Now I don't trade Fridays. Account is up 18% this month.",
    tag: "PERFORMANCE",
    stats: { likes: 412, comments: 67, shares: 89 },
  },
  {
    author: "Thomas L.",
    handle: "@thomasfutures",
    initials: "TL",
    avatarColor: "bg-brand-gold",
    verified: true,
    score: 79,
    time: "6h ago",
    content:
      "EURUSD setup forming. Waiting for the 4H close above 1.0850 before entering. Risk 0.5% per MetaTerminal risk management protocol. Who else watching this?",
    tag: "TRADE IDEA",
    stats: { likes: 156, comments: 34, shares: 12 },
  },
];

export function CommunityPreview() {
  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-3">
            MetaFeed
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite">
            The World&apos;s Most Trusted<br />Trading Community.
          </h2>
          <p className="mt-4 font-sans text-brand-muted max-w-2xl mx-auto text-lg">
            Every trader on MetaFeed has verified performance data. 
            No fake gurus. No empty claims. Just real traders, real results.
          </p>
        </motion.div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-accent-teal/20 transition-all duration-300"
            >
              {/* Author */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${post.avatarColor} flex items-center justify-center font-mono font-bold text-sm text-white shrink-0`}>
                    {post.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-grotesk font-semibold text-sm text-brand-offwhite">
                        {post.author}
                      </p>
                      {post.verified && (
                        <ShieldCheck size={14} className="text-accent-teal" />
                      )}
                    </div>
                    <p className="font-mono text-xs text-brand-muted">{post.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-bold text-accent-teal">{post.score}</div>
                  <div className="font-sans text-xs text-brand-muted">Score</div>
                </div>
              </div>

              {/* Tag + time */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-teal border border-accent-teal/20 px-2 py-0.5 rounded-full">
                  {post.tag}
                </span>
                <span className="font-sans text-xs text-brand-muted">{post.time}</span>
              </div>

              {/* Content */}
              <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1">
                {post.content}
              </p>

              {/* Engagement */}
              <div className="flex items-center gap-5 pt-3 border-t border-accent-teal/8">
                <button className="flex items-center gap-1.5 font-mono text-xs text-brand-muted hover:text-brand-danger transition-colors">
                  <Heart size={14} />
                  {post.stats.likes}
                </button>
                <button className="flex items-center gap-1.5 font-mono text-xs text-brand-muted hover:text-accent-teal transition-colors">
                  <MessageSquare size={14} />
                  {post.stats.comments}
                </button>
                <button className="flex items-center gap-1.5 font-mono text-xs text-brand-muted hover:text-accent-green transition-colors">
                  <Share2 size={14} />
                  {post.stats.shares}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
