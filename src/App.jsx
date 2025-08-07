import { useEffect, useState} from "react";
import * as petService from "./services/petServices";
import "./App.css";

function App () {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getData =async () => {
    try {
    const fetchedPets = await petService.index();
    // Call on the pet service's index function
    setPets(fetchedPets);
    } catch (error) {
      console.log(error);
    }
  };
  getData ();
},[]);

console.log("Pets are: ", pets);

  return <h1>Hello world!</h1>;
};

export default App;
