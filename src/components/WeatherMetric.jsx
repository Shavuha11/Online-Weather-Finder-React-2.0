    function WeatherMetric({icon, label, value, text}) {
        return (
            <article className="metric-card">
                <div className="metric-icon" aria-hidden="true">
                    {icon}
                </div>
                <p className="metric-label">{label}</p>
                <strong className="metric-value">{value}</strong>
            </article>
        )
    }

    export default WeatherMetric;