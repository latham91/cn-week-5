import "./Person.css";

import PropTypes from "prop-types";

export default function Person({ name, age, hobbies }) {
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
                    <strong>Hobbies:</strong>
                    <br />
                    {hobbies.join(", ")}
                </p>
            </div>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.array.isRequired,
};
