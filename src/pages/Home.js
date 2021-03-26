import React from "react";
import "./Home.css";
import Product from "../Components/Product";
import Jumbotron from "../Components/Jumbotron";
import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";
import s4 from "../img/s4.png";
import s5 from "../img/s5.png";
import s6 from "../img/s6.png";
import s7 from "../img/s7.png";
import s8 from "../img/s8.png";
import s9 from "../img/s9.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Jumbotron className="jumbo" />
        <div>
          <div className="home__text">
            <h1>Surfboards</h1>
            <p className="home__text-mainText">
              Compare, customize and order surfboards direct from the world's
              leading shapers. With thousands of surf boards to browse and
              choose from, there is something for every level of skill.
              <br />
              <br />
              Simple Shop is officially the world's biggest online marketplace
              for Surfboards and Surf Accessories; if there's something we don't
              have we'll do our best to find it for you. Whether you're learning
              to surf and want a Soft Top Surfboard to have fun on, or you want
              a refined High Performance board, Simple Shop has you covered.
              <br />
              <br />
              Build up your quiver with a Step-down to shred small waves and a
              Step-up for when it's pumping! If you're going travelling or
              chasing that one-board quiver, then browse the All Rounders to
              give yourself the best chance of nailing every surf! The range of
              Retro Surfboards provide a classical feel to surfing that every
              surfer should experience, with a selection of Single Fins and Twin
              Fins that are as much a work of art as they are a board to ride.
              <br />
              <br />
              Take on the points and catch more waves than anyone with a Log or
              Longboard on those smaller days or just straight up own it all and
              live the surfer's dream. Simple Shop is your one stop shop to make
              this possible.
            </p>
          </div>
          <div className="home__row">
            <Product
              id="876758754"
              title="Voyager 1"
              info="The Voyager 1 is great for high performance surfing in small to medium sized waves. The Voyager is John John's latest model which he rode at the Quiksilver Pro Gold Coast WSL event. Named by John John after the 1977 NASA interstellar explorer, “Voyager 1” gives you all the best elements of high performance surfing in everyday surf conditions and all kinds of waves."
              price={3503.11}
              image={s2}
              rating={5}
            />
            <Product
              id="8060A8"
              title="Unicorn"
              info="The Vampirate Unicorn is a blend between your retro single fin and your modern high performance shortboard. It is ideal for taking the high line and gaining pace through long barrels. The flat rocker, with low boxy rail gives it heaps of natural speed."
              price={1089.99}
              image={s1}
              rating={5}
            />
            <Product
              id="8060A8"
              title="Tiny Terror"
              info="The Tiny Terroris made for terrorising small to medium size waves. It features a wider outline so it can be surfed shorter than your regular performance surfboard. As demonstrated by Harry Bryant in the image carousel the Tiny Terror can be pushed hard on rail and also into a ramp."
              price={1095.39}
              image={s3}
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="876758754"
              title="The Tazer"
              info="The Tazer has been focussed around speed and manoeuvrability. It has a wider outline and fuller nose with a pulled in swallow tail, making it easy to paddle and generate speed. This board will easily become your go-to for pretty much all conditions up to 4-5 ft."
              price={249.99}
              image={s4}
              rating={4}
            />
            <Product
              id="321432132"
              title="The Madcat"
              info="The Mad Cat by SUPERbrand is Clay Marzo's 2015 signature performance shortboard. With a high-performance rocker combined with a pulled in rounded square tail with a slight hip in the outline, this board is super responsive. The extra width in the nose and fuller rails ensures you can really get plenty of paddle power and natural speed."
              price={214.99}
              image={s5}
              rating={5}
            />
            <Product
              id="324234"
              title="The Cicada"
              info="The Cicada is the perfect board for someone wanting to surf well in a wide range of conditions. It features a 5 fin setup, low rocker combined with a single concave entry which blends into a concave vee between the feet."
              price={849.99}
              image={s6}
              rating={3}
            />
          </div>

          <div className="home__row">
            <Product
              id="2321313"
              title="Sugar"
              info="The Sugar twin fin is a modern take on the classic retro twin fin shape. It features a super straight outline for speed and a low rail to control that speed. With plenty of nose through the front half of the board for paddle power and speed but a nicely foiled out tail for response off the back foot. This model will become a favourite on clean lined up point breaks!"
              price={1004.99}
              image={s7}
              rating={3}
            />
            <Product
              id="54879054"
              title="Stubby Bastard"
              info="The Stubby Bastard has been developed and refined to give you a high performance shortboard in a stubby step down body. With lower entry rocker, full rails and extra thickness in the front of the outline, this board gives you plenty of power on slower days."
              price={2348.99}
              image={s8}
              rating={2}
            />
            <Product
              id="096734342"
              title="Stalker"
              info="The Stalker was originally designed for the new generation of surfers coming onto the WCT. The bottom comes nose to tail single concave, Slight concave off the tail with just a little more under your front foot and fades off the nose. The rocker has a medium high flip in the nose and little flip in the tail with more of a continuous flow nose to tail."
              price={4428.05}
              image={s9}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
