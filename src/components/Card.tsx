import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({
    title,
    children,
}: CardProps) {
    return (
        <section>
            <h3>{title}</h3>
            <hr />
            {children}
        </section>
    )
}

export default Card;