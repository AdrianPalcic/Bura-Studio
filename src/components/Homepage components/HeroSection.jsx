import '../../css/Homepage.css'
import wave from '../../../public/wave-haikei (1).svg';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Bura Studio</h1>
                <h2>Designing and Developing digital experiences for everyone</h2>
                <div className="actions">
                    <button className='btn btn-primary'>Get Started</button>
                    <button className='btn btn-secondary'>View our work</button>
                </div>
            </div>
            <img src={wave} alt="wave" className='wave-desktop' />
        </div>
    )
}

export default HeroSection