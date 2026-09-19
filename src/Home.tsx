import { useNavigate } from 'react-router-dom';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main className="page-body">
        <section className="hero">
          <h1 className="meie-script-regular fade-in">Abigail Estampador</h1>
          <br />
          <p className="rosarivo-regular fade-in-delay">Full-Stack Software Engineer Based In Colorado Springs</p>
          <br />
          <button className="learn-more-button fade-in-delay-2" onClick={() => navigate('/About')}>LEARN MORE</button>
        </section>
      </main>
    </>
  )
}

export default Home