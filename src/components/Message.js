import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text }) => (
  <div className="Message">
    {text}
  </div>
)

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message