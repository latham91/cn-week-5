import "./App.css";
import Person from "./components/Person";

const testPeople = [
    {
        name: "Aaron",
        age: 32,
        hobbies: ["Gaming", "Coding", "Reading"],
    },
    {
        name: "Bob",
        age: 27,
        hobbies: ["Gaming", "Coding", "Reading"],
    },
    {
        name: "Cathy",
        age: 22,
        hobbies: ["Gaming", "Coding", "Reading"],
    },
];

function App() {
    return (
        <main className="main-container">
            <div className="card-container">
                {testPeople.map((person) => (
                    <Person key={person.name} name={person.name} age={person.age} hobbies={person.hobbies} />
                ))}
            </div>
        </main>
    );
}

export default App;
