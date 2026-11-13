import type { CSSProperties } from "react";
import styles from "./VoiceWave.module.css";

const heights = [12, 18, 25, 15, 31, 20, 39, 24, 46, 31, 54, 37, 63, 44, 72, 51, 66, 40, 57, 35, 49, 30, 42, 24, 35, 19, 29, 15, 22, 12, 17];

type WaveStyle = CSSProperties & { "--wave-height": string; "--wave-delay": string };

export default function VoiceWave() {
  return (
    <div className={styles.wave} aria-hidden="true">
      {heights.map((height, index) => {
        const style: WaveStyle = {
          "--wave-height": `${height}px`,
          "--wave-delay": `${index * -0.12}s`,
        };
        return <span className={styles.bar} style={style} key={`${height}-${index}`} />;
      })}
    </div>
  );
}
