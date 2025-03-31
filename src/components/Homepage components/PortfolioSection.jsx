import PortfolioCard from "../PortfolioCard"
import wave from "../../../public/testimonials-desktop.svg"

const PortfolioSection = () => {
    return (
        <div className="portfolioSection">
            <h1>
                Portfolio
            </h1>
            <h2>
                Take a look at some of our recent projects and see how we've helped our clients succeed.
            </h2>

            <div className="portfolio-card-container">
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </div>
            <button className="btn btn-secondary">View all of our projects</button>
            <img src={wave} className="testimonials-wave" alt="wave"></img>
        </div>
    )
}

export default PortfolioSection