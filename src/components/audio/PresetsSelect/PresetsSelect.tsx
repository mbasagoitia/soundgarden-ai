import styles from "./PresetsSelect.module.css";

export type PresetType =
  | "sunrise"
  | "storm"
  | "forest"
  | "space"
  | "ocean";

interface Preset {
  value: PresetType;
  label: string;
  icon: string;
  description: string;
}

interface PresetsSelectProps {
  selectedPreset: PresetType;
  onSelect: (preset: PresetType) => void;
}

const presets: Preset[] = [
  {
    value: "sunrise",
    label: "Sunrise",
    icon: "🌅",
    description: "Warm, hopeful, expansive",
  },
  {
    value: "storm",
    label: "Storm",
    icon: "⛈️",
    description: "Powerful, dark, energetic",
  },
  {
    value: "forest",
    label: "Forest",
    icon: "🌲",
    description: "Natural, calm, organic",
  },
  {
    value: "space",
    label: "Deep Space",
    icon: "🌌",
    description: "Vast, sparse, ethereal",
  },
  {
    value: "ocean",
    label: "Ocean",
    icon: "🌊",
    description: "Flowing, reflective, peaceful",
  },
];

export function PresetsSelect({
  selectedPreset,
  onSelect,
}: PresetsSelectProps) {
  return (
    <div className={styles.presetsGrid}>
    {presets.map((preset) => (
        <button
        key={preset.value}
        type="button"
        className={`${styles.presetCard} ${
            selectedPreset === preset.value
            ? styles.selected
            : ""
        }`}
        onClick={() => onSelect(preset.value)}
        >
        <div className={styles.presetIcon}>
            {preset.icon}
        </div>

        <h3>{preset.label}</h3>

        <p>{preset.description}</p>
        </button>
    ))}
    </div>
  );
}