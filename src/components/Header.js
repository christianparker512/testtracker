//Dont really need this any more due to updates
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1>{props.title}</h1>
            <Button color='green' text='Press The Green one'/>
            <Button color='blue' text='Press The Blue one'/>
            <Button color='red' text='Press The Red one'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
const headingStyle = {
    color: 'darkorange',
    backgroundColor: 'black'
}

export default Header