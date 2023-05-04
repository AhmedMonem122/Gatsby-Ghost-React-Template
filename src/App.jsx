import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import data from "./components/Card/data";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="site-main">
        <div className="container">
          <section className="post-feed">
            {data.map((item) => {
              const {
                id,
                img,
                tags,
                title,
                description,
                ghostIcon,
                ghostTitle,
                time,
              } = item;

              return (
                <Card
                  key={id}
                  img={img}
                  tags={tags}
                  title={title}
                  description={description}
                  ghostIcon={ghostIcon}
                  ghostTitle={ghostTitle}
                  time={time}
                />
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
