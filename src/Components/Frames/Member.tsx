import { ReactNode } from "react";

interface memberProps {
  name: string;
  description: string;
  img: string;
}

export default function Member({ name, description, img }: memberProps) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
}
