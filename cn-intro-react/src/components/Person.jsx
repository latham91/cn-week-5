import "./Person.css";
import Job from "./Job";

import PropTypes from "prop-types";
import Pet from "./Pet";

export default function Person({ name, age, jobTitle, petName, petType }) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-content">
                <p>
                    <strong>Age:</strong> {age}
                </p>
                <p>
                    <Job jobTitle={jobTitle} />
                </p>
                <p>
                    <Pet petName={petName} petType={petType} />
                </p>
            </div>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    jobTitle: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    petType: PropTypes.string.isRequired,
};
