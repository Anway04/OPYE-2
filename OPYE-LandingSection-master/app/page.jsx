import Landing from '@/components/Landing'
import PopularDest from '@/components/PopularDest'
import "./globals.css";
import HottestDeals from '@/components/HottestDeals';

const Home = () => {
    return (
      <section className=" home" id="home">
        <Landing />
        <PopularDest />
        <HottestDeals/>
      </section>
    )
}

export default Home
