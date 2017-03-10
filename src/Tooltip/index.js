import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Tooltip = ({ left, top, content, position, inline }) => (
  <div
    className={classNames(
      styles.tooltip,
      styles[position],
      { [styles.inline]: inline }
    )}
    style={{ left, top }}
  >
    {content}
  </div>
)

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  top: PropTypes.number,
  left: PropTypes.number,
  /** For displaying a plain, independent tooltip  */
  inline: PropTypes.bool
}

Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: 'top',
  inline: false
}

export default Tooltip