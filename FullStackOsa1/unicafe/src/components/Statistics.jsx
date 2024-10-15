import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100
    
    if (all === 0)
        return <p>No feedback given</p>

    return (
        <section>
            <div>
                <header>
                    <h2>statistics</h2>
                </header>

                <table>
                    <tbody>
                        <StatisticLine text="good" value = {good} />
                        <StatisticLine text="neutral" value = {neutral} />
                        <StatisticLine text="bad" value = {bad} />
                        <StatisticLine text="all" value = {all} />
                        <StatisticLine text="average" value = {average} />
                        <StatisticLine text="positive" value = {positive} />
                    </tbody>
                </table>
            </div>            
        </section>
    )
}

export default Statistics