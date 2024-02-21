import Landing from '@/components/Landing'
import PopularDest from '@/components/PopularDest'
import "./globals.css";

const Home = () => {
    return (
      <section className=" home" id="home">
        <Landing />
        <PopularDest />
      </section>
    )
}

export default Home
