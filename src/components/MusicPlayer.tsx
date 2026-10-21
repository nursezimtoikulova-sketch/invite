import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Music, Pause } from "lucide-react";
import { MUSIC_PLAYLIST, MUSIC_TITLE, MUSIC_VIDEO_ID } from "../config";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type PlayerState = "idle" | "loading" | "playing" | "paused";

let apiLoaded = false;
let apiResolvers: Array<() => void> = [];

function loadYouTubeApi(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (window.YT?.Player) {
      apiLoaded = true;
      return resolve();
    }
    apiResolvers.push(resolve);
    if (!apiLoaded) {
      apiLoaded = true;
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        apiResolvers.forEach((r) => r());
        apiResolvers = [];
      };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
}

export function MusicPlayer() {
  const [state, setState] = useState<PlayerState>("idle");
  const playerRef = useRef<any>(null);
  const containerId = "yt-music-host";

  const toggle = useCallback(async () => {
    if (state === "loading") return;

    // Если плеер уже создан — просто play/pause
    if (playerRef.current) {
      try {
        if (state === "playing") {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }
      } catch {
        /* ignore */
      }
      return;
    }

    setState("loading");
    try {
      await loadYouTubeApi();

      // Убедимся что контейнер существует
      const host = document.getElementById(containerId);
      if (!host) {
        setState("idle");
        return;
      }

      playerRef.current = new window.YT.Player(containerId, {
        height: "1",
        width: "1",
        videoId: MUSIC_VIDEO_ID,
        host: "https://www.youtube.com",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          listType: "playlist",
          list: MUSIC_PLAYLIST,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: any) => {
            try {
              e.target.setVolume(70);
              e.target.playVideo();
            } catch {
              /* ignore */
            }
          },
          onStateChange: (e: any) => {
            const YT = window.YT;
            if (!YT) return;
            if (e.data === YT.PlayerState.PLAYING) setState("playing");
            if (e.data === YT.PlayerState.PAUSED) setState("paused");
            if (e.data === YT.PlayerState.ENDED) {
              try {
                e.target.playVideo();
              } catch {
                /* ignore */
              }
            }
          },
          onError: () => {
            setState("idle");
          },
        },
      });
    } catch {
      setState("idle");
    }
  }, [state]);

  useEffect(() => {
    return () => {
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const playing = state === "playing";

  return (
    <>
      {/* Жашыруун YouTube iframe контейнер */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0.01,
          pointerEvents: "none",
          zIndex: -1,
        }}
        aria-hidden="true"
      >
        <div id={containerId} />
      </div>

      {/* Көзгө көрүнгөн баскыч */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-3"
      >
        <AnimatePresence>
          {(playing || state === "idle") && (
            <motion.button
              key="label"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 14 }}
              transition={{ duration: 0.4 }}
              onClick={toggle}
              className="hidden sm:flex hairline cursor-pointer items-center gap-2 rounded-full bg-paper/90 py-2.5 pl-4 pr-5 shadow-[var(--shadow-card)] backdrop-blur-md"
            >
              <Music className="h-3.5 w-3.5 text-red" />
              <span className="max-w-48 truncate text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink">
                {playing ? MUSIC_TITLE : "🎵 Улуттук музыка"}
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={toggle}
          aria-label={playing ? "Музыканы токтотуу" : "Музыканы кошуу"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red text-paper shadow-[0_16px_36px_-12px_rgba(166,28,44,0.7)] transition-transform hover:scale-105 active:scale-95"
        >
          <span
            className={`absolute -inset-1.5 rounded-full border-2 border-dashed border-gold/70 ${
              playing ? "animate-spin-slower" : "opacity-40"
            }`}
          />
          {state === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : playing ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Music className="h-5 w-5" />
          )}
          {state === "idle" && (
            <span className="absolute inset-0 animate-ping rounded-full bg-red/30" />
          )}
        </button>
      </motion.div>
    </>
  );
}
