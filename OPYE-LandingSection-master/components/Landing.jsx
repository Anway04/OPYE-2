import Search from "@/components/Search";
import SearchButton from "@/components/SearchButton";
const Landing = () => {
  return (
    <section className="home" id="home">
      <div className="head_text">
        OPYE
      </div>
      <div className="sub_text">
        <p>Our Planning Your Experience</p>
      </div>
      <div className="desc">
        <p>
          Are you ready to embark on the adventure of a lifetime? At Our Planning Your Experience, we believe that travel is more than just a journey; it's a way to create lasting memories, discover new cultures, and enrich your life.
        </p>
      </div>
      <div className="search">
        <Search />
        <SearchButton />
      </div>
    </section>
  )
}

export default Landing