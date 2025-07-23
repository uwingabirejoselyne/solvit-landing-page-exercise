import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { Offer } from "./components/Offer";
import { Event } from "./components/cards/Event";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";

function App() {
  const data = [
    {
      id: 1,
      title: "Renting Offices",
      description:
        " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris ",
      image:
        "https://th.bing.com/th/id/OIP.ryNoqWlKVepuSQcE8OV8SAHaE7?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 2,
      title: "Coffee Shop",
      description:
        " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris ",
      image:
        "https://th.bing.com/th/id/OIP.ryNoqWlKVepuSQcE8OV8SAHaE7?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 3,
      title: "Private event Space",
      description:
        " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris ",
      image:
        "https://th.bing.com/th/id/OIP.ryNoqWlKVepuSQcE8OV8SAHaE7?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <>
      <div className=" ">
        <Header />
        <Welcome />
        <div>
          <Offer />
          <div className="flex gap-4">
            {data.map((data, index) => (
              <Event
                key={index}
                title={data.title}
                image={data.image}
                description={data.description}
              />
            ))}
          </div>
        </div>
        <About/>
        <WhyChooseUs/>
      </div>
    </>
  );
}

export default App;
