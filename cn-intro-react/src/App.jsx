import "./App.css";
import Person from "./components/Person";

function App() {
    return (
        <main className="main-container">
            <div className="card-container">
                <Person name="Aaron" age={32} jobTitle="Brew Boy" petName="Sully" petType="Cat" />
                <Person name="Robert" age={26} jobTitle="Senior Dev" petName="Mr. Dogg" petType="Dog" />
                <Person name="Sarah" age={30} jobTitle="Junior Dev" petName="Cecilia" petType="Parrot" />
            </div>
        </main>
    );
}

export default App;
