import PropTypes from "prop-types";

export default function Pet({ petName, petType }) {
    return (
        <div>
            <strong>Pet name: </strong>
            {petName}
            <br />
            <strong>Type: </strong>
            {petType}
        </div>
    );
}

Pet.propTypes = {
    petName: PropTypes.string.isRequired,
    petType: PropTypes.string.isRequired,
};
