//Dont really need this any more due to updates
import React from 'react'

const Header = (props) => {
    return (
        <header>
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }
// const headingStyle = {
//     color: 'darkorange',
//     backgroundColor: 'black'
// }

export default Header