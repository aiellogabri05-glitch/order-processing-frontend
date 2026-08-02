interface StatsticCardProps {
    title: string;
    value: number;
}

function StatisticCard({
    title,
    value,
}: StatsticCardProps) {
    return (
        <section>
            <h4>{title}</h4>
            <p>{value}</p>
            <hr />
        </section>
    );
}

export default StatisticCard;