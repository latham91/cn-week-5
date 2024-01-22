import PropTypes from "prop-types";

export default function Job({ jobTitle }) {
    return (
        <div>
            <strong>My job is:</strong> {jobTitle}
        </div>
    );
}

Job.propTypes = {
    jobTitle: PropTypes.string.isRequired,
};
