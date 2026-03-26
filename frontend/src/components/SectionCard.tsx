import { PropsWithChildren } from "react";

type SectionCardProps = PropsWithChildren<{
  title: string;
  meta?: string;
}>;

export function SectionCard({ title, meta, children }: SectionCardProps) {
  return (
    <article className="content-card">
      {meta ? <p className="meta">{meta}</p> : null}
      <h3>{title}</h3>
      <div className="card-copy">{children}</div>
    </article>
  );
}
