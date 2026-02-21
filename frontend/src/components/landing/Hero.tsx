import { LANDING_SECTION_IDS } from "./sectionIds";
import { Button } from "../../components/UI";
import { WalletInfo } from "../../components/WalletConnect";
import type { WalletState } from "../../types";

interface HeroProps {
  wallet: WalletState;
  connect: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
}

export function Hero({ wallet, connect, disconnect, isConnecting }: HeroProps) {
  return (
    <section id={LANDING_SECTION_IDS.hero} className="relative isolate overflow-hidden bg-hero-gradient min-h-screen flex items-center">
      {/* Hero Content */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center sm:px-8 lg:px-12">

        {/* Headline */}
        <h1 className="hero-headline mb-6 max-w-4xl animate-fade-in-up text-balance">
          Launch Your Token on Stellar in Minutes
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl animate-fade-in-up text-balance text-lg leading-relaxed text-gray-400 sm:text-xl">
          Premium, secure, and effortless token deployment for founders, creators, and Web3 teams.
        </p>

        {/* Social Proof */}
        <div className="mb-10 flex animate-fade-in-up flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="h-10 w-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="h-10 w-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-pink-400 to-pink-600"></div>
            </div>
            <span className="ml-2 text-3xl font-bold text-white">1,000+</span>
          </div>
          <p className="text-sm text-gray-400">
            tokens deployed with 500+ active users
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex animate-fade-in-up flex-col gap-4 sm:flex-row">
          {wallet.connected && wallet.address ? (
            <WalletInfo wallet={wallet} onDisconnect={disconnect} />
          ) : (
            <Button 
              size="lg" 
              onClick={connect}
              loading={isConnecting}
              className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-white transition hover:bg-[#E63428] hover:shadow-glow-red"
            >
              Connect Wallet
            </Button>
          )}
          <a
            href={`#${LANDING_SECTION_IDS.howItWorks}`}
            data-scroll-link="true"
            className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
