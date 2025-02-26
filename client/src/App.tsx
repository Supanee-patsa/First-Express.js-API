import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './App.css'
function App() {
const [cars, setCars] = useState([]);
const fetctApi = async () => {
const response = await axios.get('http://localhost:8080/api')
setCars(response.data.cars
 )
 };
useEffect(() => {
fetctApi()
 }, [])
return (
<>
<div className="App">
<h1>Car List</h1>
<div className="cars">
 {cars.map((car, index) => (
<ul key={index}>
<li>{car}</li>
</ul>
 ))}
</div>
</div>
</>
 );
}
export default App
