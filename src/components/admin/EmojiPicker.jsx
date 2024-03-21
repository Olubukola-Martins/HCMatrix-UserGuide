import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { microsoft } from "../../assets/admin/icons/articles";

const custom = [
  {
    id: "microsoft",
    name: "microsoft",
    emojis: [
      {
        id: "logo",
        name: "logo",
        keywords: ["microsoft_logo"],
        skins: [{ src: microsoft }],
      },
    ],
  },
];

const EmojiPicker = ({ pickEmoji }) => {
  return <Picker custom={custom} data={data} onEmojiSelect={pickEmoji} />;
};

export default EmojiPicker;
